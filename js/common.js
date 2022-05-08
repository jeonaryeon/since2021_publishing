$(function(){
  $('#about_cont .outlink:nth-child(2)').on('click',function(e){
    e.preventDefault();
    alert("준비중입니다. 조금만 기다려주세요!");
  });
  
  $('.slick_slide').slick({
    slidesToShow: 1,
    infinite: false,
    draggable:true,
    accessibility: true,
    focusOnSelect: true,
    variableWidth: true,
    cssEase: 'linear',
    arrow: true,
    prevArrow : $('.work_left'),
    nextArrow : $('.work_right'),
    responsive: [ 
        {  
            breakpoint: 960, 
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            } 
        }
    ]
  });
}); 



