let r = 200;
let noiseScale = r/5;
let step1 = 0;
let step2 = 5;
let step3 = 10;

let density;
let densitySlider;
let magnitude;
let magnitudeSlider;

function setup() {
  var canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('sketch-holder');
  angleMode(DEGREES);
  
  stroke(194, 69, 108);
  strokeWeight(1);
  noFill();
  
  density = createDiv();
  densitySlider = createSlider(3, 55, 28, 1)//min, max, default, stepsize
  
  magnitude = createDiv();
  magnitudeSlider = createSlider(0.25, 2, 1, 0.25)//min, max, default, stepsize
}

function draw() {
  background(41,42,45);
  orbitControl(2, 2);
  step1 += 0.001;
  step2 += 0.001;
  step3 += 0.001;
  let noiseVal1 = noise(step1)*noiseScale - (noiseScale/2)
  let noiseVal2 = noise(step2)*noiseScale - (noiseScale/2)
  
  // thing 1
  for(let phi = 0; phi < 180; phi += 180/densitySlider.value()){
    beginShape();
    for(let theta = 0; theta < 360; theta += 360/densitySlider.value()){      
      let noiseVal1a = (noise(theta*noiseVal1/100)*noiseScale) - (noiseScale/2)
      let x = (r + noiseVal1a*magnitudeSlider.value()) * cos(phi);
      let y = (r + noiseVal1a*magnitudeSlider.value()) * sin(phi) * sin(theta);
      let z = (r + noiseVal1a*magnitudeSlider.value()) * sin(phi) * cos(theta);
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
  
  // thing 2
  for(let phi = 0; phi < 180; phi += 180/densitySlider.value()){
    beginShape();
    for(let theta = 0; theta < 360; theta += 360/densitySlider.value()){      
      let noiseVal2a = (noise(theta*noiseVal2/100)*noiseScale) - (noiseScale/2)
      let x = (r + noiseVal2a*magnitudeSlider.value()) * cos(phi);
      let y = (r + noiseVal2a*magnitudeSlider.value()) * sin(phi) * sin(theta);
      let z = (r + noiseVal2a*magnitudeSlider.value()) * sin(phi) * cos(theta);
      vertex(y, z, x);
    }
    endShape(CLOSE);
  }
  
  
  let displayDensity = int(map(densitySlider.value(), 3, 62, 1, 60));
  density.html("Density value: " + displayDensity);
  
  let displayMagnitude = magnitudeSlider.value();
  magnitude.html("Noise value: " + displayMagnitude);
}
