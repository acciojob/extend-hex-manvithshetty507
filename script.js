const extendHex = (shortHex) => {
  // write your code here
	let arr = (shortHex[0] === '#') ? Array.from(shortHex.substring(1)) : Array.from(shortHex)
	const ans = arr.map((ele,i) => ele + ele)
	return '#' + ans.join('')
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
