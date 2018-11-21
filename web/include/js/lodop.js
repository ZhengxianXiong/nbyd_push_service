var LODOP; //声明为全局变量
function getLodopDemo(oOBJECT, oEMBED) {
    var strHtmInstall = "<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='http://localhost:8081/hzcgwt/include/printTool/install_lodop32.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
    var strHtmUpdate = "<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='http://localhost:8081/hzcgwt/include/printTool/install_lodop32.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>";
    var strHtm64_Install = "<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='http://localhost:8081/hzcgwt/include/printTool/install_lodop64.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
    var strHtm64_Update = "<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='http://localhost:8081/hzcgwt/include/printTool/install_lodop64.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>";
    var strHtmFireFox = "<br><br><font color='#FF00FF'>注意：<br>1：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它。</font>";
    var LODOP = oEMBED;
    try {
        var isIE = (navigator.userAgent.indexOf('MSIE') >= 0) || (navigator.userAgent.indexOf('Trident') >= 0);
        var is64IE = isIE && (navigator.userAgent.indexOf('x64') >= 0);
        if (isIE) LODOP = oOBJECT;
        if ((LODOP == null) || (typeof(LODOP.VERSION) == "undefined")) {
            if (navigator.userAgent.indexOf('Firefox') >= 0) {
                document.documentElement.innerHTML = strHtmFireFox + document.documentElement.innerHTML;
            }
            ;
            if (is64IE) {
                document.write(strHtm64_Install);
            } else if (isIE) {
                document.write(strHtmInstall);
            } else {
                document.documentElement.innerHTML = strHtmInstall + document.documentElement.innerHTML;
            }
            ;
            return LODOP;
        } else if (LODOP.VERSION < "6.2.0.4") {
            if (is64IE) {
                document.write(strHtm64_Update);
            } else if (isIE) {
                document.write(strHtmUpdate);
            } else {
                document.documentElement.innerHTML = strHtmUpdate + document.documentElement.innerHTML;
            }
            ;
            return LODOP;
        }
        //=====如下空白位置适合调用统一功能:=====


        //=======================================
        return LODOP;
    } catch (err) {
        if (is64IE)
            document.documentElement.innerHTML = "Error:" + strHtm64_Install + document.documentElement.innerHTML; else
            document.documentElement.innerHTML = "Error:" + strHtmInstall + document.documentElement.innerHTML;
        return LODOP;
    }
}

/**
 * 判断是否安装了lodop打印控件
 * @param oOBJECT
 * @param oEMBED
 */
function isLodopInstall(oOBJECT, oEMBED) {
    LODOP = oEMBED;
    var isIE = (navigator.userAgent.indexOf('MSIE') >= 0) || (navigator.userAgent.indexOf('Trident') >= 0);
    var is64IE = isIE && (navigator.userAgent.indexOf('x64') >= 0);
    if (isIE) LODOP = oOBJECT;
    if ((LODOP == null) || (typeof(LODOP.VERSION) == "undefined")) {
        return false;
    } else {
        return true;
    }
}

/**
 * 获取 LODOP
 * @param oOBJECT
 * @param oEMBED
 */
function getLodop(oOBJECT, oEMBED) {
    var LODOP = oEMBED;
    var isIE = (navigator.userAgent.indexOf('MSIE') >= 0) || (navigator.userAgent.indexOf('Trident') >= 0);
    if (isIE) LODOP = oOBJECT;
    return LODOP;
}