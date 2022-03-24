function isArray(ary) {

  if (!Array.isArray(ary)) {

    throw Error('list type is array');

  }
  return true;

}

function validate(num, min, max) {

  if (typeof num !== 'number') {

    throw Error(`${num} type is not number`);

  }

  if (num > max || num < min) {

    throw Error(`The range is ${min} - ${max}`);

  }

}

const IS_EMPTY = 'list is empty';
const MORE_THAN_ONE = 'list length only one';
const MORE_THAN_TWO = 'list length only two';

class Cron {

  constructor() {

    this.cron = '* * * ? * * *';
    return this;

  }
  spliceIntoPosition(position, char, str) {

    if (typeof str === 'string') {

      this.cron = str;

    }

    let def = this.cron.split(' ');
    def.splice(position, 1, char);
    this.cron = def.join(' ');
    return this;

  }
  seconds(
    options = {
      type: 'every',
      list: [],
    },
  ) {

    const { type, list } = options;

    const execute = {
      every: () => this.spliceIntoPosition(0, '*'),
      start: () => {

        if (isArray(list) && list.length) {

          if (list.length > 2) {

            throw Error(MORE_THAN_TWO);

          }

          validate(list[0], 0, 59);
          validate(list[1], 1, 60);

          this.spliceIntoPosition(0, list.join('/'));

        } else {

          throw Error(IS_EMPTY);

        }

      },
      specific: () => {

        if (isArray(list)) {

          if (list.length) {

            list.forEach(item => validate(item, 0, 59));

          }
          const char = list.length ? list.join(',') : 0;
          this.spliceIntoPosition(0, char);

        }

      },
      between: () => {

        if (isArray(list) && list.length) {

          if (list.length > 2) {

            throw Error(MORE_THAN_TWO);

          }

          list.forEach(item => validate(item, 0, 59));

          this.spliceIntoPosition(0, list.join('-'));

        } else {

          throw Error(IS_EMPTY);

        }

      },
    };

    const fun = execute[type];
    if (!fun) {

      throw Error(`Type: "${type}" is not a valid type.`);

    }

    fun();

    return this.cron;

  }
  minutes(
    options = {
      type: 'every',
      list: [],
    },
  ) {

    const { type, list } = options;

    const execute = {
      every: () => this.spliceIntoPosition(1, '*'),
      start: () => {

        if (isArray(list) && list.length) {

          if (list.length > 2) {

            throw Error(MORE_THAN_TWO);

          }

          validate(list[0], 0, 59);
          validate(list[1], 1, 60);

          this.spliceIntoPosition(1, list.join('/'));

        } else {

          throw Error(IS_EMPTY);

        }

      },
      specific: () => {

        if (isArray(list)) {

          if (list.length) {

            list.forEach(item => validate(item, 0, 59));

          }
          const char = list.length ? list.join(',') : 0;
          this.spliceIntoPosition(1, char);

        }

      },
      between: () => {

        if (isArray(list) && list.length) {

          if (list.length > 2) {

            throw Error(MORE_THAN_TWO);

          }

          list.forEach(item => validate(item, 0, 59));

          this.spliceIntoPosition(1, list.join('-'));

        } else {

          throw Error(IS_EMPTY);

        }

      },
    };

    const fun = execute[type];
    if (!fun) {

      throw Error(`Type: "${type}" is not a valid type.`);

    }

    fun();

    return this.cron;

  }
  hours(
    options = {
      type: 'every',
      list: [],
    },
  ) {

    const { type, list } = options;

    const execute = {
      every: () => this.spliceIntoPosition(2, '*'),
      start: () => {

        if (isArray(list) && list.length) {

          if (list.length > 2) {

            throw Error(MORE_THAN_TWO);

          }

          validate(list[0], 0, 23);
          validate(list[1], 1, 24);

          this.spliceIntoPosition(2, list.join('/'));

        } else {

          throw Error(IS_EMPTY);

        }

      },
      specific: () => {

        if (isArray(list)) {

          if (list.length) {

            list.forEach(item => validate(item, 0, 23));

          }
          const char = list.length ? list.join(',') : 0;
          this.spliceIntoPosition(2, char);

        }

      },
      between: () => {

        if (isArray(list) && list.length) {

          if (list.length > 2) {

            throw Error(MORE_THAN_TWO);

          }

          list.forEach(item => validate(item, 0, 23));

          this.spliceIntoPosition(2, list.join('-'));

        } else {

          throw Error(IS_EMPTY);

        }

      },
    };

    const fun = execute[type];
    if (!fun) {

      throw Error(`Type: "${type}" is not a valid type.`);

    }

    fun();

    return this.cron;

  }
  days(
    options = {
      type: 'every',
      list: [],
    },
  ) {

    const { type, list } = options;

    const execute = {
      every: () => {

        this.spliceIntoPosition(3, '?').spliceIntoPosition(5, '*');

      },
      start: () => {

        if (isArray(list) && list.length) {

          if (list.length > 2) {

            throw Error(MORE_THAN_TWO);

          }

          list.forEach(item => validate(item, 1, 7));

          this.spliceIntoPosition(3, '?').spliceIntoPosition(5, list.join('/'));

        } else {

          throw Error(IS_EMPTY);

        }

      },
      startOnMonth: () => {

        if (isArray(list) && list.length) {

          if (list.length > 2) {

            throw Error(MORE_THAN_TWO);

          }

          list.forEach(item => validate(item, 1, 31));

          this.spliceIntoPosition(5, '?').spliceIntoPosition(3, list.join('/'));

        } else {

          throw Error(IS_EMPTY);

        }

      },
      specific: () => {

        if (isArray(list)) {

          if (list.length) {

            list.forEach(item => validate(item, 1, 7));

          }

          const char = list.length ? list.join(',') : 1;

          this.spliceIntoPosition(3, '?').spliceIntoPosition(5, char);

        }

      },
      specificOnMonth: () => {

        if (isArray(list)) {

          if (list.length) {

            list.forEach(item => validate(item, 1, 31));

          }

          const char = list.length ? list.join(',') : 1;

          this.spliceIntoPosition(5, '?').spliceIntoPosition(3, char);

        }

      },
      lastDayOnMonth: () => {

        this.spliceIntoPosition(5, '?').spliceIntoPosition(3, 'L');

      },
      lastWeekOnMonth: () => {

        this.spliceIntoPosition(5, '?').spliceIntoPosition(3, 'LW');

      },
      lastSelectDayOnMonth: () => {

        if (isArray(list) && list.length) {

          if (list.length === 1) {

            validate(list[0], 1, 7);

            this.spliceIntoPosition(3, '?').spliceIntoPosition(5, `${list.pop()}L`);

          } else {

            throw Error(MORE_THAN_ONE);

          }

        } else {

          throw Error(IS_EMPTY);

        }

      },
      before: () => {

        if (isArray(list) && list.length) {

          if (list.length === 1) {

            validate(list[0], 1, 31);

            this.spliceIntoPosition(5, '?').spliceIntoPosition(3, `L-${list.pop()}`);

          } else {

            throw Error(MORE_THAN_ONE);

          }

        } else {

          throw Error(IS_EMPTY);

        }

      },
      near: () => {

        if (isArray(list) && list.length) {

          if (list.length === 1) {

            validate(list[0], 1, 31);

            this.spliceIntoPosition(5, '?').spliceIntoPosition(3, `${list.pop()}W`);

          } else {

            throw Error(MORE_THAN_ONE);

          }

        } else {

          throw Error(IS_EMPTY);

        }

      },
      dayOnEveryMonth: () => {

        if (isArray(list) && list.length) {

          if (list.length > 2) {

            throw Error(MORE_THAN_TWO);

          }

          validate(list[0], 1, 7);
          validate(list[1], 1, 5);

          this.spliceIntoPosition(3, '?').spliceIntoPosition(5, list.join('#'));

        } else {

          throw Error(IS_EMPTY);

        }

      },
    };

    const fun = execute[type];
    if (!fun) {

      throw Error(`Type: "${type}" is not a valid type.`);

    }

    fun();

    return this.cron;

  }
  months(
    options = {
      type: 'every',
      list: [],
    },
  ) {

    const { type, list } = options;

    const execute = {
      every: () => this.spliceIntoPosition(4, '*'),
      start: () => {

        if (isArray(list) && list.length) {

          if (list.length > 2) {

            throw Error(MORE_THAN_TWO);

          }

          list.forEach(item => validate(item, 1, 12));

          this.spliceIntoPosition(4, list.join('/'));

        } else {

          throw Error(IS_EMPTY);

        }

      },
      specific: () => {

        if (isArray(list)) {

          if (list.length) {

            list.forEach(item => validate(item, 1, 12));

          }
          const char = list.length ? list.join(',') : 1;
          this.spliceIntoPosition(4, char);

        }

      },
      between: () => {

        if (isArray(list) && list.length) {

          if (list.length > 2) {

            throw Error(MORE_THAN_TWO);

          }

          list.forEach(item => validate(item, 1, 12));
          this.spliceIntoPosition(4, list.join('-'));

        } else {

          throw Error(IS_EMPTY);

        }

      },
    };

    const fun = execute[type];
    if (!fun) {

      throw Error(`Type: "${type}" is not a valid type.`);

    }

    fun();

    return this.cron;

  }
  years(
    options = {
      type: 'every',
      list: [],
    },
  ) {

    const { type, list } = options;

    const execute = {
      every: () => this.spliceIntoPosition(6, '*'),
      start: () => {

        if (isArray(list) && list.length) {

          if (list.length > 2) {

            throw Error(MORE_THAN_TWO);

          }

          list.forEach(item => {

            if (typeof item !== 'number') {

              throw Error(`${item} type is not number`);

            }

          });
          this.spliceIntoPosition(6, list.join('/'));

        } else {

          throw Error(IS_EMPTY);

        }

      },
      specific: () => {

        if (isArray(list) && list.length) {

          list.forEach(item => {

            if (typeof item !== 'number') {

              throw Error(`${item} type is not number`);

            }

          });
          this.spliceIntoPosition(6, list.join(','));

        } else {

          throw Error(IS_EMPTY);

        }

      },
      between: () => {

        if (isArray(list) && list.length) {

          if (list.length > 2) {

            throw Error(MORE_THAN_TWO);

          }
          list.forEach(item => {

            if (typeof item !== 'number') {

              throw Error(`${item} type is not number`);

            }

          });

          if (list[0] > list[1]) {

            throw Error('start must come before end following normal calendar sequence.');

          }

          this.spliceIntoPosition(6, list.join('-'));

        } else {

          throw Error(IS_EMPTY);

        }

      },
    };

    const fun = execute[type];
    if (!fun) {

      throw Error(`Type: "${type}" is not a valid type.`);

    }

    fun();

    return this.cron;

  }

}

export function generateSpecific(start = 0, end = 0, type = 'number') {

  const list = [];
  while (start < end) {

    if (type === 'string') {

      if (start < 10) {

        const str = '0' + start;
        list.push(str);

      } else {

        list.push(start.toString());

      }
      start++;

    } else {

      list.push(++start);

    }

  }
  return list;

}

export default Cron;
