function keyPressInt(intlength) {
    var key = window.event.keyCode;
    var source = event.srcElement;
    window.event.returnValue = false;
    if (source.value.length == intlength)
        return;
    if (key > 47 && key < 58) window.event.returnValue = true;


}

function keypressdouble(allLength, decimalLength) {
    var key = window.event.keyCode;
    var source = event.srcElement;
    window.event.returnValue = false;
    if (source.value != "") {
        if (source.value.length == allLength)
            return;
        var i = source.value.indexOf(".", 0);
        if (i > 0) {
            if (source.value.length - i > decimalLength)
                return;
        }
        else {
            var intLength = parseInt(allLength) - parseInt(decimalLength) - 1;
            if (source.value.length >= intLength && key != 46)
                return;
        }
    }
    if (key == 46) {
        if (source.value != "") {
            var i = source.value.indexOf(".", 0);
            if (i < 0) {
                window.event.returnValue = true;
            }
        }
        else
            window.event.returnValue = true;
    }
    else if (key > 47 && key < 58)
        window.event.returnValue = true;
}

function setSelect(sel, val) {
    for (var i = 0; i < sel.length; i++) {
        if (val == sel[i].value) {
            sel[i].selected = true;
            return;
        }
    }
}


function checkDeptCode(val) {
    if (/\d{10}$/.test(val)) {
        return true;
    }
    return false;
}


function checkLength(object, maxlength) {
    if (object.value.length >= maxlength) {
        object.value = object.value.substring(0, maxlength);
        return false;
    }
}

function endfonce() {
    var e = event.srcElement;
    var r = e.createTextRange();
    r.moveStart('character', e.value.length);
    r.collapse(true);
    r.select();
}

function diffDate(str1, str2) {
    str1 = str1.replace(/-/g, "/");
    str2 = str2.replace(/-/g, "/");
    var d1;
    var d2;
    var diffday = 0;
    if (str1 == "") {
        d1 = new Date();
    } else {
        d1 = new Date(str1);
    }
    if (str2 == "") {
        d2 = new Date();
    } else {
        d2 = new Date(str2);
    }
    diffday = Date.parse(d1) - Date.parse(d2);
    diffday = diffday.toFixed(2) / 86400000;
    return diffday;
}

//��ȡdatebox��ʽ��ʱ�䣬���в���val��ʾ��ǰ����֮ǰ�ĵڼ��죬�����0���ʾ�ǵ���
function setDateBoxTime(val) {
    var LSTR_ndate = new Date();
    var LSTR_Year = LSTR_ndate.getFullYear();
    var LSTR_Month = LSTR_ndate.getMonth();
    var LSTR_Date = LSTR_ndate.getDate();
    var uom = new Date(LSTR_Year, LSTR_Month, LSTR_Date);
    uom.setDate(uom.getDate() - val);
    var LINT_MM = uom.getMonth();
    LINT_MM++;
    var LSTR_MM = LINT_MM >= 10 ? LINT_MM : ("0" + LINT_MM)
    var LINT_DD = uom.getDate();
    var LSTR_DD = LINT_DD >= 10 ? LINT_DD : ("0" + LINT_DD)
    uom = uom.getFullYear() + "-" + LSTR_MM + "-" + LSTR_DD;
    return uom;
}

function changeLongNum(val) {
    if (val.charAt(1) == '0') {
        return 0x00;
    }
    if (val.charAt(1) == '1') {
        return 0x01;
    }
    if (val.charAt(1) == '2') {
        return 0x02;
    }
    if (val.charAt(1) == '3') {
        return 0x03;
    }
    if (val.charAt(1) == '4') {
        return 0x04;
    }
    if (val.charAt(1) == '5') {
        return 0x05;
    }
    if (val.charAt(1) == '6') {
        return 0x06;
    }
    if (val.charAt(1) == '7') {
        return 0x07;
    }

    if (val.charAt(1) == '8') {
        return 0x08;
    }

    if (val.charAt(1) == '9') {
        if (val.charAt(0) == '0') {
            return 0x09;
        }
        if (val.charAt(0) == '9') {
            return 0x99;
        }
    }
}


function isAorNum(value) {
    for (i = 0; i < value.length; i++) {
        n = value.charCodeAt(i);
        if (!((n >= 48 && n <= 57) || (n >= 65 && n <= 90) || (n >= 97 && n <= 122))) {
            return false;
        }
    }
    return true;
}


function changeTwoDecimal_f(x) {
    var f_x = parseFloat(x);
    if (isNaN(f_x)) {
        alert('function:changeTwoDecimal->parameter error');
        return false;
    }
    var f_x = Math.round(x * 100) / 100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
    }
    return s_x;
}


