// ColoredPoint.js (c) 2012 matsuda
// Vertex shader program
var VSHADER_SOURCE =
  `attribute vec4 a_Position;
  attribute float a_PointSize;
  void main() {
    gl_Position = a_Position;
    gl_PointSize = a_PointSize;
  }`;

// Fragment shader program
var FSHADER_SOURCE =
  `precision mediump float;
  uniform vec4 u_FragColor;
  void main() {
    gl_FragColor = u_FragColor;
  }`;

// declaring the global variables
let canvas;
let gl;
var g_points = [];  // The array for the position of a mouse press
var g_colors = [];  // The array to store the color of a point
let g_shapeSize = [];
let a_Position;
let a_PointSize;
let u_FragColor;
let size_of_shape;
let red_color, blue_color, green_color;
// this function will be used for clearing the canvas
function clearCanvas() {
  // // clearing the canvas with black colour
  // gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // gl.clear(gl.COLOR_BUFFER_BIT);
  // also will have to clear the buffers
  g_points = [] // resetting the co-ordinates buffer to empty array
  g_colors = [] // resetting the colours buffer to empty array
  g_shapeSize = []
  // calling this function too
  renderAllShapes();
}

// extract the canvas and initialize WebGL
function setupWebGL() {
  // Retrieve <canvas> element
  canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  gl = getWebGLContext(canvas);
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }
}

// compile the shader programs, attach the javascript variables to the GLSL variables
function connectVariablesToGLSL() {
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

  // // Get the storage location of a_Position
  a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return;
  }

  // get the storage location of size
  a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
  if (a_PointSize < 0) {
    console.log('Failed to get the storage location of a_PointSize');
    return;
  }

  // Get the storage location of u_FragColor
  u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
  if (!u_FragColor) {
    console.log('Failed to get the storage location of u_FragColor');
    return;
  }
}

// based on some data structure that is holding all the information
// about what to draw, actually draw all the shapes
function renderAllShapes() {
  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  var len = g_points.length;
  for(var i = 0; i < len; i++) {
    var xy = g_points[i];
    var rgba = g_colors[i];
    var size = g_shapeSize[i];
    // Pass the position of a point to a_Position variable
    gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);
    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
    // passing the size too now
    gl.vertexAttrib1f(a_PointSize, size);
    // Draw
    gl.drawArrays(gl.POINTS, 0, 1);
  }
}

// for selecting the right color and adding it to g_colors
function selectColor() {
  red_color = document.getElementById("color_red").value;
  blue_color = document.getElementById("color_blue").value;
  green_color = document.getElementById("color_green").value;
  // The numbers are in 100 so we might have to scale them to 1
  // scaling the things
  red_color = red_color / 100; // if it is 100 -> it will convert to 1
  blue_color = blue_color / 100;
  green_color = green_color / 100;

  console.log("printing out the values here: ", red_color, blue_color, green_color);
}

function selectSize() {
  size_of_shape = document.getElementById("shape_size").value;
}
function main() {

  setupWebGL();
  // Initialize shaders
  connectVariablesToGLSL();

  // Register function (event handler) to be called on a mouse press
  canvas.onmousedown = function(ev){ click(ev) };
  // to add drag functionality: (ev.buttons == 1): if the mouse is down
  canvas.onmousemove = function(ev){if (ev.buttons == 1) click(ev)};
  // Specify the color for clearing <canvas>
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);
}

function click(ev) {
  var x = ev.clientX; // x coordinate of a mouse pointer
  var y = ev.clientY; // y coordinate of a mouse pointer
  var rect = ev.target.getBoundingClientRect();

  x = ((x - rect.left) - canvas.width/2)/(canvas.width/2);
  y = (canvas.height/2 - (y - rect.top))/(canvas.height/2);

  // Store the coordinates to g_points array
  g_points.push([x, y]);
  // extract the colours
  selectColor();
  // Store the coordinates to g_points array
  g_colors.push([red_color, green_color, blue_color, 1.0])
  // now implementing the shape size
  selectSize();
  g_shapeSize.push(size_of_shape);
  console.log("shape size is: ", size_of_shape)


  // if (x >= 0.0 && y >= 0.0) {      // First quadrant
  //   g_colors.push([1.0, 0.0, 0.0, 1.0]);  // Red
  // } else if (x < 0.0 && y < 0.0) { // Third quadrant
  //   g_colors.push([0.0, 1.0, 0.0, 1.0]);  // Green
  // } else {                         // Others
  //   g_colors.push([1.0, 1.0, 1.0, 1.0]);  // White
  // }

  renderAllShapes();

}
