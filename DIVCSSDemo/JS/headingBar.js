/// <reference path="jquery-1.8.2.js" />

///==========Page Load==========
$(function () {

    ///mouseover title时，改变对应tab样式
    $(".tn-title").mouseover(function () {
        $(this).find(".tn-tab").css("background-color", "rgb(237,238,240)");
        $(this).find(".tn-tab").css("color", "rgb(253,132,36)");
        //mouseover tab时，显示下拉菜单
        $(this).find(".tn-tab").mousemove(function () {
            $(this).parent(".tn-title").find(".tn-topmenulist").find(".tn-text-list").css("display", "inline");
        });
        //mouseout tab时，隐藏下拉菜单
        $(this).find(".tn-tab").mouseout(function () {
            $(this).parent(".tn-title").find(".tn-topmenulist").find(".tn-text-list").css("display", "none");
        });
    });

    ///mousemove具体下拉菜单项时
    $(".tn-text-list").mousemove(function () {
        $(this).css("display", "inline");

    });

    ///mouseout具体下拉菜单项时
    $(".tn-text-list").mouseout(function () {
        $(this).css("display", "none");
    });

    ///mouseout title时，改变对应tab样式
    $(".tn-title").mouseout(function () {
        $(this).find(".tn-tab").css("background-color", "#FCFCFC");
        $(this).find(".tn-tab").css("color", "black");
    });

    ////移动客户端
    //$("#mobileClient").mouseover(function () {
    //    $("#mobileClientDetail").css("display", "inline");
    //});
    //$("#mobileClient").mouseout(function () {
    //    $("#mobileClientDetail").css("display", "none");
    //});
    ////移动客户端下拉菜单
    //$("#mobileClientDetail").mouseover(function () {
    //    $("#mobileClient").css("background-color", "rgb(237,238,240)");
    //    $("#mobileClientDetail").css("display", "inline");
    //});
    //$("#mobileClientDetail").mouseout(function () {
    //    $("#mobileClient").css("background-color", "#FCFCFC");
    //    $("#mobileClientDetail").css("display", "none");
    //});
    ////微博
    //$("#weibo").mouseover(function () {
    //    $("#weiboDetail").css("display", "inline");
    //});
    //$("#weibo").mouseout(function () {
    //    $("#weiboDetail").css("display", "none");
    //});
    ////微博下拉菜单
    //$("#weiboDetail").mouseover(function () {
    //    $("#weibo").css("background-color", "rgb(237,238,240)");
    //    $("#weiboDetail").css("display", "inline");
    //});
    //$("#weiboDetail").mouseout(function () {
    //    $("#weibo").css("background-color", "#FCFCFC");
    //    $("#weiboDetail").css("display", "none");
    //});
    ////博客
    //$("#blog").mouseover(function () {
    //    $("#blogDetail").css("display", "inline");
    //});
    //$("#blog").mouseout(function () {
    //    $("#blogDetail").css("display", "none");
    //});
    ////博客下拉菜单
    //$("#blogDetail").mouseover(function () {
    //    $("#blog").css("background-color", "rgb(237,238,240)");
    //    $("#blogDetail").css("display", "inline");
    //});
    //$("#blogDetail").mouseout(function () {
    //    $("#blog").css("background-color", "#FCFCFC");
    //    $("#blogDetail").css("display", "none");
    //});
    ////邮箱
    //$("#mail").mouseover(function () {
    //    $("#mailDetail").css("display", "inline");
    //});
    //$("#mail").mouseout(function () {
    //    $("#mailDetail").css("display", "none");
    //});
    ////邮箱下拉菜单
    //$("#mailDetail").mouseover(function () {
    //    $("#mail").css("background-color", "rgb(237,238,240)");
    //    $("#mailDetail").css("display", "inline");
    //});
    //$("#mailDetail").mouseout(function () {
    //    $("#mail").css("background-color", "#FCFCFC");
    //    $("#mailDetail").css("display", "none");
    //});

});