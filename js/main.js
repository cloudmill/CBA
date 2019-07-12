$(document).ready(function() {
  sliders();
  custom();
  animate();
});
custom = function() {
  short_text = function() {
    $(".cases .item").each(function() {
      var text_temp = $(this)
          .find("p.two")
          .text(),
        temp = ($(this).index() + 1) % 12;
      if (temp == 2 || temp == 8 || temp == 10) {
        sliced = text_temp.slice(0, 170);
      } else {
        sliced = text_temp.slice(0, 80);
      }

      if (sliced.length < text_temp.length) {
        sliced += "...";
      }
      $(this)
        .find("p.two")
        .text(sliced);
    });

    $(".list_news_sub .item").each(function() {
      var text_temp = $(this)
          .find("p.two")
          .text(),
        temp = ($(this).index() + 1) % 12;
      if (temp == 1 || temp == 7 || temp == 9) {
        sliced = text_temp.slice(0, 200);
      } else {
        sliced = text_temp.slice(0, 110);
      }

      if (sliced.length < text_temp.length) {
        sliced += "...";
      }
      $(this)
        .find("p.two")
        .text(sliced);
    });
    $(".read_yet .list .item").each(function() {
      var text_temp = $(this)
        .find("p.two")
        .text();
      sliced = text_temp.slice(0, 110);
      if (sliced.length < text_temp.length) {
        sliced += "...";
      }
      $(this)
        .find("p.two")
        .text(sliced);
    });
    $(".list_news .list .item").each(function() {
      var text_temp = $(this)
          .find("p.two")
          .text(),
        temp = ($(this).index() + 1) % 12;
      if (temp == 1 || temp == 7 || temp == 9) {
        sliced = text_temp.slice(0, 200);
      } else {
        sliced = text_temp.slice(0, 110);
      }

      if (sliced.length < text_temp.length) {
        sliced += "...";
      }
      $(this)
        .find("p.two")
        .text(sliced);
    });
  };
  drop_down_init = function() {
    $(".dropdown-wrapper .block").click(function() {
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".dropdown-wrapper ").removeClass("active");
        $(this)
          .parent()
          .find(".list")
          .height(31);
        setTimeout(function() {
          $(".dropdown-wrapper .list").addClass("hide");
        }, 300);
      } else {
        var Height_temp = 0;
        $(this)
          .parent()
          .find(".list li a")
          .each(function() {
            temp = $(this).height();
            if (
              !$(this)
                .parent()
                .hasClass("hide")
            )
              Height_temp += temp + 12;
          });
        $(this)
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .find(".list")
          .height(Height_temp)
          .removeClass("hide");
      }
    });
    $(".dropdown-wrapper .list li").click(function() {
      $(".dropdown-wrapper ").removeClass("active");
      $(this)
        .parent()
        .height(43);
      setTimeout(function() {
        $(".dropdown-wrapper .list").addClass("hide");
      }, 300);
      $(".dropdown-wrapper .list li").removeClass("hide");
      $(this)
        .parent()
        .parent()
        .find(".block .selected")
        .html($(this).html());
      $(this).addClass("hide");
    });
  };
  forms = function() {
    $('input[type="file"]').change(function() {
      var value = $("input[type='file']").val(),
        size = this.files[0].size,
        pos = -1,
        index = 0;
      while ((pos = value.indexOf("\\", pos + 1)) != -1) {
        index = pos;
      }
      value = value.slice(index + 1, value.length);
      text =
        value +
        '<span class="size">' +
        Math.round((size / 1024 / 1024) * 1000) / 1000 +
        "mB</span>";

      $(this)
        .parent()
        .find("label")
        .html(text);
      $(this)
        .parent()
        .addClass("load");
    });
    $(document).on("submit", ".contacts form", function(e) {
      e.preventDefault();
      var name = $(this).find("input[name=name]"),
        phone = $(this).find("input[name=phone]"),
        mail = $(this).find("input[name=mail]"),
        text = $(this).find("textarea[name=text]"),
        file = $(this).find("input[name=file]"),
        pp = $(this).find("input[name=pp]:checked").length,
        error = 0;
      $(this)
        .find("input,textarea")
        .parent()
        .removeClass("error");

      if (mail.val() == "" || !mail_right(mail.val())) {
        error++;
        mail.parent().addClass("error");
      }
      if (name.val() == "") {
        error++;
        name.parent().addClass("error");
      }
      if (phone.val() == "") {
        error++;
        phone.parent().addClass("error");
      }
      if (text.val() == "") {
        error++;
        text.parent().addClass("error");
      }
      if (pp == 0) {
        error++;
        $(this)
          .find("input[name=pp]")
          .parent()
          .addClass("error");
      }
      if (error == 0) {
      } else {
        return false;
      }
    });
    if ($("input[name=phone]").length > 0) {
      $("input[name=phone]").mask("+7 (999) 99-99-999");
    }
    function mail_right(email) {
      var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(String(email).toLowerCase());
    }
  };
  questions_open = function() {
    $(".license-quest .block .item.active").each(function() {
      var item = $(this);
      var height_temp =
        item.find(".head").height() +
        parseFloat(
          item
            .find(".head")
            .css("padding-top")
            .replace("px", "")
        ) +
        parseFloat(
          item
            .find(".head")
            .css("padding-bottom")
            .replace("px", "")
        ) +
        item.find(".text").height() +
        parseFloat(
          item
            .find(".text")
            .css("padding-top")
            .replace("px", "")
        ) +
        parseFloat(
          item
            .find(".text")
            .css("padding-bottom")
            .replace("px", "")
        );
      item.css("height", height_temp + 15);
    });
    $(".license-quest .block .item:not(.active)").each(function(item) {
      var item = $(this);
      var height_temp =
        item.find(".head").height() +
        parseFloat(
          item
            .find(".head")
            .css("padding-top")
            .replace("px", "")
        ) +
        parseFloat(
          item
            .find(".head")
            .css("padding-bottom")
            .replace("px", "")
        );
      item.css("height", height_temp);
    });
    $(".license-quest .block .item").each(function() {
      var item = $(this);
      item.find(".close").click(function() {
        if (item.hasClass("active")) {
          item.removeClass("active");
          item.attr("style", "");
          var height_temp =
            item.find(".head").height() +
            parseFloat(
              item
                .find(".head")
                .css("padding-top")
                .replace("px", "")
            ) +
            parseFloat(
              item
                .find(".head")
                .css("padding-bottom")
                .replace("px", "")
            );
          item.css("height", height_temp);
        } else {
          item.addClass("active");
          var height_temp =
            item.find(".head").height() +
            parseFloat(
              item
                .find(".head")
                .css("padding-top")
                .replace("px", "")
            ) +
            parseFloat(
              item
                .find(".head")
                .css("padding-bottom")
                .replace("px", "")
            ) +
            item.find(".text").height() +
            parseFloat(
              item
                .find(".text")
                .css("padding-top")
                .replace("px", "")
            ) +
            parseFloat(
              item
                .find(".text")
                .css("padding-bottom")
                .replace("px", "")
            );
          item.css("height", height_temp);
        }
      });
    });
  };
  slider_move_on_mouse = function() {
    //переключение слайдера наведением курсора
    var setintrv,
      opts = {
        curent_lenght: 200,
        time_pause: 300,
        but: {
          lenght_move: {
            //смещение кнопки слайдера
            x: 100,
            y: 50
          }
        }
      };
    (mouse = {
      x: 0,
      y: 0
    }),
      (items = []),
      (sliders_ar = [
        $(".slider.one"),
        $(".about-podhod .slider"),
        $(".about-advantage .slider")
      ]),
      (item_t = function(slider) {
        this.slider = slider;
        this.height = slider.height();
        this.y = slider.offset().top + slider.height();
        this.but_set = function() {
          this.obj = slider
            .parent()
            .find(".but")
            .eq(0);
          this.height = slider.height();
          this.move = {
            x: 0,
            y: 0
          };
          this.lenght_move = {
            x: opts.but.lenght_move.x,
            y: opts.but.lenght_move.y
          };
          this.y = slider.offset().top;
          this.direction = 0;
          this.time_a = 0.1;
          this.free = true;
          this.transform = "";
          this.go = function(item) {
            if (item.free) {
              item.doing.free(item);
            } else {
              item.doing.mouse(item);
            }
          };
          this.doing = {
            mouse: function(item) {
              item.move.x =
                (-item.lenght_move.x * ($(window).width() / 2 - mouse.x)) /
                ($(window).width() / 2);
              item.move.y =
                ((-item.height / 3) *
                  (item.height / 2 +
                    item.y -
                    ($(document).scrollTop() + mouse.y))) /
                (item.height / 2);
              item.time_a = 0.2;
              item.moving(item);
            },
            free: function(item) {
              item.move.x = 0;
              item.move.y = 0;
              item.time_a = 0.5;
              item.moving(item);
              item.free = false;
            }
          };
          this.moving = function(item) {
            item.set_pos(item);
          };
          this.set_pos = function(item) {
            item.obj.css("transition", "all " + item.time_a);
            item.transform =
              "translate(" + item.move.x + "px," + item.move.y + "px)";
            item.obj.css("transform", item.transform);
          };
        };
        this.but = new this.but_set();
        this.active = true;
      });

    sliders_ar.forEach(function(item) {
      if (item.length > 0) {
        items.push(new item_t(item));
      }
    });
    items.forEach(function(item) {
      item.slider.on("afterChange", function(
        event,
        slick,
        currentSlide,
        nextSlide
      ) {
        setTimeout(() => {
          item.active = true;
        }, opts.time_pause);
      });
    });
    var ticks = function() {
      items.forEach(function(item) {
        item.height = item.slider.height();
        item.y = item.height / 2 + item.slider.offset().top;
        if (
          Math.abs(mouse.y + $(document).scrollTop() - item.y) <
          item.height / 2
        ) {
          if (item.active) {
            if (mouse.x > $(window).width() / 2 + opts.curent_lenght) {
              item.slider.slick("slickNext");
              item.active = false;
            } else if (mouse.x < $(window).width() / 2 - opts.curent_lenght) {
              item.slider.slick("slickPrev");
              item.active = false;
            }
          }
          item.but.free = false;
        } else item.but.free = true;
        item.but.y = item.slider.offset().top;
        item.but.go(item.but);
      });
    };
    setintrv = setInterval(ticks, 10);
    $(document).on("mousemove", function(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
  };
  questions_open();
  drop_down_init();
  short_text();
  forms();
  slider_move_on_mouse();
};
sliders = function() {
  sliders_init = function() {
    sliders_with_layers = function() {
      var resp = [
        {
          breakpoint: 850,
          settings: {
            fade: false,
            dots: false
          }
        }
      ];
      $(".brends .slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        dots: true,
        fade: true,
        responsive: resp
      });
      $(".ambassador-achievement .slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        fade: true,
        responsive: resp
      });
      $(".project-slider .slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        fade: true,
        responsive: resp
      });
    };
    $(".about-podhod .slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 1000,
      arrows: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    $(".about-advantage .slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 1000,
      arrows: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    $(".project-recomendation .left .slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      vertical: true,
      verticalSwiping: true,
      infinite: false
    });
    $(".project-recomendation .right .slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      swipe: false,
      vertical: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            vertical: false,
            adaptiveHeight: true
          }
        }
      ]
    });
    $(".license-opportun .slider.one").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      infinite: false,
      arrows: false
    });
    $(".license-opportun .slider.two").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      swipe: false,
      infinite: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            swipe: true
          }
        }
      ]
    });
    sliders_for_mobile = function() {
      if ($(window).width() < 769) {
        $(".cases .content .block").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          infinite: false,
          arrows: false
        });
      }
      if ($(window).width() < 1025) {
        $(".read_yet .list").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          infinite: false,
          arrows: false
        });
        $(".integration .row").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          infinite: false,
          arrows: false
        });
      }
    };
    $(window).resize(function() {
      sliders_for_mobile();
    });
    sliders_for_mobile();
    sliders_with_layers();
  };
  sliders_init_before = function() {
    $(".brends .slider").on("init", function() {
      var i = 0;
      $(".brends .slider .slick-slide").each(function() {
        item = $(this).find(".item .text p.one");
        if (!$(this).hasClass("slick-cloned")) {
          $(".brends .slider")
            .find(".slick-dots button")
            .eq(i)
            .html(item.text());
          i++;
        }
      });
    });
    $(".project-recomendation .left .slider").on("init", function() {
      var i = 0;
      $(
        ".project-recomendation .left .slider .slick-slide:not(.slick-cloned)"
      ).each(function() {
        if (/* !$(this).hasClass('slick-cloned') */ 1) {
          if (i == 0) {
            $(this)
              .find(".item")
              .addClass("current");
          } else if (i == 1) {
            $(this)
              .find(".item")
              .addClass("next");
          } else if (i == 2) {
            $(this)
              .find(".item")
              .addClass("next-next");
          }
          i++;
        }
      });
    });
  };
  sliders_init_after = function() {
    var sliders = [
      //для анимации переключения
      $(".brends .slider"),
      $(".project-slider .slider"),
      $(".ambassador-achievement .slider")
    ];
    sliders.forEach(function(item) {
      item.on("afterChange", function(event, slick, currentSlide, nextSlide) {
        item
          .find(".item")
          .eq(currentSlide)
          .addClass("current");
      });
      item.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        item.find(".item").removeClass("current");
      });
    });

    $(".license-opportun .slider.one").on("beforeChange", function(
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      $(".license-opportun .slider.two").slick("slickGoTo", nextSlide);
    });
    $(".license-opportun .slider.two").on("beforeChange", function(
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      $(".license-opportun .slider.one").slick("slickGoTo", nextSlide);
    });

    $(".project-recomendation .left .slider").on("beforeChange", function(
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      $(".project-recomendation .right .slider").slick("slickGoTo", nextSlide);
      $(".project-recomendation .left .slider")
        .find(".item")

        .removeClass("current")
        .removeClass("pre")
        .removeClass("pre-pre")
        .removeClass("next")
        .removeClass("next-next");
      var cur, next, next_next, pre, pre_pre;
      cur = nextSlide;
      pre = cur - 1;
      pre_pre = cur - 2;
      next = cur + 1;
      next_next = cur + 2;
      if (nextSlide == 0) {
        pre = slick.slideCount - 1;
        pre_pre = slick.slideCount - 2;
      }
      if (nextSlide == 1) {
        pre_pre = slick.slideCount - 1;
      }
      if (nextSlide == slick.slideCount - 1) {
        next = 0;
        next_next = 1;
      }
      if (nextSlide == slick.slideCount - 2) {
        next_next = 0;
      }
      var i = 0;
      $(".project-recomendation .left .slider .slick-slide").each(function() {
        if (1 /* !$(this).hasClass('slick-cloned') */) {
          if (i == pre_pre) {
            $(this)
              .find(".item")
              .addClass("pre-pre");
          } else if (i == pre) {
            $(this)
              .find(".item")
              .addClass("pre");
          } else if (i == cur) {
            $(this)
              .find(".item")
              .addClass("current");
          } else if (i == next) {
            $(this)
              .find(".item")
              .addClass("next");
          } else if (i == next_next) {
            $(this)
              .find(".item")
              .addClass("next-next");
          }
          i++;
        }
      });
    });
  };
  sliders_init_before();
  sliders_init();
  sliders_init_after();
};
animate = function() {
  var do_animate;
  anim_f = function(){
    do_animate = $(document).scrollTop() < $("#container").height();
    if (do_animate) {
      $("body *").attr('style','');
    } else {
      $('body *').css('cursor','none')
    }
  }
  anim_f()
  $(document).on("scroll", function() {
    anim_f()
  });
  graph = function() {
    function create() {
      var canvasBody = document.createElement("canvas");
      canvasBody.width = $(".graph").width();
      canvasBody.height = 30 + $(".graph ul.rows").height();
      $(".graph").append(canvasBody);
      $(".graph canvas").attr("id", "graph");
    }
    create();
    var canvasBody = document.getElementById("graph"),
      canvas = canvasBody.getContext("2d"),
      data,
      max_value,
      min_value,
      w,
      h,
      width_col,
      correct_left,
      correct_bot,
      gradient,
      particles,
      mouse = { x: 0, y: 0 };
    opts = {
      object: {
        radius_big: 15,
        opacity_big: 0.2,
        radius_small: 4.5,
        stroke_width: 0.5,
        color: "#45e3f1",
        color_big: "rgba(69, 227, 241,0.2)",
        step: 1,
        lenght_cursive_line: 0,
        background:
          "linear-gradient(to top,  0%, rgba(69, 227, 241, 0) 1%,  100%)",
        k_lenght_fill: 1,
        add_lenght_fill: 50
      },
      canvas: {
        bgc: "#fff"
      }
    };
    function set_values() {
      canvasBody.width = $(".graph").width();
      canvasBody.height = 30 + $(".graph ul.rows").height();
      data = [];
      particles = [];
      $(".data-ar input").each(function() {
        data.push(parseFloat($(this).val()));
      });
      max_value = $(".data-ar").data("max")
        ? $(".data-ar").data("max")
        : data[0];
      min_value =
        $(".data-ar").data("min") < data[0]
          ? $(".data-ar").data("min")
          : data[0];
      for (i = 0; i < data.length; i++) {
        if (data[i] > max_value) max_value = data[i];
        if (data[i] < min_value) min_value = data[i];
      }
      w = $("#graph").width();
      h = $("#graph").height();
      width_col = $(".graph .cols li").width();
      correct_left =
        parseFloat($(".graph .cols").css("padding-left")) +
        parseFloat($(".graph .cols").css("margin-left")) +
        width_col / 2;
      correct_bot = opts.object.radius_big;
      gradient = canvas.createLinearGradient(w / 2, 0, w / 2, h);
    }

    var particle = function(x, y) {
        this.x = x;
        this.y = y;
        this.state_x = x;
        this.state_y = y;
        this.dx = 0;
        this.dy = 0;
        this.radius = opts.object.radius_big;
        this.radius_small = opts.object.radius_small;
        this.direction = 0;
        this.lenght_move = 0;
        this.radius_move = 50;
        this.going_lenght = 0;
        this.filling = {
          x: 0,
          y: 0
        };
        this.forse = {
          x: 1,
          y: 1
        };
        this.draw_small = function() {
          canvas.beginPath();
          canvas.arc(this.x, this.y, this.radius_small, 0, Math.PI * 2);
          canvas.closePath();
          canvas.fillStyle = opts.object.color;
          canvas.fill();
        };
        this.draw_big = function() {
          canvas.beginPath();
          canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          canvas.closePath();
          canvas.fillStyle = opts.object.color_big;
          canvas.fill();
        };
        this.move_to = {
          mouse: function(item) {
            item.dx = item.filling.x * -Math.cos(item.direction) * item.forse.x;
            item.dy = item.filling.y * Math.sin(item.direction) * item.forse.y;
            item.moving();
          },
          go_home: function(item) {
            item.set_direction(item.x - item.state_x, item.y - item.state_y);
            item.lenght_move = Math.sqrt(
              (item.x - item.state_x) * (item.x - item.state_x) +
                (item.y - item.state_y) * (item.y - item.state_y)
            );
            item.dx = (Math.cos(item.direction) / 10) * item.lenght_move;
            item.dy = (-Math.sin(item.direction) / 10) * item.lenght_move;
            if (
              Math.abs(item.x - item.state_x) > 1 ||
              Math.abs(item.y - item.state_y) > 1
            ) {
              item.moving();
            }
          }
        };
        this.hover = function() {
          if (
            Math.abs(this.x - mouse.x) <
              this.radius * 2 * opts.object.k_lenght_fill -
                this.radius +
                opts.object.add_lenght_fill &&
            Math.abs(this.y - mouse.y) <
              this.radius * 2 * opts.object.k_lenght_fill -
                this.radius +
                opts.object.add_lenght_fill
          ) {
            this.move_to.mouse(this);
          } else {
            this.move_to.go_home(this);
          }
        };
        this.moving = function() {
          this.filling_set();
          this.border();
        };
        this.border = function() {
          if (
            this.x + this.dx - this.radius > 0 &&
            this.x + this.dx + this.radius < w
          ) {
            if (this.going_lenght < this.radius_move) {
              this.x += this.dx;
            } else {
              this.x += 0.1 * (this.x + this.dx - this.state_x > 0 ? -1 : 1);
            }
          } else if (this.x + this.dx + this.radius > w) {
            this.x -= 0.1;
          } else {
            this.x += 0.1;
          }
          if (
            this.y + this.dy - this.radius > 0 &&
            this.y + this.dy + this.radius < h
          ) {
            if (
              Math.sqrt(
                (this.y + this.dy - this.state_y) *
                  (this.y + this.dy - this.state_y) +
                  (this.x + this.dx - this.state_x) *
                    (this.x + this.dx - this.state_x)
              ) < this.radius_move
            ) {
              this.y += this.dy;
            } else {
              this.y += 0.1 * (this.y + this.dy - this.state_y > 0 ? -1 : 1);
            }
          } else if (this.y + this.dy + this.radius > h) {
            this.y -= 0.1;
          } else {
            this.y += 0.1;
          }
        };
        this.set_direction = function(x, y) {
          var gip = Math.sqrt(x * x + y * y);
          var acos = -Math.acos(x / gip) + Math.PI;
          if (y < 0) acos = Math.PI * 2 - acos;
          this.direction = acos;
        };
        this.filling_set = function() {
          this.set_direction(this.x - mouse.x, this.y - mouse.y);
          this.filling.y = round(
            1 -
              Math.abs(
                (this.y - mouse.y) /
                  (this.radius * 2 * opts.object.k_lenght_fill -
                    this.radius +
                    opts.object.add_lenght_fill)
              ),
            3
          );
          this.filling.x = round(
            1 -
              Math.abs(
                (this.x - mouse.x) /
                  (this.radius * 2 * opts.object.k_lenght_fill -
                    this.radius +
                    opts.object.add_lenght_fill)
              ),
            3
          );
          this.going_lenght = Math.sqrt(
            (this.y + this.dy - this.state_y) *
              (this.y + this.dy - this.state_y) +
              (this.x + this.dx - this.state_x) *
                (this.x + this.dx - this.state_x)
          );
        };
      },
      draw_line = function(x1, y1, x2, y2) {
        var x3 = (x2 + x1) / 2,
          y3 = (y2 + y1) / 2;
        canvas.beginPath();
        canvas.moveTo(x1, y1);
        canvas.quadraticCurveTo(x3, y3, x2, y2);
        canvas.closePath();
        canvas.strokeStyle = opts.object.color;
        canvas.lineWidth = opts.object.stroke_width;
        canvas.stroke();
      },
      draw_polugone = function(ar, bot_points) {
        canvas.beginPath();
        ar.forEach(function(item, i) {
          if (i == 0) canvas.moveTo(item.x, item.y);
          else canvas.lineTo(item.x, item.y);
        });
        canvas.lineTo(bot_points[0], h);
        canvas.lineTo(bot_points[1], h);
        canvas.closePath();
        gradient.addColorStop(1, "rgba(69, 227, 241, 0)");
        gradient.addColorStop(0, "rgba(31, 239, 217, 0.4)");
        canvas.fillStyle = gradient;
        canvas.fill();
      };
    var animate_graph;
    function setup() {
      cancelAnimationFrame(animate_graph);
      set_values();
      for (i = 0; i < data.length; i++) {
        var x =
            i * ((w - correct_left + width_col / 2) / data.length) +
            correct_left,
          y =
            h -
            20 -
            (data[i] - min_value) *
              ((h - correct_bot * 2 - 20) / (max_value - min_value)) -
            correct_bot;
        particles.push(new particle(x, y));
      }
      loop();
    }
    function loop() {
      canvas.fillStyle = opts.canvas.bgc;
      canvas.fillRect(0, 0, w, h);
      for (i = 0; i < particles.length; i++) {
        particles[i].hover();
        particles[i].draw_big();
        particles[i].draw_small();
      }
      for (i = 1; i < particles.length; i++) {
        draw_line(
          particles[i].x,
          particles[i].y,
          particles[i - 1].x,
          particles[i - 1].y
        );
      }
      if ($(window).width() > 768) {
        var ar = [];
        particles.forEach(function(item) {
          ar.push({ x: item.x, y: item.y });
          draw_line(item.x, item.y, item.state_x, h);
        });
        draw_polugone(ar, [
          particles[particles.length - 1].state_x,
          particles[0].state_x
        ]);
      }
      animate_graph = requestAnimationFrame(loop);
    }
    var clear_mouse;
    $(document).on("mousemove", "canvas", function(e) {
      clearTimeout(clear_mouse);
      mouse.x = e.clientX - $(this).offset().left;
      mouse.y = e.clientY - $(this).offset().top + $(document).scrollTop();
      clear_mouse = setTimeout(function() {
        mouse.x = -100;
        mouse.y = -100;
      }, 1000);
    });
    $(window).resize(setup);
    $(document).on("change", ".data-ar input", setup);
    setup();
    shorted = function(a, b, l) {
      return Math.abs(a - b) < l;
    };
    round = function(num, step) {
      return parseInt(num * Math.pow(10, step)) / Math.pow(10, step);
    };
  };
  polugone_move_on_mouse = function() {
    var items = [],
      scroll_top = 0,
      figures_on_click = 0,
      mouse = {
        x: 0,
        y: 0
      },
      key_press = false,
      opts = {
        k_lenght_fill: 1, // коофициент дальньности взаимодействия от размера обьекта
        add_lenght_fill: 200, // дополнительная дальность взаимодействия
        start_forse: 3, // коофициент взаимодействия с курсором
        time_clear_mouse: 2000, // время сброса кооднинат курсора (мс)
        angle_step: Math.PI / 30, // угол поворота
        rotate_probability: 40, //% вероятность поворота при свободном движении
        speed_free: 40, //скорость (пикесель в сек)
        lenght_travel: 100, // растояние для начала двидения в изначальной точке
        finish_home_from_travel: 10 //растояние прекращения возвращения
      };
    item = function(obj, x, y) {
      this.object = obj;
      this.move = { x: x || 0, y: y || 0 };
      this.forse = { y: opts.start_forse, x: opts.start_forse };
      this.width = obj.width();
      this.go_mouse = false;
      this.height = obj.height();
      this.direction = Math.random() * Math.PI * 2;
      this.filling = { x: 0, y: 0 };
      this.x;
      this.y;
      this.dx = 0;
      this.dy = 0;
      this.transform = "";
      this.hover = false;
      this.free = true;
      this.want_go_home = false;
      this.move_to = {
        mouse: function(item) {
          item.dx = item.filling.x * -Math.cos(item.direction) * item.forse.x;
          item.dy = item.filling.y * Math.sin(item.direction) * item.forse.y;
          item.moving();
        },
        free: function(item) {
          if (Math.random() + (1 * opts.rotate_probability) / 100 > 1)
            item.direction += opts.angle_step * (Math.random() > 0.5 ? 1 : -1);
          item.dx = (Math.cos(item.direction) / 100) * opts.speed_free;
          item.dy = (-Math.sin(item.direction) / 100) * opts.speed_free;
          item.moving();
        },
        go_to_mouse: function(item) {
          item.set_direction(item.x - mouse.x, item.y - (mouse.y + scroll_top));
          item.dx = (Math.cos(item.direction) / 30) * opts.speed_free;
          item.dy = (-Math.sin(item.direction) / 30) * opts.speed_free;
          item.moving();
        },
        go_home: function(item) {
          item.set_direction(item.move.x, item.move.y);
          item.dx = (Math.cos(item.direction) / 100) * opts.speed_free;
          item.dy = (-Math.sin(item.direction) / 100) * opts.speed_free;
          item.moving();
        }
      };
      this.moving = function() {
        this.cur_position();
        this.border();
        this.set_pos();
      };
      this.border = function() {
        if (
          this.x + this.dx - this.width / 2 > 0 &&
          this.x + this.dx + this.width / 2 < $(window).width()
        ) {
          this.move.x += this.dx;
        } else if (this.x + this.dx + this.width / 2 > $(window).width()) {
          this.move.x -= 0.1;
        } else {
          this.move.x += 0.1;
        }
        if (
          this.y + this.dy - this.height / 2 > 0 &&
          this.y + this.dy + this.height / 2 < $("body").height()
        ) {
          this.move.y += this.dy;
        } else if (this.y + this.dy + this.height / 2 > $("body").height()) {
          this.move.y -= 0.1;
        } else {
          this.move.y += 0.1;
        }
      };
      this.set_pos = function() {
        this.transform =
          "translate(" + this.move.x + "px," + this.move.y + "px)";
        this.object.css("transform", this.transform);
      };
      this.cur_position = function() {
        this.x = this.object.offset().left + this.width / 2;
        this.y = this.object.offset().top + this.height / 2;
      };
      this.set_direction = function(x, y) {
        var gip = Math.sqrt(x * x + y * y);
        var acos = -Math.acos(x / gip) + Math.PI;
        if (y < 0) acos = Math.PI * 2 - acos;
        this.direction = acos;
      };
      this.check_hover = function() {
        if (
          shorted(
            this.y - scroll_top,
            mouse.y,
            this.height * opts.k_lenght_fill -
              this.height / 2 +
              opts.add_lenght_fill
          ) &&
          shorted(
            this.x,
            mouse.x,
            this.width * opts.k_lenght_fill -
              this.width / 2 +
              opts.add_lenght_fill
          )
        ) {
          this.hover = true;
          this.set_direction(this.x - mouse.x, this.y - scroll_top - mouse.y);
          this.filling.y = round(
            1 -
              Math.abs(
                (this.y - scroll_top - mouse.y) /
                  (this.height * opts.k_lenght_fill -
                    this.height / 2 +
                    opts.add_lenght_fill)
              ),
            3
          );
          this.filling.x = round(
            1 -
              Math.abs(
                (this.x - mouse.x) /
                  (this.width * opts.k_lenght_fill -
                    this.width / 2 +
                    opts.add_lenght_fill)
              ),
            3
          );
        } else {
          this.hover = false;
        }
      };
      this.check_travel_lenght = function() {
        if (
          Math.sqrt(this.move.x * this.move.x + this.move.y * this.move.y) >
          opts.lenght_travel
        ) {
          this.want_go_home = true;
        } else if (
          Math.sqrt(this.move.x * this.move.x + this.move.y * this.move.y) >
          opts.finish_home_from_travel
        ) {
          this.want_go_home = false;
        }
      };
    };
    function ticks() {
      items.forEach(function(item) {
        item.check_hover();
        if (key_press || item.go_mouse) {
          item.move_to.go_to_mouse(item);
        } else {
          if (item.hover) {
            item.move_to.mouse(item);
          } else {
            item.check_travel_lenght();
            if (item.want_go_home) {
              item.move_to.go_home(item);
            } else item.move_to.free(item);
          }
        }
      });
    }

    $(".figure").each(function() {
      items.push(new item($(this)));
    });

    var start_anim;
    start_anim = setInterval(ticks, 10);
    var clear_mouse;

    $(document).on("mousemove", function(e) {
      clearTimeout(clear_mouse);
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      clear_mouse = setTimeout(function() {
        if (!key_press) {
          mouse.x = -10000;
          mouse.y = -10000;
        }
      }, opts.time_clear_mouse);
    });
    /* $(document).on('mousedown', function () {
      key_press = true;
    })
    $(document).on('mouseup', function () {
      key_press = false
    }) */

    /* $(document).on('click',function(e){
      if(figures_on_click < 4){
        $('.figures_click').append('<div data-id='+items.length+' class="figure_click"></div>')
        items.push(new item($('.figure_click').eq(figures_on_click),mouse.x,mouse.y+scroll_top))
        figures_on_click++;
      }
    }) */
    if ($(window).width() <= 768) {
      clearInterval(start_anim);
      $(".figure").remove();
    }
    $(document).on("scroll", function() {
      scroll_top = $(this).scrollTop();
    });
    /////////

    /////////
    shorted = function(a, b, l) {
      return Math.abs(a - b) < l;
    };
    round = function(num, step) {
      return parseInt(num * Math.pow(10, step)) / Math.pow(10, step);
    };
  };
  hex_sphere = function() {
    var width = $("#container").innerWidth();
    var height = $("#container").innerHeight();

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xf5f5f5);
    var cameraDistance = 65;
    if ($(window).width() < 551) cameraDistance = 70;
    var camera = new THREE.PerspectiveCamera(
      cameraDistance,
      width / height,
      1,
      200
    );
    camera.position.z = -cameraDistance;

    var scene = new THREE.Scene();
    scene.fog = new THREE.Fog(
      0xf5f5f5,
      cameraDistance * 0.4,
      cameraDistance * 1.5
    );

    var projectionCanvas = document.createElement("canvas");

    projectionCanvas.width = width;
    projectionCanvas.height = height;

    var seenTiles = {};
    var currentTiles = [];

    var createScene = function(radius, divisions, tileSize, color, opacity) {
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
      var hexasphere = new Hexasphere(radius, divisions, tileSize);
      var material_sphere = new THREE.MeshBasicMaterial({ color: color });
      var geometry_sphere = new THREE.SphereBufferGeometry(0.2, 4, 4);
      var points_spheres = {
        x: [],
        y: [],
        z: []
      };
      function find_in_all(ar, x, y, z) {
        var find = false;
        ar.x.forEach(function(item, i) {
          if (item == x && ar.y[i] == y && ar.z[i] == z) {
            find = true;
          }
        });
        return find;
      }
      for (var i = 0; i < hexasphere.tiles.length; i++) {
        var t = hexasphere.tiles[i];
        var geometry = new THREE.Geometry();
        for (var j = 0; j < t.boundary.length; j++) {
          var bp = t.boundary[j];
          geometry.vertices.push(new THREE.Vector3(bp.x, bp.y, bp.z));
          if (!find_in_all(points_spheres, bp.x, bp.y, bp.z)) {
            points_spheres.x.push(bp.x);
            points_spheres.y.push(bp.y);
            points_spheres.z.push(bp.z);
            var obj = new THREE.Mesh(geometry_sphere, material_sphere);
            obj.position.copy(new THREE.Vector3(bp.x, bp.y, bp.z));
            if ($(window).width() > 768) scene.add(obj);
          }
        }
        center = function(x1, y1, z1, x2, y2, z2, req, d, l) {
          var xt, yt, zt;
          xt = (x1 + x2) / 2;
          yt = (y1 + y2) / 2;
          zt = (z1 + z2) / 2;
          if (req > 0) {
            var item_t;
            if (d != 0) {
              item_t = center(xt, yt, zt, x2, y2, z2, req - 1, d, l + 1);
            } else {
              item_t = center(x1, y1, z1, xt, yt, zt, req - 1, d, l + 1);
            }
            xt = item_t.x;
            yt = item_t.y;
            zt = item_t.z;
          }
          return {
            x: xt,
            y: yt,
            z: zt
          };
        };
        for (var j = 0; j < t.boundary.length; j++) {
          var bp, bp_p;
          bp = t.boundary[j];
          bp_p = j < t.boundary.length - 1 ? t.boundary[j + 1] : t.boundary[0];
          var x1, y1, z1, x2, y2, z2;
          x1 = parseFloat(bp.x);
          y1 = parseFloat(bp.y);
          z1 = parseFloat(bp.z);
          x2 = parseFloat(bp_p.x);
          y2 = parseFloat(bp_p.y);
          z2 = parseFloat(bp_p.z);
          for (p = 0; p < 2; p++) {
            var item_v = center(x1, y1, z1, x2, y2, z2, 5, p, 0);
            geometry.vertices.push(
              new THREE.Vector3(item_v.x, item_v.y, item_v.z)
            );
          }
        }
        if (geometry.vertices.length > 17) {
          geometry.faces.push(new THREE.Face3(7, 1, 2));
          geometry.faces.push(new THREE.Face3(7, 2, 10));
          geometry.faces.push(new THREE.Face3(9, 2, 3));
          geometry.faces.push(new THREE.Face3(9, 2, 3));
          geometry.faces.push(new THREE.Face3(9, 3, 12));
          geometry.faces.push(new THREE.Face3(11, 3, 4));
          geometry.faces.push(new THREE.Face3(11, 4, 14));
          geometry.faces.push(new THREE.Face3(13, 4, 5));
          geometry.faces.push(new THREE.Face3(13, 5, 16));
          geometry.faces.push(new THREE.Face3(15, 5, 0));
          geometry.faces.push(new THREE.Face3(15, 0, 6));
          geometry.faces.push(new THREE.Face3(17, 0, 1));
          geometry.faces.push(new THREE.Face3(17, 1, 8));
        } else {
          geometry.faces.push(new THREE.Face3(6, 1, 2));
          geometry.faces.push(new THREE.Face3(6, 2, 9));
          geometry.faces.push(new THREE.Face3(8, 2, 3));
          geometry.faces.push(new THREE.Face3(8, 3, 11));
          geometry.faces.push(new THREE.Face3(10, 3, 4));
          geometry.faces.push(new THREE.Face3(10, 4, 13));
          geometry.faces.push(new THREE.Face3(12, 4, 0));
          geometry.faces.push(new THREE.Face3(12, 0, 5));
          geometry.faces.push(new THREE.Face3(14, 0, 1));
          geometry.faces.push(new THREE.Face3(14, 1, 7));
        }

        var material = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          wireframe: true
        });

        material.opacity = 1;
        var mesh = new THREE.Mesh(geometry, material.clone());
        scene.add(mesh);
        hexasphere.tiles[i].mesh = mesh;
      }
      seenTiles = {};
      currentTiles = hexasphere.tiles.slice().splice(0, 12);
      currentTiles.forEach(function(item) {
        seenTiles[item.toString()] = 1;
        item.mesh.material.opacity = 1;
      });
    };
    createScene(30, 8, 1, 0x54fbe9, 1);

    var cameraAngle = -Math.PI;
    var cameraAnglex = 0.2;
    $(document).on("mousemove", "body", function(event) {
      var x = event.clientX;
      cameraAnglex = (x - width / 2) / width / 2;
    });

    var tick_pause = -1;
    var setup = function() {
      if (do_animate && tick_pause < 0) {
        tick();
        tick_pause = 2;
      }
      tick_pause--;
      requestAnimationFrame(setup);
    };
    var tick = function() {
      var rotateCameraBy = (Math.PI / 100) * cameraAnglex;
      cameraAngle += rotateCameraBy;
      camera.position.x = cameraDistance * Math.cos(cameraAngle);
      camera.position.y = Math.sin(cameraAngle) * 10;
      camera.position.z = cameraDistance * Math.sin(cameraAngle);
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    function onWindowResize() {
      camera.aspect =
        $("#container").innerWidth() / $("#container").innerHeight();
      camera.updateProjectionMatrix();
      renderer.setSize(
        $("#container").innerWidth(),
        $("#container").innerHeight()
      );
    }
    $(window).resize(onWindowResize);
    $("#container").append(renderer.domElement);
    setup();
  };
  bubbles_move_mouse = function() {
    var canvasBody = document.createElement("canvas"),
      w = $(window).width(),
      h = $(window).height();
    canvasBody.width = w;
    canvasBody.height = h;
    canvasBody.id = "bubble";
    $("body").append(canvasBody);
    var canvasBody = document.getElementById("bubble"),
      canvas = canvasBody.getContext("2d");
    var opts = {
        time_life: 300, //ms
        time_out: 0, //ms
        radius: 10,
        first_opacity: 0.5,
        interval_create: 5,
        lenght_create: 5,
        color: "rgba(31, 239, 217,opacity)"
      },
      mouse = {
        x: -500,
        y: -500
      },
      bubbles = [],
      bubble = function(x, y) {
        this.x = x;
        this.y = y;
        this.id = parseInt(Math.random() * x * y * 100);
        this.opacity = opts.first_opacity;
        this.time_life = opts.time_life;
        this.interval = opts.interval_create;
        this.color = opts.color;
        this.radius = opts.radius;
        this.start_death = false;
        this.show = function() {
          this.hide();
        };
        this.hide = function() {
          var item = this;
          setTimeout(function() {
            item.remove_it();
          }, this.time_life);
        };
        this.remove_it = function() {
          var it = this,
            id_t = 0;
          bubbles.forEach(function(item, i) {
            if (item.id == it.id) {
              id_t = i;
            }
          });
          bubbles.splice(id_t, 1);
        };
        this.drow = function() {
          this.radius -= opts.radius / (this.time_life / this.interval);
          if (this.radius < 0) this.radius = 0;
          this.opacity -= opts.first_opacity / (this.time_life / this.interval);
          var color_temp = this.color.replace("opacity", this.opacity);
          canvas.beginPath();
          canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          canvas.closePath();
          canvas.fillStyle = color_temp;
          canvas.fill();
        };
      };
    var item_create = false,
      clear_mouse;
    $("a,button,input").hover(
      function() {
        opts.color = "rgba(210, 255, 112,opacity)";
      },
      function() {
        opts.color = "rgba(31, 239, 217,opacity)";
      }
    );
    var tick_bubb = function() {
      canvas.clearRect(0, 0, w, h);
      if (item_create && !do_animate) {
        bubbles.push(new bubble(mouse.x, mouse.y));
        bubbles.forEach(function(item) {
          if (!item.start_death) {
            setTimeout(() => {
              item.show();
            }, opts.time_out);
            item.start_death = true;
          }
          item.drow();
        });
      }
    };
    setInterval(tick_bubb, opts.interval_create);
    $(document).on("mousemove", function(e) {
      clearTimeout(clear_mouse);
      item_create = true;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      clear_mouse = setTimeout(function() {
        item_create = false;
      }, 2000);
    });
    $(document).on("scroll", function() {
      scroll_top = $(this).scrollTop();
    });
  };
  hex_sphere();
  polugone_move_on_mouse();
  if ($(window).width() > 768) bubbles_move_mouse();
  if ($(".graph").length > 0) graph();
};
