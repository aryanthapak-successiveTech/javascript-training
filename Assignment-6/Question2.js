// Create a class Shape with properties width and height and methods getArea().
// Create two classes Rectangle and Triangle that inherit from the Shape class
// and implement the getArea() method for their respective shapes.

class Shape {
  constructor(width, height) {
      if(isNaN(height) || isNaN(base)){
      console.error(`Enter proper integer values in width and height you entered height :${this.height} width : ${this.width}`)
      return this;
    }
    this.width = width;
    this.height = height;
  }

  getArea() {}
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    console.log(`Rectangle Area : ${this.height * this.width}`);
    return this;
  }
}

class Triangle extends Shape {
  constructor(height, base) {
    super(height, base);
    this.base=base;
  }

  getArea() {
     if(isNaN(this.height) || isNaN(this.base)){
      console.error(`Enter proper integer values in width and height you entered height :${this.height} width : ${this.width}`)
      return this;
    }
    console.log(`Traingle area : ${(1 / 2) * this.height * this.base}`);
  }
}

const rectangle = new Rectangle(10, 11);
const traingle = new Triangle(10, "A");

rectangle.getArea();
traingle.getArea();
