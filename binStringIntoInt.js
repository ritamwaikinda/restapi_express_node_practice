decimal = "1100100";
let n = 1;
tempArr = decimal.split("").reverse();
for (let i = 0; i < tempArr.length; i++) {
	tempArr[i] = tempArr[i] * (n * 2 ** i);
}
tempArr.reduce((a, b) => {
	return a + b;
});
console.log(tempArr);
