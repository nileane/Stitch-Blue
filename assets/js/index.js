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
