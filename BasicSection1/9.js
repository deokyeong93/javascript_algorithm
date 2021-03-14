// 문 : 대문자로 이루어진 문자열이 인자로 들어올 때 "A"는 "#"로 바꾸어서 출력하기

function solution(s) {
  let answer;
  if (s !== s.toUpperCase()) {
    return "error";
  } // 무조건 인자는 대문자인 문자열만 들어와야 실행한다.

  answer = str
    .split("")
    .map((item) => (item === "A" ? "#" : item)) //
    .join("");

  return answer;
}

let str = "BANANA";
console.log(solution(str));

function solutionOther(s) {
  let answer;
  if (s !== s.toUpperCase()) {
    return "error";
  } // 무조건 인자는 대문자인 문자열만 들어와야 실행한다.

  answer = str.replaceAll("A", "#");
  return answer;
}

console.log("Other", solutionOther(str));

// 방식의 차이인데 누적으로 해볼 생각을못해봤네... 교체만 생각했지 ㅎㅎ 누적으로 이용한 방식을 다시 작성해보자.

function solutionUp(s) {
  let answer = "";
  for (let i of s) {
    if (i === "A") answer += "#";
    else answer += i;
  }

  return answer;
}

console.log("Up", solutionUp(str));
