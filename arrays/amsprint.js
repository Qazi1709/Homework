function isArmstrong(number) {
    const numString = number.toString();
    const numDigits = numString.length;
    let sum = 0;
  
    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(numString[i]);
      sum += Math.pow(digit, numDigits);
    }
  
    return sum === number;
  }
  
  for (let i = 1; i <= 1000; i++) {
    if (isArmstrong(i)) {
      console.log(i);
    }
  }
  