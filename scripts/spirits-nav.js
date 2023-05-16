// var menu = ['Gin', 'Vodka', 'Liqueur', 'Single Malt Whisky', 'Brandy']
var swiper = new Swiper('.our-spirits', {
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<span class="' + className + '">' + (menu[index]) + '</span>';
  //     },
  // },
  spaceBetween: 30,
  loop: true,
  // effect: 'fade',
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
