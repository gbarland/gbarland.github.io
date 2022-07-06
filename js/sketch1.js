//disable scrolling on iOS
document.addEventListener('touchstart', function (e) {
    e.preventDefault();
  });
  
  function smoothstep(edge0, edge1, x) {
    t = constrain((x - edge0)/(edge1 - edge0), 0.0, 1.0);
    return t * t * (3.0 - 2.0 * t);
  }
  
  function draw() {
    background(41,42,45);
    translate(width/2,height/2);
    steps = min(width, height)/4.5;
    stroke(194, 69, 108);
    strokeWeight(2);
    noFill();
    let mx = (mouseX || width/2)/width*1000;
    let my = (mouseY || height/2)/height*1000;
    beginShape();
    vertex(0, 0, 0);
    for (let i = 0; i < steps/4.5; i++) {
      let radius = smoothstep(0, steps/2.5, i) * height;
      let x = sin(frameCount*i/mx)*(radius);
      let y = cos(frameCount*i/my)*(radius);
      let z = cos(frameCount*i/1000.0)*(radius/10.0);
      curveVertex(x, y, z);
    }
    endShape();
  }
  



function setup() {
    var canvas = createCanvas(windowWidth/2, windowWidth/2);

    canvas.parent('sketch-holder');
}

  