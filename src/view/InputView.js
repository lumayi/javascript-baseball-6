import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getUserNumbers() {
    const user = await Console.readLineAsync('숫자를 입력해주세요 : ');
    return user.split('');
  },
};

export default InputView;
