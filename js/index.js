

// 轮播图
$(function () {
  $.ajax({
    url: 'http://127.0.0.1:9091/api/getlunbo',
    dataType: 'json',
    success: function (data) {
      $('.swiper-container .swiper-wrapper').html(template('slide', data));
      var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoplay: 1000,
        loop: true,
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        autoplayDisableOnInteraction: false
      })
    }
  })
})

//tab栏

$(function () {
  $.ajax({
    url: 'http://127.0.0.1:9091/api/gethometab/1',
    dataType: 'json',
    success: function (data) {
      // console.log(data);
      $('.tab-content').html(template('tabTemplate', data))

      var lis = $('.nav-tabs').find('li');
      // console.log(lis);  
      for (var i = 0; i < lis.length; i++) {
        $(lis[i]).on('click', function () {
          $(this).addClass('active');
          $(this).siblings().removeClass('active');
          $.ajax({
            url: 'http://127.0.0.1:9091/api/gethometab/' + $(this).attr('type'),
            dataType: 'json',
            success: function (data) {
              // console.log(data)
              $('.tab-content').html(template('tabTemplate', data))
            }
          })
        })
      }

    }
  })

})
//功能界面
$(function () {
  $('.gnList').on('click', function () {
    $('.mask').fadeIn(800);
    $('#gongNeng').fadeIn(800);
  })
  // 点击遮罩层，闭关功能界面
  $('.mask').on('click', function () {
    $('#gongNeng').fadeOut(800);
    $(this).fadeOut(800);
  })
})
