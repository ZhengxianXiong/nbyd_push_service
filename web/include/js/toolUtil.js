//文本内容去掉空格
function trimTextValue(obj) {
    $(obj).val($(obj).val().replace(/(^\s*)|(\s*$)/g, ""));
}

//序列号表单去掉空格 返回JSON格式
function serializeTrimForm($form) {
    var obj = {};
    $.each($form.serializeArray(), function (index) {
        if (obj[this['name']]) {
            obj[this['name']] = obj[this['name']] + ',' + this['value'].replace(/(^\s*)|(\s*$)/g, "");
        } else {
            obj[this['name']] = this['value'].replace(/(^\s*)|(\s*$)/g, "");
        }
    });
    return obj;
}

//序列号表单 返回JSON格式
function serializeForm($form) {
    var obj = {};
    $.each($form.serializeArray(), function (index) {
        if (obj[this['name']]) {
            obj[this['name']] = obj[this['name']] + ',' + this['value'];
        } else {
            obj[this['name']] = this['value'];
        }
    });
    return obj;
}

/**
 * 计算票据终止号
 */
function calculateInvoiceEndNo() {
    var startNoId = $.trim($('#startNoId').val());
    if (startNoId.length < 10) {
        $('#endNoId').val('');//如果是原来大于5位的，修改后小于5位需要清空结果
        return;
    }
    var endno = calculateCommonEndNo($('#lyNoId'), $('#percountId'), $('#startNoId'));
    $('#endNoId').val(endno);
}

/**
 *
 * @param $no 本数
 * @param $percount 每本多少张
 * @param $startno 起始号
 * @returns {string} 返回计算后的终止号
 */
function calculateCommonEndNo($no, $percount, $startno) {
    //定义计算结果
    var endno;
    //获取起始号
    var start = $startno[0].value;//jquery to dom
    start = $.trim(start);
    //获取本数，默认设置本数最大为10
    var no = $no[0].value;//jquery to dom
    if (Number(no) > $no.numberbox('options').max) {
        no = $no.numberbox('options').max;
    }
    if (Number(no) < 1) {
        no = 1;
    }
    //获取每本多少张
    var percount = $percount.combobox('getValue');
    var end = Number(no) * Number(percount) + Number("1" + start) - 1;
    endno = end + '';
    return endno.substring(1, endno.length);
}


function checkYmdTime(ymdtime) {
    var date_format = /^[0-9]{4}-[0-1]?[0-9]{1}-[0-3]?[0-9]{1}$/;
    if (!date_format.test(ymdtime)) {
        return false;
    }
    return true;
}

//easyui combox 年份统计下拉框参数，默认从2010年开始至今
function getYearOptions(obj) {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var data = new Array();
    var element = {};
    for (var i = year; i >= 2010; i--) {
        element = {label: i + "", value: i + ""};
        data.push(element);
    }
    $(obj).combobox({
        valueField: 'label',
        textField: 'value',
        data: data
    });
}

//验证日期字符串“YYYY-MM-dd”,考虑了闰年
function checkDate(strValue) {
    var regTextTime = /^((\d{2}(([02468][048])|([13579][26]))[\-\/\s]?((((0?[13578] )|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|([1-2][0-9])))))|(\d{2}(([02468][1235679])|([13579][01345789]))[\-\/\s]?((((0?[13578])|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|(1[0-9])|(2[0-8]))))))$/;
    return regTextTime.test(strValue);
}

function imgHavor(obj, width, height, bigWidth, bigHeight) {
    var imgs = $(obj);
    var imgWidth = width; //图片的默认宽度，主意不要带单位
    var imgHeight = height; //图片的默认高度，主意不要带单位
    var imgBigWidth = bigWidth; //图片的放大后宽度，主意不要带单位
    var imgBigHeight = bigHeight; //图片的放大后高度，主意不要带单位
    imgs.hover(function () {
        $(this).find('img').stop().animate({
            left: '-20',
            top: '-20',
            right: '-20',
            bottom: '-10px',
            width: imgBigWidth + 'px',
            height: imgBigHeight + 'px'
        }, 100);
    }, function () {
        $(this).find('img').stop().animate({
            left: '0',
            top: '0',
            right: '0',
            bottom: '0',
            width: imgWidth + 'px',
            height: imgHeight + 'px'
        }, 100);
    });
}

function hoverShowDiv(e, obj) {
    e = e || window.event;
    $('#divHover').css("display", "block");
    $('#divHover').find('img').attr("src", $(obj).attr("src"));
    var x = e.clientX;
    var y = e.clientY;
    if (x + 600 > $(window).width()) x = x - 600;
    if (y + 450 > $(window).height()) y = y - 450;
    var xScroll = Math.max(document.body.scrollLeft, document.documentElement.scrollLeft);
    var yScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    $('#divHover').css("top", y + yScroll);
    $('#divHover').css("left", x + xScroll);
}

function hoverHiddendiv() {
    $('#divHover').css("display", "none");
}


// // 对Date的扩展，将 Date 转化为指定格式的String
// // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// // 例子：
// // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
// Date.prototype.Format = function (fmt) { //author: meizz
//    var o = {
//        "M+": this.getMonth() + 1, //月份
//        "d+": this.getDate(), //日
//        "h+": this.getHours(), //小时
//        "m+": this.getMinutes(), //分
//        "s+": this.getSeconds(), //秒
//        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
//        "S": this.getMilliseconds() //毫秒
//    };
//    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
//    for (var k in o)
//        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
//    return fmt;
// }

// /** * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
// 可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
// Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
// * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
// * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
// * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
// * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
// */
//    Date.prototype.pattern=function(fmt) {
//    var o = {
//        "M+" : this.getMonth()+1, //月份
//        "d+" : this.getDate(), //日
//        "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
//        "H+" : this.getHours(), //小时
//        "m+" : this.getMinutes(), //分
//        "s+" : this.getSeconds(), //秒
//        "q+" : Math.floor((this.getMonth()+3)/3), //季度
//        "S" : this.getMilliseconds() //毫秒
//    };
//    var week = {
//        "0" : "/u65e5",
//        "1" : "/u4e00",
//        "2" : "/u4e8c",
//        "3" : "/u4e09",
//        "4" : "/u56db",
//        "5" : "/u4e94",
//        "6" : "/u516d"
//    };
//    if(/(y+)/.test(fmt)){
//        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
//    }
//    if(/(E+)/.test(fmt)){
//        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);
//    }
//    for(var k in o){
//        if(new RegExp("("+ k +")").test(fmt)){
//            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
//        }
//    }
//    return fmt;
// }



