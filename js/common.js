$(function(){
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



