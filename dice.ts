export class Dice {
  sides: number;

  constructor(sides: number) {
    this.sides = sides;
  }

  roll(): number  {
    return this._getRoll();
  }

  rolls(n: number): number[] {
    if (n <= 0) {
      throw new Error("Value must be 1 or greater");
    }
    return Array(n).fill(0).map(_ => this._getRoll());
  }
  _getRoll(): number {
    let n = Math.random();
    return Math.floor(n * this.sides) + 1;
  }

}

export const d4 = () => new Dice(4);
export const d6 = () => new Dice(6);
export const d8 = () => new Dice(8);
export const d10 = () => new Dice(10);
export const d12 = () => new Dice(12);
export const d20 = () => new Dice(20);
export const d100 = () => new Dice(100);

