$(function() {
    $(document) .scroll(function(){
        var $nav = $('.nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

var menu = document.getElementById("bar");
var items = document.getElementById("navbar");

items.style.right = "-360px";

menu.onclick = function() {
    if (items.style.right == "-360px") {
        items.style.right = "0";
    }
    else {
        items.style.right = "-360px";
    }
}


$(document).ready(function(){
    $(".invisible-content").hide();
    $(document).on('click',"#btn",function(){
        var moreLessButton=$(".invisible-content").is(":visible")?'Read More':'Read Less';
        $(this).text(moreLessButton);
        $(this).parent(".basic").find(".invisible-content").toggle();
        $(this).parent(".basic").find(".visible-content").toggle();
    });

});



















