function ingresar(){ 

var usuario = document.getElementById("usser").value; 
var pass = document.getElementById("passw").value; 

var request = new XMLHttpRequest(); 


request.open("POST","../code/login.php?username="+usuario+"&password="+pass,true); 
request.send( "username="+usuario+"&password="+pass); 

request.onreadystatechange = function(){ 
	if(request.readyState == 4 && request.status == 200){ 
		if (request.responseText != "0") {
				window.location.href="Estado.php";
		}else{
				alert("Usuario o contraseña incorrecto");
			}
		
	}else{
	}
   }
}



function registrar(){ 

var usuario = document.getElementById("username").value; 
var nom = document.getElementById("nombre").value;
var pass = document.getElementById("pass").value; 
 

var request = new XMLHttpRequest(); 

request.open("POST","../code/registrar.php?username="+usuario+"&usuario="+nom+"&password="+pass,true);
request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 


request.send(); 

request.onreadystatechange = function(){ 
	if(request.readyState == 4 && request.status == 200){ 
		alert(request.responseText);
           

		if (request.responseText != "0") {
			if (usuario==""||nom==""||pass=="") {

			}else{
				window.location.href="inicio.html";
			}
				
			
			}else{
				alert("No Registrado");
			}
		}else{
		}
	}
}




