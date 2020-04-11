var imgCatalogoURL = "../imagenes";

function buscar() {
	var viajero = new XMLHttpRequest();
	viajero.open("GET",
		"../../src/code/inicio2.php?",
		true
		);
	viajero.send(null);
	viajero.onreadystatechange = function(){
		if(viajero.readyState == 4 && viajero.status == 200){
			switch(viajero.responseText){
				case "-1":
					alert("ERROR CONEXIÓN");
					break;
				case "0":
					alert("0");	
					break;
				default:
				var coleccion = JSON.parse(viajero.responseText);
				for(var actual in coleccion){
						presentarProducto(coleccion[actual]);
					 }
			}
			
		}
	}	
}

function presentarProducto(producto){
 	var divElemento = document.createElement("div");

 	var imagen = document.createElement("img");
 	imagen.setAttribute("src","../../src/assets/imagenes/"+producto.img);
 	imagen.setAttribute("class","imgCatalogo");

 	var titulo = document.createElement("p");
 	var tituloTxt = document.createTextNode(
 		producto.nombProducto
 		);

 	var parrID = document.createElement("p");
 	var parrText = document.createTextNode(
 		producto.idProducto
 		);

 	var pprecio = document.createElement("p");
 	var pprecioText = document.createTextNode(producto.precio)
 	var btnAgregar = document.createElement("input");
 	btnAgregar.setAttribute("value",
 		"Agregar al carrito"
 		)
 	btnAgregar.setAttribute("type","button");
 	btnAgregar.setAttribute("onclick","insertarCarrito(\""+producto.idProducto+"\")");

 	parrID.appendChild(parrText);

 	titulo.appendChild(tituloTxt);

 	divElemento.appendChild(titulo);
 	divElemento.appendChild(imagen);
 	divElemento.appendChild(parrID);
 	divElemento.appendChild(btnAgregar);

 	divElemento.setAttribute("class", "resultado");

 	document.getElementById("respuesta").appendChild(divElemento);
}

function insertarCarrito(prodID){
	var viajero2 = new XMLHttpRequest();
	viajero2.open(
		"GET",
		"../../src/code/insertarCarrito.php?idP="+prodID,
		true
		);
	viajero2.send(null);
viajero2.onreadystatechange = function(){
		if(viajero2.readyState == 4 && viajero2.status == 200){
			switch(viajero2.responseText){
				case "-1":
					alert("ERROR CONEXIÓN");
					break;
				case "0":
					alert("0");	
					break;
				default:
				//var coleccion = JSON.parse(viajero2.responseText);
				alert("El ítem fue agregado al carrito");
				
				}
			}
		}
}