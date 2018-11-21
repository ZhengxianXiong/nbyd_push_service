/**
 * jQuery EasyUI 1.3.2 -扩展-lq
 *
 * Copyright (c) 2009-2013 www.jeasyui.com. All rights reserved.
 *
 */
$.extend($.fn.validatebox.defaults.rules, {

    minLength: {
        validator: function (value, param) {
            return value.length >= param[0];
        },
        message: 'Please enter at least {0} characters.'
    },
    fixedLength: {
        validator: function (value, param) {
            return value.length == param[0];
        },
        message: '请输入{0}位固定长度字符.'
    },


    CHS: {
        validator: function (value, param) {
            return /^[\u0391-\uFFE5]+$/.test(value);
        },
        message: '请输入汉字'
    },
    mobile: {
        validator: function (value, param) {
            return /^((\(\d{2,3}\))|(\d{3}\-))?13\d{9}$/.test(value);
        },
        message: '手机号码不正确'
    },
    enterName: {
        validator: function (value, param) {
            var flag = true;
            m = value.charCodeAt(0);
            if (!((m >= 65 && m <= 90) || (m >= 97 && m <= 122))) {
                flag = false;
            }
            for (i = 0; i < value.length; i++) {
                n = value.charCodeAt(i);
                if (!((n >= 48 && n <= 57) || (n >= 65 && n <= 90) || (n >= 97 && n <= 122) || n == 95)) {
                    flag = false;
                }
            }
            return flag;
        },
        message: '英文开头，由英文字母、数字及下划线组成。'
    },
    safepass: {
        validator: function (value, param) {
            return safePassword(value);
        },
        message: '密码由字母和数字组成，至少6位'
    },
    equalTo: {
        validator: function (value, param) {
            return value == $(param[0]).val();
        },
        message: 'Field do not match.'
    },
    number: {
        validator: function (value, param) {
            return /^\d+$/.test(value);
        },
        message: '请输入数字'
    },
    fixedLenNum: {
        validator: function (value, param) {
            return /^\d+$/.test(value) && value.length == param[0];
        },
        message: '请输入{0}位数字'
    },
    idcard: {
        validator: function (value, param) {
            return idCard(value);
        },
        message: '请输入正确的身份证号码'
    }
});

/* 密码由字母和数字组成，至少6位 */
var safePassword = function (value) {
    return !(/^(([A-Z]*|[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}<>\?\\\/\'\"]*)|.{0,5})$|\s/.test(value));
};

var idCard = function (value) {
    if (value.length == 18 && 18 != value.length) return false;
    var number = value.toLowerCase();
    var d, sum = 0, v = '10x98765432', w = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        a = '11,12,13,14,15,21,22,23,31,32,33,34,35,36,37,41,42,43,44,45,46,50,51,52,53,54,61,62,63,64,65,71,81,82,91';
    var re = number.match(/^(\d{2})\d{4}(((\d{2})(\d{2})(\d{2})(\d{3}))|((\d{4})(\d{2})(\d{2})(\d{3}[x\d])))$/);
    if (re == null || a.indexOf(re[1]) < 0) return false;
    if (re[2].length == 9) {
        number = number.substr(0, 6) + '19' + number.substr(6);
        d = ['19' + re[4], re[5], re[6]].join('-');
    } else d = [re[9], re[10], re[11]].join('-');
    if (!isDateTime.call(d, 'yyyy-MM-dd')) return false;
    for (var i = 0; i < 17; i++) sum += number.charAt(i) * w[i];
    return (re[2].length == 9 || number.charAt(17) == v.charAt(sum % 11));
};