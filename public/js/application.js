$(document).ready(function() {
  $('#hello').fadeIn('fast').animate({
      top: '-=15px'
    }, 150).animate({
      top: '+=15px'
    }, 200, function(){
        $('#my').fadeIn(200, function(){
          $('#name').fadeIn(400, function(){
            $('#is').fadeIn(400, function(){
              $('#nathanielwroblewski').fadeIn(1000);
            });
          });
        });
      });

});
