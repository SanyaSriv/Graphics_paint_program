class Circle {
  constructor() {
    this.color = [0.0, 0.0, 0.0, 1.0];
    this.position = [0.0, 0.0, 0.0];
    this.type = "circle";
    this.size = 5.0;
  }
  // TODO: Change this to Circle functionality
  render() {
    var xy = this.position;
    var rgba = this.color;
    var size = this.size;

    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    // Draw

    let center_x = xy[0];
    let center_y = xy[1];
    let vertices = []
    let step = 30; // TOOD: Change this for now
    let scaling_factor = this.size / 200;
    // i is the angle in this loop
    for (var i = 0; i < 360; i += step) {

      // getting the angle
      let angle1 = i * (Math.PI / 180);
      let angle2 = (i + step) * (Math.PI / 180);
      // point 1
      var point0_x = center_x;
      var point0_y = center_y;

      // point2
      var point1_x = center_x + (Math.cos(angle1) * scaling_factor);
      var point1_y = center_y + (Math.sin(angle1) * scaling_factor);

      // point3
      var point2_x = center_x + (Math.cos(angle2) * scaling_factor);
      var point2_y = center_y + (Math.sin(angle2) * scaling_factor);

      // we alsp need to scale the points
      // point1_x = point1_x / 50;
      // point1_y = point1_y / 50;
      // point2_x = point2_x / 50;
      // point2_y = point2_y / 50;
      drawTriangles([point0_x, point0_y, point1_x, point1_y, point2_x, point2_y]);
    }

  }
}
