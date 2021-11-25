export class CustomCalculator {
  private _a: number
  private _b: number

  constructor (a: number, b: number) {
    this._a = a
    this._b = b
  }

  public plus (): number {
    return this._a + this._b
  }
}
