
//let jugando = 60
function setup() {
  const canv =  createCanvas(windowWidth, windowHeight);
  canv.style('display', 'block');
  background(0);
  const newDrawingButton = createButton('New')
  newDrawingButton.position(windowWidth-150, windowHeight-50)
  newDrawingButton.mouseClicked(refreshPage)

  const saveDrawingButton = createButton('Save')
  saveDrawingButton.position(windowWidth-150, windowHeight-90)
  saveDrawingButton.mouseClicked(saveDrawing)



}

function draw() {
  background(255);
  let d = Math.round(random(1, 150))
  let n = Math.round(random(1, 150))
  let c= Math.round(random(1, 150))

  let k = n / d;

  push();
  translate(windowWidth / 2, windowHeight / 2);

  beginShape();

  noFill();
  strokeWeight(1);
  stroke(23)
  

  for (let a = 0; a < TWO_PI * reduce(n, d) ; a += 0.02) {
    let r = windowWidth * cos(k * a) + c;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }

  endShape(CLOSE);
  noLoop();
  pop();
  

  
  d = Math.round(random(1, 10))
  n = Math.round(random(1, 100))
  c= Math.round(random(1, 150))

  push()
  translate(windowWidth / 4, windowHeight / 4);
  stroke(25)
  noFill();
  strokeWeight(1);
  beginShape()
  for (let a = 0; a < TWO_PI * reduce(n, d) ; a += 0.02) {
    let r = 20 * cos(n / d * a) + c;
    let x = r * cos(a); 
    let y = r * sin(a);
    vertex(x, y);
  }          
  endShape(CLOSE);
  pop()
  noLoop();

  

  push()
  translate(3* windowWidth / 4, windowHeight / 4);
  stroke(25)
  noFill();
  strokeWeight(1);
  beginShape()
  for (let a = 0; a < TWO_PI * reduce(n, d) ; a += 0.02) {
    let r = c * cos(n / d * a) + c;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop()
  noLoop();

  push()
  translate(windowWidth / 4, 3* windowHeight / 4);
  stroke(25)
  noFill();
  strokeWeight(1);
  beginShape()
  for (let a = 0; a < TWO_PI * reduce(n, d) ; a += 0.02) {
    let r = 20 * cos(n / d * a) + c;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop()
  noLoop();

  push()
  translate(windowWidth / 4, 3* windowHeight / 4);
  stroke(25)
  noFill();
  strokeWeight(1);
  beginShape()
  for (let a = 0; a < TWO_PI * reduce(n, d) ; a += 0.02) {
    let r = c * cos(n / d * a) - c;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop()
  noLoop();

  push()
  translate(3*windowWidth / 4, 3* windowHeight / 4);
  stroke(25)
  noFill();
  strokeWeight(1);
  beginShape()
  for (let a = 0; a < TWO_PI * reduce(n, d) ; a += 0.02) {
    let r = c * cos( n / d * a) + c;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop()
  noLoop();

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function reduce(numerator, denominator) {
  function rec(a, b) {
      return b ? rec(b, a % b) : a;
  }
  return denominator / rec(numerator, denominator);
}

const refreshPage = () => {
  window.location.reload();
  return false
}

const saveDrawing = () => {
  saveCanvas()
 }

 browserSync.init({      
  notify: false
});

