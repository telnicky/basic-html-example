$('.link').on({
  mouseover: function() {
  $(this).css({
    position: 'absolute',
    left:(Math.random()*200)+"px",
    top:(Math.random() * 200) + "px",
  });
  }
});

$(window.document).keydown(function(e) {
  var block = $('.block');
  switch(e.key) {
    case 'ArrowLeft':  // left
      block.css({ left: '-=10px' });
      break;
    case 'ArrowUp':  // up
      block.css({ top: '-=10px' });
      break;
    case 'ArrowRight':  // right
      block.css({ left: '+=10px' });
      break;
    case 'ArrowDown':  // down
      block.css({ top: '+=10px' });
      break;
  }
});
