import Computer from './Computer.js';
import { BASEBALL_RULES, ERROR_MSG } from './constants.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

export default class Baseball {
  async playBall() {
    let endGame = false;
    const computer = Computer.getComputerNumber();
    while (!endGame) {
      const user = await InputView.getUserNumbers();
      this.validate(user);
      const result = this.compareNumbers(computer, user);
      if (result.strike === 3) endGame = true;
      OutputView.printResult(result);
    }
    return this.#restartGame();
  }

  validate(user) {
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

  async #restartGame() {
    OutputView.printAllCorrect();
    const restartGame = await InputView.restartGame();
    if (restartGame) return this.playBall();
  }

  compareNumbers(computer, user) {
    const result = { ball: 0, strike: 0 };
    const ball = this.#checkBall(computer, user);
    const strike = this.#checkStrike(computer, user);
    if (strike || ball) return { ball: ball - strike, strike };
    return result;
  }

  #checkBall(computer, user) {
    let ball = 0;
    computer.forEach((v) => {
      if (user.includes(v)) ball += 1;
    });
    return ball;
  }

  #checkStrike(computer, user) {
    let strike = 0;
    computer.forEach((v, i) => {
      if (v === user[i]) strike += 1;
    });
    return strike;
  }
}
