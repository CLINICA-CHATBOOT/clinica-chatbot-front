const input = document.getElementById('input_clave2');

if (input) {
	input.addEventListener('input', function(event) {
		let clave1 = document.getElementById('input_clave');
		let clave2 = document.getElementById('input_clave2');
		let label_clave = document.getElementById('clave_incorrecta');
		console.log(clave1, clave2);
		if(clave1.value != clave2.value){
			console.log("Diferentes");
			clave1.classList.add('is-invalid');
			clave1.classList.remove('is-valid');
			clave2.classList.add('is-invalid');
			clave2.classList.remove('is-valid');
			label_clave.innerHTML = "Las claves deben coincidir";
		} else {
			console.log("Iguales");
			clave1.classList.add('is-valid');
			clave1.classList.remove('is-invalid');
			clave2.classList.add('is-valid');
			clave2.classList.remove('is-invalid');
			label_clave.innerHTML = "";
		}
	});
};

function ver_clave() {
	var clave1 = document.getElementById('input_clave');
	var clave2 = document.getElementById('input_clave2');
	if (clave1.type === "password") {
		clave1.type = "text";
	}else {
		clave1.type = "password";
	}
	if (clave2.type === "password") {
		clave2.type = "text";
	}else {
		clave2.type = "password";
	}
}

const btn_dia = document.getElementById("btn_dia");
const btn_mes = document.getElementById("btn_mes");
const btn_year = document.getElementById("btn_year");
const mensaje = document.getElementById("mensaje");

const input_dia = document.getElementById("input_dia");
const input_mes = document.getElementById("input_mes");
const input_year = document.getElementById("input_year");


let dia = null, mes = null, year = null;

function actualizar_seleccion(boton, valor, tipo) {
	boton.textContent = valor;
	if (tipo === "dia") dia = valor;
	if (tipo === "mes") mes = valor;
	if (tipo === "year") year = valor;
}

document.querySelectorAll("#menu_dia .dropdown-item").forEach(item => {
	item.addEventListener("click", () => {
		actualizar_seleccion(btn_dia, item.value, "dia");
		input_dia.value = item.value;
	});
});

document.querySelectorAll("#menu_mes .dropdown-item").forEach(item => {
	item.addEventListener("click", () => {
		actualizar_seleccion(btn_mes, item.textContent, "mes");
		input_mes.value = item.value;
	});
});

document.querySelectorAll("#menu_year .dropdown-item").forEach(item => {
	item.addEventListener("click", () => {
		actualizar_seleccion(btn_year, item.value, "year");
		input_year.value = item.value;
		validar_edad();
	});
});

function validar_edad() {
    const year_num = parseInt(year);
	const hoy = new Date();
	let edad = hoy.getFullYear() - year_num;

    if (edad < 16) {
    	mensaje.textContent = "Debes tener al menos 16 años para jugar.";
    	return false;
    } else{
    	mensaje.textContent = "";
    }
    return true;
}