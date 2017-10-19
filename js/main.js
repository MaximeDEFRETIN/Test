$(document).ready(function(){
    //menu-forHome
    $("a#link-menu-forHome").mouseover(function() {
        $("div#menu-forOffice").hide();
        $("div#menu-forHome").show();
        console.log('show');
    });

    $("div#menu-forHome").on( "mouseleave", function() {
       $("div#menu-forHome").hide();
       console.log('show');
    });
    //menu-forOffice
    $("a#link-menu-forOffice").mouseover(function() {
        $("div#menu-forHome").hide();
        $("div#menu-forOffice").show();
        console.log('show');
    });
    $("div#menu-forOffice").on( "mouseleave", function() {
       $("div#menu-forOffice").hide();
       console.log('show');
    });
});
