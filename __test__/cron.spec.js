import Cron from '../index';

const IS_EMPTY = 'list is empty';
const MORE_THAN_ONE = 'list length only one';
const MORE_THAN_TWO = 'list length only two';
const IS_NOT_TYPE = 'Type: "test" is not a valid type.';

describe('Seconds', () => {

  const cron = new Cron();
  let result = '';

  it('every', () => {

    result = cron.seconds({
      type: 'every',
    });
    expect(result).toEqual('* * * ? * * *');

  });

  it('start', () => {

    result = cron.seconds({
      type: 'start',
      list: [20, 40],
    });
    expect(result).toEqual('20/40 * * ? * * *');

  });

  it('start list is empty', () => {

    try {

      cron.seconds({
        type: 'start',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('start length three', () => {

    try {

      result = cron.seconds({
        type: 'start',
        list: [20, 40, 60],
      });
      expect(result).toEqual('20/40 * * ? * * *');

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_TWO);

    }

  });

  it('start validate first', () => {

    try {

      result = cron.seconds({
        type: 'start',
        list: [-1, 52],
      });
      expect(result).toEqual('-1/40 * * ? * * *');

    } catch (error) {

      expect(error.message).toEqual('The range is 0 - 59');

    }

  });

  it('start validate last', () => {

    try {

      result = cron.seconds({
        type: 'start',
        list: [1, -52],
      });
      expect(result).toEqual('1/-52 * * ? * * *');

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 60');

    }

  });

  it('specific', () => {

    result = cron.seconds({
      type: 'specific',
      list: [0, 1, 10, 20, 33, 44],
    });
    expect(result).toEqual('0,1,10,20,33,44 * * ? * * *');

  });

  it('specific list empty', () => {

    result = cron.seconds({
      type: 'specific',
      list: [],
    });

    expect(result).toEqual('0 * * ? * * *');

  });

  it('specific validate', () => {

    try {

      result = cron.seconds({
        type: 'specific',
        list: [-1],
      });
      expect(result).toEqual('-1 * * ? * * *');

    } catch (error) {

      expect(error.message).toEqual('The range is 0 - 59');

    }

  });

  it('between', () => {

    result = cron.seconds({
      type: 'between',
      list: [52, 20],
    });

    expect(result).toEqual('52-20 * * ? * * *');

  });

  it('between list is empty', () => {

    try {

      cron.seconds({
        type: 'between',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('between length three', () => {

    try {

      cron.seconds({
        type: 'between',
        list: [52, 20, 10],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_TWO);

    }

  });

  it('between validate first', () => {

    try {

      result = cron.seconds({
        type: 'between',
        list: [-1, 61],
      });
      expect(result).toEqual('-1-61 * * ? * * *');

    } catch (error) {

      expect(error.message).toEqual('The range is 0 - 59');

    }

  });

  it('between validate last', () => {

    try {

      result = cron.seconds({
        type: 'between',
        list: [1, 61],
      });
      expect(result).toEqual('1-61 * * ? * * *');

    } catch (error) {

      expect(error.message).toEqual('The range is 0 - 59');

    }

  });

  it('not a valida type', () => {

    try {

      cron.seconds({
        type: 'test',
        list: [1, 61],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_NOT_TYPE);

    }

  });

  it('from every to specific', () => {

    result = cron.seconds({
      type: 'every',
    });
    result = cron.seconds({
      type: 'specific',
      list: [0, 1, 10, 20, 33, 44],
    });
    expect(result).toEqual('0,1,10,20,33,44 * * ? * * *');

  });

});

describe('Minutes', () => {

  const cron = new Cron();
  let result = '';

  it('every', () => {

    result = cron.minutes({
      type: 'every',
    });
    expect(result).toEqual('* * * ? * * *');

  });

  it('start', () => {

    result = cron.minutes({
      type: 'start',
      list: [12, 32],
    });
    expect(result).toEqual('* 12/32 * ? * * *');

  });

  it('start list is empty', () => {

    try {

      cron.minutes({
        type: 'start',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('start length three', () => {

    try {

      result = cron.minutes({
        type: 'start',
        list: [20, 40, 60],
      });
      expect(result).toEqual('* 20/40/60 * ? * * *');

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_TWO);

    }

  });

  it('start validate first', () => {

    try {

      result = cron.minutes({
        type: 'start',
        list: [-1, 52],
      });
      expect(result).toEqual('* -1/52 * ? * * *');

    } catch (error) {

      expect(error.message).toEqual('The range is 0 - 59');

    }

  });

  it('start validate last', () => {

    try {

      result = cron.minutes({
        type: 'start',
        list: [1, -52],
      });
      expect(result).toEqual('* 1/-52 * ? * * *');

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 60');

    }

  });

  it('specific', () => {

    result = cron.minutes({
      type: 'specific',
      list: [0],
    });
    expect(result).toEqual('* 0 * ? * * *');

  });

  it('specific validate', () => {

    try {

      result = cron.minutes({
        type: 'specific',
        list: [12, 60],
      });
      expect(result).toEqual('* 12,60 * ? * * *');

    } catch (error) {

      expect(error.message).toEqual('The range is 0 - 59');

    }

  });

  it('specific list empty', () => {

    result = cron.minutes({
      type: 'specific',
      list: [],
    });

    expect(result).toEqual('* 0 * ? * * *');

  });

  it('between', () => {

    result = cron.minutes({
      type: 'between',
      list: [12, 32],
    });
    expect(result).toEqual('* 12-32 * ? * * *');

  });

  it('between list is empty', () => {

    try {

      cron.minutes({
        type: 'between',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('between length three', () => {

    try {

      cron.minutes({
        type: 'between',
        list: [12, 32, 14],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_TWO);

    }

  });

  it('between validate first', () => {

    try {

      cron.minutes({
        type: 'between',
        list: [61, 1],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 0 - 59');

    }

  });

  it('between validate last', () => {

    try {

      cron.minutes({
        type: 'between',
        list: [-1, 61],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 0 - 59');

    }

  });

  it('not a valid type', () => {

    try {

      cron.minutes({
        type: 'test',
      });

    } catch (error) {

      expect(error.message).toEqual(IS_NOT_TYPE);

    }

  });

  it('from between to specific', () => {

    result = cron.minutes({
      type: 'between',
      list: [12, 32],
    });
    result = cron.minutes({
      type: 'specific',
      list: [0, 1, 10, 20, 33, 44],
    });
    expect(result).toEqual('* 0,1,10,20,33,44 * ? * * *');

  });

});

describe('Seconds & Minutes', () => {

  const cron = new Cron();
  let result = '';

  it('between seconds & specific minutes', () => {

    result = cron.seconds({
      type: 'between',
      list: [17, 13],
    });

    result = cron.minutes({
      type: 'specific',
      list: [0, 1],
    });
    expect(result).toEqual('17-13 0,1 * ? * * *');

  });

});

describe('Hours', () => {

  const cron = new Cron();
  let result = '';

  it('every', () => {

    result = cron.hours({
      type: 'every',
    });
    expect(result).toEqual('* * * ? * * *');

  });

  it('start', () => {

    result = cron.hours({
      type: 'start',
      list: [17, 16],
    });
    expect(result).toEqual('* * 17/16 ? * * *');

  });

  it('start list is empty', () => {

    try {

      cron.hours({
        type: 'start',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('start length three', () => {

    try {

      cron.hours({
        type: 'start',
        list: [17, 18, 23],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_TWO);

    }

  });

  it('start validate first', () => {

    try {

      cron.hours({
        type: 'start',
        list: [24, 24],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 0 - 23');

    }

  });

  it('specific', () => {

    result = cron.hours({
      type: 'specific',
      list: [1, 14, 23],
    });
    expect(result).toEqual('* * 1,14,23 ? * * *');

  });

  it('specific list empty', () => {

    result = cron.hours({
      type: 'specific',
      list: [],
    });

    expect(result).toEqual('* * 0 ? * * *');

  });

  it('specific validate', () => {

    try {

      cron.hours({
        type: 'specific',
        list: [1, 14, 25],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 0 - 23');

    }

  });

  it('between', () => {

    result = cron.hours({
      type: 'between',
      list: [12, 23],
    });
    expect(result).toEqual('* * 12-23 ? * * *');

  });

  it('between list is empty', () => {

    try {

      cron.hours({
        type: 'between',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('between length three', () => {

    try {

      cron.hours({
        type: 'between',
        list: [12, 23, 22],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_TWO);

    }

  });

  it('between validate first', () => {

    try {

      cron.hours({
        type: 'between',
        list: [24, 23],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 0 - 23');

    }

  });

  it('between validate last', () => {

    try {

      cron.hours({
        type: 'between',
        list: [12, 24],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 0 - 23');

    }

  });

  it('not a valid type', () => {

    try {

      cron.hours({
        type: 'test',
      });

    } catch (error) {

      expect(error.message).toEqual(IS_NOT_TYPE);

    }

  });

  it('from between to specific', () => {

    result = cron.hours({
      type: 'between',
      list: [12, 23],
    });
    result = cron.hours({
      type: 'specific',
      list: [1, 14, 23],
    });
    expect(result).toEqual('* * 1,14,23 ? * * *');

  });

});

describe('Days', () => {

  const cron = new Cron();
  let result = '';

  it('every', () => {

    result = cron.days({
      type: 'every',
    });
    expect(result).toEqual('* * * ? * * *');

  });

  it('start', () => {

    result = cron.days({
      type: 'start',
      list: [2, 7],
    });
    expect(result).toEqual('* * * ? * 2/7 *');

  });

  it('start list is empty', () => {

    try {

      cron.days({
        type: 'start',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('start length three', () => {

    try {

      cron.days({
        type: 'start',
        list: [1, 2, 7],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_TWO);

    }

  });

  it('start validate first', () => {

    try {

      cron.days({
        type: 'start',
        list: [0, 1],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 7');

    }

  });

  it('start validate last', () => {

    try {

      cron.days({
        type: 'start',
        list: [1, 0],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 7');

    }

  });

  it('startOnMonth', () => {

    result = cron.days({
      type: 'startOnMonth',
      list: [9, 8],
    });
    expect(result).toEqual('* * * 9/8 * ? *');

  });

  it('startOnMonth list is empty', () => {

    try {

      cron.days({
        type: 'startOnMonth',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('startOnMonth length three', () => {

    try {

      cron.days({
        type: 'startOnMonth',
        list: [9, 8, 1],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_TWO);

    }

  });

  it('startOnMonth validate first', () => {

    try {

      cron.days({
        type: 'startOnMonth',
        list: [0, 31],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 31');

    }

  });

  it('startOnMonth validate last', () => {

    try {

      cron.days({
        type: 'startOnMonth',
        list: [1, 33],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 31');

    }

  });

  it('specific', () => {

    result = cron.days({
      type: 'specific',
      list: [2, 4, 6],
    });
    expect(result).toEqual('* * * ? * 2,4,6 *');

  });

  it('specific list empty', () => {

    result = cron.days({
      type: 'specific',
      list: [],
    });

    expect(result).toEqual('* * * ? * 1 *');

  });

  it('specific validate', () => {

    try {

      cron.days({
        type: 'specific',
        list: [0, 1, 5],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 7');

    }

  });

  it('specificOnMonth', () => {

    result = cron.days({
      type: 'specificOnMonth',
      list: [1, 15, 23, 31],
    });
    expect(result).toEqual('* * * 1,15,23,31 * ? *');

  });

  it('specificOnMonth list empty', () => {

    result = cron.days({
      type: 'specificOnMonth',
      list: [],
    });

    expect(result).toEqual('* * * 1 * ? *');

  });

  it('specificOnMonth validate', () => {

    try {

      cron.days({
        type: 'specificOnMonth',
        list: [1, 33],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 31');

    }

  });

  it('lastDayOnMonth', () => {

    result = cron.days({
      type: 'lastDayOnMonth',
    });
    expect(result).toEqual('* * * L * ? *');

  });

  it('lastWeekOnMonth', () => {

    result = cron.days({
      type: 'lastWeekOnMonth',
    });
    expect(result).toEqual('* * * LW * ? *');

  });

  it('lastSelectDayOnMonth', () => {

    result = cron.days({
      type: 'lastSelectDayOnMonth',
      list: [2],
    });
    expect(result).toEqual('* * * ? * 2L *');

  });

  it('lastSelectDayOnMonth list is empty', () => {

    try {

      cron.days({
        type: 'lastSelectDayOnMonth',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('lastSelectDayOnMonth length two', () => {

    try {

      cron.days({
        type: 'lastSelectDayOnMonth',
        list: [2, 1],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_ONE);

    }

  });

  it('lastSelectDayOnMonth validate', () => {

    try {

      cron.days({
        type: 'lastSelectDayOnMonth',
        list: [8],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 7');

    }

  });

  it('before', () => {

    result = cron.days({
      type: 'before',
      list: [15],
    });
    expect(result).toEqual('* * * L-15 * ? *');

  });

  it('before list is empty', () => {

    try {

      cron.days({
        type: 'before',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('before length two', () => {

    try {

      cron.days({
        type: 'before',
        list: [15, 1],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_ONE);

    }

  });

  it('before validate', () => {

    try {

      cron.days({
        type: 'before',
        list: [33],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 31');

    }

  });

  it('near', () => {

    result = cron.days({
      type: 'near',
      list: [11],
    });
    expect(result).toEqual('* * * 11W * ? *');

  });

  it('near list is empty', () => {

    try {

      cron.days({
        type: 'near',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('near length two', () => {

    try {

      cron.days({
        type: 'near',
        list: [12, 11],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_ONE);

    }

  });

  it('near validate', () => {

    try {

      cron.days({
        type: 'near',
        list: [33],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 31');

    }

  });

  it('dayOnEveryMonth', () => {

    result = cron.days({
      type: 'dayOnEveryMonth',
      list: [1, 5],
    });
    expect(result).toEqual('* * * ? * 1#5 *');

  });

  it('dayOnEveryMonth list is empty', () => {

    try {

      cron.days({
        type: 'dayOnEveryMonth',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('dayOnEveryMonth length three', () => {

    try {

      cron.days({
        type: 'dayOnEveryMonth',
        list: [1, 5, 6],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_TWO);

    }

  });

  it('dayOnEveryMonth validate first', () => {

    try {

      cron.days({
        type: 'dayOnEveryMonth',
        list: [8, 1],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 7');

    }

  });

  it('dayOnEveryMonth validate last', () => {

    try {

      cron.days({
        type: 'dayOnEveryMonth',
        list: [7, 6],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 5');

    }

  });

  it('not a valid type', () => {

    try {

      cron.days({
        type: 'test',
      });

    } catch (error) {

      expect(error.message).toEqual(IS_NOT_TYPE);

    }

  });

});

describe('Months', () => {

  const cron = new Cron();
  let result = '';

  it('every', () => {

    result = cron.months({
      type: 'every',
    });
    expect(result).toEqual('* * * ? * * *');

  });

  it('start', () => {

    result = cron.months({
      type: 'start',
      list: [3, 12],
    });
    expect(result).toEqual('* * * ? 3/12 * *');

  });

  it('start list is empty', () => {

    try {

      cron.months({
        type: 'start',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('start length three', () => {

    try {

      cron.months({
        type: 'start',
        list: [12, 12, 1],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_TWO);

    }

  });

  it('start validate first', () => {

    try {

      cron.months({
        type: 'start',
        list: [13, 1],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 12');

    }

  });

  it('start validate last', () => {

    try {

      cron.months({
        type: 'start',
        list: [12, 13],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 12');

    }

  });

  it('specific', () => {

    result = cron.months({
      type: 'specific',
      list: [1, 3, 4],
    });
    expect(result).toEqual('* * * ? 1,3,4 * *');

  });

  it('specific list empty', () => {

    result = cron.months({
      type: 'specific',
      list: [],
    });

    expect(result).toEqual('* * * ? 1 * *');

  });

  it('specific validate', () => {

    try {

      cron.months({
        type: 'specific',
        list: [1, 3, 4, 14],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 12');

    }

  });

  it('between', () => {

    result = cron.months({
      type: 'between',
      list: [12, 1],
    });
    expect(result).toEqual('* * * ? 12-1 * *');

  });

  it('between list is empty', () => {

    try {

      cron.months({
        type: 'between',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('between length three', () => {

    try {

      cron.months({
        type: 'between',
        list: [12, 1, 3],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_TWO);

    }

  });

  it('between validate first', () => {

    try {

      cron.months({
        type: 'between',
        list: [13, 1],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 12');

    }

  });

  it('between validate last', () => {

    try {

      cron.months({
        type: 'between',
        list: [1, 13],
      });

    } catch (error) {

      expect(error.message).toEqual('The range is 1 - 12');

    }

  });

  it('not a valid type', () => {

    try {

      cron.months({
        type: 'test',
      });

    } catch (error) {

      expect(error.message).toEqual(IS_NOT_TYPE);

    }

  });

  it('from between to specific', () => {

    result = cron.months({
      type: 'between',
      list: [12, 1],
    });
    result = cron.months({
      type: 'specific',
      list: [1, 3, 4],
    });
    expect(result).toEqual('* * * ? 1,3,4 * *');

  });

});

describe('Years', () => {

  const cron = new Cron();
  let result = '';

  it('every', () => {

    result = cron.years({
      type: 'every',
    });
    expect(result).toEqual('* * * ? * * *');

  });

  it('start', () => {

    result = cron.years({
      type: 'start',
      list: [2021, 1],
    });
    expect(result).toEqual('* * * ? * * 2021/1');

  });

  it('start number', () => {

    try {

      cron.years({
        type: 'start',
        list: ['2021', 1],
      });

    } catch (error) {

      expect(error.message).toEqual('2021 type is not number');

    }

  });

  it('start list is empty', () => {

    try {

      cron.years({
        type: 'start',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('start length three', () => {

    try {

      cron.years({
        type: 'start',
        list: [2021, 2022, 1],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_TWO);

    }

  });

  it('specific', () => {

    result = cron.years({
      type: 'specific',
      list: [2020, 2021, 2022],
    });
    expect(result).toEqual('* * * ? * * 2020,2021,2022');

  });

  it('specific value is string', () => {

    try {

      cron.years({
        type: 'specific',
        list: ['2011'],
      });

    } catch (error) {

      expect(error.message).toEqual('2011 type is not number');

    }

  });

  it('specific list empty', () => {

    try {

      result = cron.years({
        type: 'specific',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('between', () => {

    result = cron.years({
      type: 'between',
      list: [2022, 2023],
    });
    expect(result).toEqual('* * * ? * * 2022-2023');

  });

  it('between list is empty', () => {

    try {

      cron.years({
        type: 'between',
        list: [],
      });

    } catch (error) {

      expect(error.message).toEqual(IS_EMPTY);

    }

  });

  it('between number', () => {

    try {

      cron.years({
        type: 'between',
        list: ['2011', 2022],
      });

    } catch (error) {

      expect(error.message).toEqual('2011 type is not number');

    }

  });

  it('between length three', () => {

    try {

      cron.years({
        type: 'between',
        list: [2011, 2022, 2023],
      });

    } catch (error) {

      expect(error.message).toEqual(MORE_THAN_TWO);

    }

  });

  it('between start more than end', () => {

    try {

      cron.years({
        type: 'between',
        list: [2023, 2022],
      });

    } catch (error) {

      expect(error.message).toEqual('start must come before end following normal calendar sequence.');

    }

  });

  it('not a valid type', () => {

    try {

      cron.years({
        type: 'test',
      });

    } catch (error) {

      expect(error.message).toEqual(IS_NOT_TYPE);

    }

  });

  it('from between to specific', () => {

    result = cron.years({
      type: 'between',
      list: [2022, 2023],
    });
    result = cron.years({
      type: 'specific',
      list: [2020, 2021, 2022],
    });
    expect(result).toEqual('* * * ? * * 2020,2021,2022');

  });

});

describe('All', () => {

  const cron = new Cron();

  it('validate result 1', () => {

    let result = cron.seconds({
      type: 'start',
      list: [20, 40],
    });

    result = cron.minutes({
      type: 'specific',
      list: [0, 1],
    });

    result = cron.hours({
      type: 'start',
      list: [23, 1],
    });

    result = cron.days({
      type: 'dayOnEveryMonth',
      list: [3, 5],
    });

    result = cron.months({
      type: 'start',
      list: [12, 12],
    });

    result = cron.years({
      type: 'start',
      list: [2022, 80],
    });

    expect(result).toEqual('20/40 0,1 23/1 ? 12/12 3#5 2022/80');

  });

  it('validate result 2', () => {

    let result = cron.seconds({
      type: 'every',
    });

    result = cron.minutes({
      type: 'start',
      list: [0, 1],
    });

    result = cron.hours({
      type: 'specific',
      list: [0, 1, 2, 3],
    });

    result = cron.days({
      type: 'specific',
      list: [1],
    });

    result = cron.months({
      type: 'start',
      list: [12, 12],
    });

    result = cron.years({
      type: 'between',
      list: [2021, 2022],
    });

    expect(result).toEqual('* 0/1 0,1,2,3 ? 12/12 1 2021-2022');

  });

});

describe('Catch Error', () => {

  it('list type is array', () => {

    try {

      const cron = new Cron();

      cron.seconds({
        type: 'start',
        list: 'test',
      });

    } catch (error) {

      expect(error.message).toEqual('list type is array');

    }

  });

  it('num type is number', () => {

    try {

      const cron = new Cron();

      cron.seconds({
        type: 'start',
        list: ['01', 2],
      });

    } catch (error) {

      expect(error.message).toEqual('01 type is not number');

    }

  });

});
