$(document).ready(function(){
    //menu-forHome
    $("a#link-menu-forHome").mouseover(function() {
        $("div#menu-forOffice").hide();
        $("div#menu-forHome").show();
    });
    // $("a#link-menu-forHome").mouseout(function() {
    //     $("div#menu-forHome").hide();
    // });
    $("div#menu-forHome").on( "mouseleave", function() {
       $("div#menu-forHome").hide();
    });
    //menu-forOffice
    $("a#link-menu-forOffice").mouseover(function() {
        $("div#menu-forHome").hide();
        $("div#menu-forOffice").show();
    });
    // $("a#link-menu-forOffice").mouseout(function() {
    //     $("div#menu-forOffice").hide();
    // });
    $("div#menu-forOffice").on( "mouseleave", function() {
       $("div#menu-forOffice").hide();
    });
});
