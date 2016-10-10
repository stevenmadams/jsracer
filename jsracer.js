var pad1 = 0;
var pad2 = 0;
var winning = false;
var currentkey1 = false;
var currentkey2;

$('body').keydown(function(e){
  if(e.key == 'p' && winning == false){
    currentkey1 = true;
  }

  if(e.key == 'o' && winning == false && currentkey1 == true){
    if(pad1 < ($(window).width()-100)){
      pad1 += 50;
    }
    console.log(pad1);
    $('#car1').css('padding-left', pad1+'px');
    checkWin('Red', pad1);
    currentkey1 = false;
  }

  if(e.key == 'w' && winning == false){
    currentkey2 = true;
  }
  if(e.key == 'q' && winning == false){
    if(pad2 <= ($(window).width()-100)){
      pad2 += 50;
    }
    $('#car2').css('padding-left', pad2+'px');
    checkWin('Blue', pad2);
    currentkey2 = false;
  }

});

checkWin = function(winner, pad){
  if (pad >= ($(window).width()-100)){
    $('body').keydown(function(e){
      if(e.key == 'p'){};
      if(e.key == 'q'){};
    });
    console.log("Winner " + winner);
    // var $h1 = $('<h1>');
    $('#winner').text('The winner is '+ winner);
    winning = true;
  }

};
