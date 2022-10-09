function butterfly() {
  // making the butterfly body
  // triangle 30
  gl.uniform4f(u_FragColor, 13/255, 91/255, 147/255, 1.0);
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
  drawTriangles([-0.24, 0.007, -0.15, -0.27, -0.30, -0.30])

  // triangle 18
  gl.uniform4f(u_FragColor, 178/255, 222/255, 239/255, 1.0);
  drawTriangles([-0.30, -0.30, -0.15, -0.27, -0.20, -0.48])

}
