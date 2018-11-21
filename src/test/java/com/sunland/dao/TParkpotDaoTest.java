package com.sunland.dao;

import com.sunland.dao_dsj.TParkpotDaoDsj;
import com.sunland.pojo.TParkpot;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)//表示继承了SpringJUnit4ClassRunner类
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml", "classpath:spring-beans.xml"})
public class TParkpotDaoTest {
    @Resource
    TParkpotDao parkpotDao;
    @Resource
    TParkpotDaoDsj parkpotDaoDsj;


    @Test
    public void getParkpstDsj() {
        while (true) {
            List<TParkpot> list = parkpotDaoDsj.getAllParkpotsDsj();
            System.out.println(list.size());
        }
    }

    @Test
    public void getAllParkpots() {
        List<TParkpot> list = parkpotDao.getAllParkpots();
        System.out.println(list.size());
//        for(TParkpot parkpot : list){
//            List<TParkpot> list_dsj = parkpotDaoDsj.selectByPrimaryKey(parkpot.getParkpotid());
//            if(list_dsj.size() > 0){//有数据，进行更新操作
//                parkpot.setOp("update");
//                parkpotDaoDsj.insert(parkpot);
//            }else{//无数据，进行数据插入操作
//                parkpot.setOp("insert");
//                parkpotDaoDsj.insert(parkpot);
//            }
//        }
    }

    @Test
    public void getParkpstById() {
        parkpotDaoDsj.selectByPrimaryKey("110");
    }
}