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
    if (/^3304\d{2}$/.test(val)) {
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

