console.clear();

$(".pop-1").click(function () {
  $(".p-1").addClass("active");
  $(".b-1").addClass("active");
});
$(".pop-2").click(function () {
  $(".p-2").addClass("active");
  $(".b-2").addClass("active");
});
$(".pop-3").click(function () {
  $(".p-3").addClass("active");
  $(".b-3").addClass("active");
});
$(".pop-4").click(function () {
  $(".p-4").addClass("active");
  $(".b-4").addClass("active");
});

$(".p-close-btn").click(function () {
  $(".p-1").removeClass("active");
  $(".p-2").removeClass("active");
  $(".p-3").removeClass("active");
  $(".p-4").removeClass("active");
  $(".b-1").removeClass("active");
  $(".b-2").removeClass("active");
  $(".b-3").removeClass("active");
  $(".b-4").removeClass("active");
});
