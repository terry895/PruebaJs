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
		<div class="row">
			<h3 align="center" class="m-2">Prueba JS</h3>
			
		    <div class="col-md-12">
		      	<a href="crear.php"  class="btn btn-primary mt-4">Alta de Articulo</a>
		      	<hr>
		      	<table class="table table-striped table-bordered" id="tablarticulo">
		      		<thead>
		      			<tr>
			      			<td colspan="5" align="center">
			      				<h4>Lista de Articulos</h4>
			      			</td>
			      		</tr>
		      			<tr align="center">
		      				<th>Nombre</th>
		      				<th>Costo</th>
		      				<th>Iva</th>
		      				<th>Precio</th>
		      				<th>Acción</th>
		      			</tr>
		      		</thead>
		      		<tbody id="tbody">
		      			
		      		</tbody>
		      	</table>
		    </div>
	  	</div>
	</div>
	<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/sweetalert.min.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
	<script type="text/javascript" src="js/db.js"></script>
</body>
</html>