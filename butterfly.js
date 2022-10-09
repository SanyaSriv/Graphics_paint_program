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
  drawTriangles([0.0, -0.14, 0.0, 0.14, 0.10, 0.0])

  // triangle 31
  gl.uniform4f(u_FragColor, 21/255, 99/255, 160/255, 1.0);
  drawTriangles([0.0, 0.14, 0.0, -0.14, -0.10, 0.0])

  // triangle 32
  gl.uniform4f(u_FragColor, 22/255, 88/255, 144/255, 1.0);
  drawTriangles([0.0, -0.07, 0.0, 0.07, 0.05, 0.0])

  // triangle 33
  gl.uniform4f(u_FragColor, 22/255, 88/255, 144/255, 1.0);
  drawTriangles([0.0, 0.07, 0.0, -0.07, -0.05, 0.0])

  // now going to draw the right wing

  // triangle 13
  gl.uniform4f(u_FragColor, 52/255, 155/255, 198/255, 1.0);
  drawTriangles([0.1, 0.005, 0.24, 0.007, 0.47, 0.375])

  // triangle 14
  gl.uniform4f(u_FragColor, 19/255, 115/255, 148/255, 1.0);
  drawTriangles([0.1, 0.005, 0.24, 0.007, 0.15, -0.27])

  // triangle 6
  gl.uniform4f(u_FragColor, 100/255, 167/255, 191/255, 1.0);
  drawTriangles([0.24, 0.007, 0.15, -0.27, 0.30, -0.30])

  // triangle 1
  gl.uniform4f(u_FragColor, 178/255, 222/255, 239/255, 1.0);
  drawTriangles([0.30, -0.30, 0.15, -0.27, 0.20, -0.48])

  // triangle 2
  gl.uniform4f(u_FragColor, 108/255, 190/255, 236/255, 1.0);
  drawTriangles([0.30, -0.30, 0.20, -0.48, 0.33, -0.48])

  var tri2_pt1 = [0.20, -0.48];
  var tri2_pt2 = [0.33, -0.48];
  var tri2_pt3 = [0.30, -0.30];

  // traingle 3
  var tri3_pt3 = [0.43, -0.37]
  gl.uniform4f(u_FragColor, 41/255, 149/255, 211/255, 1.0);
  drawTriangles([tri2_pt2[0], tri2_pt2[1], tri2_pt3[0], tri2_pt3[1], tri3_pt3[0], tri3_pt3[1]])

  // triangle 12
  gl.uniform4f(u_FragColor, 95/255, 230/255, 241/255, 1.0);
  drawTriangles([0.47, 0.375, 0.565, 0.325, 0.24, 0.007])

  // triangle 11
  gl.uniform4f(u_FragColor, 25/255,90/255, 138/255, 1.0);
  drawTriangles([0.47, 0.375, 0.565, 0.325, 0.63, 0.61])

  // traingle 10
  gl.uniform4f(u_FragColor, 194/255, 230/255, 242/255, 1.0);
  drawTriangles([0.565, 0.325, 0.63, 0.61, 0.92, 0.78])

  // traingle 9
  gl.uniform4f(u_FragColor, 19/255, 107/255, 141/255, 1.0);
  drawTriangles([0.565, 0.325, 0.92, 0.78, 0.75, 0.30])

  // triangle 8
  gl.uniform4f(u_FragColor, 99/255, 187/255, 233/255, 1.0);
  drawTriangles([0.565, 0.325, 0.75, 0.30, 0.52, -0.06])

  // triangle 8
  gl.uniform4f(u_FragColor, 99/255, 187/255, 233/255, 1.0);
  drawTriangles([0.565, 0.325, 0.75, 0.30, 0.52, -0.06])

  // triangle 7
  gl.uniform4f(u_FragColor, 21/255, 77/255, 136/255, 1.0);
  drawTriangles([0.565, 0.325, 0.52, -0.06, 0.24, 0.007]);

  // triangle 5
  gl.uniform4f(u_FragColor, 95/255, 230/255, 241/255, 1.0);
  drawTriangles([0.52, -0.06, 0.24, 0.007, 0.30, -0.30]);

  // triangle 4
  gl.uniform4f(u_FragColor, 21/255, 77/255, 136/255, 1.0);
  drawTriangles([0.30, -0.30, 0.52, -0.06, 0.43, -0.37]);


  // going to draw the left wing

  // triangle 16
  gl.uniform4f(u_FragColor, 52/255, 155/255, 198/255, 1.0);
  drawTriangles([-0.1, 0.005, -0.24, 0.007, -0.47, 0.375])

  // triangle 15
  gl.uniform4f(u_FragColor, 19/255, 115/255, 148/255, 1.0);
  drawTriangles([-0.1, 0.005, -0.24, 0.007, -0.15, -0.27])

  // triangle 17
  gl.uniform4f(u_FragColor, 100/255, 167/255, 191/255, 1.0);
  drawTriangles([-0.24, 0.007, -0.15, -0.27, -0.30, -0.30]);

  // triangle 18
  gl.uniform4f(u_FragColor, 178/255, 222/255, 239/255, 1.0);
  drawTriangles([-0.30, -0.30, -0.15, -0.27, -0.20, -0.48]);

  // triangle 19
  gl.uniform4f(u_FragColor, 108/255, 190/255, 236/255, 1.0);
  drawTriangles([-0.30, -0.30, -0.20, -0.48, -0.33, -0.48])

  var tri2_pt1 = [-0.20, -0.48];
  var tri2_pt2 = [-0.33, -0.48];
  var tri2_pt3 = [-0.30, -0.30];

  // traingle 20
  var tri3_pt3 = [-0.43, -0.37]
  gl.uniform4f(u_FragColor, 41/255, 149/255, 211/255, 1.0);
  drawTriangles([tri2_pt2[0], tri2_pt2[1], tri2_pt3[0], tri2_pt3[1], tri3_pt3[0], tri3_pt3[1]])

  // triangle 25
  gl.uniform4f(u_FragColor, 95/255, 230/255, 241/255, 1.0);
  drawTriangles([-0.47, 0.375, -0.565, 0.325, -0.24, 0.007])

  // triangle 26
  gl.uniform4f(u_FragColor, 25/255,90/255, 138/255, 1.0);
  drawTriangles([-0.47, 0.375, -0.565, 0.325, -0.63, 0.61])

  // traingle 17
  gl.uniform4f(u_FragColor, 194/255, 230/255, 242/255, 1.0);
  drawTriangles([-0.565, 0.325, -0.63, 0.61, -0.92, 0.78])

  // traingle 28
  gl.uniform4f(u_FragColor, 19/255, 107/255, 141/255, 1.0);
  drawTriangles([-0.565, 0.325, -0.92, 0.78, -0.75, 0.30])

  // triangle 29
  gl.uniform4f(u_FragColor, 99/255, 187/255, 233/255, 1.0);
  drawTriangles([-0.565, 0.325, -0.75, 0.30, -0.52, -0.06])

  // triangle 24
  gl.uniform4f(u_FragColor, 21/255, 77/255, 136/255, 1.0);
  drawTriangles([-0.565, 0.325, -0.52, -0.06, -0.24, 0.007]);

  // triangle 23
  gl.uniform4f(u_FragColor, 95/255, 230/255, 241/255, 1.0);
  drawTriangles([-0.52, -0.06, -0.24, 0.007, -0.30, -0.30]);

  // triangle 21
  gl.uniform4f(u_FragColor, 21/255, 77/255, 136/255, 1.0);
  drawTriangles([-0.30, -0.30, -0.52, -0.06, -0.43, -0.37]);

  // going to draw the butterfly antenna - right side
  // The shade of the dots should get lighter as they get smaller
  var antenna1 = new Circle();
  antenna1.position = [0.035, 0.155, 0.0];
  antenna1.color = blue9;
  antenna1.size = 10.0;
  antenna1.segments = 5;
  antenna1.render();

  var antenna2 = new Circle();
  antenna2.position = [0.08, 0.235, 0.0];
  antenna2.color = blue8;
  antenna2.size = 8.0;
  antenna2.segments = 5;
  antenna2.render();

  var antenna3 = new Circle();
  antenna3.position = [0.125, 0.285, 0.0];
  antenna3.color = blue7;
  antenna3.size = 7.0;
  antenna3.segments = 5;
  antenna3.render();

  var antenna4 = new Circle();
  antenna4.position = [0.175, 0.33, 0.0];
  antenna4.color = blue6;
  antenna4.size = 5.0;
  antenna4.segments = 5;
  antenna4.render();

  var antenna5 = new Circle();
  antenna5.position = [0.24, 0.365, 0.0];
  antenna5.color = blue5;
  antenna5.size = 4.0;
  antenna5.segments = 5;
  antenna5.render();

  var antenna6 = new Circle();
  antenna6.position = [0.27, 0.31, 0.0];
  antenna6.color = blue4;
  antenna6.size = 3.0;
  antenna6.segments = 5;
  antenna6.render();

  // now going to add the left antenna

  var antenna7 = new Circle();
  antenna7.position = [-0.035, 0.155, 0.0];
  antenna7.color = blue9;
  antenna7.size = 10.0;
  antenna7.segments = 5;
  antenna7.render();

  var antenna8 = new Circle();
  antenna8.position = [-0.08, 0.235, 0.0];
  antenna8.color = blue8;
  antenna8.size = 8.0;
  antenna8.segments = 5;
  antenna8.render();

  var antenna9 = new Circle();
  antenna9.position = [-0.125, 0.285, 0.0];
  antenna9.color = blue7;
  antenna9.size = 7.0;
  antenna9.segments = 5;
  antenna9.render();

  var antenna10 = new Circle();
  antenna10.position = [-0.175, 0.33, 0.0];
  antenna10.color = blue6;
  antenna10.size = 5.0;
  antenna10.segments = 5;
  antenna10.render();

  var antenna11 = new Circle();
  antenna11.position = [-0.24, 0.365, 0.0];
  antenna11.color = blue5;
  antenna11.size = 4.0;
  antenna11.segments = 5;
  antenna11.render();

  var antenna12 = new Circle();
  antenna12.position = [-0.27, 0.31, 0.0];
  antenna12.color = blue4;
  antenna12.size = 3.0;
  antenna12.segments = 5;
  antenna12.render();

}
