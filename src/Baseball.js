import { BASEBALL_RULES, ERROR_MSG } from './constants';

export default class Baseball {
  #computer;

  #user;

  constructor(computer, user) {
    this.#validate(user);
    this.#computer = computer;
    this.#user = user;
  }

  #validate(user) {
    this.#isThreeDigits(user);
    user.forEach((num) => {
      this.#isInteger(num);
      this.#isWithinRange(num);
    });
  }

  #isThreeDigits(user) {
    if (user.length !== 3) {
      throw new Error(ERROR_MSG.THREE_DIGITS_ONLY);
    }
  }

  #isInteger(num) {
    if (Number.isNaN(num) || !Number.isInteger(num)) {
      throw Error(ERROR_MSG.THREE_DIGITS_ONLY);
    }
  }

  #isWithinRange(num) {
    if (num < BASEBALL_RULES.MIN_NUM || num > BASEBALL_RULES.MAX_NUM) {
      throw new Error(ERROR_MSG.WITHIN_RANGE);
    }
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
