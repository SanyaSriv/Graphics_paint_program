function butterfly() {

  // defining some color arrays here that will be used later on
  // higher number = darker shade
  var blue9 = [11/255, 63/255, 121/255, 1.0];
  var blue8 = [42/255, 111/255, 161/255, 1.0];
  var blue7 = [51/255, 139/255, 171/255, 1.0];
  var blue6 = [75/255, 164/255, 196/255, 1.0];
  var blue5 = [108/255, 208/255, 230/255, 1.0];
  var blue4 = [101/255, 203/255, 235/255, 1.0];
  var blue3 = [69/255, 166/255, 219/255, 1.0];
  var blue2;
  var blue1;
  // making the butterfly body
  // triangle 30
  gl.uniform4f(u_FragColor, blue9[0], blue9[1], blue9[2], blue9[3]);
  drawTriangles([0.0, -0.14, 0.0, 0.14, 0.10, 0.0]);
  image_array.push([[blue9[0], blue9[1], blue9[2], blue9[3]], [0.0, -0.14, 0.0, 0.14, 0.10, 0.0]]);

  // triangle 31
  gl.uniform4f(u_FragColor, 21/255, 99/255, 160/255, 1.0);
  drawTriangles([0.0, 0.14, 0.0, -0.14, -0.10, 0.0]);
  image_array.push([[21/255, 99/255, 160/255, 1.0], [0.0, 0.14, 0.0, -0.14, -0.10, 0.0]]);

  // triangle 32
  gl.uniform4f(u_FragColor, 22/255, 88/255, 144/255, 1.0);
  drawTriangles([0.0, -0.07, 0.0, 0.07, 0.05, 0.0])
  image_array.push([[22/255, 88/255, 144/255, 1.0], [0.0, -0.07, 0.0, 0.07, 0.05, 0.0]]);

  // triangle 33
  gl.uniform4f(u_FragColor, 22/255, 88/255, 144/255, 1.0);
  drawTriangles([0.0, 0.07, 0.0, -0.07, -0.05, 0.0])
  image_array.push([[22/255, 88/255, 144/255, 1.0], [0.0, 0.07, 0.0, -0.07, -0.05, 0.0]]);

  // now going to draw the right wing

  // triangle 13
  gl.uniform4f(u_FragColor, 52/255, 155/255, 198/255, 1.0);
  drawTriangles([0.1, 0.005, 0.24, 0.007, 0.47, 0.375])
  image_array.push([[52/255, 155/255, 198/255, 1.0], [0.1, 0.005, 0.24, 0.007, 0.47, 0.375]]);

  // triangle 14
  gl.uniform4f(u_FragColor, 19/255, 115/255, 148/255, 1.0);
  drawTriangles([0.1, 0.005, 0.24, 0.007, 0.15, -0.27])
  image_array.push([[19/255, 115/255, 148/255, 1.0], [0.1, 0.005, 0.24, 0.007, 0.15, -0.27]]);

  // triangle 6
  gl.uniform4f(u_FragColor, 100/255, 167/255, 191/255, 1.0);
  drawTriangles([0.24, 0.007, 0.15, -0.27, 0.30, -0.30])
  image_array.push([[100/255, 167/255, 191/255, 1.0], [0.24, 0.007, 0.15, -0.27, 0.30, -0.30]]);

  // triangle 1
  gl.uniform4f(u_FragColor, 178/255, 222/255, 239/255, 1.0);
  drawTriangles([0.30, -0.30, 0.15, -0.27, 0.20, -0.48])
  image_array.push([[178/255, 222/255, 239/255, 1.0], [0.30, -0.30, 0.15, -0.27, 0.20, -0.48]]);

  // triangle 2
  gl.uniform4f(u_FragColor, 108/255, 190/255, 236/255, 1.0);
  drawTriangles([0.30, -0.30, 0.20, -0.48, 0.33, -0.48])
  image_array.push([[108/255, 190/255, 236/255, 1.0], [0.30, -0.30, 0.20, -0.48, 0.33, -0.48]]);

  var tri2_pt1 = [0.20, -0.48];
  var tri2_pt2 = [0.33, -0.48];
  var tri2_pt3 = [0.30, -0.30];

  // traingle 3
  var tri3_pt3 = [0.43, -0.37]
  gl.uniform4f(u_FragColor, 41/255, 149/255, 211/255, 1.0);
  drawTriangles([tri2_pt2[0], tri2_pt2[1], tri2_pt3[0], tri2_pt3[1], tri3_pt3[0], tri3_pt3[1]])
  image_array.push([[41/255, 149/255, 211/255, 1.0], [tri2_pt2[0], tri2_pt2[1], tri2_pt3[0], tri2_pt3[1], tri3_pt3[0], tri3_pt3[1]]]);

  // triangle 12
  gl.uniform4f(u_FragColor, 95/255, 230/255, 241/255, 1.0);
  drawTriangles([0.47, 0.375, 0.565, 0.325, 0.24, 0.007])
  image_array.push([[95/255, 230/255, 241/255, 1.0], [0.47, 0.375, 0.565, 0.325, 0.24, 0.007]]);

  // triangle 11
  gl.uniform4f(u_FragColor, 25/255,90/255, 138/255, 1.0);
  drawTriangles([0.47, 0.375, 0.565, 0.325, 0.63, 0.61])
  image_array.push([[25/255,90/255, 138/255, 1.0], [0.47, 0.375, 0.565, 0.325, 0.63, 0.61]]);

  // traingle 10
  gl.uniform4f(u_FragColor, 194/255, 230/255, 242/255, 1.0);
  drawTriangles([0.565, 0.325, 0.63, 0.61, 0.92, 0.78])
  image_array.push([[194/255, 230/255, 242/255, 1.0], [0.565, 0.325, 0.63, 0.61, 0.92, 0.78]]);

  // traingle 9
  gl.uniform4f(u_FragColor, 19/255, 107/255, 141/255, 1.0);
  drawTriangles([0.565, 0.325, 0.92, 0.78, 0.75, 0.30])
  image_array.push([[19/255, 107/255, 141/255, 1.0], [0.565, 0.325, 0.92, 0.78, 0.75, 0.30]]);

  // triangle 8
  gl.uniform4f(u_FragColor, 99/255, 187/255, 233/255, 1.0);
  drawTriangles([0.565, 0.325, 0.75, 0.30, 0.52, -0.06])
  image_array.push([[99/255, 187/255, 233/255, 1.0], [0.565, 0.325, 0.75, 0.30, 0.52, -0.06]]);

  // triangle 8
  gl.uniform4f(u_FragColor, 99/255, 187/255, 233/255, 1.0);
  drawTriangles([0.565, 0.325, 0.75, 0.30, 0.52, -0.06])
  image_array.push([[99/255, 187/255, 233/255, 1.0], [0.565, 0.325, 0.75, 0.30, 0.52, -0.06]]);

  // triangle 7
  gl.uniform4f(u_FragColor, 21/255, 77/255, 136/255, 1.0);
  drawTriangles([0.565, 0.325, 0.52, -0.06, 0.24, 0.007]);
  image_array.push([[21/255, 77/255, 136/255, 1.0], [0.565, 0.325, 0.52, -0.06, 0.24, 0.007]]);

  // triangle 5
  gl.uniform4f(u_FragColor, 95/255, 230/255, 241/255, 1.0);
  drawTriangles([0.52, -0.06, 0.24, 0.007, 0.30, -0.30]);
  image_array.push([[95/255, 230/255, 241/255, 1.0], [0.52, -0.06, 0.24, 0.007, 0.30, -0.30]]);

  // triangle 4
  gl.uniform4f(u_FragColor, 21/255, 77/255, 136/255, 1.0);
  drawTriangles([0.30, -0.30, 0.52, -0.06, 0.43, -0.37]);
  image_array.push([[21/255, 77/255, 136/255, 1.0], [0.30, -0.30, 0.52, -0.06, 0.43, -0.37]]);

  // going to draw the left wing

  // triangle 16
  gl.uniform4f(u_FragColor, 52/255, 155/255, 198/255, 1.0);
  drawTriangles([-0.1, 0.005, -0.24, 0.007, -0.47, 0.375])
  image_array.push([[52/255, 155/255, 198/255, 1.0], [-0.1, 0.005, -0.24, 0.007, -0.47, 0.375]]);

  // triangle 15
  gl.uniform4f(u_FragColor, 19/255, 115/255, 148/255, 1.0);
  drawTriangles([-0.1, 0.005, -0.24, 0.007, -0.15, -0.27])
  image_array.push([[19/255, 115/255, 148/255, 1.0], [-0.1, 0.005, -0.24, 0.007, -0.15, -0.27]]);

  // triangle 17
  gl.uniform4f(u_FragColor, 100/255, 167/255, 191/255, 1.0);
  drawTriangles([-0.24, 0.007, -0.15, -0.27, -0.30, -0.30]);
  image_array.push([[100/255, 167/255, 191/255, 1.0], [-0.24, 0.007, -0.15, -0.27, -0.30, -0.30]]);

  // triangle 18
  gl.uniform4f(u_FragColor, 178/255, 222/255, 239/255, 1.0);
  drawTriangles([-0.30, -0.30, -0.15, -0.27, -0.20, -0.48]);
  image_array.push([[178/255, 222/255, 239/255, 1.0], [-0.30, -0.30, -0.15, -0.27, -0.20, -0.48]]);

  // triangle 19
  gl.uniform4f(u_FragColor, 108/255, 190/255, 236/255, 1.0);
  drawTriangles([-0.30, -0.30, -0.20, -0.48, -0.33, -0.48])
  image_array.push([[108/255, 190/255, 236/255, 1.0], [-0.30, -0.30, -0.20, -0.48, -0.33, -0.48]]);

  var tri2_pt1 = [-0.20, -0.48];
  var tri2_pt2 = [-0.33, -0.48];
  var tri2_pt3 = [-0.30, -0.30];

  // traingle 20
  var tri3_pt3 = [-0.43, -0.37]
  gl.uniform4f(u_FragColor, 41/255, 149/255, 211/255, 1.0);
  drawTriangles([tri2_pt2[0], tri2_pt2[1], tri2_pt3[0], tri2_pt3[1], tri3_pt3[0], tri3_pt3[1]])
  image_array.push([[41/255, 149/255, 211/255, 1.0], [tri2_pt2[0], tri2_pt2[1], tri2_pt3[0], tri2_pt3[1], tri3_pt3[0], tri3_pt3[1]]]);

  // triangle 25
  gl.uniform4f(u_FragColor, 95/255, 230/255, 241/255, 1.0);
  drawTriangles([-0.47, 0.375, -0.565, 0.325, -0.24, 0.007])
  image_array.push([[95/255, 230/255, 241/255, 1.0], [-0.47, 0.375, -0.565, 0.325, -0.24, 0.007]]);

  // triangle 26
  gl.uniform4f(u_FragColor, 25/255,90/255, 138/255, 1.0);
  drawTriangles([-0.47, 0.375, -0.565, 0.325, -0.63, 0.61])
  image_array.push([[25/255,90/255, 138/255, 1.0], [-0.47, 0.375, -0.565, 0.325, -0.63, 0.61]]);

  // traingle 17
  gl.uniform4f(u_FragColor, 194/255, 230/255, 242/255, 1.0);
  drawTriangles([-0.565, 0.325, -0.63, 0.61, -0.92, 0.78])
  image_array.push([[194/255, 230/255, 242/255, 1.0], [-0.565, 0.325, -0.63, 0.61, -0.92, 0.78]]);

  // traingle 28
  gl.uniform4f(u_FragColor, 19/255, 107/255, 141/255, 1.0);
  drawTriangles([-0.565, 0.325, -0.92, 0.78, -0.75, 0.30])
  image_array.push([[19/255, 107/255, 141/255, 1.0], [-0.565, 0.325, -0.92, 0.78, -0.75, 0.30]]);

  // triangle 29
  gl.uniform4f(u_FragColor, 99/255, 187/255, 233/255, 1.0);
  drawTriangles([-0.565, 0.325, -0.75, 0.30, -0.52, -0.06])
  image_array.push([[99/255, 187/255, 233/255, 1.0], [-0.565, 0.325, -0.75, 0.30, -0.52, -0.06]]);

  // triangle 24
  gl.uniform4f(u_FragColor, 21/255, 77/255, 136/255, 1.0);
  drawTriangles([-0.565, 0.325, -0.52, -0.06, -0.24, 0.007]);
  image_array.push([[21/255, 77/255, 136/255, 1.0], [-0.565, 0.325, -0.52, -0.06, -0.24, 0.007]]);

  // triangle 23
  gl.uniform4f(u_FragColor, 95/255, 230/255, 241/255, 1.0);
  drawTriangles([-0.52, -0.06, -0.24, 0.007, -0.30, -0.30]);
  image_array.push([[95/255, 230/255, 241/255, 1.0], [-0.52, -0.06, -0.24, 0.007, -0.30, -0.30]]);

  // triangle 21
  gl.uniform4f(u_FragColor, 21/255, 77/255, 136/255, 1.0);
  drawTriangles([-0.30, -0.30, -0.52, -0.06, -0.43, -0.37]);
  image_array.push([[21/255, 77/255, 136/255, 1.0], [-0.30, -0.30, -0.52, -0.06, -0.43, -0.37]]);

  // going to draw the butterfly antenna - right side


  // The shade of the dots should get lighter as they get smaller
  // The image_array is calling the function drawTriangles inside renderAllShapes
  // so I am converting the circles into triangles so we do not have to change any
  // functionality inside asg1.js

  var antenna_position = [0.035, 0.155, 0.0];
  var antenna_color = blue9;
  var antenna_size = 10.0/300;
  var antenna_segments = 5;
  var step = 360 / antenna_segments;

  for (var i = 0; i < 360; i += step) {
    let angle1 = i * (Math.PI / 180);
    let angle2 = (i + step) * (Math.PI / 180);

    // point 1
    var point0_x = antenna_position[0];
    var point0_y = antenna_position[1];

    // point2
    var point1_x = antenna_position[0] + (Math.cos(angle1) * antenna_size);
    var point1_y = antenna_position[1] + (Math.sin(angle1) * antenna_size);

    // point3
    var point2_x = antenna_position[0] + (Math.cos(angle2) * antenna_size);
    var point2_y = antenna_position[1] + (Math.sin(angle2) * antenna_size);

    // Draw
    gl.uniform4f(u_FragColor, antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]);
    drawTriangles([point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]);
    image_array.push([[antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]], [point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]]);
  }


  antenna_position = [0.08, 0.235, 0.0];
  antenna_color = blue8;
  antenna_size = 8.0 / 300;
  antenna_segments = 5;
  step = 360 / antenna_segments;

  for (var i = 0; i < 360; i += step) {
    let angle1 = i * (Math.PI / 180);
    let angle2 = (i + step) * (Math.PI / 180);

    // point 1
    var point0_x = antenna_position[0];
    var point0_y = antenna_position[1];

    // point2
    var point1_x = antenna_position[0] + (Math.cos(angle1) * antenna_size);
    var point1_y = antenna_position[1] + (Math.sin(angle1) * antenna_size);

    // point3
    var point2_x = antenna_position[0] + (Math.cos(angle2) * antenna_size);
    var point2_y = antenna_position[1] + (Math.sin(angle2) * antenna_size);

    // Draw
    gl.uniform4f(u_FragColor, antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]);
    drawTriangles([point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]);
    image_array.push([[antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]], [point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]]);
  }


  antenna_position = [0.125, 0.285, 0.0];
  antenna_color = blue7;
  antenna_size = 7.0 / 300;
  antenna_segments = 5;
  step = 360 / antenna_segments;

  for (var i = 0; i < 360; i += step) {
    let angle1 = i * (Math.PI / 180);
    let angle2 = (i + step) * (Math.PI / 180);

    // point 1
    var point0_x = antenna_position[0];
    var point0_y = antenna_position[1];

    // point2
    var point1_x = antenna_position[0] + (Math.cos(angle1) * antenna_size);
    var point1_y = antenna_position[1] + (Math.sin(angle1) * antenna_size);

    // point3
    var point2_x = antenna_position[0] + (Math.cos(angle2) * antenna_size);
    var point2_y = antenna_position[1] + (Math.sin(angle2) * antenna_size);

    // Draw
    gl.uniform4f(u_FragColor, antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]);
    drawTriangles([point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]);
    image_array.push([[antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]], [point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]]);
  }

  antenna_position = [0.175, 0.33, 0.0];
  antenna_color = blue6;
  antenna_size = 5.0 / 300;
  antenna_segments = 5;
  step = 360 / antenna_segments;

  for (var i = 0; i < 360; i += step) {
    let angle1 = i * (Math.PI / 180);
    let angle2 = (i + step) * (Math.PI / 180);

    // point 1
    var point0_x = antenna_position[0];
    var point0_y = antenna_position[1];

    // point2
    var point1_x = antenna_position[0] + (Math.cos(angle1) * antenna_size);
    var point1_y = antenna_position[1] + (Math.sin(angle1) * antenna_size);

    // point3
    var point2_x = antenna_position[0] + (Math.cos(angle2) * antenna_size);
    var point2_y = antenna_position[1] + (Math.sin(angle2) * antenna_size);

    // Draw
    gl.uniform4f(u_FragColor, antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]);
    drawTriangles([point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]);
    image_array.push([[antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]], [point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]]);
  }


  antenna_position = [0.24, 0.365, 0.0];
  antenna_color = blue5;
  antenna_size = 4.0 / 300;
  antenna_segments = 5;
  step = 360 / antenna_segments;

  for (var i = 0; i < 360; i += step) {
    let angle1 = i * (Math.PI / 180);
    let angle2 = (i + step) * (Math.PI / 180);

    // point 1
    var point0_x = antenna_position[0];
    var point0_y = antenna_position[1];

    // point2
    var point1_x = antenna_position[0] + (Math.cos(angle1) * antenna_size);
    var point1_y = antenna_position[1] + (Math.sin(angle1) * antenna_size);

    // point3
    var point2_x = antenna_position[0] + (Math.cos(angle2) * antenna_size);
    var point2_y = antenna_position[1] + (Math.sin(angle2) * antenna_size);

    // Draw
    gl.uniform4f(u_FragColor, antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]);
    drawTriangles([point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]);
    image_array.push([[antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]], [point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]]);
  }

  antenna_position = [0.27, 0.31, 0.0];
  antenna_color = blue4;
  antenna_size = 3.0 / 300;
  antenna_segments = 5;
  step = 360 / antenna_segments;

  for (var i = 0; i < 360; i += step) {
    let angle1 = i * (Math.PI / 180);
    let angle2 = (i + step) * (Math.PI / 180);

    // point 1
    var point0_x = antenna_position[0];
    var point0_y = antenna_position[1];

    // point2
    var point1_x = antenna_position[0] + (Math.cos(angle1) * antenna_size);
    var point1_y = antenna_position[1] + (Math.sin(angle1) * antenna_size);

    // point3
    var point2_x = antenna_position[0] + (Math.cos(angle2) * antenna_size);
    var point2_y = antenna_position[1] + (Math.sin(angle2) * antenna_size);

    // Draw
    gl.uniform4f(u_FragColor, antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]);
    drawTriangles([point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]);
    image_array.push([[antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]], [point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]]);
  }


  // now going to add the left antenna

  var antenna_position = [-0.035, 0.155, 0.0];
  var antenna_color = blue9;
  var antenna_size = 10.0/300;
  var antenna_segments = 5;
  var step = 360 / antenna_segments;

  for (var i = 0; i < 360; i += step) {
    let angle1 = i * (Math.PI / 180);
    let angle2 = (i + step) * (Math.PI / 180);

    // point 1
    var point0_x = antenna_position[0];
    var point0_y = antenna_position[1];

    // point2
    var point1_x = antenna_position[0] + (Math.cos(angle1) * antenna_size);
    var point1_y = antenna_position[1] + (Math.sin(angle1) * antenna_size);

    // point3
    var point2_x = antenna_position[0] + (Math.cos(angle2) * antenna_size);
    var point2_y = antenna_position[1] + (Math.sin(angle2) * antenna_size);

    // Draw
    gl.uniform4f(u_FragColor, antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]);
    drawTriangles([point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]);
    image_array.push([[antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]], [point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]]);
  }


  antenna_position = [-0.08, 0.235, 0.0];
  antenna_color = blue8;
  antenna_size = 8.0 / 300;
  antenna_segments = 5;
  step = 360 / antenna_segments;

  for (var i = 0; i < 360; i += step) {
    let angle1 = i * (Math.PI / 180);
    let angle2 = (i + step) * (Math.PI / 180);

    // point 1
    var point0_x = antenna_position[0];
    var point0_y = antenna_position[1];

    // point2
    var point1_x = antenna_position[0] + (Math.cos(angle1) * antenna_size);
    var point1_y = antenna_position[1] + (Math.sin(angle1) * antenna_size);

    // point3
    var point2_x = antenna_position[0] + (Math.cos(angle2) * antenna_size);
    var point2_y = antenna_position[1] + (Math.sin(angle2) * antenna_size);

    // Draw
    gl.uniform4f(u_FragColor, antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]);
    drawTriangles([point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]);
    image_array.push([[antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]], [point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]]);
  }


  antenna_position = [-0.125, 0.285, 0.0];
  antenna_color = blue7;
  antenna_size = 7.0 / 300;
  antenna_segments = 5;
  step = 360 / antenna_segments;

  for (var i = 0; i < 360; i += step) {
    let angle1 = i * (Math.PI / 180);
    let angle2 = (i + step) * (Math.PI / 180);

    // point 1
    var point0_x = antenna_position[0];
    var point0_y = antenna_position[1];

    // point2
    var point1_x = antenna_position[0] + (Math.cos(angle1) * antenna_size);
    var point1_y = antenna_position[1] + (Math.sin(angle1) * antenna_size);

    // point3
    var point2_x = antenna_position[0] + (Math.cos(angle2) * antenna_size);
    var point2_y = antenna_position[1] + (Math.sin(angle2) * antenna_size);

    // Draw
    gl.uniform4f(u_FragColor, antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]);
    drawTriangles([point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]);
    image_array.push([[antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]], [point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]]);
  }

  antenna_position = [-0.175, 0.33, 0.0];
  antenna_color = blue6;
  antenna_size = 5.0 / 300;
  antenna_segments = 5;
  step = 360 / antenna_segments;

  for (var i = 0; i < 360; i += step) {
    let angle1 = i * (Math.PI / 180);
    let angle2 = (i + step) * (Math.PI / 180);

    // point 1
    var point0_x = antenna_position[0];
    var point0_y = antenna_position[1];

    // point2
    var point1_x = antenna_position[0] + (Math.cos(angle1) * antenna_size);
    var point1_y = antenna_position[1] + (Math.sin(angle1) * antenna_size);

    // point3
    var point2_x = antenna_position[0] + (Math.cos(angle2) * antenna_size);
    var point2_y = antenna_position[1] + (Math.sin(angle2) * antenna_size);

    // Draw
    gl.uniform4f(u_FragColor, antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]);
    drawTriangles([point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]);
    image_array.push([[antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]], [point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]]);
  }


  antenna_position = [-0.24, 0.365, 0.0];
  antenna_color = blue5;
  antenna_size = 4.0 / 300;
  antenna_segments = 5;
  step = 360 / antenna_segments;

  for (var i = 0; i < 360; i += step) {
    let angle1 = i * (Math.PI / 180);
    let angle2 = (i + step) * (Math.PI / 180);

    // point 1
    var point0_x = antenna_position[0];
    var point0_y = antenna_position[1];

    // point2
    var point1_x = antenna_position[0] + (Math.cos(angle1) * antenna_size);
    var point1_y = antenna_position[1] + (Math.sin(angle1) * antenna_size);

    // point3
    var point2_x = antenna_position[0] + (Math.cos(angle2) * antenna_size);
    var point2_y = antenna_position[1] + (Math.sin(angle2) * antenna_size);

    // Draw
    gl.uniform4f(u_FragColor, antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]);
    drawTriangles([point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]);
    image_array.push([[antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]], [point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]]);
  }

  antenna_position = [-0.27, 0.31, 0.0];
  antenna_color = blue4;
  antenna_size = 3.0 / 300;
  antenna_segments = 5;
  step = 360 / antenna_segments;

  for (var i = 0; i < 360; i += step) {
    let angle1 = i * (Math.PI / 180);
    let angle2 = (i + step) * (Math.PI / 180);

    // point 1
    var point0_x = antenna_position[0];
    var point0_y = antenna_position[1];

    // point2
    var point1_x = antenna_position[0] + (Math.cos(angle1) * antenna_size);
    var point1_y = antenna_position[1] + (Math.sin(angle1) * antenna_size);

    // point3
    var point2_x = antenna_position[0] + (Math.cos(angle2) * antenna_size);
    var point2_y = antenna_position[1] + (Math.sin(angle2) * antenna_size);

    // Draw
    gl.uniform4f(u_FragColor, antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]);
    drawTriangles([point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]);
    image_array.push([[antenna_color[0], antenna_color[1], antenna_color[2], antenna_color[3]], [point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]]);
  }

}
