/// <reference path="jquery-1.8.2.js" />

var emailList = ["@sina.com", "@sina.cn", "@vip.sina.com", "@3g.sina.com"];
var counts = emailList.length;
//新项的索引(用于设置高亮显示的样式)
var newIndex = 0;
//旧项的索引(用于取消原有高亮显示的样式)
var oldIndex = 0;

///==========Page Load==========
$(function () {
    //mouseover&mouseout登录按钮时
    $("#login").mouseover(function () {
        $(".login-area").css("display", "block");
    });
    $("#login").mouseout(function () {
        $(".login-area").css("display", "none");
    });

    //鼠标在登录块范围内外
    $(".login-area").mouseover(function () {
        $(".login-area").css("display", "block");
        if ($("#email").val() == "") {
            $("#email").val("微博/博客/邮箱/手机");
            $("#email").css("color", "rgb(208,208,208)");
        }
        if ($("#password").val() == "") {
            $("#password").get(0).setAttribute("type", "text");
            $("#password").val("请输入密码");
            $("#password").css("color", "rgb(208,208,208)");
        }
    });
    $(".login-area").mouseout(function () {
        $(".login-area").css("display", "none");
    });

    //email获得焦点
    $("#email").focus(function () {
        if ($("#email").val() == "" || $("#email").val() == "微博/博客/邮箱/手机")
            $("#email").val("");
        $("#email").css("color", "black");
        $("#auto-show").css("left", "153px").css("top", "108px").css("visibility", "visible");
    });
    $("#email").blur(function () {
        $("#auto-show").css("visibility", "hidden");
    });

    //password获得焦点
    $("#password").focus(function () {
        $("#password").val("");
        $("#password").get(0).setAttribute("type", "password");
        $("#password").css("color", "black");
    });

    //邮箱提示下拉框
    $("#auto-show").mouseover(function () {
        $("#auto-show").css("visibility", "visible");
    });
    $("#auto-show").mouseout(function () {
        $("#auto-show").css("visibility", "hidden");
    });
    $("#auto-show").focus(function () {
        $("#auto-show").css("visibility", "visible");
    });

    //登录按钮
    $("#btn_login").mouseover(function () {
        $("#btn_login").css("background-color", "rgb(253,147,49)");
    });
    $("#btn_login").mouseout(function () {
        $("#btn_login").css("background-color", "#ff8500");
    });

    //email 自动提示
    var emailInput = $("#email");
    for (var i = 0; i < emailList.length; i++) {
        $("#auto-show").append("<div id='" + (i + 1).toString() + "' onmouseover='setStyle(this)' onmouseout='cancelStyle(this)' >" + emailList[i] + "</div>");
    }
    emailInput.keyup(function (event) {
        var myEvent = event || window.event;
        var keyCode = myEvent.keyCode;
        //press down key(向下键)
        if (keyCode == 40) {
            oldIndex = newIndex;
            newIndex++;
            setStyleForChange();
            setValue(newIndex, emailInput);
        }
        //press up key(向上键)
        if (keyCode == 38) {
            oldIndex = newIndex;
            newIndex--;
            setStyleForChange();
            setValue(newIndex, emailInput);
        }
        //press enter key(回车键)
        if (keyCode == 13) {
            $("#auto-show").css("visibility", "hidden");
        }
        //press a-z|A-Z|0-9
        var changedText = (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode >= 48 && keyCode <= 56);
        if (changedText) {
            var currentVal = emailInput.val();
            for (var i = 1; i <= 6; i++) {
                $("div #" + i).text("").text(currentVal + emailList[i - 1]);
            }
        }
        //如果按下退格键或删除键
        if (keyCode == 8 || keyCode == 46) {
            emailInput.val("");
            for (var i = 1; i <= 6; i++) {
                $("div #" + i).text("").text(emailList[i - 1]);
            }
        }
    });

    //movable login area
    var _move = false;//移动标记  
    var _x, _y;//鼠标离控件左上角的相对位置  
    $(".login-area").click(function () {
    }).mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($(".login-area").css("left"));
        _y = e.pageY - parseInt($(".login-area").css("top"));
    });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x;//移动时根据鼠标位置计算控件左上角的绝对位置  
            var y = e.pageY - _y;
            $(".login-area").css({ top: y, left: x });//控件新位置  
        }
    }).mouseup(function () {
        _move = false;
    });

});//Page load function end

///==========Function==========
//给email文本框设置值
function setValue(newIndex, emailInput) {
    var addr = $("div #" + newIndex).text();
    emailInput.val(addr);
}
//鼠标移入设置样式
function setStyle(obj) {
    oldIndex = newIndex;
    newIndex = $(obj).attr("id");
    $(obj).css("background-color", "rgb(240,240,240)");
    $("div #" + oldIndex).css("background-color", "white");
    setValue(newIndex, $("#email"));
}
//鼠标移出取消样式
function cancelStyle(obj) {
    $(obj).css("background-color", "white");
}
//按上下键设置样式
function setStyleForChange() {
    newIndex = newIndex > counts ? 1 : newIndex;
    newIndex = newIndex < 1 ? counts : newIndex;
    $("div #" + newIndex).css("background-color", "rgb(240,240,240)");
    $("div #" + oldIndex).css("background-color", "white");
}