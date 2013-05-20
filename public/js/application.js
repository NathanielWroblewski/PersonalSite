$(document).ready(function() {
  $('#hello').fadeIn('fast').animate({
      top: '-=15px'
    }, 150).animate({
      top: '+=15px'
    }, 200, function(){
        $('#my').fadeIn(200, function(){
          $('#name').fadeIn(500, function(){
            $('#is').fadeIn(300, function(){
              $('#nathanielwroblewski').fadeIn(1000);
            });
          });
        });
      });
  setInterval(function(){
    $big = $('.big');
    $firstli = $('#list').find('li').first();
    $lastli = $('#list').find('li').last();
    $big.animate({
      left: parseInt($big.css('left'),10) == 0 ?
          -$big.outerWidth() :
          0
    }, 1000, function(){
      $big.removeClass('big').prependTo($('#list'));
      $big.addClass('hidden');
      $firstli.removeClass('hidden');
      $lastli.addClass('big');
      $lastli.appendTo($('#bigify').find('ul'));
    });
  }, 2000);
});