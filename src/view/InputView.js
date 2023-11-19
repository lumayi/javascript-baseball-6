import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getUserNumbers() {
    const user = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const userList = user.split('').map((v) => Number(v));
    return userList;
  },
};

export default InputView;
