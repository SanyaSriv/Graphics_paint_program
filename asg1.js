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
let number_of_segments;
let transparency;
// we will be replacing all the arrays with one singular array
let g_points_array = []

// for knowing which shape to draw
const POINT = 0;
const TRIANGLE = 1;
const CIRCLE = 2;

let G_SHAPE_TYPE = POINT // we will be starting with point (square shape)

// this function will be used for clearing the canvas
function clearCanvas() {
  g_points_array = []
  // calling this function too
  renderAllShapes();
}

// extract the canvas and initialize WebGL
function setupWebGL() {
  // Retrieve <canvas> element
  canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  // gl = getWebGLContext(canvas);
  // replaving the above line with this to improve performance
  gl = canvas.getContext("webgl", {preserveDrawingBuffer : true});
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
    g_points_array[i].render();
  }
}

// for selecting the right color and adding it to g_colors
// TODO: Change this approach
function selectColor() {
  red_color = document.getElementById("color_red").value;
  blue_color = document.getElementById("color_blue").value;
  green_color = document.getElementById("color_green").value;

  red_color = red_color / 100; // if it is 100 -> it will convert to 1
  blue_color = blue_color / 100;
  green_color = green_color / 100;

}

function selectTransparency() {
  transparency = document.getElementById("Transparency").value;
}
function selectSize() {
  size_of_shape = document.getElementById("shape_size").value;
}

function selectSegment() {
  number_of_segments = document.getElementById("segment_size").value;
}

// TODO: chnage this thing to the AddActionsToHtmlUI function
function ChangeShapeToTriangle() {
  console.log("Changing this thing to triangle");
  G_SHAPE_TYPE = TRIANGLE;
}

function ChangeShapeToSquare() {
  // square in our case is represented by a point;
  G_SHAPE_TYPE = POINT;
}

function ChangeShapeToCircle() {
  G_SHAPE_TYPE = CIRCLE;
}

function click(ev) {
  var x = ev.clientX; // x coordinate of a mouse pointer
  var y = ev.clientY; // y coordinate of a mouse pointer
  var rect = ev.target.getBoundingClientRect();

  x = ((x - rect.left) - canvas.width/2)/(canvas.width/2);
  y = (canvas.height/2 - (y - rect.top))/(canvas.height/2);

  console.log("x and y are: ", x, y);
  // extract the colours
  selectColor();
  // get the size
  selectSize();
  // get the segments
  selectSegment();
  // get the transparency
  selectTransparency();

  // make a new point or tiangle
  let new_point;
  console.log(G_SHAPE_TYPE);
  if (G_SHAPE_TYPE == POINT) {
    new_point = new Point();
    new_point.type = "point";
    console.log("It is in here");
  } else if (G_SHAPE_TYPE == TRIANGLE) {
    new_point = new Triangle();
    new_point.type = "Triangle";
  } else if (G_SHAPE_TYPE == CIRCLE) {
    console.log("Comes in here");
    new_point = new Circle();
    new_point.type = "Circle";
    new_point.segments = number_of_segments;
  }

  new_point.position[0] = x;
  new_point.position[1] = y;
  new_point.color[0] = red_color;
  new_point.color[1] = green_color;
  new_point.color[2] = blue_color;
  new_point.color[3] = 0.5;
  new_point.size = size_of_shape;

  g_points_array.push(new_point);
  renderAllShapes();

}

// TODO: Add the fps count: optional
function main() {

  setupWebGL();
  // Initialize shaders
  connectVariablesToGLSL();

  // Register function (event handler) to be called on a mouse press
  canvas.onmousedown = function(ev){ click(ev) };
  // to add drag functionality: (ev.buttons == 1): if the mouse is down
  canvas.onmousemove = function(ev){if (ev.buttons == 1) {click(ev)}};
  // Specify the color for clearing <canvas>

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);


}
