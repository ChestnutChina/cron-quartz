English | [简体中文](./README.md)

## cron-quartz

A library that generates `quartz` corresponding cron expressions
___

## Install

``` bash
npm install cron-quartz --save-dev
```
___
## Usage

```
import Cron from 'cron-quartz';

const cron = new Cron();

// generates an expression for seconds
const result = cron.seconds({
  type: 'specific',
  list: [1, 2, 3],
});

console.log(result) // => '1,2,3 * * ? * * *'
```
___
## Expression Validate

To validate generated expressions, you can download the `cron-expression-validator` library. For details, see the library documentation.

## Unit testing

Unit tests have been passed

![](./jest-unit.png)
## API

#### `cron = new Cron()`

Create a cron expression instance

#### `cron.seconds(opts)`

generates an expression for `seconds`

* `opts.type`: there are four types to choose from `every` | `start` | `specific` | `between`
* `opts.list`: Is an array type. Everything except `every` is mandatory

``` javascript
cron.seconds({ type: 'every' }) // => '* * * ? * * *'

cron.seconds({ type: 'start', list: [20, 40]}) // => '20/40 * * ? * * *'

cron.seconds({ type: 'specific', list: [20, 33, 44]}) // => '20,33,44 * * ? * * *'

cron.seconds({ type: 'between', list: [52, 20]}) // => '52-20 * * ? * * *'
```

#### `cron.minutes(opts)`

generates an expression for `minutes`

* `opts.type`: there are four types to choose from `every` | `start` | `specific` | `between`
* `opts.list`: Is an array type. Everything except `every` is mandatory

``` javascript
cron.minutes({ type: 'every' }) // => '* * * ? * * *'

cron.minutes({ type: 'start', list: [12, 32]}) // => '* 12/32 * ? * * *'

cron.minutes({ type: 'specific', list: [0]}) // => '* 0 * ? * * *'

cron.minutes({ type: 'between', list: [12, 32]}) // => '* 12-32 * ? * * *'
```

#### `cron.hours(opts)`

generates an expression for `hours`

* `opts.type`: there are four types to choose from `every` | `start` | `specific` | `between`
* `opts.list`: Is an array type. Everything except `every` is mandatory

``` javascript
cron.hours({ type: 'every' }) // => '* * * ? * * *'

cron.hours({ type: 'start', list: [17, 16]}) // => '* * 17/16 ? * * *'

cron.hours({ type: 'specific', list: [1, 14, 23]}) // => '* * 1,14,23 ? * * *'

cron.hours({ type: 'between', list: [12, 23]}) // => '* * 12-23 ? * * *'
```

#### `cron.days(opts)`

generates an expression for `days`

* `opts.type`: there are eleven types to choose from `every` | `start` | `startOnMonth` | `specific` | `specificOnMonth` | `lastDayOnMonth` | `lastWeekOnMonth` | `lastSelectDayOnMonth` | `before` | `near` | `dayOnEveryMonth`
* `opts.list`: Is an array type. Everything except `every` | `lastDayOnMonth` | `lastWeekOnMonth` is mandatory

``` javascript
cron.days({ type: 'every' }) // => '* * * ? * * *'

cron.days({ type: 'start', list: [2, 7]}) // => '* * * ? * 2/7 *'

cron.days({ type: 'startOnMonth', list: [9, 8]}) // => '* * * 9/8 * ? *'

cron.days({ type: 'specific', list: [2, 4, 6]}) // => '* * * ? * 2,4,6 *'

cron.days({ type: 'specificOnMonth', list: [1, 15, 23, 31]}) // => '* * * 1,15,23,31 * ? *'

cron.days({ type: 'lastDayOnMonth' }) // => '* * * L * ? *'

cron.days({ type: 'lastWeekOnMonth' }) // => '* * * LW * ? *'

cron.days({ type: 'lastSelectDayOnMonth', list: [2] }) // => '* * * ? * 2L *'

cron.days({ type: 'before', list: [15] }) // => '* * * L-15 * ? *'

cron.days({ type: 'near', list: [11] }) // => '* * * 11W * ? *'

cron.days({ type: 'dayOnEveryMonth', list: [1, 5] }) // => '* * * ? * 1#5 *'
```
#### `cron.months(opts)`

generates an expression for `months`

* `opts.type`: there are eleven types to choose from `every` | `start` | `specific` | `between`
* `opts.list`: Is an array type. Everything except `every` is mandatory

``` javascript
cron.months({ type: 'every' }) // => '* * * ? * * *'

cron.months({ type: 'start', list: [[3, 12]}) // => '* * * ? 3/12 * *'

cron.months({ type: 'specific', list: [1, 3, 4]}) // => '* * * ? 1,3,4 * *'

cron.months({ type: 'between', list: [12, 1]}) // => '* * * ? 12-1 * *'
```
#### `cron.years(opts)`

generates an expression for `years`

* `opts.type`: there are eleven types to choose from `every` | `start` | `specific` | `between`
* `opts.list`: Is an array type. Everything except `every` is mandatory

``` javascript
cron.years({ type: 'every' }) // => '* * * ? * * *'

cron.years({ type: 'start', list: [[2021, 1]}) // => '* * * ? * * 2021/1'

cron.years({ type: 'specific', list: [2020, 2021, 2022]}) // => '* * * ? * * 2020,2021,2022'

cron.years({ type: 'between', list: [2022, 2023]}) // => '* * * ? * * 2022-2023'
```
___
## License
____
(c) 2022 Evan(bnuephjx). MIT License
