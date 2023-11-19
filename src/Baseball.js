export default class Baseball {
  #computer;

  #user;

  constructor(computer, user) {
    this.#computer = computer;
    this.#user = user;
  }

  compareNumbers() {
    const result = { ball: 0, strike: 0, nothing: 0 };
    const ball = this.#checkBall();
    const strike = this.#checkStrike();
    if (strike || ball) return { ...result, ball: ball - strike, strike };
    return { ...result, nothing: 1 };
  }

  #checkBall() {
    let ball = 0;
    this.#computer.forEach((v) => {
      if (this.#user.includes(v)) ball += 1;
    });
    return ball;
  }

  #checkStrike() {
    let strike = 0;
    this.#computer.forEach((v, i) => {
      if (v === this.#user[i]) strike += 1;
    });
    return strike;
  }
}
