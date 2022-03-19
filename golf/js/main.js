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
    
    
  // scroll시 객체 보이기 
  const saTriggerMargin = 300;
  const saElementList = document.querySelectorAll('.ready');

  const saFunc = function() {
    for (const element of saElementList) {
      if (!element.classList.contains('active')) { // 활성화되어 있지 않고 타겟의 위차값이 현재 위치값보다 작으면
        if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
          element.classList.add('active'); // 'active' class 추가
        }
      }
    }
  }

  window.addEventListener('load', saFunc);
  window.addEventListener('scroll', saFunc);
  window.on('resize', function() { // resize시 saFunc 다시 실행
    saFunc();
    $('#main_vision').css({height: 'calc(100vh - 80px)'});
  });
}); 



