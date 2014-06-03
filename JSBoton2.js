//<script language="JavaScript">
window.onload = function() {
document.formulario.Finn.onclick = Fin; 
}

function add(delta) {
   if(delta==0){
      alert('Maximo permitido alcanzado: 400');
}
   valor = eval(formulario.casilla.value);
   formulario.casilla.value = eval(valor+delta);
}

function add2(delta) {
   if(delta==0){
      alert('Maximo permitido alcanzado: 400');
}
   valor = eval(formulario.casilla2.value);
   formulario.casilla2.value = eval(valor+delta);
}

function Fin(){
   alert('Marcador Final:');
}

function myfunction(txt){
        alert(txt)
      }
//</script>