'use strict';

$(document).ready(function() {
  $('.draggable').draggable({
    revert: "invalid"
  });

  $('#dropArea, #dropArea2, #dropArea3').droppable({
    drop: function(event, ui) {
      let drag = $(ui.draggable).data('block');
      console.log(`current block ${drag}`);
      let last = $(this).children().last().data('block');
      console.log(`last ${last}`);
      if ((drag) > (last)) {
        $(ui.draggable).draggable('option', 'revert', true);
      } else {
        $(ui.draggable).appendTo($(this)).attr('style', 'position: relative');
      }
    }
  });
});


