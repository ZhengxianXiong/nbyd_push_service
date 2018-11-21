package com.sunland.service.impl;

import com.sunland.dao.TParkpotDao;
import com.sunland.dao_dsj.TParkpotDaoDsj;
import com.sunland.pojo.TParkpot;
import com.sunland.service.IParkpotServiceDsj;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class ParkpotServiceDsjImpl implements IParkpotServiceDsj {
    @Resource
    TParkpotDao parkpotDao;
    @Resource
    TParkpotDaoDsj parkpotDaoDsj;

    @Override
    public void synDataToDsj() throws Exception {
        List<TParkpot> parkList = parkpotDao.getAllParkpots();
        for (TParkpot parkpot : parkList) {
            List<TParkpot> list_dsj = parkpotDaoDsj.selectByPrimaryKey(parkpot.getParkpotid());
            if (list_dsj.size() > 0) {//有数据，进行更新操作
                parkpot.setOp("update");
                parkpotDaoDsj.insert(parkpot);
            } else {//无数据，进行数据插入操作
                parkpot.setOp("insert");
                parkpotDaoDsj.insert(parkpot);
            }
        }
    }
}
