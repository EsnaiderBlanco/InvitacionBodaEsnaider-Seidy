
var boton = document.getElementById("boton");
let v = document.getElementsByTagName("audio")[0];
var reproductorIcon = document.getElementById("reproductorIcon");
var sound = false;

boton.addEventListener("click", function(){
	if (!sound) {
		console.log("Prendido");
		v.play();
		reproductorIcon.classList.replace("fa-volume-up","fa-volume-off");
		sound = true;
    v.volume ="0.4"; 
		} else {
			console.log("Apagado");
			v.pause();
			reproductorIcon.classList.replace("fa-volume-off","fa-volume-up");
			sound = false;
			} 
    });

const tooltippy = document.getElementById('selloButton')

  const instance = tippy(tooltippy, {
    content: '¡Toca Aquí!',
    animation: 'perspective-extreme',
    trigger: 'manual',
  });

  console.log(instance);
  //instance.setContent('New content');

  window.addEventListener('load', function () {
    setTimeout(function() {
      instance.show();
    }, 4000);
    
  })


  $("#selloButton").one( "click", function() {
    instance.disable();
    window.sr = ScrollReveal();

        sr.reveal('.nombre1', {
            duration: 3000,
            delay: 2100,
            origin: 'buttom',
            distance: '-100px'
        });
        sr.reveal('.nombre2', {
            duration: 3000,
            delay: 2100,
            opacity: 0,
            distance: '0px'
        });
        sr.reveal('.nombre3', {
            duration: 3000,
            delay: 2100,
            origin: 'left',
            distance: '-100px'
        });

        var element = document.getElementById("sobre1");
        element.classList.add("moved");
        var element2 = document.getElementById("sobre2");
        element2.classList.add("moved2");
        boton.click();
        setTimeout(cerrarModal, 2000)
  });


      function cerrarModal() {
        $("#myModal").modal('hide');//ocultamos el modal
        $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
        $('.modal-backdrop').remove();//eliminamos el backdrop del modal
      }

      $(document).ready(function(){
        $("#myModal").modal('show');
      });