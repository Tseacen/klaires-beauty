
    $(document).ready(function(){

        var div = $('#divToShowHide');
        var pos = 970;
  
        $(window).scroll(function () {
  
         var windowpos = $(window).scrollTop();
  
         if (windowpos >= (pos - 500)) {
           div.addClass("AfterScroll");
         }
  
         else {
           div.removeClass("AfterScroll");
         }
  
       });
      });