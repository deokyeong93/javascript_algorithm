// 핵심 과제! : 날짜와 차량 번호의 일의 자리가 일치할 경우 카운트를 세줘야한다.
// 차량 번호는 2자리로 써놓았지만 사실상 네자리가 들어오나 마나 상관없는 로직이긴 합니다.

function solution(day, arr) {
  let answer = 0;
  let carNumArr;
  let preventDay;

  preventDay = day % 10; // 좀 더 생각확장 : 전제 조건 자체가 날짜의 일의 자리 숫자가 들어온다고 하였지만
  // 개인적으로 임의의 날짜가 들어와도 일의 자리만 남겨 로직이 의도대로 움직일 수 있도록 추가적인 코드를 작성했다.
  carNumArr = arr.map((item) => item % 10);

  for (let carNum of carNumArr) {
    if (preventDay === carNum) answer += 1;
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

arr = [12, 20, 54, 30, 87, 91, 30];
console.log("추가 확인 =>", solution(27, arr));
