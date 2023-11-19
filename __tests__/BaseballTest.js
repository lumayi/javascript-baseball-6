import Baseball from '../src/Baseball.js';

describe('기능 테스트', () => {
  test('같은 수가 같은 자리에 3번 있으면, 3스트라이크', () => {
    // given
    const computer = [1, 2, 3];
    const user = [1, 2, 3];
    const baseball = new Baseball();
    const expected = { ball: 0, strike: 3 };

    // when
    const result = baseball.compareNumbers(computer, user);

    // then
    expect(result).toEqual(expected);
  });
  test('같은 수가 다른 자리에 2번 있으면, 2볼', () => {
    // given
    const computer = [1, 2, 3];
    const user = [3, 1, 9];
    const baseball = new Baseball();
    const expected = { ball: 2, strike: 0 };

    // when
    const result = baseball.compareNumbers(computer, user);

    // then
    expect(result).toEqual(expected);
  });
  test('같은 수가 같은 자리에 1번, 다른 자리에 2번 있으면, 2볼 1스트라이크', () => {
    // given
    const computer = [1, 2, 3];
    const user = [1, 3, 2];
    const baseball = new Baseball();
    const expected = { ball: 2, strike: 1 };

    // when
    const result = baseball.compareNumbers(computer, user);

    // then
    expect(result).toEqual(expected);
  });
  test('같은 수가 존재하지 않으면, 낫싱', () => {
    // given
    const computer = [1, 2, 3];
    const user = [4, 5, 6];
    const baseball = new Baseball();
    const expected = { ball: 0, strike: 0 };

    // when
    const result = baseball.compareNumbers(computer, user);

    // then
    expect(result).toEqual(expected);
  });
});

describe('예외 테스트', () => {
  test.each([[['l', 'o', 'o']], [[1, 2, ' ']]])(
    '정수가 아닐 경우, 예외 발생',
    (num) => {
      const user = num;
      const baseball = new Baseball();

      expect(() => {
        baseball.validate(user);
      }).toThrow('[ERROR] 3자리 정수만 입력 가능합니다.');
    },
  );

  test.each([[[1, 2, 3, 4]], [[1, 2]]])(
    '3자리 수가 아닐 경우, 예외 발생',
    (num) => {
      const user = num;
      const baseball = new Baseball();

      expect(() => {
        baseball.validate(user);
      }).toThrow('[ERROR] 3자리 정수만 입력 가능합니다.');
    },
  );

  test('범위 내의 수가 아닐 경우, 예외 발생', () => {
    const user = [1, 2, 0];
    const baseball = new Baseball();

    expect(() => {
      baseball.validate(user);
    }).toThrow('[ERROR] 범위 내의 숫자만 입력 가능합니다.');
  });

  test('각 자리 수가 중복될 경우, 예외 발생', () => {
    const user = [1, 2, 2];
    const baseball = new Baseball();

    expect(() => {
      baseball.validate(user);
    }).toThrow('[ERROR] 각 자리의 숫자는 모두 달라야합니다.');
  });
});
