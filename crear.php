<!DOCTYPE html>
<html lang="es">
<head>
	<title>Prueba JS</title>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
	<div class="container">
		<h3 align="center" class="m-2">Prueba JS</h3>

		<h4>Alta de Articulo</h4>
		<hr>
		<div class="row">
		    <div class="col-md-12">
			    <div id="mensaje">
		        </div>
		    </div>
		</div>
		
		<div class="row">
		    <div class="col-md-12">
		      	
		      	<form method="post" id="formAltaArticulo">
		      		<input type="hidden" name="idar" id="idar" >
			        <div class="form-group">
			          	<label for="tnombre">Nombre:</label>
			          	<input type="text" name="tnombre" id="tnombre" class="form-control" maxlength="30" placeholder="Nombre del articulo." required="required">
			        </div>
			        <div class="form-group">
			          	<label for="tcosto">Costo:</label>
			          	<input type="number" name="tcosto" id="tcosto" class="form-control" placeholder="El costo debe contener decomales 0.00." step="0.01">
			        </div>
			        <div class="form-group">
			          	<label for="tiva">Iva 16%:</label>
			          	<input type="number" name="tiva" id="tiva" class="form-control" disabled >
			        </div>
			        <div class="form-group">
			          	<label for="tprecio">Precio:</label>
			          	<input type="number" name="tprecio" id="tprecio" class="form-control" placeholder="El precio debe contener decimales 0.00." step="0.01">
			        </div>
			        <div class="form-group d-inline-block p-2">
			        	<!--input type="button" name="cancelar" id="cancelar" class="btn btn-primary" value="Cancelar">
			        	<input type="button" name="crear" id="crear" class="btn btn-primary" value="Guardar"-->
			        	<button class="btn btn-warning" id="cancelar">Cancelar</button>
			        	<button type="submit" class="btn btn-primary" id="crear">Guardar</button>
			          	<a class="btn btn-primary" href="index.php">Regresar al inicio</a>
			        </div>
			    </form>
		    </div>
	  	</div>
	</div>
	<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/sweetalert.min.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
	<script type="text/javascript" src="js/db2.js"></script>
</body>
</html>