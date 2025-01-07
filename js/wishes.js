const wish_form = document.getElementById('wish-form');

    wish_form.addEventListener('submit', async (e) => {
      e.preventDefault();
      onLoading();

      wish = wish_form['wish-mensaje'];
  
      await db.collection("eventoPlantilla").where("gui", "==", guiInvitado)
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              var sfRef = db.collection("eventoPlantilla").doc(doc.id);
              sfRef.update ({
                wish: wish.value});
                closeModalWishes();
                mensaje_successWishes();
                offLoading();
          });
      })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    })

    function closeModalWishes(){
      $('#modalWishes').modal('hide');
    }

    const onGetInvitados = (callback) => db.collection('eventoPlantilla').where("wish", "!=", "").onSnapshot(callback);


    onGetInvitados((querySnapshot) => {
      
      const var_todosLosInvitados= document.getElementById('wishesRow');
      var_todosLosInvitados.innerHTML = '';

          querySnapshot.forEach(doc =>{
            console.log(doc.data());
              const cadaInvitado = doc.data();
              var_todosLosInvitados.innerHTML += `
                    <div class="col-md-8 col-12 text-center p-3 mt-3 mb-3" style="border-radius: 10px; border: 2px solid white">
                    <h3 class="text-default">${cadaInvitado.nombre}</h3>
                    ${cadaInvitado.wish}
                  </div>
                  `;
          });
      });


    function mensaje_successWishes(){
      Swal.fire({
                      title: '¡Genial!',
                      text: 'Gracias por tus buenos deseos',                 // 'Cuando es un abono, solo se permite registrar a una sola persona'
                      // html:'<b class="">Hola</b>',
                      icon: 'success',   //warning | error | success | info | question
                      confirmButtonText: 'OK',
                      //footer: '<span class"">Esta ventana se cerrará en 20 segundos</span>',
                      //timer: 20000,
                      timerProgressBar: false,
                      // width:'90%',
                      padding: '1rem',
                      // background:'#000',
                      // grow: 'row',    // row | column | fullscreen
                      backdrop: true,  //Es lo oscuro de atrás
                      // toast:true,    //ventana de tamaño pequeño
                      position: 'center',      //ubicación de la ventana center | top |  bottom | bottom-end | bottom-start | top-end | top-start
                      allowOutsideClick: false,  //permitir click afuera
                      allowEscapeKey: false,    //permitir ESC
                      allowEnterKey: false,     //permitir Enter
                      // stopKeydownPropagation: false,
  
                      // Async await se usa para obtener los valores del Input o select
                      // input:'text',
                      // inputPlaceholder:'Escribe tu nombre',
                      // inputValue:'sin nombre',
                      // inputOptions:{
                      //        MXN: 'Pesos',
                      //        USD: 'Dólares'
                      //  },
  
                      showConfirmButton: true,
                      // confirmButtonColor:'#000',
                      // confirmButtonAriaLabel:'Confirmar'
  
                      // showCancelButton:false,
                      // cancelButtonText:'Cancelar',
                      // cancelButtonColor:'#000',
                      // cancelButtonAriaLabel:'Cancelar',
  
                      // buttonsStyling:true,
                      showCloseButton: false
                      // closeButtonAriaLabel:'Cerrar',
  
                      // imageUrl:'Content/themes/images/Logo_empresa.png',
                      // imageWidth:'200px',
                      // imageHeight:'100px',
                      // imageAlt:'Logo'
                  }).then($(function () {
                    
                      
                    }));
                  return false;
              }


              