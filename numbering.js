$(document).ready(function() {
  var index = 0;
  function timer() {
    setTimeout(function() {
      index += 1;
      $("#gamearea").text("" + index);
      timer();
    }, 1000);
  }

  $("#gamearea").click(function(event) {
    timer();
  });
});
