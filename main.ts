let decDigitsToHexDigits = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F'
]
export default function hexColors(red: number, green: number, blue: number): string {
	let redHex = decimalToHex(red);
	redHex = redHex.length < 2 ? '0' + redHex : redHex;
	
	let greenHex = decimalToHex(green);
	greenHex = greenHex.length < 2 ? '0' + greenHex : greenHex;
	
	let blueHex = decimalToHex(blue);
	blueHex = blueHex.length < 2 ? '0' + blueHex : blueHex;
	return '#' + redHex + greenHex + blueHex;
}

function decimalToHex(decimal: number): string {
	let hex = '';
	while(decimal > 15) {
		hex = decDigitsToHexDigits[decimal % 16] + hex;
		decimal = (decimal - decimal % 16) / 16
	}
	hex = decDigitsToHexDigits[decimal % 16] + hex;
	return hex;
}

