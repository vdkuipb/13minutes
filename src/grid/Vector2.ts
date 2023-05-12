export default class Vector2 {
  constructor(public x: number, public y: number) {}

  add(v2: Vector2) {
    return new Vector2(this.x + v2.x, this.y + v2.y);
  }

  multiply(v2: Vector2) {
    return new Vector2(this.x * v2.x, this.y * v2.y);
  }
}
