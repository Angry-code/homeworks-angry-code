"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant == 0) {
    arr = [(- b) / (2 * a)];
  } else if (discriminant > 0) {
    arr = [(- b + discriminant ** (1 / 2)) / (2 * a), (- b - discriminant ** (1 / 2)) / (2 * a)];
  }

  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentInMonth = percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (percentInMonth + (percentInMonth / (((1 + percentInMonth) ** countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;

  return parseFloat(totalAmount.toFixed(2));
}