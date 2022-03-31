window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    // draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    dots: '.dots'
  })
})