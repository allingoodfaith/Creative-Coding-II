function setup() {
    createCanvas(1000, 1000, WEBGL);
  }
  function draw() {
    background(205, 102, 94);
   
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(30, 15);
    pop();
    
    push();
    translate(100,100);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(50, 15, 24, 16);
    pop();

    push();
    translate(150,150);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(40);
    pop();

    push();
    translate(550,-800);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(20, 50);
    pop();

    push();
    translate(-500,-500);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cone(40, 70);
    pop();

  }
  