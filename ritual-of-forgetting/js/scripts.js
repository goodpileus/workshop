setInterval( function() {
  var seconds = new Date().getSeconds();
  $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);

  
  if (seconds <= 10){
    $("#ritual").html('as i sit, in thrall');
  } else if (seconds <= 20){
    $("#ritual").html('to the light of this screen<br> and my ritual of forgetting,');
  } else if (seconds <= 30){
    $("#ritual").html('comforted by the rhythm of my own echoes,<br> hollowed by their diminishing fidelity,');
  } else if (seconds <= 40){
    $("#ritual").html('when the other light, from the star overhead —<br> the one that gives me my earthly shadow —');
  } else if (seconds <= 50){
    $("#ritual").html('commands my attention with infernal energy<br> and i remember');
  } else if (seconds <= 60){
    $("#ritual").html('the flowers on my windowsill are turning to dust');
  }

  if (seconds = 10){
    
  }

},1000);
