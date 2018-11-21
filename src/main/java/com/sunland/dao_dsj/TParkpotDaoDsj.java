package com.sunland.dao_dsj;

import com.sunland.pojo.TParkpot;

import java.util.List;

public interface TParkpotDaoDsj {

    List<TParkpot> getAllParkpotsDsj();

    int deleteByPrimaryKey(String parkpotid);

    /**
     * 把宁波诱导停车业务库停车点数据插入大数据公司数据库
     *
     * @param parkpot
     * @return
     */
    int insert(TParkpot parkpot);

    int insertSelective(TParkpot record);

    /**
     * 根据停车点id查询大数据公司数据库停车点信息
     *
     * @param parkpotid
     * @return
     */
    List<TParkpot> selectByPrimaryKey(String parkpotid);

    int updateByPrimaryKeySelective(TParkpot record);

    /**
     * 将宁波诱导业务库停车点数据信息更新到大数据公司数据库信息（不允许直接更新）
     *
     * @param parkpot
     * @return
     */
    int updateByPrimaryKey(TParkpot parkpot);
}