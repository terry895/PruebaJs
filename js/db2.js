

const nom = document.querySelector('#tnombre');
const cos = document.querySelector('#tcosto');
const iv = document.querySelector('#tiva');
const pre = document.querySelector('#tprecio');

const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

const idart = 0;

let db;
window.onload = function(){
	let request = window.indexedDB.open("db_tienda",1);	

	request.onerror=function(){
		swal("Error","Hubo problemas para crear el registro en memoria","error");
	};

	request.onsuccess = function(){
		db = request.result;
	};

	form.onsubmit = crearDatos;
	function crearDatos(e){
		//console.log(nombre.value.length);
		e.preventDefault();
		//se crea el nuevo registro
		let newArt = {nombre:nom.value,costo:cos.value,iva:iv.value,precio:pre.value};

		//abre una conexion a la db
		let trans = db.transaction(["tb_articulos"],"readwrite");

		let objAlm = trans.objectStore("tb_articulos");

		let request = objAlm.add(newArt);

		request.onsuccess = function(){
			document.getElementById('tnombre').value="";
			document.getElementById('tcosto').value="";
			document.getElementById('tiva').value="";
			document.getElementById('tprecio').value="";
		};

		trans.oncomplete = function(){
			$("#mensaje").prop("style","display:initial;");
			$("#mensaje").html('<div id="mensaje" class="alert alert-success" role="alert">Articulo agregado con exito.</div>');
		};
		
		trans.onerror = function(){
			swal("Error","No se agrego el articulo.","error");
		};
	}

	

};