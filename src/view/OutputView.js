import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResult(result) {
    const { ball, strike } = result;
    if (!ball && !strike) return Console.print('낫싱');
    if (ball && !strike) return Console.print(`${ball}볼`);
    if (!ball && strike) return Console.print(`${strike}스트라이크`);
    return Console.print(`${ball}볼 ${strike}스트라이크`);
  },
};

export default OutputView;
