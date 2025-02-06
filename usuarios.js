const usuarios= [
	{nombre:"Pablo", edad:18, activo: true},
	{nombre:"Ana", edad:13, activo: true},
	{nombre:"Luis", edad:22, activo: true},
	{nombre:"Juan", edad:19, activo: false},
	{nombre:"Jose", edad:30, activo: true}
];

function filtrarActivos(Usu){
	
	let retorno=[];// Se genera Arreglo vacío para el retorno.
	// Se recorre los usuarios con un ciclo for.
	for (let usuario of Usu){ 
		//Por cada usuario se compara la edad y el estado activo.
		if (usuario.edad > 18 && usuario.activo == true){ 
			retorno.push(usuario);// Se agrega el usuario al retorno.
		}	
	}
	return retorno;
	
}
	
console.log(filtrarActivos(usuarios));
