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
    $('html,body').animate({
      scrollTop:topVal
    });
  }

  $indicator.on('click',function(event){
    event.preventDefault();
    nowIdx=$indicator.index(this);
    moveFn(arrTopVal[nowIdx]);
  });
  
  $(window).on('scroll',function(){
    var scrollTop=$(this).scrollTop() + 200;

    for(var i=0; i<5; i++){
      if(scrollTop>=arrTopVal[i]){
        $indicator.eq(i).addClass('current').parent().siblings().children().removeClass('current');
      }
    }
  }); // end of 페이지 navigation 스크립트

  // award 슬라이드
  var n=0;
  var liW=$('#main_award .text li').width();
  var liNum=$('#main_award .text li').length;
  var slideUl=$('#main_award .text ul');
  $('.award_btn .left').on('click',function(){
    $(slideUl).find('li').eq(liNum-1).prependTo($(slideUl));
    $(slideUl).css('left',-liW);
    $(slideUl).stop().animate({left:0},500);
  });
  
  $('.award_btn .right').on('click',function(){
    $(slideUl).stop().animate({left:-liW},500,function(){
      $(slideUl).find('li').eq(0).appendTo($(slideUl));
      $(slideUl).css('left','0px');
    });
  }); // end of award 슬라이드
    
  // resize시 #main_vision 높이값 다시 부여
  window.on('resize', function() { 
    $('#main_vision').css({height: 'calc(100vh - 80px)'});
  });
}); 



