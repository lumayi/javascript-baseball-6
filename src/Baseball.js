export default class Baseball {
  #computer;

  #user;

  constructor(computer, user) {
    this.#computer = computer;
    this.#user = user;
  }

  compareNumbers() {
    const ball = this.#checkBall();
  }

  #checkBall() {
    let ball = 0;
    this.#computer.forEach((v) => {
      if (this.#computer.includes(v)) ball += 1;
    });
    return ball;
  }
}
