function checkDigitsInName(input) {
    
    if (typeof input !== 'string') {
        return "Invalid Input";
    }
 const hasDigit = /\d/.test(input);
  return hasDigit;
}


/*console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName("n9ayeem"));
console.log(checkDigitsInName('elmu3'));
console.log(checkDigitsInName('Suman'));
console.log(checkDigitsInName('Name2024'));
console.log(checkDigitsInName('!@#'));
console.log(checkDigitsInName(["Raj"]));*/

