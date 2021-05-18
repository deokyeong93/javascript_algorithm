// 문 : 입력된 문자열안에서 중복된 문자를 제거하고 남은 값만 반환

function solution(s) {
  let answer = "";
  for (let i of s) {
    if (!answer.includes(i)) answer += i;
  }
  return answer;
}
console.log(solution("ksekkset"));

// String.indexOf(문자, 검색시작인덱스 ) 검색시작인덱스부터(없으면 0)처음 문자가 발견되는 인덱스를 리턴한다.
// 검색결과가 없으면 -1 출력
