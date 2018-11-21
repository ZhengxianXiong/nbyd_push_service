package com.sunland.dao;

import com.sunland.dao_dsj.TParkpotDaoDsj;
import com.sunland.pojo.TParkpot;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)//表示继承了SpringJUnit4ClassRunner类
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml", "classpath:spring-beans.xml"})
public class Test {
    @Resource
    TParkpotDao parkpotDao;

    @Resource
    TParkpotDaoDsj parkpotDao_dsj;

    @org.junit.Test
    public void getAllParkpots() {
        List<TParkpot> list = parkpotDao.getAllParkpots();
        for (TParkpot parkpot : list) {
//            parkpotDao_dsj.insertIntoDsj(parkpot);
        }
    }

    @org.junit.Test
    public void getParkpotById() {
//        parkpotDao_dsj.getParkpotById("110");
    }

    @org.junit.Test
    public void updateParkpotById() {
        TParkpot parkpot = new TParkpot();
        parkpot.setParkpotid("330203013101");
        parkpot.setParkpotname("橙黄");
//        parkpotDao_dsj.updateDsjByParkpotId(parkpot);
    }

}
