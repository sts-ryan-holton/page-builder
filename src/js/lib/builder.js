$(function() {
  'use strict';


  // Expand control
  if ( $('.js_expand').length ) {
    $('.js_expand').click(function() {
      $('.js_left-menu').toggleClass('left-menu-hide');
      $('.js_right-menu').toggleClass('right-menu-hide');
      $('.js_content-area').toggleClass('content-area-wide');
      $('.js_top-nav').find('.button').toggleClass('is-small');
      $('.js_top-navbar').toggleClass('top-navbar-reduced')
      $('#stage').toggleClass('stage-preview');
      $('#stage').find('*').attr('contenteditable', false);
    });
  }


  // Resize controls
  $('[data-resize]').each(function() {
    $(this).click(function() {
      $('.js_pb_stage').css('max-width', $(this).attr('data-resize'));
      if ($(window).width() <= 1819) {
        if ( $(this).attr('data-resize') == "768px" ) {
          $('.js_pb_stage').removeClass('js_pb_stage_padding');
        } else if ( $(this).attr('data-resize') == "575px" ) {
          $('.js_pb_stage').removeClass('js_pb_stage_padding');
        } else {
          $('.js_pb_stage').addClass('js_pb_stage_padding');
        }
      }
    });
  });


  // Export HTML functionaliy
  var stageMarkup;
  $('[data-save-modal]').click(function() {
    stageMarkup = $('#stage').html();
    $('.js_markup-textarea').text(stageMarkup);
  });

  $('.js_clean-html').click(function() {
    $('#stage').clone().appendTo('#stage-ghost');
    $('#stage-ghost *').removeAttr('contenteditable style');
    $('#stage-ghost *').removeClass(function (index, className) {
      return (className.match (/(^|\s)ui-\S+/g) || []).join(' ');
    });
    $('#stage-ghost *').removeClass(function (index, className) {
      return (className.match (/(^|\s)js_\S+/g) || []).join(' ');
    });
    stageMarkup = $('#stage-ghost #stage').html();
    $('.js_markup-textarea').text(stageMarkup);
    $('#stage-ghost #stage').remove();
  });

  var starterHtml = [
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="description" content="Your Page Description"><meta name="keywords" content="keyword 1, keyword 2"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><title>Your Page Title</title></head><body>',
    '</body></html>'
  ];

  if ( $('.js_starter-html').length ) {
    $(".js_starter-html").change(function() {
      if ( $(this).is(':checked') ) {
        $('.js_markup-textarea').text(starterHtml[0] + stageMarkup + starterHtml[1]);
      } else {
        $('.js_markup-textarea').text(stageMarkup);
      }
    });
  }


  // Reset control
  $('#reset-page').click(function() {
    $('#stage').html('');
  });


  // Set stage height
  if ( $('#stage').length ) {
    var stageHeight = $('body').height();
    $('#stage').css('max-height', stageHeight - $('.js_top-navbar').height());
  }


  // Widgets
  $('[data-widget]').each(function () {
    $(this).click(function() {
      $('.pb_stage_drag').remove();


      // Heading widget
      if ( $(this).attr('data-widget') === 'heading' ) {
        $('#stage').append('<h2>Your H1 Heading</h2>');
      }


      // Button widget
      if ( $(this).attr('data-widget') === 'button' ) {
        $('#stage').append('<button class="button">Button</button>');
      }


      // Hero widget
      if ( $(this).attr('data-widget') === 'hero' ) {
        $('#stage').append('<section class="hero is-info is-medium"><div class="hero-body"><div class="container"><h1 class="title"> Primary bold title</h1><h2 class="subtitle">Primary bold subtitle</h2></div></div></section>');
      }


      // Image widget
      if ( $(this).attr('data-widget') === 'image' ) {
        $('#stage').append('<img src="https://via.placeholder.com/1150x250" alt="Placeholder image" />');
      }


      // Box widget
      if ( $(this).attr('data-widget') === 'box' ) {
        $('#stage').append('<div class="box">Box component</div>');
      }


      // Horizontal Rule widget
      if ( $(this).attr('data-widget') === 'horizontal-rule' ) {
        $('#stage').append('<hr>');
      }


      // Tag widget
      if ( $(this).attr('data-widget') === 'tag' ) {
        $('#stage').append('<span class="tag is-primary">Tag</span>');
      }


      // Message widget
      if ( $(this).attr('data-widget') === 'message' ) {
        $('#stage').append('<article class="message is-info"><div class="message-header"><p>Info</p><button class="delete" aria-label="delete"></button></div><div class="message-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor.</div></article>')
      }


      // Make content editable
      $('#stage').find('*').attr('contenteditable', true);
      $('#stage *').hover(
        function() {
          $(this).parent().attr('contenteditable', false);
        }, function() {
          $(this).parent().attr('contenteditable', true);
        }
      );


      // Allow draggable components on stage
      $('#stage *').draggable({
        helper: 'clone',
        containment: '#stage',
        cancel: false
      });


      // Allow draggable components to drop on components
      $('#stage *, #stage').droppable({
        drop:function(event, ui) {
          ui.draggable.detach().appendTo($(this));
        }
      });


      // Show/Hide stage
      if ( $('#stage').find('*').length ) {
        $('#stage').addClass('stage-shown');
      } else {
        $('#stage').removeClass('stage-shown');
      }

      $('#stage *').hover(
        function() {
          $(this).css('outline', '.15rem solid red');
        }, function() {
          $(this).css('outline', 'none');
        }
      );


      // Element type
      $('#stage *').click(function() {
        var markupType = $(this).prop("tagName");
        var markupTypeClasses = $(this).attr('class');
        $('#widget-type').text(markupType);

        // Property: ID input
        $('#property-id-input').change(function() {
          $('.js__widget-selected').attr('id', $(this).val());
        });

        // Property: Class input
        $('#property-class-input').change(function() {
          $('.js__widget-selected').attr('class', $(this).val());
        });

        // Property: <select> element
        var selectOptions = [
          '<option value="h1" data-remove="true">H1 Heading</option><option value="h2" data-remove="true">H2 Heading</option><option value="h3" data-remove="true">H3 Heading</option><option value="h4" data-remove="true">H4 Heading</option><option value="h5" data-remove="true">H5 Heading</option><option value="h6" data-remove="true">H6 Heading</option>'
        ];

        if (markupType == 'H1' || markupType == 'H2' || markupType == 'H3' || markupType == 'H4' || markupType == 'H5' || markupType == 'H6') {
          $('.field-headings').removeClass('is-hidden');
          $('.js_select-options').find('[data-remove="true"]').remove();
          $('.js_select-options').append(selectOptions[0]);
          $('.js_select-options').change(function() {
            if ( $(this).val() == 'h1' ) {
              $('.js__widget-selected').replaceWith(function () {
                return "<h1 contenteditable='true'>" + $(this).html() + "</h1>";
              });
            } else if ( $(this).val() == 'h2' ) {
              $('.js__widget-selected').replaceWith(function () {
                return "<h2 contenteditable='true'>" + $(this).html() + "</h2>";
              });
            } else if ( $(this).val() == 'h3' ) {
              $('.js__widget-selected').replaceWith(function () {
                return "<h3 contenteditable='true'>" + $(this).html() + "</h3>";
              });
            } else if ( $(this).val() == 'h4' ) {
              $('.js__widget-selected').replaceWith(function () {
                return "<h4 contenteditable='true'>" + $(this).html() + "</h4>";
              });
            } else if ( $(this).val() == 'h5' ) {
              $('.js__widget-selected').replaceWith(function () {
                return "<h5 contenteditable='true'>" + $(this).html() + "</h5>";
              });
            } else if ( $(this).val() == 'h6' ) {
              $('.js__widget-selected').replaceWith(function () {
                return "<h6 contenteditable='true'>" + $(this).html() + "</h6>";
              });
            }
            $("[data-widget='refresh']").trigger("click");
          });

        }

        // Delete widget
        if ( $(this).hasClass('js__widget-selected') && markupType != '' ) {
          $('.field-remove').removeClass('is-hidden');
          $('.js_remove-widget').click(function() {
            swal({
              title: "Are you sure?",
              text: "Once deleted, you will not be able to recover this imaginary file!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                $('.js__widget-selected').remove();
              }
            });
          });
        }

      });

      $('#stage *').click(function(event) {
        $('#stage *').removeClass('js__widget-selected');
        $(this).addClass('js__widget-selected');
        event.stopPropagation();

        // Fetch Properties
        if ( $(this).hasClass('js__widget-selected') ) {

          // Fetch: ID input
          $('#property-id-input').val( $(this).attr('id') );

          // Fetch: Class input
          $('#property-class-input').val( $(this).attr('class') );

        }
      });

      $(document).mouseup(function(e) {
        var container = $('#stage *, .js_right-menu, .swal-modal');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.removeClass('js__widget-selected');
          $('#widget-type').text('n/a');
          $('.js_properties').find('input, select').val('');
          $('.js_select-options').find('[data-remove="true"]').remove();
          $('.field-headings, .field-remove').addClass('is-hidden');
        }
      });

    });
  });


  // Modal functionality
  $('[data-modal]').click(function() {
    $('body').find($(this).attr('data-modal')).toggleClass('is-active');
  });

  if ( $('.js_modal-bg, .js_modal-close').length ) {
    $('.js_modal-bg, .js_modal-close').click(function() {
      $(this).closest('.modal').removeClass('is-active');
      $(this).closest('.modal').find('.js_starter-html').prop('checked', false);
    });
  }

});
