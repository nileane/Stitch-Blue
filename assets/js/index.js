/* Invoke ScrollUpBar Plugin */
$('#topbar').scrollupbar();

$(function(){
  $(window).scroll(function()
  {
    $("#topbar").removeClass("topped").addClass("scrolled");
    var divTop = $('#topbar').height();
    if($(this).scrollTop()<=divTop) {
        $("#topbar").removeClass("scrolled").addClass("topped");
    }
  });
});

/* Responsive videos */
$(document).ready(function(){
    $("#post").fitVids();
});

/* Search with ghostHunter */
$("#search-field").ghostHunter({
    results		: "#search-results",
    includepages 	: true,
    onKeyUp 		: true,
    onPageLoad 		: true,
    displaySearchInfo	: false,
    result_template	: "<a href='{{link}}'><li>{{title}}</li></a>"
});
