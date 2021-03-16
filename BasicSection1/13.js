// 문 : 대문자는 소문자로 소문자는 대문자로 변환해보자

// 앞의 두 문제가 대문자, 소문자 관련 문제였다.
// toUpperCase나 toLowerCase가 익숙한 만큼 잘 사용하지 않는
// ASCII로 문제를 해결해보고자 한다.

function solution(s) {
  let answer = "";
  for (let i of s) {
    const ascii = i.charCodeAt();
    if (ascii >= 65 && ascii <= 90) answer += String.fromCharCode(ascii + 32);
    if (ascii >= 97 && ascii <= 122) answer += String.fromCharCode(ascii - 32);
  }
  return answer;
}

console.log(solution("StuDY"));
