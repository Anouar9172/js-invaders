funtion setup() {
  let canvas = document.getElementById('invaders-canvas');
  let context = canvas.getContext('2d');

  context.font = '48px serif';
  context.fillText("Space-invaders", 10 ,50)
}
windown.addEvent.listener('load', setup)
