$(document).ready(function(){
  custom();
  sliders();
  animate();
})
custom = function(){
  short_text = function(){
    $('.cases .item').each(function(){
      var text_temp = $(this).find('p.two').text(),
      temp = ($(this).index()+1)%12
      console.log($(this).index())
      if(temp == 2 ||temp ==  8 || temp == 10){
        sliced = text_temp.slice(0,170)
      }else{
        sliced = text_temp.slice(0,80)
      }
  
      if (sliced.length < text_temp.length) {
        sliced += '...';
      }
      $(this).find('p.two').text(sliced)
    })


    $('.list_news_sub .item').each(function(){
      var text_temp = $(this).find('p.two').text(),
      temp = ($(this).index()+1)%12
      console.log($(this).index())
      if(temp == 1 ||temp ==  7 ||temp ==  9){
        sliced = text_temp.slice(0,200)
      }else{
        sliced = text_temp.slice(0,110)
      }
  
      if (sliced.length < text_temp.length) {
        sliced += '...';
      }
      $(this).find('p.two').text(sliced)
    })
    $('.read_yet .list .item').each(function(){
      var text_temp = $(this).find('p.two').text();
      sliced = text_temp.slice(0,110)
      if (sliced.length < text_temp.length) {
        sliced += '...';
      }
      $(this).find('p.two').text(sliced)
    })
    $('.list_news .list .item').each(function(){
      var text_temp = $(this).find('p.two').text(),
      temp = ($(this).index()+1)%12
      console.log($(this).index())
      if(temp == 1 ||temp ==  7 ||temp ==  9){
        sliced = text_temp.slice(0,200)
      }else{
        sliced = text_temp.slice(0,110)
      }
  
      if (sliced.length < text_temp.length) {
        sliced += '...';
      }
      $(this).find('p.two').text(sliced)
    })
  }
  drop_down_init = function(){
    $('.dropdown-wrapper .block').click(function(){
      if($(this).parent().hasClass('active')){
        $('.dropdown-wrapper ').removeClass('active')
        $(this).parent().find('.list').height(31)
        setTimeout(function(){
          $('.dropdown-wrapper .list').addClass('hide')
        },300)
      }else{
        var Height_temp = 0;
        $(this).parent().find('.list li a').each(function(){
          temp = $(this).height()
          if(!$(this).parent().hasClass('hide'))
            Height_temp += temp + 12;
        })
        $(this).parent().addClass('active')
        $(this).parent().find('.list').height(Height_temp).removeClass('hide')
      }
    })
    $('.dropdown-wrapper .list li').click(function(){
      $('.dropdown-wrapper ').removeClass('active')
      $(this).parent().height(43)
        setTimeout(function(){
          $('.dropdown-wrapper .list').addClass('hide')
        },300)
      $('.dropdown-wrapper .list li').removeClass('hide')
      $(this).parent().parent().find('.block .selected').html($(this).html());
      $(this).addClass('hide')
    })
  }
  forms = function(){
    $('input[type="file"]').change(function(){
      var value = $("input[type='file']").val(),
          size = this.files[0].size,
          pos = -1,
          index = 0;
      while ((pos = value.indexOf('\\', pos + 1)) != -1) {
          index = pos;
      }
      value = value.slice(index+1, value.length)
      text = value+'<span class="size">'+Math.round((size/1024/1024*1000))/1000+'mB</span>'

      $(this).parent().find('label').html(text);
      $(this).parent().addClass('load')
    });
    $(document).on('submit','.contacts form',function(e){
      e.preventDefault()
      var name = $(this).find('input[name=name]'),
      phone = $(this).find('input[name=phone]'),
      mail = $(this).find('input[name=mail]'),
      text = $(this).find('textarea[name=text]'),
      file = $(this).find('input[name=file]'),
      pp = $(this).find('input[name=pp]:checked').length,
      error = 0;
      $(this).find('input,textarea').parent().removeClass('error')

      if(mail.val() == "" || !mail_right(mail.val())){
        error++
        mail.parent().addClass('error')
      }
      if(name.val() == ""){
        error++
        name.parent().addClass('error')
      }
      if(phone.val() == ""){
        error++
        phone.parent().addClass('error')
      }
      if(text.val() == ""){
        error++
        text.parent().addClass('error')
      }
      if(pp==0){
        error++
        $(this).find('input[name=pp]').parent().addClass('error')
      }
      if(error==0){
        
      }else{
        return false;
      }
    })
  }
  function mail_right(email) {
    var pattern  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern .test(String(email).toLowerCase());
  }
  drop_down_init();
  short_text();
  forms();
  if(('input[name=phone]').length>0){
    $('input[name=phone]').mask("+7 (999) 99-99-999");
  }
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
animate = function(){
  paralax_polygon = function(){
    $('.figure').each(function(){
      speed = parseInt(Math.random()*25+45)
      $(this).attr('start-scroll','null')
      $(this).attr('data-speed',speed)
    })
    $(document).on('scroll',function(){
      $('.figure').each(function(){
        if($(this).offset().top<$(document).scrollTop()+$(window).height() && $(this).offset().top+$(this).height()>$(document).scrollTop()){
          if($(this).attr('start-scroll')=='null'){
            $(this).attr('start-scroll',$(document).scrollTop())
            $(this).attr('dirtection',Math.random()>0.5 ? -1:1)

          }
          var top = ($(this).data('speed')/100*($(document).scrollTop()-$(this).attr('start-scroll')))
          $(this).css('transform','translate(0,'+top+'px) rotate('+(180*top/5000)*$(this).attr('dirtection')+'deg)')
          console.log(top)
        }
      })
    })
  }
  paralax_polygon()
}
