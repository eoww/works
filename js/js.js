console.clear();

$("#confirm").click(function () {
  modalClose();
  //컨펌 이벤트 처리
});
$(".pop-1").click(function () {
  $(".p-1").css("display", "block").hide().fadeIn();
});
$(".pop-2").click(function () {
  $(".p-2").css("display", "block").hide().fadeIn();
});
$(".pop-3").click(function () {
  $(".p-3").css("display", "block").hide().fadeIn();
});
$(".pop-4").click(function () {
  $(".p-4").css("display", "block").hide().fadeIn();
});
$(".p-close-btn").click(function () {
  modalClose();
});
function modalClose() {
  $(".popup-wrap").fadeOut();
}
