/// <reference path="jquery-1.8.2.js" />

$(function () {
    $(".tn-title").mouseover(function () {
        $(this).css("background-color", "rgb(237,238,240)");
    });
    $(".tn-title").mouseout(function () {
        $(this).css("background-color", "#FCFCFC");
    });
});