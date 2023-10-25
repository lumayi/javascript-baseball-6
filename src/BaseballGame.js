import { Random, Console } from '@woowacourse/mission-utils';
import { ErrorMessage, ConsoleMessage } from './Messages.js';

export class BaseballGame {
  static DIGITS_COUNT = 3;
  static MIN_DIGIT = 1;
  static MAX_DIGIT = 9;
  static RESTART_GAME = 1;
  static GAME_OVER = 2;

  constructor() {
    this.computer = null;
  }

  init() {
    this.computer = this.getRandomComputerNumber();
    Console.print(ConsoleMessage.START_GAME);
    return this.playBaseball(this.computer);
  }

  async playBaseball(computer) {
    let result = false;
    while (!result) {
      const user = await this.getUserNumber();
      const score = this.getScore(computer, user);
      result = this.printResult(score);
    }
    await this.restartGame(result);
  }

  getRandomComputerNumber() {
    const computer = [];
    while (computer.length < BaseballGame.DIGITS_COUNT) {
      const num = Random.pickNumberInRange(
        BaseballGame.MIN_DIGIT,
        BaseballGame.MAX_DIGIT
      );
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer;
  }

  async getUserNumber() {
    const user = await Console.readLineAsync(ConsoleMessage.USER_NUMBER);
    const checkedNum = this.validateUserDigits(user.trim());
    const parsedNum = checkedNum.map((v) => parseInt(v));
    return parsedNum;
  }

  validateUserDigits(user) {
    if (isNaN(user)) throw new Error(ErrorMessage.NUMBERS_ONLY);
    const array = user.split('');
    if (
      array.length > BaseballGame.DIGITS_COUNT ||
      array.length < BaseballGame.DIGITS_COUNT
    )
      throw new Error(ErrorMessage.THREE_DIGITS_ONLY);
    const dupCheck = array.filter((v, i) => user.indexOf(v) === i);
    if (dupCheck.includes('0'))
      throw new Error(ErrorMessage.VALID_FROM_ONE_TO_NINE);
    if (dupCheck.length < BaseballGame.DIGITS_COUNT)
      throw new Error(ErrorMessage.MUST_DIFFERENT_DIGITS);
    return dupCheck;
  }

  getScore(computer, user) {
    const result = { strike: 0, ball: 0 };
    computer.forEach((v, i) => {
      if (v === user[i]) return result.strike++;
      if (v !== user[i] && user.includes(v)) return result.ball++;
    });
    return result;
  }

  printResult(score) {
    const { strike, ball } = score;
    if (strike && ball) Console.print(`${strike}스트라이크 ${ball}볼`);
    if (strike && !ball) Console.print(`${strike}스트라이크`);
    if (!strike && ball) Console.print(`${ball}볼`);
    if (!strike && !ball) Console.print('낫싱');

    if (strike === BaseballGame.DIGITS_COUNT) return true;
    else return false;
  }

  restartGame(answer) {
    if (answer) {
      Console.print(ConsoleMessage.ALL_CORRECT);
      return this.endGame();
    } else return this.playBaseball(this.computer);
  }

  async endGame() {
    const num = await Console.readLineAsync(ConsoleMessage.RESTART_GAME_OR_NOT);
    return this.validateAnswer(num);
  }

  validateAnswer(num) {
    const answer = parseInt(num);
    if (answer === BaseballGame.RESTART_GAME) return this.init();
    else if (answer === BaseballGame.GAME_OVER) return;
    else throw new Error(ErrorMessage.ONE_OR_TWO_ONLY);
  }
}
