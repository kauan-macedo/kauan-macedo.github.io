function calcPrice() {
	var alcohol = document.getElementById('price-alcohol').value;
	alcohol = parseInt(alcohol);

	var gasoline = document.getElementById('price-gasoline').value;
	gasoline = parseInt(gasoline);

	var result = alcohol / gasoline;

	if (result < 0.7) {
		document.getElementById('result-alcohol').classList.add('result-visible');
		document.getElementById('result-alcohol').classList.remove('result-invisible');
		document.getElementById('result-gasoline').classList.add('result-invisible');
	}

	if (result > 0.7) {
		document.getElementById('result-gasoline').classList.add('result-visible');
		document.getElementById('result-gasoline').classList.remove('result-invisible');
		document.getElementById('result-alcohol').classList.add('result-invisible');
	}
}

var calc = document.getElementById('calculator-button');
calc.addEventListener('click', calcPrice);
