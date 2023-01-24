module.exports = function toReadable (number) {
  const data = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  }

  if (data.hasOwnProperty(number)) {
    return data[number];
  } else if (number < 100) {
    let firstDigit = Math.floor(number / 10) * 10;
    let secondDigit = number % 10;
    return data[firstDigit] + ' ' + data[secondDigit];
  } else {
    firstDigit = Math.floor(number / 100);
    secondDigit = number % 100;
    if (number % 100 == 0) {
        return data[firstDigit] + ' hundred';
    } else if (data.hasOwnProperty(secondDigit)) {
        return data[firstDigit] + ' hundred ' + data[secondDigit];
    } else {
        let thirdDigit = Math.floor(secondDigit / 10) * 10;
        let fourthDigit = secondDigit % 10;
        return data[firstDigit] + ' hundred ' + data[thirdDigit] + ' ' + data[fourthDigit];
    }
  }
}
