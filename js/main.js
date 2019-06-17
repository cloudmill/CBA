$(document).ready(function(){
  custom();
  sliders();
})
custom = function(){
  $('.cases .item').each(function(){
    var text_temp = $(this).find('p.two').text(),
    temp = ($(this).index()+1)%12
    console.log($(this).index())
    if(temp == (2 || 8 || 10)){
      sliced = text_temp.slice(0,170)
    }else{
      sliced = text_temp.slice(0,80)
    }

    if (sliced.length < text_temp.length) {
      sliced += '...';
    }
    $(this).find('p.two').text(sliced)
  })
};
sliders = function(){
  sliders_init = function(){
    $('.brends .slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      infinite:true,
      dots:true,
      fade:true,
    })
  }
  sliders_init_callback = function(){
    $('.brends .slider').on('init',function(){
      var i=0;
      $('.brends .slider .slick-slide').each(function(){
        item = $(this).find('.item .text p.one')
        if(!$(this).hasClass('slick-clone')){
          $('.brends .slider').find('.slick-dots button').eq(i).html(item.text())
          i++;
        }
      })
    })
    
  }
  sliders_post = function(){
    $('.brends .slider').on('afterChange',function(event, slick,currentSlide , nextSlide){
      
      $('.brends .slider').find('.item').eq(currentSlide).addClass('current');
    })
    $('.brends .slider').on('beforeChange',function(event, slick,currentSlide , nextSlide){
      $('.brends .slider').find('.item').removeClass('current');
    })
  }
  sliders_init_callback();
  sliders_init();
  sliders_post();
}
