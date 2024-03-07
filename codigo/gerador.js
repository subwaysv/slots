document.addEventListener('DOMContentLoaded', function () {
	const numeroDeJogos = 9;

	function gerarNumeros() {
		for (let i = 1; i <= numeroDeJogos; i++) {
			let numeroAtual = localStorage.getItem(`numeroJogo${i}`);

			if (!numeroAtual) {
				// Se o número não estiver definido localmente, gere um novo
				const novoNumero = Math.floor(Math.random() * (210 - 72 + 1)) + 72;
				localStorage.setItem(`numeroJogo${i}`, novoNumero);
				numeroAtual = novoNumero;
			}

			document.getElementById(`numeroJogo${i}`).innerText = numeroAtual;
		}
	}
	function gerarNumerosTemp() {
		for (let i = 1; i <= numeroDeJogos; i++) {
			let numeroAtual = localStorage.getItem(`numeroJogo${i}`);
			const novoNumero = Math.floor(Math.random() * (210 - 72 + 1)) + 72;
			localStorage.setItem(`numeroJogo${i}`, novoNumero);
			numeroAtual = novoNumero;
			document.getElementById(`numeroJogo${i}`).innerText = numeroAtual;
		}
	}
	setInterval(gerarNumerosTemp, 30000);
	gerarNumeros();
});
