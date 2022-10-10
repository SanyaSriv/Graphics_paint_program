class Pizza {
  constructor() {
    this.color = [247/255, 208/255, 20/255, 1.0];
    this.position = [0.0, 0.0, 0.0];
    this.type = "pizza";
    this.size = 5.0;
    this.segments = 0;
  }

  render() {
    // now we need to make the crust
    let x = this.position[0];
    let y = this.position[1];
    gl.uniform4f(u_FragColor, this.color[0], this.color[1], this.color[2], this.color[3]);
    drawTriangles([x, y - 2*(this.size / 200), x - (this.size/200), y, x + (this.size/200), y]);

    // toppping 1
    let topping1 = new Circle();
    topping1.color = [188/255, 30/255, 23/255, 1.0];
    let topping_y = ((y + (y - 2*(this.size / 200))) / 2)+ (0.5 * this.size/200);
    let topping_x = x + (0.3 * this.size/200);
    topping1.position = [topping_x, topping_y, 0.0];
    topping1.size = this.size / 3;
    topping1.segments = 8;
    topping1.render();

    // topping 2
    let topping2 = new Circle();
    topping2.color = [188/255, 30/255, 23/255, 1.0];
    topping_y = ((y + (y - 2*(this.size / 200))) / 2) - (0.2 * this.size/200);
    topping_x = x - (0.1 * this.size/200);
    topping2.position = [topping_x, topping_y, 0.0];
    topping2.size = this.size / 3;
    topping2.segments = 8;
    topping2.render();

    // topping3
    let topping3_a = new Circle();
    topping2.color = [133/255, 149/255, 80/255, 1.0];
    topping_y = ((y + (y - 2*(this.size / 200))) / 2)+ (0.5 * this.size/200);
    topping_x = x - (0.3 * this.size/200);
    topping2.position = [topping_x, topping_y, 0.0];
    topping2.size = this.size / 3;
    topping2.segments = 9;
    topping2.render();

    let topping3_b = new Circle();
    topping2.color = this.color;
    topping_y = ((y + (y - 2*(this.size / 200))) / 2)+ (0.5 * this.size/200);
    topping_x = x - (0.3 * this.size/200);
    topping2.position = [topping_x, topping_y, 0.0];
    topping2.size = this.size / 6;
    topping2.segments = 9;
    topping2.render();

  }
}
