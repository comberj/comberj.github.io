$(function () {

  $('#menu-button').on('click', (event) => {
    $('.contact-info-mobile').toggleClass('expanded');
  })

  var offset2 = $(document).height();
  var lineHF = offset2 - $('#bottommark').position().top;

  $(window).scroll(function () {
    var offset1 = $(document).height();
    var offset = $(window).scrollTop();
    var lineH = offset1 - $('#bottommark').position().top - offset;
    var lineHpart = lineHF / 10;

    $('span').html(lineH);
    if (lineH > lineHpart * 15) {
      $('#animation').attr('src', '../assets/scroll1.png');
    }
    if (lineH < lineHpart * 15 && lineH > lineHpart * 14) {
      $('#animation').attr('src', '../assets/scroll2.png');
    }
    if (lineH < lineHpart * 14 && lineH > lineHpart * 13) {
      $('#animation').attr('src', '../assets/scroll3.png');
    }
    if (lineH < lineHpart * 13 && lineH > lineHpart * 12) {
      $('#animation').attr('src', '../assets/scroll4.png');
    }
    if (lineH < lineHpart * 12 && lineH > lineHpart * 11) {
      $('#animation').attr('src', '../assets/scroll5.png');
    }
    if (lineH < lineHpart * 11 && lineH > lineHpart * 10) {
      $('#animation').attr('src', '../assets/scroll6.png');
    }
    if (lineH < lineHpart * 10 && lineH > lineHpart * 9) {
      $('#animation').attr('src', '../assets/scroll7.png');
    }
    if (lineH < lineHpart * 9 && lineH > lineHpart * 8) {
      $('#animation').attr('src', '../assets/scroll8.png');
    }
    if (lineH < lineHpart * 8 && lineH > lineHpart * 7) {
      $('#animation').attr('src', '../assets/scroll9.png');
    }
    if (lineH < lineHpart * 7 && lineH > lineHpart * 6) {
      $('#animation').attr('src', '../assets/scroll10.png');
    }
    if (lineH < lineHpart * 6 && lineH > lineHpart * 5) {
      $('#animation').attr('src', '../assets/scroll11.png');
    }
    if (lineH < lineHpart * 5 && lineH > lineHpart * 4) {
      $('#animation').attr('src', '../assets/scroll12.png');
    }
    if (lineH < lineHpart * 4 && lineH > lineHpart * 3) {
      $('#animation').attr('src', '../assets/scroll13.png');
    }
    if (lineH < lineHpart * 3 && lineH > lineHpart * 2) {
      $('#animation').attr('src', '../assets/scroll14.png');
    }
    if (lineH < lineHpart * 2 && lineH > lineHpart) {
      $('#animation').attr('src', '../assets/scroll14.png');
    }
    if (lineH < lineHpart) {
      $('#animation').attr('src', '../assets/scroll15.png');
    }
  });
});