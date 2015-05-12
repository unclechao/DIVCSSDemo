/// <reference path="jquery-1.8.2.js" />

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
        if ($("#username").val() == "") {
            $("#username").val("微博/博客/邮箱/手机");
            $("#username").css("color", "rgb(208,208,208)");
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

    //username获得焦点
    $("#username").focus(function () {
        if ($("#username").val() == "" || $("#username").val() == "微博/博客/邮箱/手机") {
            $("#username").val("");
        }
        $("#username").css("color", "black");
    });

    //password获得焦点
    $("#password").focus(function () {
        $("#password").val("");
        $("#password").get(0).setAttribute("type", "password");
        $("#password").css("color", "black");
    });
    $("#password").blur(function () {
        //$("#password").get(0).setAttribute("type", "text");
    });

    //登录按钮
    $("#btn_login").mouseover(function () {
        $("#btn_login").css("background-color", "rgb(253,147,49)");
    });
    $("#btn_login").mouseout(function () {
        $("#btn_login").css("background-color", "#ff8500");
    });
});

