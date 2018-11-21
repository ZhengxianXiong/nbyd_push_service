/**
 * $(param[0])   传参写法：compareEndWithStart[\'#startNoId2\'] ，#startNoId2为input的ID
 */
var c = 0;
var t;

$.extend($.fn.validatebox.defaults.rules, {
    maxPjNumber: {
        validator: function (value, param) {
            return parseInt(value) <= 5000;
        },
        message: '不能大于5000'
    },
    equalLength: {
        validator: function (value, param) {
            return value.replace(/(^\s*)|(\s*$)/g, "").length == param[0];
        },
        message: '长度必须为{0}位'
    },
    maxLength: {
        validator: function (value, param) {
            return value.replace(/(^\s*)|(\s*$)/g, "").length <= param[0];
        },
        message: '长度不能超过{0}位'
    },
    maxLengthNoTrim: {
        validator: function (value, param) {
            return value.length <= param[0];
        },
        message: '长度不能超过{0}位'
    },
    minLength: {
        validator: function (value, param) {
            return value.replace(/(^\s*)|(\s*$)/g, "").length >= param[0];
        },
        message: '长度不能小于{0}位'
    },
    compareLength: {
        validator: function (value, param) {
            return value.replace(/(^\s*)|(\s*$)/g, "").length == $(param[0]).val().replace(/(^\s*)|(\s*$)/g, "").length;
        },
        message: '起止号长度不一致'
    },
    compareEndWithStart: {
        validator: function (value, param) {
            return value >= $(param[0]).val();
        },
        message: '起始号码不能大于终止号码'
    },
    compareLength_query: {
        validator: function (value, param) {
            if ($(param[0]).val() == null || $(param[0]).val() == '')
                return true;
            return value.replace(/(^\s*)|(\s*$)/g, "").length == $(param[0]).val().replace(/(^\s*)|(\s*$)/g, "").length;
        },
        message: '起止号长度不一致'
    },
    compareEndWithStart_query: {
        validator: function (value, param) {
            if ($(param[0]).val() == null || $(param[0]).val() == '')
                return true;
            return value >= $(param[0]).val();
        },
        message: '起始号码不能大于终止号码'
    },
    int: {// 验证整数
        validator: function (value) {
            return /^\d+?$/i.test(value);
        },
        message: '请输入数字'
    },
    english: {
        validator: function (value) {
            return /^[a-zA-Z]+$/.test(value);
        },
        message: '请输入英文字母'
    },
    isVehicleNumber: {// 校验车牌号
        validator: function (value, param) {
            return isVehicleNumber(value, $(param[0]).combobox('getValue'));
        },
        message: '请输入正确的号牌号码'
    },
    roadname: {
        validator: function (value) {
            return /^[a-zA-Z0-9\u4e00-\u9fa5-]*$/.test(value);
        },
        message: '道路名称不能包含特殊字符'//中文，可以有“-”
    },
    compareStartDate: {
        validator: function (value, param) {
            alert(111);
            var d1 = $(param[0]).datetimebox('getValue'); //获取开始时间
            alert(d1);
            return value >= d1; //有效范围为大于开始时间的日期
        },
        message: '结束日期不能早于开始日期!'
    },
    compareEndDate: {
        validator: function (value, param) {
            var d1 = $(param[0]).datebox('getValue'); //获取结束时间
            return value <= d1; //有效范围为大于开始时间的日期
        },
        message: '开始日期不能晚于结束日期!'
    }
});

/**
 * 根据起止号计算票据分发张数
 */
function calculateDistributionsheet(startNoText, endNoText, countText) {
    var startNoId = $.trim($(startNoText).val());
    var endNoId = $.trim($(endNoText).val());
    //计算张数
    if (startNoId.length < 10 || endNoId.length < 10) {
        //如果是原来大于10位的，修改后小于10位需要清空结果
        $(countText).val('');
        return;
    }
    var sheets = Number(endNoId) - Number(startNoId) + 1;
    if (sheets > 0) {
        $(countText).val(sheets);
    }
}

/**
 * 根据起止号计算票据分发张数（有尾号提醒）
 */
function calculateDistributionsheetByTip(startNoText, endNoText, countText, tipText) {
    var startNoId = $.trim($(startNoText).val());
    var endNoId = $.trim($(endNoText).val());
    //录入尾号提醒
    var sfix = startNoId != '' ? startNoId.substr(startNoId.length - 2, startNoId.length - 1) != '01'
        && startNoId.substr(startNoId.length - 2, startNoId.length - 1) != '51' : false;
    var endfix = endNoId != '' ? endNoId.substr(endNoId.length - 2, endNoId.length - 1) != '00'
        && endNoId.substr(endNoId.length - 2, endNoId.length - 1) != '50' : false;
    if (sfix && endfix) {
        $(tipText).text('注意：起始号尾号不是01或51，终止号尾号不是00或50');
    } else if (sfix && !endfix) {
        $(tipText).text('注意：起始号尾号不是01或51');
    } else if (!sfix && endfix) {
        $(tipText).text('注意：终止号尾号不是00或50');
    } else {
        $(tipText).text('');
    }
    //计算张数
    if (startNoId.length < 10 || endNoId.length < 10) {
        //如果是原来大于10位的，修改后小于10位需要清空结果
        $(countText).val('');
        return;
    }
    var sheets = Number(endNoId) - Number(startNoId) + 1;
    if (sheets > 0) {
        $(countText).val(sheets);
    }

}

/**
 * 保存计时器
 */
function timedCount(tipText) {
    $(tipText).text('正在处理中,请稍后...');
    //$(tipText).text('正在处理中,请稍后...('+c+')');
    //t=setInterval(function(){
    //    $(tipText).text('正在处理中,请稍后...('+(++c)+')');
    //},1000);
}

function stopCount(tipText) {
    //clearInterval(t);
    $(tipText).text('');
    //c = 0;
}

/**
 * 校验车牌号
 * @param vehicleNumber
 * @returns {boolean}
 */
function isVehicleNumber(vehicleNumber, digit) {
    var result = false;
    if (vehicleNumber.length == 7 && digit != 51 && digit != 52 && digit != 13) {
        var express = /^[测京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
    } else if (vehicleNumber.length == 8 && (digit == 51 || digit == 52)) {
        var express = /^[测京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{6}$/;
    } else if (vehicleNumber.length == 8 && digit == 13) {
        var express = /^[测京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[0-9]{7}$/;
    } else {
        return false;
    }
    result = express.test(vehicleNumber);
    return result;
}
