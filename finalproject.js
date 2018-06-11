var db = firebase.database();
//var s;
var prevCalc = [];

document.getElementById('showSaved').addEventListener('click', function() {
  db.ref('calcRes').set(display.value);
  prevCalc.push(display.value);
  document.getElementById('calc_box').innerHTML=prevCalc;
});

document.getElementById('showArray').addEventListener('click', function() {
var myArray = [[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],[0, 20, 40, 60, 80, 100]];
for (var i = 0; i<myArray.length; i++) {
  var array = myArray[i];
  for (var j = 0; j<array.length; j++) {
    alert('array[' + i + '][' + j + '] = ' + array[j]);
  }
}
});

var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
document.getElementById('myCanvas').style.display = 'none';
ctx.moveTo(200, 0);
ctx.lineTo(200, 400);
ctx.stroke();

ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();

ctx.beginPath();
ctx.arc(265, 35, 25, 0, 2*Math.PI);
ctx.fillStyle = 'blue';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(50, 350);
ctx.lineTo(150, 350);
ctx.fillStyle = 'red';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(15, 15, 65, 65);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(100, 150, 150, 25);
ctx.fillStyle = 'green';
ctx.fill();
ctx.closePath();

document.getElementById('showCanv').addEventListener('click', function() {
  document.getElementById('myCanvas').style.display = 'block';
});
