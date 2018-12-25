$(function() {
  'use strict'

  // Expand control
  $('.js_expand').click(function() {
    $('.js_left-menu').toggleClass('left-menu-hide');
    $('.js_content-area').toggleClass('content-area-wide');
    $('.js_top-nav').find('.button').toggleClass('is-small');
    $('.js_top-navbar').toggleClass('top-navbar-reduced')
  });

  // Resize controls
  $('[data-resize]').each(function () {
    $(this).click(function() {
      $('.js_pb_stage').css('max-width', $(this).attr('data-resize'));
    });
  });

  // Modal functionality
  $('[data-modal]').click(function() {
    $('body').find($(this).attr('data-modal')).toggleClass('is-active');
  });

  $('.js_modal-bg, .js_modal-close').click(function() {
    $(this).closest('.modal').removeClass('is-active')
  });

});
