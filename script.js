var Left = -52.4;
var Left2 = Left + 124.8;
document.addEventListener("keydown", function(event) {
  if(event.code == "ArrowLeft") {
    Left = Left - 2;
    Left2 = Left2 - 2;
    if(Left <= -124.8)
      Left += 249.6;
    if(Left2 <= -124.8)
      Left2 += 249.6;
    let LEFT = Left + "vmin";
    let LEFT2 = Left2 + "vmin";
    $('.globe-1').css('left',LEFT);
    $('.globe-2').css('left',LEFT2);
  }
  if(event.code == "ArrowRight") {
    Left = Left + 2;
    Left2 = Left2 + 2;
    if(Left >= 62.4)
      Left -= 249.6;
    if(Left2 >= 62.4)
      Left2 -= 249.6;
    let LEFT = Left + "vmin";
    let LEFT2 = Left2 + "vmin";
    $('.globe-1').css('left',LEFT);
    $('.globe-2').css('left',LEFT2);
  }
})