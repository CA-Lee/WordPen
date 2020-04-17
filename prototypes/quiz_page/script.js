var correct_ans = "B";
$("#A, #B, #C, #D").click(function () {
  //alert($(this).attr('id'));

  //show wrong
  if ($(this).attr("id") != correct_ans) {
    //alert("wrong");
    $(this).addClass("wrong");
  } else {
    //alert("right");
  }

  //show right
  $("#" + correct_ans).addClass("right");
});