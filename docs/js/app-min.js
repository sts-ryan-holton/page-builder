$(function(){"use strict";var t;$(".js_expand").length&&$(".js_expand").click(function(){$(".js_left-menu").toggleClass("left-menu-hide"),$(".js_right-menu").toggleClass("right-menu-hide"),$(".js_content-area").toggleClass("content-area-wide"),$(".js_top-nav").find(".button").toggleClass("is-small"),$(".js_top-navbar").toggleClass("top-navbar-reduced"),$("#stage").toggleClass("stage-preview"),$("#stage").find("*").attr("contenteditable",!1)}),$("[data-resize]").each(function(){$(this).click(function(){$(".js_pb_stage").css("max-width",$(this).attr("data-resize")),$(window).width()<=1819&&("768px"==$(this).attr("data-resize")?$(".js_pb_stage").removeClass("js_pb_stage_padding"):"575px"==$(this).attr("data-resize")?$(".js_pb_stage").removeClass("js_pb_stage_padding"):$(".js_pb_stage").addClass("js_pb_stage_padding"))})}),$("[data-save-modal]").click(function(){t=$("#stage").html(),$(".js_markup-textarea").text(t)}),$(".js_clean-html").click(function(){$("#stage").clone().appendTo("#stage-ghost"),$("#stage-ghost *").removeAttr("contenteditable style"),$("#stage-ghost *").removeClass(function(t,e){return(e.match(/(^|\s)ui-\S+/g)||[]).join(" ")}),$("#stage-ghost *").removeClass(function(t,e){return(e.match(/(^|\s)js_\S+/g)||[]).join(" ")}),t=$("#stage-ghost #stage").html(),$(".js_markup-textarea").text(t),$("#stage-ghost #stage").remove()});var e=['<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="description" content="Your Page Description"><meta name="keywords" content="keyword 1, keyword 2"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><title>Your Page Title</title></head><body>',"</body></html>"];if($(".js_starter-html").length&&$(".js_starter-html").change(function(){$(this).is(":checked")?$(".js_markup-textarea").text(e[0]+t+e[1]):$(".js_markup-textarea").text(t)}),$("#reset-page").click(function(){$("#stage").html("")}),$("#stage").length){var a=$("body").height();$("#stage").css("max-height",a-$(".js_top-navbar").height())}$("[data-widget]").each(function(){$(this).click(function(){$(".pb_stage_drag").remove(),"heading"===$(this).attr("data-widget")&&$("#stage").append("<h2>Your H1 Heading</h2>"),"button"===$(this).attr("data-widget")&&$("#stage").append('<button class="button">Button</button>'),"hero"===$(this).attr("data-widget")&&$("#stage").append('<section class="hero is-info is-medium"><div class="hero-body"><div class="container"><h1 class="title"> Primary bold title</h1><h2 class="subtitle">Primary bold subtitle</h2></div></div></section>'),"image"===$(this).attr("data-widget")&&$("#stage").append('<img src="https://via.placeholder.com/1150x250" alt="Placeholder image" />'),"box"===$(this).attr("data-widget")&&$("#stage").append('<div class="box">Box component</div>'),"horizontal-rule"===$(this).attr("data-widget")&&$("#stage").append("<hr>"),"tag"===$(this).attr("data-widget")&&$("#stage").append('<span class="tag is-primary">Tag</span>'),"message"===$(this).attr("data-widget")&&$("#stage").append('<article class="message is-info"><div class="message-header"><p>Info</p><button class="delete" aria-label="delete"></button></div><div class="message-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor.</div></article>'),$("#stage").find("*").attr("contenteditable",!0),$("#stage *").hover(function(){$(this).parent().attr("contenteditable",!1)},function(){$(this).parent().attr("contenteditable",!0)}),$("#stage *").draggable({helper:"clone",containment:"#stage",cancel:!1}),$("#stage *, #stage").droppable({drop:function(t,e){e.draggable.detach().appendTo($(this))}}),$("#stage").find("*").length?$("#stage").addClass("stage-shown"):$("#stage").removeClass("stage-shown"),$("#stage *").hover(function(){$(this).css("outline",".15rem solid red")},function(){$(this).css("outline","none")}),$("#stage *").click(function(){var t=$(this).prop("tagName");$("#widget-type").text(t),$("#property-id-input").change(function(){$(".js__widget-selected").attr("id",$(this).val())}),$("#property-class-input").change(function(){$(".js__widget-selected").attr("class",$(this).val())})}),$("#stage *").click(function(t){$("#stage *").removeClass("js__widget-selected"),$(this).addClass("js__widget-selected"),t.stopPropagation(),$(this).hasClass("js__widget-selected")&&($("#property-id-input").val($(this).attr("id")),$("#property-class-input").val($(this).attr("class")))}),$(document).mouseup(function(t){var e=$("#stage *, .js_right-menu");e.is(t.target)||0!==e.has(t.target).length||(e.removeClass("js__widget-selected"),$("#widget-type").text("n/a"),$(".js_properties").find("input, select").val(""))})})}),$("[data-modal]").click(function(){$("body").find($(this).attr("data-modal")).toggleClass("is-active")}),$(".js_modal-bg, .js_modal-close").length&&$(".js_modal-bg, .js_modal-close").click(function(){$(this).closest(".modal").removeClass("is-active"),$(this).closest(".modal").find(".js_starter-html").prop("checked",!1)})});