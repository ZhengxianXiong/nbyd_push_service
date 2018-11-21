package com.sunland.pojo;

import java.io.Serializable;
import java.util.Date;

public class TParkpot implements Serializable {
    private String parkpotid;

    private String parkpotname;

    private String parkpottype;

    private String parkpotclassify;

    private String parkpotstate;

    private String deptcode;

    private String areaid;

    private Integer groupid;

    private String department;

    private String address;

    private String telephone;

    private String description;

    private String paymode;

    private String chargemode;

    private String chargestandard;

    private String servertimeinfo;

    private Integer parkinnum;

    private Integer parkoutnum;

    private Integer totalparklotcount;

    private Integer fixedparklotcount;

    private Integer freeparklotcount;

    private Date lastfreeparklottime;

    private Integer metercount;

    private Date createdate;

    private Date setuptime;

    private String mapno;

    private String datasources;

    private String sourcekey;

    private String hascheck;

    private Date lastenddate;

    private Integer minfreeparklotcount;

    private String op;// 操作类型select update delete insert

    private static final long serialVersionUID = 1L;

    public String getParkpotid() {
        return parkpotid;
    }

    public void setParkpotid(String parkpotid) {
        this.parkpotid = parkpotid == null ? null : parkpotid.trim();
    }

    public String getParkpotname() {
        return parkpotname;
    }

    public void setParkpotname(String parkpotname) {
        this.parkpotname = parkpotname == null ? null : parkpotname.trim();
    }

    public String getParkpottype() {
        return parkpottype;
    }

    public void setParkpottype(String parkpottype) {
        this.parkpottype = parkpottype == null ? null : parkpottype.trim();
    }

    public String getParkpotclassify() {
        return parkpotclassify;
    }

    public void setParkpotclassify(String parkpotclassify) {
        this.parkpotclassify = parkpotclassify == null ? null : parkpotclassify.trim();
    }

    public String getParkpotstate() {
        return parkpotstate;
    }

    public void setParkpotstate(String parkpotstate) {
        this.parkpotstate = parkpotstate == null ? null : parkpotstate.trim();
    }

    public String getDeptcode() {
        return deptcode;
    }

    public void setDeptcode(String deptcode) {
        this.deptcode = deptcode == null ? null : deptcode.trim();
    }

    public String getAreaid() {
        return areaid;
    }

    public void setAreaid(String areaid) {
        this.areaid = areaid == null ? null : areaid.trim();
    }

    public Integer getGroupid() {
        return groupid;
    }

    public void setGroupid(Integer groupid) {
        this.groupid = groupid;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department == null ? null : department.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone == null ? null : telephone.trim();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }

    public String getPaymode() {
        return paymode;
    }

    public void setPaymode(String paymode) {
        this.paymode = paymode == null ? null : paymode.trim();
    }

    public String getChargemode() {
        return chargemode;
    }

    public void setChargemode(String chargemode) {
        this.chargemode = chargemode == null ? null : chargemode.trim();
    }

    public String getChargestandard() {
        return chargestandard;
    }

    public void setChargestandard(String chargestandard) {
        this.chargestandard = chargestandard == null ? null : chargestandard.trim();
    }

    public String getServertimeinfo() {
        return servertimeinfo;
    }

    public void setServertimeinfo(String servertimeinfo) {
        this.servertimeinfo = servertimeinfo == null ? null : servertimeinfo.trim();
    }

    public Integer getParkinnum() {
        return parkinnum;
    }

    public void setParkinnum(Integer parkinnum) {
        this.parkinnum = parkinnum;
    }

    public Integer getParkoutnum() {
        return parkoutnum;
    }

    public void setParkoutnum(Integer parkoutnum) {
        this.parkoutnum = parkoutnum;
    }

    public Integer getTotalparklotcount() {
        return totalparklotcount;
    }

    public void setTotalparklotcount(Integer totalparklotcount) {
        this.totalparklotcount = totalparklotcount;
    }

    public Integer getFixedparklotcount() {
        return fixedparklotcount;
    }

    public void setFixedparklotcount(Integer fixedparklotcount) {
        this.fixedparklotcount = fixedparklotcount;
    }

    public Integer getFreeparklotcount() {
        return freeparklotcount;
    }

    public void setFreeparklotcount(Integer freeparklotcount) {
        this.freeparklotcount = freeparklotcount;
    }

    public Date getLastfreeparklottime() {
        return lastfreeparklottime;
    }

    public void setLastfreeparklottime(Date lastfreeparklottime) {
        this.lastfreeparklottime = lastfreeparklottime;
    }

    public Integer getMetercount() {
        return metercount;
    }

    public void setMetercount(Integer metercount) {
        this.metercount = metercount;
    }

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }

    public Date getSetuptime() {
        return setuptime;
    }

    public void setSetuptime(Date setuptime) {
        this.setuptime = setuptime;
    }

    public String getMapno() {
        return mapno;
    }

    public void setMapno(String mapno) {
        this.mapno = mapno == null ? null : mapno.trim();
    }

    public String getDatasources() {
        return datasources;
    }

    public void setDatasources(String datasources) {
        this.datasources = datasources == null ? null : datasources.trim();
    }

    public String getSourcekey() {
        return sourcekey;
    }

    public void setSourcekey(String sourcekey) {
        this.sourcekey = sourcekey == null ? null : sourcekey.trim();
    }

    public String getHascheck() {
        return hascheck;
    }

    public void setHascheck(String hascheck) {
        this.hascheck = hascheck == null ? null : hascheck.trim();
    }

    public Date getLastenddate() {
        return lastenddate;
    }

    public void setLastenddate(Date lastenddate) {
        this.lastenddate = lastenddate;
    }

    public Integer getMinfreeparklotcount() {
        return minfreeparklotcount;
    }

    public void setMinfreeparklotcount(Integer minfreeparklotcount) {
        this.minfreeparklotcount = minfreeparklotcount;
    }

    public TParkpot() {
    }


    public String getOp() {
        return op;
    }

    public void setOp(String op) {
        this.op = op;
    }
}