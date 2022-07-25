/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let res = '';
  if (num % 3 === 0) {
    res += 'Fizz';
  }
  if (num % 5 === 0) {
    res += 'Buzz';
  }
  if (!(num % 3 === 0 || num % 5 === 0)) {
    res = num;
  }
  return res;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let res = 1;
  for (let i = 0; i < n; i += 1) {
    res *= (n - i);
  }
  return res;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let res = n1;
  for (let i = n1 + 1; i <= n2; i += 1) {
    res += i;
  }
  return res;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const ax = rect1.left;
  const ax1 = rect1.left + rect1.width;
  const ay = rect1.top;
  const ay1 = rect1.top + rect1.height;

  const bx = rect2.left;
  const bx1 = rect2.left + rect2.width;
  const by = rect2.top;
  const by1 = rect2.top + rect2.height;
  return (
    (((bx >= ax && bx <= ax1) || (bx1 >= ax && bx1 <= ax1))
      && ((by >= ay && by <= ay1) || (by1 >= ay && by1 <= ay1)))
    || (((ax >= bx && ax <= bx1) || (ax1 >= bx && ax1 <= bx1))
      && ((ay >= by && ay <= by1) || (ay1 >= by && ay1 <= by1))));
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  return Math.sqrt((circle.center.x - point.x) ** 2 + (circle.center.y - point.y) ** 2)
    < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  let char;
  for (let i = 0; i < str.length; i += 1) {
    const substrArr = str.split('').filter((_, idx) => idx !== i);
    if (!substrArr.includes(str[i])) {
      char = str[i];
      break;
    }
  }
  return char;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  return `${isStartIncluded ? '[' : '('}${a < b ? `${a}, ${b}` : `${b}, ${a}`}${isEndIncluded ? ']' : ')'}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return Number(String(num).split('').reverse().join(''));
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const checkDigit = Number(String(ccn).slice(-1));
  const payload = String(ccn).slice(0, -1).split('').map((el) => Number(el));
  const payloadX2 = payload.reverse().map((el, idx) => (idx % 2 === 0 || idx === 0 ? el * 2 : el));
  let calcCheckDigit = 10 - (payloadX2.reduce((acc, curr) => {
    if (String(curr).length !== 1) {
      return acc + Number(String(curr)[0]) + Number(String(curr)[1]);
    }
    return acc + curr;
  }, 0) % 10);
  if (calcCheckDigit === 10) calcCheckDigit = 0;
  return calcCheckDigit === checkDigit;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let number = num;
  while (String(number).length !== 1) {
    number = String(number).split('').map((el) => Number(el)).reduce((acc, curr) => acc + curr);
  }
  return number;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const stackArray = [];
  let errors = 0;
  const bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']];
  for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < bracketsConfig.length; j += 1) {
      if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
        if (str[i] === bracketsConfig[j][0]) {
          if (stackArray[stackArray.length - 1] === bracketsConfig[j][0]) {
            stackArray.pop();
          } else {
            stackArray.push(str[i]);
          }
        }
      } else if (str[i] === bracketsConfig[j][0]) {
        stackArray.push(str[i]);
      } else if (str[i] === bracketsConfig[j][1]) {
        if (stackArray[stackArray.length - 1] === bracketsConfig[j][0]) {
          stackArray.pop();
        } else {
          errors += 1;
        }
      }
    }
  }
  if (errors !== 0) {
    return false;
  }
  if (stackArray.length === 0) {
    return true;
  }
  return false;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return +(num).toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  let path = '';
  let isBreak = false;
  for (let i = 0; i < pathes[0].length; i += 1) {
    for (let j = 0; j < pathes.length - 1; j += 1) {
      if (pathes[j][i] !== pathes[j + 1][i]) {
        isBreak = true;
        break;
      }
    }
    if (isBreak) {
      break;
    } else {
      path += pathes[0][i];
    }
  }
  return path.substring(0, path.lastIndexOf('/') + 1);
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(/* m1, m2 */) {
/*   console.log(m1);
  console.log(m2);
  const rowsM1 = m1.length;
  const rowsM2 = m2.length;
  // const colsM1 = m1[0].length;
  const colsM2 = m2[0].length;
  const m = new Array(m1.length).map(() => 6);
  console.log(new Array(m1.length));
  console.log(m.map((el) => {
    el = 6;
    return el;
  }));

  for (let i = 0; i < colsM2; i += 1) {
    for (let j = 0; j < rowsM1; j += 1) {
      let temp = 0;
      for (let n = 0; n < rowsM2; n += 1) {
        temp += m1[j][n] * m2[n][i];
      }
      m[j][i] = temp;
    }
  }

  return m; */
  throw new Error('Not implemented');
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  let result;
  for (let i = 0; i < 3; i += 1) {
    if (position[i].join('') === 'XXX' || position[i].join('') === '000') {
      result = position[i].join('');
    }
    if (`${position[0][i]}${position[1][i]}${position[2][i]}` === 'XXX'
      || `${position[0][i]}${position[1][i]}${position[2][i]}` === '000') {
      result = `${position[0][i]}${position[1][i]}${position[2][i]}`;
    }
  }
  if (`${position[0][0]}${position[1][1]}${position[2][2]}` === 'XXX'
    || `${position[0][0]}${position[1][1]}${position[2][2]}` === '000') {
    result = `${position[0][0]}${position[1][1]}${position[2][2]}`;
  }
  if (`${position[0][2]}${position[1][1]}${position[2][0]}` === 'XXX'
    || `${position[0][2]}${position[1][1]}${position[2][0]}` === '000') {
    result = `${position[0][2]}${position[1][1]}${position[2][0]}`;
  }
  return result !== undefined ? result[0] : result;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
