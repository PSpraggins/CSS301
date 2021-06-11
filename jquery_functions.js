$(document).ready(function(){
    $("div.collapsed-menu").click(function() {
        $("#side-nav").css("display", "block");
    });
});
$(document).ready(function(){
    $("div.menu-close").click(function() {
        $("#side-nav").hide();
    });
});
