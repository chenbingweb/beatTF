$(function(){
    $(window).resize(infinite);
    function infinite() {
        var htmlWidth = $('html').width();
        if (htmlWidth >= 750) {
            $("html").css({
                "font-size" : "50px"
            });
        } else {
            $("html").css({
                "font-size" :  50 / 750 * htmlWidth + "px"
            });
        }
    }
      infinite();
   
  
    $("body").css({"min-height":$(window).height()+"px"});
});


