console.log("listen")

function mostrarModal (event) {
   var myModal = new bootstrap.Modal(document.getElementById('myModal'));
   myModal.show();
}

function cerrarModal (event) {
   var myModal = new bootstrap.Modal(document.getElementById('myModal'));
   myModal.hide();
}

function asignarComportamiento (event) {
   var bottonVer = document.querySelectorAll(".bottonAbrir");
   bottonVer.forEach(bottonAbrir => {
      bottonAbrir.addEventListener("click", mostrarModal);
   });
   var closeButton = document.getElementById('closeModalbutton');
   closeButton.addEventListener('click', cerrarModal);
}

document.addEventListener('DOMContentLoaded',asignarComportamiento);

console.log("listen2")