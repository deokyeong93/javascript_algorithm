const exArr = ["good", "time", "good", "time", "student"];

function makeStrArr(arr) {
  let newArr = [];

  for (let word of arr) {
    if (!newArr.includes(word)) newArr.push(word);
  }

  return newArr;
}

// 사실 새롭게 배열을 만들고 하려고 하면 얼마든지 가능하다.
// 배열을 새로 안 만들고 할 수 있는 방법은 없을지 추후에 다시 고민해봐야겠다.
// 이 외에도 filter를 이용한 방법을 써볼 수 있다.

function otherSolution(arr) {
  let answer;

  answer = arr.filter((word, idx) => arr.indexOf(word) === idx);

  return arr;
}
