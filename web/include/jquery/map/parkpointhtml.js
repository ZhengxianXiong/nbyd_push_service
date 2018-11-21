window.parkpointHtmlBody = function (img, lo, la, strId, name, address, free, total, isPhone) {
    var bodyHtml = "";
    var parkPointId = "'" + strId + "'";
    var param = lo + "," + la + "," + parkPointId;
    bodyHtml = '<li style="margin: 0px 0px; padding: 5px 0px 5px 0px; cursor: pointer; overflow: hidden; line-height: 17px;';
    bodyHtml += ' background-color:#E7ECF6;border-bottom:1px solid #D7D7D7;">';
    bodyHtml += '<span style="background:url(' + img + ') no-repeat;width:20px;height:32px;float:left;';
    bodyHtml += ' *zoom:1;overflow:hidden;margin:2px 3px 0 5px;display:inline;" onclick="setParkPointCenter(' + param + ');">&nbsp;</span>';
    bodyHtml += '	<div style="overflow:hidden;padding:0 5px;"> ';
    bodyHtml += '	 <div style="line-height:20px;font-size:14px;position:relative;">';
    bodyHtml += '    	<span style="color:#3760A5;" onclick="setParkPointCenter(' + param + ');"><b> ' + name + '</b></span>';

    if (isPhone) {
        bodyHtml += ' <span style="background-image:url(../images/map/att.png); background-repeat:no-repeat;background-position:center;';
        bodyHtml += '  position:absolute;top:0px;right:0px;display:block;width:68px;height:68px;"';
        bodyHtml += '   onclick="attention(' + parkPointId + ');"></span>';
    }
    bodyHtml += '  </div>';
    bodyHtml += '	<div style="padding:2px 0;line-height:18px;*zoom:1;overflow:hidden;">';
    bodyHtml += ' 	<b style="color:#606060;float:left;font-weight:bold;*zoom:1;overflow:hidden;padding-right:5px;*margin-right:-3px;" onclick="setParkPointCenter(' + param + ');">';
    bodyHtml += '		��ַ:</b><span style="color:#606060;display:block;zoom:1;overflow:hidden;" onclick="setParkPointCenter(' + param + ');">' + address + '</span></div>';
    bodyHtml += '	<div style="padding:2px 0;line-height:18px;*zoom:1;overflow:hidden;" onclick="setParkPointCenter(' + param + ');">';
    bodyHtml += ' 	<b style="color:#606060;float:left;font-weight:bold;*zoom:1;overflow:hidden;padding-right:5px;*margin-right:-3px;" onclick="setParkPointCenter(' + param + ');">';
    bodyHtml += '		��λ���(����/����):</b><span style="color:#606060;display:block;zoom:1;overflow:hidden;" onclick="setParkPointCenter(' + param + ');">' + free + "/" + total + '</span>';
    bodyHtml += '</div></div></li>';
    return bodyHtml;
}
window.parkPointHtmlBottom = function () {
    return "</ol></div>";
}
window.parkPointHtmlHead = function () {
    var html = '<div style="background: none repeat scroll 0% 0% rgb(255, 255, 255);">';
    html += '<ol style="list-style: none outside none; padding: 0px; margin: 0px;">';
    return html;
}
window.getNoParkPointHtml = function () {
    var strNoPoint = '<div id ="noParkID">';
    strNoPoint += '<div style="margin-left:15px;margin-top:10px;">';
    strNoPoint += '  <table width="100%" >';
    strNoPoint += '  <tr><td><div style="margin-left: 15px;">δ�ҵ����ͣ����:</div></td></tr>';
    strNoPoint += '   <tr><td><div style="margin-left: 15px;">���ǽ�������</div></td></tr>';
    strNoPoint += '   <tr><td><div style="margin-left: 15px;">1.����������Χ��</div></td></tr>';
    strNoPoint += '   <tr><td><div style="margin-left: 15px;">2.��������ؼ��ֽ���������</div></td></tr>';
    strNoPoint += '    <tr><td><div style="margin-left: 15px;">3.����ѡ���ѡ�����ġ�</div></td></tr>';
    strNoPoint += '  </table>';
    strNoPoint += '  </div>';
    return strNoPoint;
}

window.parkpointHtmlBodyByMobile = function (img, lo, la, strId, parkPointName, address, free, total, attImg, divTable) {
    //var bodyHtml ="";
    var parkPointId = "'" + strId + "'";
    var param = lo + "," + la + "," + parkPointId;
    divTable[divTable.length] = ["<li style=\"margin: 0px 0px; padding: 0px 0px 0px 0px; cursor: pointer; overflow: hidden; line-height: 17px;"];
    divTable[divTable.length] = ["background-color:#E7ECF6;border-bottom:1px solid #D7D7D7;\">"];
    divTable[divTable.length] = ["<div class=\"attentiondatalist\">"];
    divTable[divTable.length] = ["<div class=\"attentiondatalist_details\" onclick=\"setParkPointCenter(" + param + ");\">"];
    divTable[divTable.length] = ["<div class=\"attentiondatalist_details_ico\" style=\"position:absolute;top:15px;left:10px;\">"];
    divTable[divTable.length] = ["<img style=\"vertical-align:middle\" src=" + img + " width=\"20\" height=\"32\" />"];
    divTable[divTable.length] = ["</div>"];
    divTable[divTable.length] = ["<p style=\"font-size:16px;color:#3760A5;\">" + parkPointName + "</p>"];
    divTable[divTable.length] = ["<p style=\"color:#606060;font-weight:bold;\">��ַ��" + address + "</p>"];
    divTable[divTable.length] = ["<p style=\"color:#606060;font-weight:bold;\">��λ���(����/����): " + free + "/" + total + "</p>"];
    divTable[divTable.length] = ["</div>"];
    divTable[divTable.length] = ["<div class=\"attentiondatalist_btn\" onclick=\"attention(" + parkPointId + ");\">"];
    divTable[divTable.length] = ["<div class=\"attentiondatalist_btn_txt\"  style=\"padding-top:23px;padding-left:5px;\">"];
    divTable[divTable.length] = ["<img id=\"img_" + strId + "\" src=\"" + attImg + "\" width=\"46\" heigth=\"19\" />"];
    divTable[divTable.length] = ["</div>"];
    divTable[divTable.length] = ["</div>"];
    divTable[divTable.length] = ["</div>"];
    divTable[divTable.length] = ["</li>"];

}
window.parkPointHtmlBottomByMobile = function () {
    return "</ul></div>";
}
window.parkPointHtmlHeadByMobile = function () {
    var html = '<div style="background: none repeat scroll 0% 0% rgb(255, 255, 255);">';
    html += '<ul style="list-style: none; padding: 0px; margin: 0px;">';
    return html;
}

	