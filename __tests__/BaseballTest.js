import Baseball from '../src/Baseball';

describe('기능 테스트', () => {
  test('같은 수가 같은 자리에 3번 있으면, 3스트라이크', () => {
    // given
    const computer = [1, 2, 3];
    const user = [1, 2, 3];
    const baseball = new Baseball(computer, user);
    const expected = { ball: 0, strike: 3, nothing: 0 };

    // when
    const result = baseball.compareNumbers();

    // then
    expect(result).toEqual(expected);
  });
  test('같은 수가 다른 자리에 2번 있으면, 2볼', () => {
    // given
    const computer = [1, 2, 3];
    const user = [3, 1, 9];
    const baseball = new Baseball(computer, user);
    const expected = { ball: 2, strike: 0, nothing: 0 };

    // when
    const result = baseball.compareNumbers();

    // then
    expect(result).toEqual(expected);
  });
  test('같은 수가 같은 자리에 1번, 다른 자리에 2번 있으면, 2볼 1스트라이크', () => {
    // given
    const computer = [1, 2, 3];
    const user = [1, 3, 2];
    const baseball = new Baseball(computer, user);
    const expected = { ball: 2, strike: 1, nothing: 0 };

    // when
    const result = baseball.compareNumbers();

    // then
    expect(result).toEqual(expected);
  });
  test('같은 수가 존재하지 않으면, 낫싱', () => {
    // given
    const computer = [1, 2, 3];
    const user = [4, 5, 6];
    const baseball = new Baseball(computer, user);
    const expected = { ball: 0, strike: 0, nothing: 1 };

    // when
    const result = baseball.compareNumbers();

    // then
    expect(result).toEqual(expected);
  });
});
