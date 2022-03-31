function pegarDados (qualBotao) {
	switch(qualBotao){
		case 1: {
			let div = document.getElementById("result")
			div.classList.remove("itauany");
			
			div.classList.add("any");
			document.getElementById("result").innerHTML = "Fique em casa e peça para fazerem compras por você!"
			break;
		}
		case 2: {
			let div = document.getElementById("result")
			div.classList.remove("itauany");
			div.classList.add("any");
			document.getElementById("result").innerHTML = "Fique em casa, tome sol e faça exercícios leves!"
			break;
		}
		case 3: {
			let div = document.getElementById("result")
			div.classList.remove("itauany");
			div.classList.add("any");
			document.getElementById("result").innerHTML = "Fique em casa e cuide da sua saúde!"
			break;
		}
		case 4: {
			let div = document.getElementById("result")
			div.classList.remove("itauany");
			div.classList.add("any");
			document.getElementById("result").innerHTML = "Faça compras pelos mais idosos, mas use máscara!"
			break;
		}
	}
}