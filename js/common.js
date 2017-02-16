$(document).ready(function () {
  $('.vid-item').each(function(index){
    $(this).on('click', function(){
      var current_index = index+1;
      $('.vid-list li').removeClass('active');
      $('.vid-list li:nth-child('+current_index+') .thumb').addClass('active');
    });
  });
  var $list = $('#vid-list li');
  $list.click(function(){
    $list.removeClass('selected');
    $(this).addClass('selected'); 
  });
});