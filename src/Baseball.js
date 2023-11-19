export default class Baseball {
  #computer;

  #user;

  constructor(computer, user) {
    this.#computer = computer;
    this.#user = user;
  }

  compareNumbers() {}

  #checkBall() {
    let ball = 0;
    this.#computer.forEach((v) => {
      if (this.#computer.includes(v)) ball += 1;
    });
    return ball;
  }

  #checkStrike() {
    let strike;
    this.#computer.forEach((v, i) => {
      if (v === this.#user[i]) strike += 1;
    });
    return strike;
  }
}
