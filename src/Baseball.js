import { BASEBALL_RULES, ERROR_MSG } from './constants.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

export default class Baseball {
  #computer;

  constructor(computer) {
    this.#computer = computer;
  }

  #validate(user) {
    this.#isThreeDigits(user);
    user.forEach((num, index) => {
      this.#isInteger(num);
      this.#isWithinRange(num);
      this.#isDifferent(user, num, index);
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

  #isDifferent(user, num, index) {
    if (user.indexOf(num) !== index) {
      throw new Error(ERROR_MSG.DIFFERENT_DIGITS_ONLY);
    }
  }

  async playBall() {
    let endGame = false;
    while (!endGame) {
      const user = await InputView.getUserNumbers();
      this.#validate(user);
      const result = this.#compareNumbers(user);
      if (result.strike === 3) endGame = true;
      OutputView.printResult(result);
    }
  }

  #compareNumbers(user) {
    const result = { ball: 0, strike: 0 };
    const ball = this.#checkBall(user);
    const strike = this.#checkStrike(user);
    if (strike || ball) return { ball: ball - strike, strike };
    return result;
  }

  #checkBall(user) {
    let ball = 0;
    this.#computer.forEach((v) => {
      if (user.includes(v)) ball += 1;
    });
    return ball;
  }

  #checkStrike(user) {
    let strike = 0;
    this.#computer.forEach((v, i) => {
      if (v === user[i]) strike += 1;
    });
    return strike;
  }
}
