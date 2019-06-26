$(document).ready(function () {
  custom();
  sliders();
  animate();
})
custom = function () {
  
  short_text = function () {
    $('.cases .item').each(function () {
      var text_temp = $(this).find('p.two').text(),
        temp = ($(this).index() + 1) % 12
      console.log($(this).index())
      if (temp == 2 || temp == 8 || temp == 10) {
        sliced = text_temp.slice(0, 170)
      } else {
        sliced = text_temp.slice(0, 80)
      }

      if (sliced.length < text_temp.length) {
        sliced += '...';
      }
      $(this).find('p.two').text(sliced)
    })


    $('.list_news_sub .item').each(function () {
      var text_temp = $(this).find('p.two').text(),
        temp = ($(this).index() + 1) % 12
      console.log($(this).index())
      if (temp == 1 || temp == 7 || temp == 9) {
        sliced = text_temp.slice(0, 200)
      } else {
        sliced = text_temp.slice(0, 110)
      }

      if (sliced.length < text_temp.length) {
        sliced += '...';
      }
      $(this).find('p.two').text(sliced)
    })
    $('.read_yet .list .item').each(function () {
      var text_temp = $(this).find('p.two').text();
      sliced = text_temp.slice(0, 110)
      if (sliced.length < text_temp.length) {
        sliced += '...';
      }
      $(this).find('p.two').text(sliced)
    })
    $('.list_news .list .item').each(function () {
      var text_temp = $(this).find('p.two').text(),
        temp = ($(this).index() + 1) % 12
      console.log($(this).index())
      if (temp == 1 || temp == 7 || temp == 9) {
        sliced = text_temp.slice(0, 200)
      } else {
        sliced = text_temp.slice(0, 110)
      }

      if (sliced.length < text_temp.length) {
        sliced += '...';
      }
      $(this).find('p.two').text(sliced)
    })
  }
  drop_down_init = function () {
    $('.dropdown-wrapper .block').click(function () {
      if ($(this).parent().hasClass('active')) {
        $('.dropdown-wrapper ').removeClass('active')
        $(this).parent().find('.list').height(31)
        setTimeout(function () {
          $('.dropdown-wrapper .list').addClass('hide')
        }, 300)
      } else {
        var Height_temp = 0;
        $(this).parent().find('.list li a').each(function () {
          temp = $(this).height()
          if (!$(this).parent().hasClass('hide'))
            Height_temp += temp + 12;
        })
        $(this).parent().addClass('active')
        $(this).parent().find('.list').height(Height_temp).removeClass('hide')
      }
    })
    $('.dropdown-wrapper .list li').click(function () {
      $('.dropdown-wrapper ').removeClass('active')
      $(this).parent().height(43)
      setTimeout(function () {
        $('.dropdown-wrapper .list').addClass('hide')
      }, 300)
      $('.dropdown-wrapper .list li').removeClass('hide')
      $(this).parent().parent().find('.block .selected').html($(this).html());
      $(this).addClass('hide')
    })
  }
  forms = function () {
    $('input[type="file"]').change(function () {
      var value = $("input[type='file']").val(),
        size = this.files[0].size,
        pos = -1,
        index = 0;
      while ((pos = value.indexOf('\\', pos + 1)) != -1) {
        index = pos;
      }
      value = value.slice(index + 1, value.length)
      text = value + '<span class="size">' + Math.round((size / 1024 / 1024 * 1000)) / 1000 + 'mB</span>'

      $(this).parent().find('label').html(text);
      $(this).parent().addClass('load')
    });
    $(document).on('submit', '.contacts form', function (e) {
      e.preventDefault()
      var name = $(this).find('input[name=name]'),
        phone = $(this).find('input[name=phone]'),
        mail = $(this).find('input[name=mail]'),
        text = $(this).find('textarea[name=text]'),
        file = $(this).find('input[name=file]'),
        pp = $(this).find('input[name=pp]:checked').length,
        error = 0;
      $(this).find('input,textarea').parent().removeClass('error')

      if (mail.val() == "" || !mail_right(mail.val())) {
        error++
        mail.parent().addClass('error')
      }
      if (name.val() == "") {
        error++
        name.parent().addClass('error')
      }
      if (phone.val() == "") {
        error++
        phone.parent().addClass('error')
      }
      if (text.val() == "") {
        error++
        text.parent().addClass('error')
      }
      if (pp == 0) {
        error++
        $(this).find('input[name=pp]').parent().addClass('error')
      }
      if (error == 0) {

      } else {
        return false;
      }
    })
  }
  function mail_right(email) {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  }
  drop_down_init();
  short_text();
  forms();
  
  if (('input[name=phone]').length > 0) {
    $('input[name=phone]').mask("+7 (999) 99-99-999");
  }
};
sliders = function () {
  sliders_init = function () {
    $('.brends .slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      infinite: true,
      dots: true,
      fade: true,
    })
    $('.project-slider .slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      infinite: true,
      fade: true,
    })
  }
  sliders_init_callback = function () {
    $('.brends .slider').on('init', function () {
      var i = 0;
      $('.brends .slider .slick-slide').each(function () {
        item = $(this).find('.item .text p.one')
        if (!$(this).hasClass('slick-clone')) {
          $('.brends .slider').find('.slick-dots button').eq(i).html(item.text())
          i++;
        }
      })
    })

  }
  sliders_post = function () {
    $('.brends .slider,.project-slider .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {

      $('.brends .slider,.project-slider .slider').find('.item').eq(currentSlide).addClass('current');
    })
    $('.brends .slider,.project-slider .slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $('.brends .slider,.project-slider .slider').find('.item').removeClass('current');
    })
  }
  sliders_init_callback();
  sliders_init();
  sliders_post();
}
animate = function () {
  graph = function(){
    $('#graph').width($('#graph').parent().width())
    var canvasBody = document.createElement('canvas');

    canvasBody.width = $('.graph').width();
    canvasBody.height = (30+$('.graph ul.rows').height());
    console.log(30+$('.graph ul.rows').height())
    $('.graph').append(canvasBody)
    $('.graph canvas').attr('id','graph')
    var canvasBody = document.getElementById('graph'),
    canvas = canvasBody.getContext("2d"),
    data = [
      [0,50],
      [1,125],
      [2,700],
      [3,1600],
      [4,600],
      [5,100],
      [6,2000],
      [7,200],
      [8,800],
    ],
    max_value = 2000,
    min_value = 0,
    

    w = $('#graph').width(),
    h = $('#graph').height(),
    x_c=-100,y_c=-100,
    opts = {
        object:{
          radius_big: 15,
          opacity_big: 0.2,
          radius_small: 4.5,
          stroke_width: 0.5,
          color: '#45e3f1',
          color_big: 'rgba(69, 227, 241,0.2)',
          step: 1,
          background: 'linear-gradient(to top,  0%, rgba(69, 227, 241, 0) 1%,  100%)',
        },
        canvas:{
            bgc: "#fff",
        }
    },
    correct_left = 100,
    correct_bot = opts.object.radius_big,

    particles = [],
    particle = function(x,y){
      this.x = x;
      this.y = y;
      this.draw_small = function(){
        canvas.beginPath();
        canvas.arc(this.x,this.y,opts.object.radius_small,0,Math.PI*2)
        canvas.closePath();
        canvas.fillStyle = opts.object.color;
        canvas.fill();
      }
      this.draw_big = function(){
        canvas.beginPath();
        canvas.arc(this.x,this.y,opts.object.radius_big,0,Math.PI*2)
        canvas.closePath();
        canvas.fillStyle = opts.object.color_big;
        canvas.fill();
      }
    },
    draw_line = function(x1,y1,x2,y2){
      canvas.beginPath();
      canvas.moveTo(x1, y1);
      canvas.lineTo(x2, y2);
      canvas.closePath();
      canvas.strokeStyle = opts.object.color;
      canvas.lineWidth = opts.object.stroke_width;
      canvas.stroke();
    },
    gradient = canvas.createLinearGradient(w/2, 0, w/2, h),
    draw_polugone = function(x1,y1,x2,y2){
      canvas.beginPath();
      canvas.moveTo(x1, y1);
      canvas.lineTo(x2, y2);
      canvas.lineTo(x2, h);
      canvas.lineTo(x1, h);
      canvas.closePath();
      
      gradient.addColorStop(1, "rgba(69, 227, 241, 0)")
      gradient.addColorStop(0, "rgba(31, 239, 217, 0.4)")
      canvas.fillStyle = gradient;
      canvas.fill();
      
    }
    function setup(){
      for(i=0;i<data.length;i++){
          var x = data[i][0]*((w-correct_left)/data.length)+correct_left,
          y = h-20-data[i][1]*((h-correct_bot*2-20)/(max_value-min_value))-correct_bot;
          particles.push(new particle(x,y));
      }
      window.requestAnimationFrame(loop);
    };
    function loop(){
        canvas.fillStyle = opts.canvas.bgc;
        canvas.fillRect(0,0,w,h);
        for(i=0;i<particles.length;i++){
            particles[i].draw_big()
            particles[i].draw_small();
            //console.log(particles[i])
            //particles[i].move()
        }
        for(i=1;i<particles.length;i++){
          draw_line(
            particles[i].x,particles[i].y,
            particles[i-1].x,particles[i-1].y
            )
          draw_polugone(
            particles[i].x,particles[i].y,
            particles[i-1].x,particles[i-1].y
            )
        }
        for(i=0;i<particles.length;i++){
          draw_line(
            particles[i].x,particles[i].y,
            particles[i].x,h
            )
        }
        window.requestAnimationFrame(loop)
    };
    $(document).on('mousemove','canvas',function(e){
      x_c = e.clientX - $(this).offset().left 
      y_c = e.clientY - $(this).offset().top+ $(document).scrollTop()
      console.log(x_c,y_c)
    })
    setup();
  }
  paralax_polygon = function () {
    $('.figure').each(function () {
      speed = parseInt(Math.random() * 25 + 45)
      $(this).attr('start-scroll', 'null')
      $(this).attr('data-speed', speed)
    })
    $(document).on('scroll', function () {
      $('.figure').each(function () {
        if ($(this).offset().top < $(document).scrollTop() + $(window).height() && $(this).offset().top + $(this).height() > $(document).scrollTop()) {
          if ($(this).attr('start-scroll') == 'null') {
            $(this).attr('start-scroll', $(document).scrollTop())
            $(this).attr('dirtection', Math.random() > 0.5 ? -1 : 1)

          }
          var top = ($(this).data('speed') / 100 * ($(document).scrollTop() - $(this).attr('start-scroll')))
          $(this).css('transform', 'translate(0,' + top + 'px) rotate(' + (180 * top / 5000) * $(this).attr('dirtection') + 'deg)')
          console.log(top)
        }
      })
    })
  }
  hex_sphere = function () {
    var width = $('#container').innerWidth();
    var height = $('#container').innerHeight();

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xf5f5f5);
    var cameraDistance = 65;
    var camera = new THREE.PerspectiveCamera(cameraDistance, width / height, 1, 200);
    camera.position.z = -cameraDistance;

    var scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xf5f5f5, cameraDistance * .4, cameraDistance * 1.5);

    var projectionCanvas = document.createElement('canvas');

    projectionCanvas.width = width;
    projectionCanvas.height = height;

    var seenTiles = {};
    var currentTiles = [];

    var createScene = function (radius, divisions, tileSize, color, opacity) {
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
      var hexasphere = new Hexasphere(radius, divisions, tileSize);
      var material_sphere = new THREE.MeshBasicMaterial({ color: color })
      var geometry_sphere = new THREE.SphereBufferGeometry(0.2, 4, 4)
      for (var i = 0; i < hexasphere.tiles.length; i++) {
        var t = hexasphere.tiles[i];
        var geometry = new THREE.Geometry();
        for (var j = 0; j < t.boundary.length; j++) {
          var bp = t.boundary[j];
          geometry.vertices.push(new THREE.Vector3(bp.x, bp.y, bp.z));
          var obj = new THREE.Mesh(geometry_sphere, material_sphere);
          obj.position.copy(new THREE.Vector3(bp.x, bp.y, bp.z));
          scene.add(obj)
        }
        center = function (x1, y1, z1, x2, y2, z2, req, d, l) {
          var xt, yt, zt;
          xt = (x1 + x2) / 2
          yt = (y1 + y2) / 2
          zt = (z1 + z2) / 2;
          if (req > 0) {
            var item_t
            if (d != 0) {
              item_t = center(xt, yt, zt, x2, y2, z2, req - 1, d, l + 1)
            } else {
              item_t = center(x1, y1, z1, xt, yt, zt, req - 1, d, l + 1)
            }
            xt = item_t.x
            yt = item_t.y
            zt = item_t.z
          }
          return {
            x: xt,
            y: yt,
            z: zt
          }
        }
        for (var j = 0; j < t.boundary.length; j++) {
          var bp, bp_p;
          bp = t.boundary[j]
          bp_p = j < t.boundary.length - 1 ? t.boundary[j + 1] : t.boundary[0];
          var x1, y1, z1, x2, y2, z2;
          x1 = parseFloat(bp.x)
          y1 = parseFloat(bp.y)
          z1 = parseFloat(bp.z)
          x2 = parseFloat(bp_p.x)
          y2 = parseFloat(bp_p.y)
          z2 = parseFloat(bp_p.z)
          for (p = 0; p < 2; p++) {
            var item_v = center(x1, y1, z1, x2, y2, z2, 5, p, 0);
            geometry.vertices.push(new THREE.Vector3(item_v.x, item_v.y, item_v.z));
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

        var material = new THREE.MeshBasicMaterial({ color: color, transparent: true, wireframe: true })

        material.opacity = 0;
        var mesh = new THREE.Mesh(geometry, material.clone());
        scene.add(mesh);
        hexasphere.tiles[i].mesh = mesh;
      }
      seenTiles = {};
      currentTiles = hexasphere.tiles.slice().splice(0, 12);
      currentTiles.forEach(function (item) {
        seenTiles[item.toString()] = opacity;
        item.mesh.material.opacity = opacity;
      });
    };
    createScene(30, 8, 1, 0x54fbe9, 1);

    var cameraAngle = -Math.PI;
    var cameraAnglex = 0.2;
    $(document).on('mousemove', 'body', function (event) {
      var x = event.clientX
      cameraAnglex = (x - width / 2) / width / 2
    })
    var setup = function () {
      requestAnimationFrame(tick);
    }
    var tick = function () {
      var rotateCameraBy = Math.PI / 100 * cameraAnglex;
      cameraAngle += rotateCameraBy;

      camera.position.x = cameraDistance * Math.cos(cameraAngle);
      camera.position.y = Math.sin(cameraAngle) * 10;
      camera.position.z = cameraDistance * Math.sin(cameraAngle);
      camera.lookAt(scene.position);
      renderer.render(scene, camera);


      var nextTiles = [];

      currentTiles.forEach(function (item) {
        item.neighbors.forEach(function (neighbor) {
          if (!seenTiles[neighbor.toString()]) {
            neighbor.mesh.material.opacity = 1;
            nextTiles.push(neighbor);
            seenTiles[neighbor] = 1;
          }
        });
      });
      currentTiles = nextTiles;
      requestAnimationFrame(tick);

    }
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    $(window).resize(onWindowResize)
    $("#container").append(renderer.domElement);
    setup()
  };
  hex_sphere();
  graph();
  //paralax_polygon()
}

