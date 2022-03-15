$(function(){
  
  // 페이지 navigation 스크립트
  var $indicator=$('#navigation a');
  var portIdx=0;
  var nowIdx=0;
  var arrTopVal=[];

  $('article').each(function(idx){
    arrTopVal[idx]=$(this).offset().top;
  });

  function moveFn(topVal){
    $('html,body').stop().animate({
      scrollTop:topVal
    });
  }

  $indicator.on('click',function(event){
    event.preventDefault();
    nowIdx=$indicator.index(this);
    moveFn(arrTopVal[nowIdx]);
  });

  $(window).on('scroll',function(){
    var scrollTop=$(this).scrollTop() + 120;

    for(var i=0; i<5; i++){
      if(scrollTop>=arrTopVal[i]){
        $indicator.eq(i).addClass('current').parent().siblings().children().removeClass('current');
      }
    }
  });
}); 



