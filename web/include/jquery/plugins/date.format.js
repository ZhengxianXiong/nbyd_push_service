/**
 * 时间对象的格式化
 */
Date.prototype.format = function (format) {
    /*
     * format="yyyy-MM-dd hh:mm:ss";
     */
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4
            - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

//{"date":"3","day":"2","hours":"0","minutes":"0","month":"0","seconds":"0","time":"1325520000000","timezoneOffset":"-480","year":"112"}
function toDate(obj) {
    var date = new Date();
    date.setTime(obj.time);
    date.setHours(obj.hours);
    date.setMinutes(obj.minutes);
    date.setSeconds(obj.seconds);
    return date.format("yyyy-MM-dd hh:mm:ss");
}
