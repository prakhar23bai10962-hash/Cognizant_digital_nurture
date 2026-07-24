package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer> {

    // Get stock details for a code in a specific date range
    List<Stock> findByCodeAndDateBetween(String code, Date start, Date end);

    // Get stock details where the close price was greater than a target value
    List<Stock> findByCodeAndCloseGreaterThan(String code, BigDecimal price);

    // Find the top 3 stock transactions with the highest volume
    List<Stock> findTop3ByOrderByVolumeDesc();

    // Identify the top 3 transactions with the lowest close price for a code
    List<Stock> findTop3ByCodeOrderByCloseAsc(String code);
}
