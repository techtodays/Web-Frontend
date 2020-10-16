$(function() {

    $('#submit_live_background_preview').on('click', function() {
      console.log("Background was changed");
      target = $("#live_background_preview_input").data("target");
      $(target).css('background-image', 'url(' + $("#live_background_preview_input").val() + ')');
    });
  
  });