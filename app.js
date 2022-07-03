const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("0보다 큰 숫자를 입력해 주세요");
}