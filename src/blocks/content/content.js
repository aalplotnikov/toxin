let element = document.getElementsByClassName('content')[0];
element.style.height = element.offsetWidth / 1.73493975904 + "px";
window.onresize = function () {
  let element = document.getElementsByClassName('content')[0];
  element.style.height = element.offsetWidth / 1.73493975904 + "px";
}