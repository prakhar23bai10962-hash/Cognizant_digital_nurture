package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.*;
import com.cognizant.ormlearn.service.DepartmentService;
import com.cognizant.ormlearn.service.EmployeeService;
import com.cognizant.ormlearn.service.SkillService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.Date;
import java.util.Set;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class PayrollRelationshipTest {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private DepartmentService departmentService;

    @Autowired
    private SkillService skillService;

    @Test
    public void testGetEmployee() {
        Employee employee = employeeService.get(1);
        assertNotNull(employee);
        assertEquals("John Doe", employee.getName());
        assertNotNull(employee.getDepartment());
        assertEquals("IT", employee.getDepartment().getName());
        assertNotNull(employee.getSkillList());
        assertTrue(employee.getSkillList().size() > 0);
    }

    @Test
    public void testAddEmployee() {
        Department dept = departmentService.get(1);
        Employee emp = new Employee("Michael Scott", 75000.0, true, new Date(), dept);
        employeeService.save(emp);
        assertTrue(emp.getId() > 0);
        
        Employee retrieved = employeeService.get(emp.getId());
        assertNotNull(retrieved);
        assertEquals("Michael Scott", retrieved.getName());
    }

    @Test
    public void testUpdateEmployee() {
        Employee emp = employeeService.get(2);
        Department hrDept = departmentService.get(2);
        emp.setDepartment(hrDept);
        employeeService.save(emp);
        
        Employee retrieved = employeeService.get(2);
        assertEquals("HR", retrieved.getDepartment().getName());
    }

    @Test
    public void testGetDepartment() {
        Department dept = departmentService.get(1);
        assertNotNull(dept);
        assertNotNull(dept.getEmployeeList());
        assertTrue(dept.getEmployeeList().size() > 0);
    }

    @Test
    public void testAddSkillToEmployee() {
        Employee emp = employeeService.get(1);
        int initialSize = emp.getSkillList().size();
        
        Skill springSkill = skillService.get(3);
        Set<Skill> skillList = emp.getSkillList();
        skillList.add(springSkill);
        employeeService.save(emp);
        
        Employee retrieved = employeeService.get(1);
        assertEquals(initialSize + 1, retrieved.getSkillList().size());
        boolean hasSpring = retrieved.getSkillList().stream().anyMatch(s -> s.getName().equalsIgnoreCase("Spring"));
        assertTrue(hasSpring);
    }

    @Test
    public void testHqlSalaryGreaterThan() {
        java.util.List<Employee> list = employeeService.findEmployeesWithSalaryGreaterThan(55000.0);
        assertNotNull(list);
        assertTrue(list.stream().allMatch(e -> e.getSalary() > 55000.0));
    }

    @Test
    public void testNativeQueryPermanency() {
        java.util.List<Employee> list = employeeService.findEmployeesByPermanencyNative(true);
        assertNotNull(list);
        assertTrue(list.stream().allMatch(Employee::isPermanent));
    }

    @Test
    public void testCriteriaQueryByNameAndSalary() {
        java.util.List<Employee> list = employeeService.findEmployeesByCriteria("Jane", 50000.0);
        assertNotNull(list);
        assertEquals(1, list.size());
        assertEquals("Jane Smith", list.get(0).getName());
    }
}
