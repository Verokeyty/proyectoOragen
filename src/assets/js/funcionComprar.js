function desplegar(){
	var viajero = new XMLHttpRequest();
	viajero.open(
		"GET",
		"../../src/code/Carrito.php?",
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
					mostrarCarrito(coleccion[actual]);	

				}
			}
		}
	}
}

function mostrarCarrito(productoCarrito){
	var divItem = document.createElement("div");
	var imagen = document.createElement("img");
	imagen.setAttribute("src","../../src/assets/imagenes/"+productoCarrito.img)
imagen.setAttribute("class","imgCarrito");

					var titulo=document.createElement("h3");
					var tituloTxt = document.createTextNode(
						productoCarrito.nombProducto);
					
					var parr=document.createElement("h4");
					var parrText = document.createTextNode(
						productoCarrito.idProducto);

				var cantidad = document.createElement("input");
				cantidad.setAttribute("type","number");
				cantidad.setAttribute("min","1");
				cantidad.setAttribute("max","5");

				var bEliminar = document.createElement("input");
				bEliminar.setAttribute("type","button");
				bEliminar.setAttribute("id","botonEliminar");


					parr.appendChild(parrText);
					var otroDiv = document.createElement("div");
					otroDiv.setAttribute("class","otroDiv")
					//parr.setAttribute("id","parrafo1")
					titulo.appendChild(tituloTxt);
					var break1 = document.createElement("br");

					divItem.appendChild(titulo);
					divItem.appendChild(imagen);
					divItem.appendChild(break1);
					divItem.appendChild(otroDiv);
					otroDiv.appendChild(break1);
					otroDiv.appendChild(parr);
					otroDiv.appendChild(cantidad);


					divItem.setAttribute("class", "item")

					document.getElementById("Contenido").appendChild(divItem);
				
}


function actualizarCarrito(){
	var carritocontenedor = document.getElementById("Contenido")[0];
	var carritofilas = carritocontenedor.getElementsByClassName('resultado');
	for(var i =0;i< carritofilas.length; i++){
		var carf = carritofilas[i];
	}
}

function comprar(id){
	alert("Usted ha finalizado su compra.")
}
