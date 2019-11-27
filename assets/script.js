$(document).ready(function() {
  var enabled = false;
  var secrettext = "";
  var startertext = "Tell me please using power from above to reveal to us answers to questions"
  var startertextindex = 0

  $('input').keydown(function(e) {
      if (e.which == 219) {
      enabled = !enabled;
      e.preventDefault();
    }
    if (enabled && e.which == 8) {
      startertextindex -= 1;
      secrettext = secrettext.substring(0, -1);
    }
    /*
    if (e.which == 221) {
      e.preventDefault();
      window.alert("The secret text is: " + secrettext);
    }
    */
  });

  $('#getsecret').click(function() {
      if (secrettext.length == 0) {
        window.alert("Your magic friend says: I can't reveal that information to you. Ask again?");
      } else {
        window.alert("Your magic friend says: " + secrettext);
      }
  });

  $('input').keypress(function(e) {
     if (enabled) {
      secrettext += String.fromCharCode(e.keyCode);
      this.value = this.value + startertext.charAt(startertextindex);
      startertextindex += 1;
      e.preventDefault();
     }
  });

});