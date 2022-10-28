counters = [0, 0, 0, 0, 0, 0];

for (var i = 0; i < 1_000_000; i++) {
    value = Math.floor(6 * Math.random()); //m 이상 n이하의 정수 = m+math.floor((n-m+1)*Math.random())
    counters[value] += 1;
}
for (var i = 0; i < 6; i++) {
    console.log(`주사위가 ${i + 1}인 경우는 ${counters[i]}번`);
}
