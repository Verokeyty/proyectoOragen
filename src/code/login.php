<?php 

$username = $_GET["username"];
$clave = $_GET["password"]; 

session_start();
//include 'conectar.php'; 
$cnxn = mysqli_connect("localhost","root","","proyecto");
	
if(!$cnxn){
		echo "-1";
}else{
	
	error_reporting(E_ERROR | E_PARSE);
	mysqli_set_charset($cnxn, "utf8");
	
	$sql = "SELECT * FROM tbusuarios WHERE nombUsuario = '$username' AND contrasena = '$clave'"; 

	$respuesta = mysqli_query($cnxn, $sql);
	if(mysqli_num_rows($respuesta) > 0){
		 $row = mysqli_fetch_array($respuesta);
                $usuario = $row['nombUsuario'];
                $_SESSION['user_id'] = $usuario;
                
               
               // header("location:../views/Estado.php");

		//echo "1";
	}else{
		echo "0";
	}
}

?>