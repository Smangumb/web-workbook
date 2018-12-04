'use strict';

$(document).ready(function(){
  var turn = 'X';
  var count= 0;
  $('[data-cell]').on('click', function(){
    if($(this).text() === ''){
      $(this).text(turn);
      count++;
      checkForWin(count);
      if(turn === 'O'){
        turn = 'X';
      }else{
        turn = 'O';
      }
    }
  })
  
  function checkForWin(tie){
    if(tie === 9){
      // console
       $('#announce-winner').text(`Try again`);
    }
    if($('[data-cell="0"]').text() === turn &&
      $('[data-cell="1"]').text() === turn &&
      $('[data-cell="2"]').text() === turn){
      $('#announce-winner').text(`${turn} wins`);
    }
      
  }
})