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

/* Creates Captions from Alt tags */
$(".post img").each(
    function() {
        // Let's put a caption if there is one
        if ($(this).attr("alt")) {
            $(this).wrap(
                '<figure class="image"></figure>'
            ).after(
                '<figcaption>' +
                $(this).attr(
                    "alt") +
                '</figcaption>'
            );
        }
    });
