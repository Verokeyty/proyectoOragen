<?php 

include 'conectar.php'; 
session_start();
// checar que el usuario este logueado o no
if (!isset($_SESSION['user_id'])) {
    header("location:index.php");
}

$temp = $_SESSION['user_id'];
session_destroy();
session_start();
$_SESSION['user_id'] = $temp;
ob_start(); 
// Establecer conexion con db tecnica de persistencia 
$cnxn = mysqli_connect("localhost","root","","proyecto");
?>
<!DOCTYPE html>
<html>
<head>
	<title>Orange</title>
	<link rel="stylesheet" type="text/css" href="../assets/css/estilos.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/diseno.css">
	 <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
   
    <meta name="description" content="Citas en linea. ">
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="shortcut icon" href="https://1.bp.blogspot.com/-V7R9_de9UuQ/Xl27Yi0mGTI/AAAAAAAALoc/6wRB8obHuQQSzx0i6V5aVa59wQlOggglACEwYBhgL/s640/icono.png" type="image/x-icon">
</head>
<body>



<div id="encabezado" >
    
   
    <img src="https://1.bp.blogspot.com/-j1qaqvm7Je8/XoKspSLeqtI/AAAAAAAAL0g/aUaEFjuPM2kab2LXZsNGUsAFqTDwnuaiQCLcBGAsYHQ/s1600/Sin%2Bt%25C2%25B0tulo.png" width="300" height="200" id="logotipo">

     <a href="./login.html" > Iniciar Sesion </a>

</div>
<div class="c-productos">

	<?php
     echo "<p>".$temp."</p>";
?> 
	<h3 class="c-productos-tittle">
		Granos
	</h3>
	<hr class="separador">
	<div class="c-productos-catalogo">
		<div class="productos-card">
			<div class="productos-card-top">
				<img src="https://previews.123rf.com/images/bhofack2/bhofack21705/bhofack2170500331/78362777-crudo-org%C3%A1nico-frijoles-verdes-crudos-listos-para-cocinar.jpg">

			</div>
			<div class="productos-card-center">
				<div> 
					<p><strong>Nombre:</strong> Frijoles Verdes</p>
				    <p><strong>Precio:</strong> $1500</p>
			    </div>
			</div>
			<div class="productos-card-buttom">
				<button class="productos-card-btn">Agregar al carrito</button>
			</div>
			
		</div>
	</div>
</div>

<div class="c-productos">
	<h3 class="c-productos-tittle">
		***
	</h3>
	<hr class="separador">
	<div class="c-productos-catalogo">
		<div class="productos-card">
			<div class="productos-card-top">
				<img src="https://previews.123rf.com/images/bhofack2/bhofack21705/bhofack2170500331/78362777-crudo-org%C3%A1nico-frijoles-verdes-crudos-listos-para-cocinar.jpg">

			</div>
			<div class="productos-card-center">
				<div> 
					<p><strong>Nombre:</strong> AAA</p>
				    <p><strong>Precio:</strong> $99.99</p>
			    </div>
			</div>
			<div class="productos-card-buttom">
				<button class="productos-card-btn">Agregar al carrito</button>
			</div>
		</div>
				<div class="productos-card">
			<div class="productos-card-top">
				<img src="https://previews.123rf.com/images/bhofack2/bhofack21705/bhofack2170500331/78362777-crudo-org%C3%A1nico-frijoles-verdes-crudos-listos-para-cocinar.jpg">

			</div>
			<div class="productos-card-center">
				<div> 
					<p><strong>Nombre:</strong> AAA</p>
				    <p><strong>Precio:</strong> $99.99</p>
			    </div>
			</div>
			<div class="productos-card-buttom">
				<button class="productos-card-btn">Agregar al carrito</button>
			</div>
		</div>

				<div class="productos-card">
			<div class="productos-card-top">
				<img src="https://previews.123rf.com/images/bhofack2/bhofack21705/bhofack2170500331/78362777-crudo-org%C3%A1nico-frijoles-verdes-crudos-listos-para-cocinar.jpg">

			</div>
			<div class="productos-card-center">
				<div> 
					<p><strong>Nombre:</strong> AAA</p>
				    <p><strong>Precio:</strong> $99.99</p>
			    </div>
			</div>
			<div class="productos-card-buttom">
				<button class="productos-card-btn">Agregar al carrito</button>
			</div>
		</div>

				<div class="productos-card">
			<div class="productos-card-top">
				<img src="https://previews.123rf.com/images/bhofack2/bhofack21705/bhofack2170500331/78362777-crudo-org%C3%A1nico-frijoles-verdes-crudos-listos-para-cocinar.jpg">

			</div>
			<div class="productos-card-center">
				<div> 
					<p><strong>Nombre:</strong> AAA</p>
				    <p><strong>Precio:</strong> $99.99</p>
			    </div>
			</div>
			<div class="productos-card-buttom">
				<button class="productos-card-btn">Agregar al carrito</button>
			</div>
		</div>
	</div>
</div>



</body>
</html>