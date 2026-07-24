package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    // HQL Example: Select employees with salary greater than a parameter
    @Query("SELECT e FROM Employee e WHERE e.salary > :salary")
    List<Employee> findEmployeesWithSalaryGreaterThan(@Param("salary") double salary);

    // Native SQL Example: Select employees based on permanency native status
    @Query(value = "SELECT * FROM employee WHERE em_permanent = :permanent", nativeQuery = true)
    List<Employee> findEmployeesByPermanencyNative(@Param("permanent") boolean permanent);
}
