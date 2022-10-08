// ColoredPoint.js (c) 2012 matsuda
// Vertex shader program
var VSHADER_SOURCE =
  `attribute vec4 a_Position;
  uniform float u_PointSize;
  void main() {
    gl_Position = a_Position;
    gl_PointSize = u_PointSize;
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
let a_Position;
let u_PointSize;
let u_FragColor;
let size_of_shape;
let red_color, blue_color, green_color;

// we will be replacing all the arrays with one singular array
let g_points_array = []

class Point {
  constructor() {
    this.color = [0.0, 0.0, 0.0, 1.0];
    this.position = [0.0, 0.0, 0.0];
    this.type = "point";
    this.size = 5.0;
  }
}


// this function will be used for clearing the canvas
function clearCanvas() {
  // // clearing the canvas with black colour
  // gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // gl.clear(gl.COLOR_BUFFER_BIT);
  // also will have to clear the buffers
  g_points_array = []
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
  u_PointSize = gl.getUniformLocation(gl.program, 'u_PointSize');
  if (u_PointSize < 0) {
    console.log('Failed to get the storage location of u_PointSize');
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

  var len = g_points_array.length;
  for(var i = 0; i < len; i++) {
    var xy = g_points_array[i].position;
    var rgba = g_points_array[i].color;
    var size = g_points_array[i].size;
    // Pass the position of a point to a_Position variable
    gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);
    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
    // passing the size too now
    gl.uniform1f(u_PointSize, size);
    // Draw
    gl.drawArrays(gl.POINTS, 0, 1);
  }
}

// for selecting the right color and adding it to g_colors
// TODO: Change this approach
function selectColor() {
  red_color = document.getElementById("color_red").value;
  blue_color = document.getElementById("color_blue").value;
  green_color = document.getElementById("color_green").value;
  // The numbers are in 100 so we might have to scale them to 1
  // scaling the things
  red_color = red_color / 100; // if it is 100 -> it will convert to 1
  blue_color = blue_color / 100;
  green_color = green_color / 100;

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

  // extract the colours
  selectColor();
  // get the size
  selectSize();

  // make a new point
  let new_point = new Point();
  new_point.position[0] = x;
  new_point.position[1] = y;
  new_point.color[0] = red_color;
  new_point.color[1] = green_color;
  new_point.color[2] = blue_color;
  new_point.size = size_of_shape;

  g_points_array.push(new_point);

  renderAllShapes();

}
