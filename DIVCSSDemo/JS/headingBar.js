/// <reference path="jquery-1.8.2.js" />

///==========Page Load==========
$(function () {

    ///mouseover title时，改变对应tab样式
    $(".tn-title").mouseover(function () {
        $(this).find(".tn-tab").css("background-color", "rgb(237,238,240)");
        $(this).find(".tn-tab").css("color", "rgb(253,132,36)");
        //mouseover显示下拉菜单
        $(this).find(".tn-tab").mousemove(function () {
            $(this).parent(".tn-title").find(".tn-topmenulist").find(".tn-text-list").css("display", "block");
        });
        //mouseout隐藏下拉菜单
        $(this).find(".tn-tab").mouseout(function () {
            $(this).parent(".tn-title").find(".tn-topmenulist").find(".tn-text-list").css("display", "none");
        });
    });

    ///mousemove具体下拉菜单项时
    $(".tn-text-list").mousemove(function () {
        $(this).css("display", "block");
    });

    $(".tn-text-list li").mousemove(function () {
        $(this).css("color", "rgb(253,132,36)");
        $(this).css("background-color", "rgb(255,245,219)");
    });

    ///mouseout具体下拉菜单项时
    $(".tn-text-list").mouseout(function () {
        $(this).css("display", "none");
    });

    $(".tn-text-list li").mouseout(function () {
        $(this).css("color", "black");
        $(this).css("background-color", "#FCFCFC");
    });

    ///mouseout title时，改变对应tab样式
    $(".tn-title").mouseout(function () {
        $(this).find(".tn-tab").css("background-color", "#FCFCFC");
        $(this).find(".tn-tab").css("color", "black");
    });

});