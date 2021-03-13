// 3. 문제 : 21개 들어있는 사탕 한 통이 있다고 할 때, N명의 사람에게 사탕을 1개씩 나눠주려 한다.
// 이때 필요한 사탕은 몇 통인가?

// 사실상 수학문제라고 생각한다..
// 아무튼 N / 21 일 때 나머지가 나오면 몫에 1을 더해주는 로직을 짜면 될 것 같다.
// 사람 1개씩 나누어 주고 1명이 못 받았다는 것은 새거 한 통을 뜯어서 1개를 주고 그 통은 20개가 남을테니..
// N명의 사람에게 나누어주려는 조건은 충족

function solution(n) {
  let candyBox;
  if (n % 21) candyBox = Math.floor(n / 21) + 1;
  else candyBox = n / 21;

  return candyBox;
}

console.log(solution(210));
