package com.sunland.dao;

import com.sunland.pojo.TParkpot;

import java.util.List;

public interface TParkpotDao {
    /**
     * 查询宁波诱导停车业务库所有停车点信息
     *
     * @return
     */
    public List<TParkpot> getAllParkpots();


    int updateParkpotFreeCountInfo();

    int deleteByPrimaryKey(String parkpotid);

    int insert(TParkpot record);

    int insertSelective(TParkpot record);

    TParkpot selectByPrimaryKey(String parkpotid);

    int updateByPrimaryKeySelective(TParkpot record);

    int updateByPrimaryKey(TParkpot record);
}