function checkIdcard(num) {
    num = num.toUpperCase();
    //���֤����Ϊ15λ����18λ��15λʱȫΪ���֣�18λǰ17λΪ���֣����һλ��У��λ������Ϊ���ֻ��ַ�X��
    if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
        //alert('��������֤�ų��Ȳ��ԣ����ߺ��벻���Ϲ涨��\n15λ����ӦȫΪ���֣�18λ����ĩλ����Ϊ���ֻ�X��');
        return false;
    }
    //У��λ����ISO 7064:1983.MOD 11-2�Ĺ涨���ɣ�X������Ϊ������10��
    //����ֱ�����������ں�У��λ
    var len, re;
    len = num.length;
    if (len == 15) {
        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
        var arrSplit = num.match(re);

        //������������Ƿ���ȷ
        var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay) {
            //alert('��������֤����������ڲ��ԣ�');
            return false;
        }
        else {
            //��15λ���֤ת��18λ
            //У��λ����ISO 7064:1983.MOD 11-2�Ĺ涨���ɣ�X������Ϊ������10��
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            num += arrCh[nTemp % 11];
            return true;
        }
    }
    if (len == 18) {
        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        var arrSplit = num.match(re);

        //������������Ƿ���ȷ
        var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay) {
            //alert(dtmBirth.getYear());
            //alert(arrSplit[2]);
            //alert('��������֤����������ڲ��ԣ�');
            return false;
        }
        else {
            //����18λ���֤��У�����Ƿ���ȷ��
            //У��λ����ISO 7064:1983.MOD 11-2�Ĺ涨���ɣ�X������Ϊ������10��
            var valnum;
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            valnum = arrCh[nTemp % 11];
            if (valnum != num.substr(17, 1)) {
                //alert('18λ���֤��У���벻��ȷ��Ӧ��Ϊ��' + valnum);
                return false;
            }
            return true;
        }
    }
    return false;
}


//resizeGrid
function resizeGrid(gridId) {
    $('#' + gridId).datagrid('resize', {
        width: fixWidth(1),
        height: fixHeight(1)
    });
}

//ˢ�±��
function reloadTable(gridId) {
    $('#' + gridId).datagrid('reload');
}

//fixWidth, fixHeight
function fixWidth1(percent) {
    return 800 * percent - 24;
}

function fixHeight1(percent) {
    return 270 * percent + 140;
}

function fixWidth(percent) {
    return ($(window).width() - 10) * percent;
}

function fixHeight(percent) {
    if ($(".toolbar").outerHeight(true))
        return ($(window).height() - $(".toolbar").outerHeight(true) - 7) * percent;
    else
        return ($(window).height() - 7) * percent;

}

//print
function print(scardno, cardtype, result) {
    var printobj = new Array();
    printobj = {scardno: scardno, cardtype: cardtype, result: result};
    changeArray(printobj);
}

function doPreSub() {
    if (window.event.keyCode == 13) {
        window.event.keyCode = 0;//ȡ���¼�
        cardInStorage();
    }
}

function formchange(formId) {
    $('#' + formId).focus();
}

$(function () {
    $.ajaxSetup({
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        complete: function (XMLHttpRequest, textStatus) {
            //通过XMLHttpRequest取得响应头，sessionstatus
            var sessionstatus = XMLHttpRequest.getResponseHeader("sessionstatus");
            if (sessionstatus && (sessionstatus == "timeout" || sessionstatus == "kickoff")) {
                //获取当前网址
                var curWwwPath = window.document.location.href;
                //获取主机地址之后的目录
                var pathName = window.document.location.pathname;
                var pos = curWwwPath.indexOf(pathName);
                //获取主机地址 (eg. http://localhost:8081)
                var localhostPath = curWwwPath.substring(0, pos);
                //获取带"/"的项目名
                var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
                //window.top.location.replace(localhostPath + projectName + "/timeout");
                getTopWinow().location.replace(localhostPath + projectName + "/" + sessionstatus);
            }
        }
    });
    $(window).resize(function () {
        resizeGrid('list_table');
        resizeGrid('dept_list_table');
        resizeGrid('paylist_table');
    });

});

/**
 * 在页面中任何嵌套层次的窗口中获取顶层窗口
 * @return 当前页面的顶层窗口对象
 */
function getTopWinow() {
    var p = window;
    while (p != p.parent) {
        p = p.parent;
    }
    return p;
}


var myview = $.extend({}, $.fn.datagrid.defaults.view, {
    onAfterRender: function (target) {
        $.fn.datagrid.defaults.view.onAfterRender.call(this, target);
        var opts = $(target).datagrid('options');
        var vc = $(target).datagrid('getPanel').children('div.datagrid-view');
        vc.children('div.datagrid-empty').remove();
        if (!$(target).datagrid('getRows').length) {
//                    var d = $('<div class="datagrid-empty"></div>').html(opts.emptyMsg || '没有记录').appendTo(vc);
            var d = $('<div class="datagrid-empty"></div>').html(opts.emptyMsg).appendTo(vc);
            d.css({
                position: 'absolute',
                left: 0,
                top: 50,
                width: '100%',
                textAlign: 'center'
            });
        }
    }
});
