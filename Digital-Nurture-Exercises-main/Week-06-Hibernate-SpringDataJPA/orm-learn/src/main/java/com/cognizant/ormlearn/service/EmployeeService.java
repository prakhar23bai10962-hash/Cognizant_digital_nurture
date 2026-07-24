package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.repository.EmployeeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

@Service
public class EmployeeService {

    private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeService.class);

    @Autowired
    private EmployeeRepository employeeRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional(readOnly = true)
    public Employee get(int id) {
        LOGGER.info("Start get employee id={}", id);
        return employeeRepository.findById(id).orElse(null);
    }

    @Transactional
    public void save(Employee employee) {
        LOGGER.info("Start save employee");
        employeeRepository.save(employee);
        LOGGER.info("End save employee");
    }

    // Criteria Query Example: Dynamic search by name containing and/or minimum salary filter
    @Transactional(readOnly = true)
    public List<Employee> findEmployeesByCriteria(String name, Double minSalary) {
        LOGGER.info("Start criteria query search: name={}, minSalary={}", name, minSalary);
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Employee> cq = cb.createQuery(Employee.class);
        Root<Employee> employee = cq.from(Employee.class);

        List<Predicate> predicates = new java.util.ArrayList<>();
        if (name != null && !name.trim().isEmpty()) {
            predicates.add(cb.like(employee.get("name"), "%" + name + "%"));
        }
        if (minSalary != null) {
            predicates.add(cb.greaterThanOrEqualTo(employee.get("salary"), minSalary));
        }

        cq.where(predicates.toArray(new Predicate[0]));
        return entityManager.createQuery(cq).getResultList();
    }

    @Transactional(readOnly = true)
    public List<Employee> findEmployeesWithSalaryGreaterThan(double salary) {
        return employeeRepository.findEmployeesWithSalaryGreaterThan(salary);
    }

    @Transactional(readOnly = true)
    public List<Employee> findEmployeesByPermanencyNative(boolean permanent) {
        return employeeRepository.findEmployeesByPermanencyNative(permanent);
    }
}
