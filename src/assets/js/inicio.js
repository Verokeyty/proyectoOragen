function datos() {
	// body...
var ajax = new XMLHttpRequest();
ajax.open ("POST", "../code/inicio.php", true );

ajax.setRequestHeader("content-type","application/x-www-form-urlencoded");
ajax.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) //se corrobora que la info ya fue recibida
		console.log(this.responseText);//escucha hasta que la peticion sea correcta
};
//aqui se abre la conexion
ajax.send();//devuelve

}
datos();//se ejecuta datos. y se pueden usar varias veces.


