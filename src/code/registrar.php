<?php 
$username = $_GET["username"];
$usuario = $_GET["usuario"];
$clave = $_GET["password"]; 

session_start();
include 'conectar.php'; 
$cnxn = mysqli_connect("localhost","root","","proyecto");
	
if(!$cnxn){
		echo "-1";
}else{
	
	error_reporting(E_ERROR | E_PARSE);
	mysqli_set_charset($cnxn, "utf8");
	if ($username==""|| $usuario==""||$clave=="") {
		echo "Favor llenar todos los campos";
	}else{
	$sql = "INSERT INTO tbusuarios(nombUsuario,nombreCliente,contrasena) VALUES('$username','$usuario','$clave')"; 

	if(mysqli_query($cnxn, $sql)){
		
	}else{
		echo "0";
	}	
	}
}
?>