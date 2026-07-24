package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Stock;
import com.cognizant.ormlearn.repository.StockRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class StockServiceTest {

    @Autowired
    private StockRepository stockRepository;

    @Test
    public void testFbSept2019Stocks() throws Exception {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        Date start = df.parse("2019-09-01");
        Date end = df.parse("2019-09-30");
        List<Stock> fbSeptStocks = stockRepository.findByCodeAndDateBetween("FB", start, end);
        assertNotNull(fbSeptStocks);
        assertEquals(19, fbSeptStocks.size());
    }

    @Test
    public void testGoogleCloseGreaterThan1250() {
        List<Stock> googleStocks = stockRepository.findByCodeAndCloseGreaterThan("GOOGL", new BigDecimal("1250"));
        assertNotNull(googleStocks);
        assertEquals(7, googleStocks.size());
    }

    @Test
    public void testTop3VolumeTransactions() {
        List<Stock> topVolume = stockRepository.findTop3ByOrderByVolumeDesc();
        assertNotNull(topVolume);
        assertEquals(3, topVolume.size());
        assertEquals("FB", topVolume.get(0).getCode());
        assertEquals(77233600, topVolume.get(0).getVolume());
    }

    @Test
    public void testLowest3NetflixTransactions() {
        List<Stock> lowestNetflix = stockRepository.findTop3ByCodeOrderByCloseAsc("NFLX");
        assertNotNull(lowestNetflix);
        assertEquals(3, lowestNetflix.size());
        assertEquals(new BigDecimal("233.88"), lowestNetflix.get(0).getClose());
    }
}
