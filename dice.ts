export class Dice {
  sides: number;

  constructor(sides: number) {
    this.sides = sides;
  }

  roll(): number {
    let n = Math.random();
    return Math.floor(n * this.sides) + 1;
  }
}
