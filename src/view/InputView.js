import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getUserNumbers() {
    const user = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const userList = user.split('').map((v) => Number(v));
    return userList;
  },
  async restartGame() {
    const user = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    );
    if (user === '1') return true;
    return false;
  },
};

export default InputView;
