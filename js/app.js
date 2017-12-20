/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`


console.log(data);

/* Creando menu dinamico para las secciones */

function openMenu(evt, menuName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
}

//* Se mostrará la primr página al abrir.
document.getElementById("defaultOpen").click();


/* Creamos una variable para tomar las opciones de sede almacenadas en el ID Filter. 
El evento Listener escucha el cambio cada vez que ejecutamos el ID.*/
/*
var select = document.getElementById('filter');
select.addEventListener('change',
  function(){
  	var selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
    console.log(data[selectedOption.value]);
    estudiantes();
  });

var estudiantes = function(){
	var tLE = data['AQP']['2016-2']['students'];
	for(var i = 0; i < tLE.length; i++){
		var nombreE = tLE[i]['name'];
		var foto = tLE[i]['photo'];
		var activo = tLE[i]['active'];

		var cajaE = document.getElementById('nombre');
		   cajaE.innerHTML += '<h3>'+ tLE[i].name+'</h3>'
           cajaE.innerHTML += '<div class><img src=\"'+ tLE[i].photo +'\"/>'
           cajaE.innerHTML += tLE[i].active



	}
}


  */

/* Añadir estudiantes a la sección "Students"

console.log(student[1]);
var ficha = document.getElementById('nombre')
   for (var i = 0; i < 2; i++) {
   ficha.innerHTML += '<h3>'+ student[i].name+'</h3>'
   ficha.innerHTML += '<div class><img src=\"'+ student[i].photo +'\"/>'
   ficha.innerHTML += student[i].active
}

*/


var selectS = function(event){

	var index = (event.target.selectedIndex);
	console.log(index);

	var sede = event.target[index].dataset.sede;
	console.log(sede);

	var generacion = event.target[index].dataset.generacion;
	console.log(generacion);

	obtenerData(sede, generacion);
}

var obtenerData = function(sede, generacion){

	var estudiantes = data[sede][generacion]["students"]; 
	console.log(estudiantes);
	
	for( var i = 0; i < estudiantes.length; i++){
		var nombre = estudiantes[i].name;
		console.log(nombre);
		var photo = estudiantes[i].photo;
		console.log(photo);
		var active = estudiantes[i].active;
		console.log(active);
		var sprints = estudiantes[i].sprints;
		console.log(sprints);

		/*dibujar(nombre, active)*/

		var cajaE = document.getElementById('cajita');
		   cajaE.innerHTML += '<h3>'+ estudiantes[i].name+'</h3>'
           cajaE.innerHTML += '<div class><img src=\"'+ estudiantes[i].photo +'\"/>'
           cajaE.innerHTML += estudiantes[i].active
           /*cajaE.innerHTML += estudiantes[i].sprints*/

	}



}



var dibujar = function(nombre, active){
	var cajita = document.getElementById("cajita");
	var contenedorA = document.createElement("div");
	var nombre = document.createElement("p");
	var photo = document.createElement("img");
	var active = document.createElement("p");


    photo.src="http://dummyimage.com/100x100";

	nombre.classList.add("nombre-alumna");
	contenedorA.classList.add("contenedor-alumna")
	photo.classList.add("photo-alumna");
	active.classList.add("active-alumna");

	nombre.innerText = nombre;
	/*photo.innerText = photo;*/
	active.innerText = active;

	contenedorA.appendChild(nombre);
	contenedorA.appendChild(photo);
	contenedorA.appendChild(active);

	cajita.appendChild(contenedorA);



}











   