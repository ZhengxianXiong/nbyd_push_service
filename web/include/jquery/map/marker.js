window.markerHtmlBody = function (img, markerName, address, phoneNumber, param) {
    var bodyHtml = "";
    bodyHtml = '<li style="margin: 2px 0px; padding: 5px 5px 0px 0px; cursor: pointer; overflow: hidden; line-height: 17px;">';
    bodyHtml += '<span style="background:url(' + img + ') 0px 0px;width:19px;height:25px;float:left;';
    bodyHtml += ' *zoom:1;overflow:hidden;margin:2px 3px 0px 5px;display:inline;" onclick="setMarkerCenter(' + param + ');">&nbsp;</span>';
    bodyHtml += '	<div style="overflow:hidden;padding:0 5px;"> ';
    bodyHtml += '	   <div style="font-size:12px;">';
    bodyHtml += '    	<p style="color:#00c;margin:0px;padding:0px;" onclick="setMarkerCenter(' + param + ');"><b> ' + markerName + '</b></p>';
    bodyHtml += '    </div>';
    bodyHtml += '	   <div style="padding:2px 0;line-height:18px;*zoom:1;overflow:hidden;">';
    bodyHtml += ' 	   <b style="float:left;font-weight:bold;*zoom:1;overflow:hidden;padding-right:5px;*margin-right:-3px;" onclick="setMarkerCenter(' + param + ');">';
    bodyHtml += '		   地址:</b><span style="color:#666;display:block;zoom:1;overflow:hidden;" onclick="setMarkerCenter(' + param + ');">' + address + '</span>';
    bodyHtml += '    </div>';
    if (phoneNumber != null && phoneNumber != "" && phoneNumber != " " && phoneNumber != 'undefined') {
        bodyHtml += '	   <div style="padding:2px 0;line-height:18px;*zoom:1;overflow:hidden;" onclick="setParkPointCenter(' + param + ');">';
        bodyHtml += ' 	   <b style="float:left;font-weight:bold;*zoom:1;overflow:hidden;padding-right:5px;*margin-right:-3px;" onclick="setMarkerCenter(' + param + ');">';
        bodyHtml += '		   电话:</b><span style="color:#666;display:block;zoom:1;overflow:hidden;" onclick="setMarkerCenter(' + param + ');">' + phoneNumber + '</span>';
        bodyHtml += '    </div>';
    }
    bodyHtml += '</div>';
    bodyHtml += '</li>';
    return bodyHtml;

}
window.markerHtmlTel = function (param, telphone) {
    var bodyHtml = "";
    bodyHtml += '	   <div style="padding:2px 0;line-height:18px;*zoom:1;overflow:hidden;" onclick="setParkPointCenter(' + param + ');">';
    bodyHtml += ' 	   <b style="float:left;font-weight:bold;*zoom:1;overflow:hidden;padding-right:5px;*margin-right:-3px;" onclick="setMarkerCenter(' + param + ');">';
    bodyHtml += '		   电话:</b><span style="color:#666;display:block;zoom:1;overflow:hidden;" onclick="setMarkerCenter(' + param + ');">' + telphone + '</span>';
    bodyHtml += '    </div>';
    return bodyHtml;
}
window.markerHtmlBottom = function () {
    return "</ol></div>";
}
window.markerHtmlHead = function () {
    var html = '<div style="background: none repeat scroll 0% 0% rgb(255, 255, 255);">';
    html += '<ol style="list-style: none outside none; padding: 0px; margin: 0px;">';
    return html;

}
window.markerHtmlBodyByMobile = function (img, name, address, param) {
    var bodyHtml = "";
    bodyHtml = '<li style="margin: 2px 0px; padding: 0px 5px 5px 0px; cursor: pointer; overflow: hidden; line-height: 17px;">';
    bodyHtml += ' <div class="attentiondatalist"  >';
    bodyHtml += '    <div class="attentiondatalist_details" onclick="setMarkerCenter(' + param + ');"> ';
    bodyHtml += '         <div class="attentiondatalist_details_ico" style="position:absolute;top:10px;left:10px;">';
    bodyHtml += '                <img style="vertical-align:middle;width:19px;height:25px;" src="' + img + '" />';
    bodyHtml += '         </div>';
    bodyHtml += '         <p style="font-size:12px;color:#00c;">' + name + '</p>';
    bodyHtml += '         <p style="color:#666;font-weight:bold;">地址：' + address + '</p>';
    bodyHtml += '@telphone';
    bodyHtml += '    </div>';
    bodyHtml += ' </div>';
    bodyHtml += ' </li>';
    return bodyHtml;

}
window.markerHtmlTelByMobile = function (param, telphone) {
    var bodyHtml = '         <p style="color:#666;font-weight:bold;">电话: ' + telphone + '</p>';
    return bodyHtml;
}
window.markerHtmlBottomByMobile = function () {
    return "</ul></div>";
}
window.markerHtmlHeadByMobile = function () {
    var html = '<div style="background: none repeat scroll 0% 0% rgb(255, 255, 255);">';
    html += '<ul style="list-style: none outside none; padding: 0px; margin: 0px;">';
    return html;

}
window.getNoRecordHtml = function () {
    var strNoPoint = '<div id ="noParkID">';
    strNoPoint += '<div style="margin-left:15px;">';
    strNoPoint += '  <table width="100%" >';
    strNoPoint += '  <tr><td><div style="margin-left: 15px;">未找到相关数据:</div></td></tr>';
    strNoPoint += '   <tr><td><div style="margin-left: 15px;">我们建议您：</div></td></tr>';
    strNoPoint += '   <tr><td><div style="margin-left: 15px;"> 1.返回到上级，选择其他地标。</div></td></tr>';
    strNoPoint += '   <tr><td><div style="margin-left: 15px;"> 2.在查询框输入其他关键字进行搜索。</div></td></tr>';
    strNoPoint += '  </table>';
    strNoPoint += '  </div>';
    return strNoPoint;
}
window.getNoMarkerHtml = function () {
    var strNoPoint = '<div id ="noParkID">';
    strNoPoint += '<div style="margin-left:15px;">';
    strNoPoint += '  <table width="100%" >';
    strNoPoint += '  <tr><td><div style="margin-left: 15px;">未找到相关停车点:</div></td></tr>';
    strNoPoint += '   <tr><td><div style="margin-left: 15px;">我们建议您：</div></td></tr>';
    strNoPoint += '   <tr><td><div style="margin-left: 15px;">1.扩大搜索范围。</div></td></tr>';
    strNoPoint += '   <tr><td><div style="margin-left: 15px;">2.重新输入关键字进行搜索。</div></td></tr>';
    strNoPoint += '    <tr><td><div style="margin-left: 15px;">3.重新选择点选的中心。</div></td></tr>';
    strNoPoint += '  </table>';
    strNoPoint += '  </div>';
    return strNoPoint;
}
window.getMarkerIcon = function getIcon(imagePath, x, y) {
    return new BMap.Icon(imagePath,
        new BMap.Size(x, y), {
            anchor: new BMap.Size(10, 30)
        });
}
window.getMarkerPath = function (index, imgPath) {
    var imgFile = "";
    switch (index) {
        case 0:
            imgFile = "markerA.png";
            break;
        case 1:
            imgFile = "markerB.png";
            break;
        case 2:
            imgFile = "markerC.png";
            break;
        case 3:
            imgFile = "markerD.png";
            break;
        case 4:
            imgFile = "markerE.png";
            break;
        case 5:
            imgFile = "markerF.png";
            break;
        case 6:
            imgFile = "markerG.png";
            break;
        case 7:
            imgFile = "markerH.png";
            break;
        case 8:
            imgFile = "markerI.png";
            break;
        case 9:
            imgFile = "markerJ.png";
            break;
        default:
            imgFile = "empty.png";
            break;
    }
    return imgPath + imgFile;
}
window.getSingleMarker = function (index, title, address, phoneNumber, lo, la, imgPath) {
    var imgPath = getMarkerPath(index, imgPath);
    var param = index + "," + lo + "," + la + ",'" + title + "','" + address + "','" + phoneNumber + "'";
    var htmlBody = markerHtmlBody(imgPath, title, address, phoneNumber, param);
    return htmlBody;
}
window.getSingleMarkerByMobile = function (index, title, address, phoneNumber, lo, la, imgPath) {
    var imgPath = getMarkerPath(index, imgPath);
    var param = index + "," + lo + "," + la + ",'" + title + "','" + address + "','" + phoneNumber + "'";
    var htmlBody = markerHtmlBodyByMobile(imgPath, title, address, param);
    if (phoneNumber == null || phoneNumber == "" || phoneNumber == " " || phoneNumber == 'undefined') {
        htmlBody = htmlBody.replace("@telphone", "");
    } else {
        var telHtml = markerHtmlTelByMobile(param, phoneNumber);
        htmlBody = htmlBody.replace("@telphone", telHtml);
    }
    return htmlBody;
}

var EARTH_RADIUS = 6378137.0;    //单位M
var PI = Math.PI;

function getRad(d) {
    return d * PI / 180.0;
}

/**
 * caculate the great circle distance
 * @param {Object} lat1
 * @param {Object} lng1
 * @param {Object} lat2
 * @param {Object} lng2
 */
window.getDistance = function getGreatCircleDistance(lat1, lng1, lat2, lng2) {

    var radLat1 = getRad(lat1);
    var radLat2 = getRad(lat2);
    var a = radLat1 - radLat2;
    var b = getRad(lng1) - getRad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000.0;
    return s;


}
window.checkLoLaDistanceByScope = function (lng1, lat1, lng2, lat2, radius) {
    var dValue = window.getDistance(lat1, lng1, lat2, lng2);
    return dValue <= radius;
}