package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.*;
import com.cognizant.ormlearn.repository.StockRepository;
import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.service.DepartmentService;
import com.cognizant.ormlearn.service.EmployeeService;
import com.cognizant.ormlearn.service.SkillService;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.*;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    
    private static CountryService countryService;
    private static StockRepository stockRepository;
    private static EmployeeService employeeService;
    private static DepartmentService departmentService;
    private static SkillService skillService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        LOGGER.info("Inside main");

        countryService = context.getBean(CountryService.class);
        stockRepository = context.getBean(StockRepository.class);
        employeeService = context.getBean(EmployeeService.class);
        departmentService = context.getBean(DepartmentService.class);
        skillService = context.getBean(SkillService.class);

        // Week 6 Hands on 1: Country Query Methods
        testGetAllCountries();
        testFindCountryByCode();
        testAddCountry();
        testUpdateCountry();
        testDeleteCountry();
        testFindCountriesByNameContaining();
        testFindCountriesByNameContainingAsc();
        testFindCountriesByCodeStartingWith();

        // Week 6 Hands on 2: Stock Query Methods
        testStockQueries();

        // Week 6 Hands on 4, 5, 6: Payroll Relationships
        testGetEmployee();
        testAddEmployee();
        testUpdateEmployee();
        testGetDepartment();
        testAddSkillToEmployee();
        testCustomQueries();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start testGetAllCountries");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End testGetAllCountries");
    }

    private static void testFindCountryByCode() {
        LOGGER.info("Start testFindCountryByCode");
        try {
            Country country = countryService.findCountryByCode("IN");
            LOGGER.debug("Found Country: {}", country);
            countryService.findCountryByCode("XX");
        } catch (CountryNotFoundException e) {
            LOGGER.debug("Expected exception caught: {}", e.getMessage());
        }
        LOGGER.info("End testFindCountryByCode");
    }

    private static void testAddCountry() {
        LOGGER.info("Start testAddCountry");
        try {
            Country country = new Country("ZZ", "Zombieland");
            countryService.addCountry(country);
            Country retrieved = countryService.findCountryByCode("ZZ");
            LOGGER.debug("Successfully added: {}", retrieved);
        } catch (CountryNotFoundException e) {
            LOGGER.error("Failed to add country: {}", e.getMessage());
        }
        LOGGER.info("End testAddCountry");
    }

    private static void testUpdateCountry() {
        LOGGER.info("Start testUpdateCountry");
        try {
            countryService.updateCountry("ZZ", "Zombieland Updated");
            Country retrieved = countryService.findCountryByCode("ZZ");
            LOGGER.debug("Successfully updated: {}", retrieved);
        } catch (CountryNotFoundException e) {
            LOGGER.error("Failed to update country: {}", e.getMessage());
        }
        LOGGER.info("End testUpdateCountry");
    }

    private static void testDeleteCountry() {
        LOGGER.info("Start testDeleteCountry");
        try {
            countryService.deleteCountry("ZZ");
            countryService.findCountryByCode("ZZ");
            LOGGER.error("Country ZZ was not deleted successfully!");
        } catch (CountryNotFoundException e) {
            LOGGER.debug("Successfully deleted ZZ (CountryNotFoundException thrown: {})", e.getMessage());
        }
        LOGGER.info("End testDeleteCountry");
    }

    private static void testFindCountriesByNameContaining() {
        LOGGER.info("Start testFindCountriesByNameContaining");
        List<Country> results = countryService.findCountriesByNameContaining("In");
        LOGGER.debug("Matching partial name 'In': {}", results);
        LOGGER.info("End testFindCountriesByNameContaining");
    }

    private static void testFindCountriesByNameContainingAsc() {
        LOGGER.info("Start testFindCountriesByNameContainingAsc");
        List<Country> results = countryService.findCountriesByNameContaining("ou");
        LOGGER.debug("Matching partial name 'ou' ordered by name: {}", results);
        LOGGER.info("End testFindCountriesByNameContainingAsc");
    }

    private static void testFindCountriesByCodeStartingWith() {
        LOGGER.info("Start testFindCountriesByCodeStartingWith");
        List<Country> results = countryService.findByCodeStartingWith("Z");
        LOGGER.debug("Countries starting with 'Z': {}", results);
        LOGGER.info("End testFindCountriesByCodeStartingWith");
    }

    private static void testStockQueries() {
        LOGGER.info("Start testStockQueries");
        try {
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
            
            // 1. FB in Sept 2019
            Date septStart = df.parse("2019-09-01");
            Date septEnd = df.parse("2019-09-30");
            List<Stock> fbSeptStocks = stockRepository.findByCodeAndDateBetween("FB", septStart, septEnd);
            LOGGER.debug("FB September 2019 Stock Transactions: {}", fbSeptStocks);

            // 2. Google close > 1250
            List<Stock> googleStocks = stockRepository.findByCodeAndCloseGreaterThan("GOOGL", new BigDecimal("1250"));
            LOGGER.debug("Google Stock Transactions (> 1250 close): {}", googleStocks);

            // 3. Top 3 volume transaction dates
            List<Stock> topVolume = stockRepository.findTop3ByOrderByVolumeDesc();
            LOGGER.debug("Top 3 Stock Transactions by Volume: {}", topVolume);

            // 4. Lowest 3 close Netflix dates
            List<Stock> lowestNetflix = stockRepository.findTop3ByCodeOrderByCloseAsc("NFLX");
            LOGGER.debug("Lowest 3 Close Netflix transactions: {}", lowestNetflix);

        } catch (Exception e) {
            LOGGER.error("Stock queries failed", e);
        }
        LOGGER.info("End testStockQueries");
    }

    private static void testGetEmployee() {
        LOGGER.info("Start testGetEmployee");
        Employee employee = employeeService.get(1);
        LOGGER.debug("Employee: {}", employee);
        LOGGER.debug("Department: {}", employee.getDepartment());
        LOGGER.debug("Skills: {}", employee.getSkillList());
        LOGGER.info("End testGetEmployee");
    }

    private static void testAddEmployee() {
        LOGGER.info("Start testAddEmployee");
        Department dept = departmentService.get(1);
        Employee emp = new Employee("Michael Scott", 75000.0, true, new Date(), dept);
        employeeService.save(emp);
        LOGGER.debug("Added Employee ID: {}", emp.getId());
        LOGGER.info("End testAddEmployee");
    }

    private static void testUpdateEmployee() {
        LOGGER.info("Start testUpdateEmployee");
        Employee emp = employeeService.get(2);
        Department hrDept = departmentService.get(2);
        emp.setDepartment(hrDept);
        employeeService.save(emp);
        LOGGER.debug("Updated Employee association: {}", emp);
        LOGGER.info("End testUpdateEmployee");
    }

    private static void testGetDepartment() {
        LOGGER.info("Start testGetDepartment");
        Department dept = departmentService.get(1);
        LOGGER.debug("Department: {}", dept);
        LOGGER.debug("Employees inside department: {}", dept.getEmployeeList());
        LOGGER.info("End testGetDepartment");
    }

    private static void testAddSkillToEmployee() {
        LOGGER.info("Start testAddSkillToEmployee");
        Employee emp = employeeService.get(1);
        Skill springSkill = skillService.get(3);
        Set<Skill> skillList = emp.getSkillList();
        skillList.add(springSkill);
        employeeService.save(emp);
        LOGGER.debug("Skills for employee 1: {}", emp.getSkillList());
        LOGGER.info("End testAddSkillToEmployee");
    }

    private static void testCustomQueries() {
        LOGGER.info("Start testCustomQueries");
        
        // HQL query test
        List<Employee> hqlResult = employeeService.findEmployeesWithSalaryGreaterThan(55000.0);
        LOGGER.debug("HQL Result (Salary > 55000): {}", hqlResult);

        // Native query test
        List<Employee> nativeResult = employeeService.findEmployeesByPermanencyNative(true);
        LOGGER.debug("Native Result (Permanent = true): {}", nativeResult);

        // Criteria Query test
        List<Employee> criteriaResult = employeeService.findEmployeesByCriteria("Jane", 50000.0);
        LOGGER.debug("Criteria Query Result (Name contains 'Jane', Salary >= 50000): {}", criteriaResult);
        
        LOGGER.info("End testCustomQueries");
    }
}
