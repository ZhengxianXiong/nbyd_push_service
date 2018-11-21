package com.sunland.utils;

import com.sunland.service.IParkpotServiceDsj;

import javax.annotation.Resource;

public class JobAutoPushData {
    @Resource
    IParkpotServiceDsj parkpotService;

    public void work() {
        long startTime = System.currentTimeMillis();
        try {
            parkpotService.synDataToDsj();
        } catch (Exception e) {
            e.printStackTrace();
        }
        long endTime = System.currentTimeMillis();
        System.out.println("耗时：" + (endTime - startTime));
    }
}
