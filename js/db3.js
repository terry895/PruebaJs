const nom = document.querySelector('#tnombre2');
const cos = document.querySelector('#tcosto2');
const iv = document.querySelector('#tiva2');
const pre = document.querySelector('#tprecio2');

const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

var idart = Number(sessionStorage.getItem("idArticulo"));

let db;
window.onload = function(){
	let request = window.indexedDB.open("db_tienda",1);	

	request.onerror=function(){
		swal("Error","Hubo problemas para crear el registro en memoria","error");
	};

	request.onsuccess = function(){
		db = request.result;
		leerId();
	};

	form.onsubmit = actualizarDatos;
	function actualizarDatos(e){
		e.preventDefault();
		//se crea el nuevo registro
		let newArt = {nombre:nom.value,costo:cos.value,iva:iv.value,precio:pre.value};

		//abre una conexion a la db
		let alm = db.transaction(["tb_articulos"],"readwrite").objectStore("tb_articulos");

		var request = alm.get(idart);

		request.onsuccess = function(e){
			
			var datos = request.result;
			datos.nombre = nom.value;
			datos.costo = cos.value;
			datos.iva = iv.value;
			datos.precio = pre.value;
			
			var update = alm.put(datos);
			update.onsuccess = function(ev){
				$("#mensaje").prop("style","display:initial;");
				$("#mensaje").html('<div id="mensaje" class="alert alert-success" role="alert">Articulo actualizado con exito.</div>');	
				//leerId();	
				sessionStorage.clear();
				document.getElementById("tnombre2").value="";
				document.getElementById("tcosto2").value="";
				document.getElementById("tiva2").value="";
				document.getElementById("tprecio2").value="";
			}
		};


		request.onerror = function(){
			swal("Error","No se actualizo el articulo.","error");
		};
	}

	function leerId(){
		var trans = db.transaction(["tb_articulos"]);
		var store = trans.objectStore("tb_articulos");
		var req = store.get(idart);
		
		//se elimina la variable de la sesion
		

		req.onerror = function(e){
			swal("Error","No se pudo obtener los datos.","error");
		};	

		req.onsuccess = function(e){
			var datos = req.result;
			//alert("talla: "+ datos.nombre);
			document.getElementById("tnombre2").value=datos.nombre;
			document.getElementById("tcosto2").value=datos.costo;
			document.getElementById("tiva2").value=datos.iva;
			document.getElementById("tprecio2").value=datos.precio;
		}

		
	}

};