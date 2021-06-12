$(document).ready(function(){
    $("div.collapsed-menu").click(function() {
        $(".side-nav").css("display", "block");
        $("body").css("overflow", "hidden");
        $("body").css("scroll", "no");
    });
});
$(document).ready(function(){
    $("div.menu-close").click(function() {
        $(".side-nav").hide();
        $("body").css("overflow", "scroll");
        $("body").css("scroll", "yes");
    });
});
