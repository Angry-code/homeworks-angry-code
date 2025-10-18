function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  let avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  if (arr.length == 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
      if (max < arr[i]) {
        max = arr[i]
      }
    }
    return max - min;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let countElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countElement += 1;
      }
    }
    return parseFloat((sumEvenElement / countElement).toFixed(2))
  }
}

function makeWork(arrOfArr, func) {
  if (arrOfArr.length == 0) {
    return 0;
  } else {
    maxWorkerResult = arrOfArr[0][0];
    for (let i = 0; i < arrOfArr.length; i++) {
      funcResult = func(...arrOfArr[i]);
      if (maxWorkerResult < funcResult) {
        maxWorkerResult = funcResult
      }
    }
    return maxWorkerResult;
  }

}
