new universalParallax().init({
    speed: 4
  });
  
  new ClipboardJS('.btn');
  
  AOS.init();
  
  function copiedAlertBankAccount(){
    alert("Has copiado este número de cuenta")
  }
  
  function copiedAlertNumeroSinpe(){
    alert("Has copiado este numero de telefono")
  }
  const db = firebase.firestore();
  
  function onLoading(){
    const loadID = document.getElementById("loadingId");
    loadID.classList.remove("invisible");
  }
  
  function offLoading(){
    const loadID = document.getElementById("loadingId");
    loadID.classList.add("invisible");
  }
  
  
  function getGET()
  {
      // capturamos la url
      var loc = document.location.href;
      // si existe el interrogante
      if(loc.indexOf('?')>0)
      {
          // cogemos la parte de la url que hay despues del interrogante
          var getString = loc.split('?')[1];
          // obtenemos un array con cada clave=valor
          var GET = getString.split('&');
          var get = {};
          // recorremos todo el array de valores
          for(var i = 0, l = GET.length; i < l; i++){
              var tmp = GET[i].split('=');
              get[tmp[0]] = unescape(decodeURI(tmp[1]));
          }
          return get;
      }
  }
  
  var guiInvitado
  
  
      // Cogemos los valores pasados por get
      var valores = getGET();
      if(valores)
      {
          //recogemos los valores que nos envia la URL en variables para trabajar con ellas
           guiInvitado = valores['gui'];
           console.log(guiInvitado);
      }
  
  // En esta parte se realiza la conexión a la Base de datos para obtener la información necesarioa
      const onGetInvitado = (callback) => db.collection('eventoPlantilla').where("gui", "==", guiInvitado).onSnapshot(callback);
      onGetInvitado((querySnapshot) => {
  
        var varPasePalabra;
        var varPasesPalabra;
        querySnapshot.forEach(doc =>{
          
          const cadaInvitado = doc.data();
          console.log(cadaInvitado);
          
          $('#nombreInvitados').html(cadaInvitado.nombre);
          $('#mensajeEspecialParrafo').html(cadaInvitado.mensajeEspecial);
  
          if(cadaInvitado.tipoInv == 1){
            varPasePalabra = "Pase"
            varPasesPalabra = "Pases"
          }
          if(cadaInvitado.tipoInv == 2){
            varPasePalabra = "Pass"
            varPasesPalabra = "Passes"
          }else{
            varPasePalabra = "Pase"
            varPasesPalabra = "Pases"
          }
  
          if (cadaInvitado.pases == 1){
            var pasesString = cadaInvitado.pases + varPasePalabra
          }else{
            var pasesString = cadaInvitado.pases + varPasesPalabra
          }
          $('#numPasesInv').html(pasesString);
          $('#numPasesInv2').html(pasesString);
  
          ////////////// Codigo QR //////////////
  
          document.getElementById("qrcode").innerHTML = "";
  
          var qrcode = new QRCode("qrcode");
  
          function makeCode () {
  
            var mensaje = "¡Bienvenido! " + "\n" + cadaInvitado.nombre + " " + "\n" + pasesString + "\nMesa: " + cadaInvitado.mesa + "\nAlia & Lucas" ;
            console.log(mensaje);
            qrcode.makeCode(mensaje);
          }
  
          makeCode();
  
          //////////////////////////////
  
          ////////////// Display or no //////////////
  
          document.getElementById("ConfirmarAsistencia").style.display = "block";
          document.getElementById("invValida").style.display = "block";
          document.getElementById("QrSection").style.display = "block";
          
          if(cadaInvitado.status == 1 || cadaInvitado.status == 2){
            document.getElementById("QrSection").style.display = "none";
            if(cadaInvitado.tipoInv == 1){
              document.getElementById("menuQrOrConfirm").innerHTML = `<a href="#ConfirmarAsistencia" onclick="document.getElementById('menuTogglerId').click()" class="logo-font h1perso p-2 text-white" style="cursor: pointer">Confirmación de asistencia</a>`;
            }
            if(cadaInvitado.tipoInv == 2){
              document.getElementById("menuQrOrConfirm").innerHTML = `<a href="#ConfirmarAsistencia" onclick="document.getElementById('menuTogglerId').click()" class="logo-font h1perso p-2 text-white" style="cursor: pointer">Attendance Confirmation</a>`;
            }else{
              document.getElementById("menuQrOrConfirm").innerHTML = `<a href="#ConfirmarAsistencia" onclick="document.getElementById('menuTogglerId').click()" class="logo-font h1perso p-2 text-white" style="cursor: pointer">Confirmación de asistencia</a>`;
            }
          }else{
            document.getElementById("ConfirmarAsistencia").style.display = "none";
            if(cadaInvitado.tipoInv == 1){
              document.getElementById("menuQrOrConfirm").innerHTML = `<a href="#QrSection" onclick="document.getElementById('menuTogglerId').click()" class="logo-font h1perso p-2 text-white" style="cursor: pointer">Pase QR</a>`;
            }
            if(cadaInvitado.tipoInv == 2){
              document.getElementById("menuQrOrConfirm").innerHTML = `<a href="#QrSection" onclick="document.getElementById('menuTogglerId').click()" class="logo-font h1perso p-2 text-white" style="cursor: pointer">QR Pass</a>`;
            }else{
              document.getElementById("menuQrOrConfirm").innerHTML = `<a href="#QrSection" onclick="document.getElementById('menuTogglerId').click()" class="logo-font h1perso p-2 text-white" style="cursor: pointer">Pase QR</a>`;
            }
          }
  
          if(cadaInvitado.status == 2){
            document.getElementById("ConfirmarAsistencia").style.display = "none";
            document.getElementById("invValida").style.display = "none";
          }
  
  
          if(cadaInvitado.mensajeNoNinos == 0){
            document.getElementById("MsjNinos").style.display = "none";
          }
  
          if(cadaInvitado.wish != ""){
            document.getElementById("EnviarWishBtnContainer").style.display = "none";
          }
  
          //////////////////////////////
  
          ////////////// Numero de pases en modal reactivo //////////////
  
          document.getElementById("select_passes").innerHTML = ``;
  
          if (cadaInvitado.pases == 1){
            document.getElementById("select_passes").innerHTML += `<option value="1" selected>1 ${varPasePalabra}</option>`;
          }
          if (cadaInvitado.pases == 2){
            document.getElementById("select_passes").innerHTML += `<option value="1">1 ${varPasePalabra}</option> <option value="2" selected>2 ${varPasesPalabra}</option>`;
          }
          if (cadaInvitado.pases == 3){
            document.getElementById("select_passes").innerHTML += `<option value="1">1 ${varPasePalabra}</option> <option value="2">2 ${varPasesPalabra}</option> <option value="3" selected>3 ${varPasePalabra}</option>`;
          }
          if (cadaInvitado.pases == 4){
            document.getElementById("select_passes").innerHTML += `<option value="1">1 ${varPasePalabra}</option> <option value="2">2 ${varPasesPalabra}</option> <option value="3">3 ${varPasesPalabra}</option> <option value="4" selected>4 ${varPasesPalabra}</option>`;
          }
          if (cadaInvitado.pases == 5){
            document.getElementById("select_passes").innerHTML += `<option value="1">1 ${varPasePalabra}</option> <option value="2">2 ${varPasesPalabra}</option> <option value="3">3 ${varPasesPalabra}</option> <option value="4">4 ${varPasesPalabra}</option> <option value="5" selected>5 ${varPasesPalabra}</option> `;
          }
          if (cadaInvitado.pases == 6){
            document.getElementById("select_passes").innerHTML += `<option value="1">1 ${varPasePalabra}</option> <option value="2">2 ${varPasesPalabra}</option> <option value="3">3 ${varPasesPalabra}</option> <option value="4">4 ${varPasesPalabra}</option> <option value="5">5 ${varPasesPalabra}</option> <option value="6" selected>6 ${varPasesPalabra}</option>`;
          }
          if (cadaInvitado.pases == 7){
            document.getElementById("select_passes").innerHTML += `<option value="1">1 ${varPasePalabra}</option> <option value="2">2 ${varPasesPalabra}</option> <option value="3">3 ${varPasesPalabra}</option> <option value="4">4 ${varPasesPalabra}</option> <option value="5">5 ${varPasesPalabra}</option> <option value="6">6 ${varPasesPalabra}</option> <option value="7" selected>7 ${varPasesPalabra}</option>`;
          }
          if (cadaInvitado.pases == 8){
            document.getElementById("select_passes").innerHTML += `<option value="1">1 ${varPasePalabra}</option> <option value="2">2 ${varPasesPalabra}</option> <option value="3">3 ${varPasesPalabra}</option> <option value="4">4 ${varPasesPalabra}</option> <option value="5">5 ${varPasesPalabra}</option> <option value="6">6 ${varPasesPalabra}</option> <option value="7">7 ${varPasesPalabra}</option>  <option value="8" selected>8 ${varPasesPalabra}</option>`;
          }
          if (cadaInvitado.pases == 9){
            document.getElementById("select_passes").innerHTML += `<option value="1">1 ${varPasePalabra}</option> <option value="2">2 ${varPasesPalabra}</option> <option value="3">3 ${varPasesPalabra}</option> <option value="4">4 ${varPasesPalabra}</option> <option value="5">5 ${varPasesPalabra}</option> <option value="6">6 ${varPasesPalabra}</option> <option value="7">7 ${varPasesPalabra}</option>  <option value="8">8 ${varPasesPalabra}</option> <option value="9" selected>9 ${varPasesPalabra}</option>`;
          }
          if (cadaInvitado.pases == 10){
            document.getElementById("select_passes").innerHTML += `<option value="1">1 ${varPasePalabra}</option> <option value="2">2 ${varPasesPalabra}</option> <option value="3">3 ${varPasesPalabra}</option> <option value="4">4 ${varPasesPalabra}</option> <option value="5">5 ${varPasesPalabra}</option> <option value="6">6 ${varPasesPalabra}</option> <option value="7">7 ${varPasesPalabra}</option>  <option value="8">8 ${varPasesPalabra}</option> <option value="9">9 ${varPasesPalabra}</option> <option value="10" selected>10 ${varPasesPalabra}</option>`;
          }
          if (cadaInvitado.pases == 11){
            document.getElementById("select_passes").innerHTML += `<option value="1">1 ${varPasePalabra}</option> <option value="2">2 ${varPasesPalabra}</option> <option value="3">3 ${varPasesPalabra}</option> <option value="4">4 ${varPasesPalabra}</option> <option value="5">5 ${varPasesPalabra}</option> <option value="6">6 ${varPasesPalabra}</option> <option value="7">7 ${varPasesPalabra}</option>  <option value="8">8 ${varPasesPalabra}</option> <option value="9">9 ${varPasesPalabra}</option> <option value="10">10 ${varPasesPalabra}</option> <option value="11" selected>11 ${varPasesPalabra}</option>`;
          }
          if (cadaInvitado.pases == 12){
            document.getElementById("select_passes").innerHTML += `<option value="1">1 ${varPasePalabra}</option> <option value="2">2 ${varPasesPalabra}</option> <option value="3">3 ${varPasesPalabra}</option> <option value="4">4 ${varPasesPalabra}</option> <option value="5">5 ${varPasesPalabra}</option> <option value="6">6 ${varPasesPalabra}</option> <option value="7">7 ${varPasesPalabra}</option>  <option value="8">8 ${varPasesPalabra}</option> <option value="9">9 ${varPasesPalabra}</option> <option value="10">10 ${varPasesPalabra}</option> <option value="11">11 ${varPasesPalabra}</option> <option value="12" selected>12 ${varPasesPalabra}</option>`;
          }
  
                  //////////////////////////////
        });
      });
      ////////////// Confirmar Asistencia - Update document //////////////
  
      var msjEspecial;
  
      const confirmForm_passes = document.getElementById('confirm-form-passes');
  
      confirmForm_passes.addEventListener('submit', async (e) => {
        e.preventDefault();
        onLoading();
  
        var html_passes_adult = confirmForm_passes['select_passes'];
    
        var passes_adult = parseInt(html_passes_adult.value);
  
        console.log(passes_adult);
  
        msjEspecial = confirmForm_passes['confirmMsj'];
    
        await db.collection("eventoPlantilla").where("gui", "==", guiInvitado)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                var sfRef = db.collection("eventoPlantilla").doc(doc.id);
                sfRef.update ({
                  pases: passes_adult, 
                  status: 3});
                  closeModalConfirmarAsistencia();
                  mensaje_success();
                  offLoading();
            });
        })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
      })
  
      function closeModalConfirmarAsistencia(){
        $('#modalConfirmarAsistencia').modal('hide');
      }
  
      ////////////// Decline Asistencia - Update document //////////////
  
      var msjEspecial;
  
      const formDecline = document.getElementById('formDecline');
  
      formDecline.addEventListener('submit', async (e) => {
        e.preventDefault();
        onLoading();
        msjEspecial = formDecline['declineMsj'];
    
        await db.collection("eventoPlantilla").where("gui", "==", guiInvitado)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                var sfRef = db.collection("eventoPlantilla").doc(doc.id);
                sfRef.update ({
                  pases: 0, status: 2, mensaje: msjEspecial.value});
                  closeModalNoConfirmarAsistencia();
                  mensaje_success2();
                  offLoading();
            });
        })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
      })
  
      function closeModalNoConfirmarAsistencia(){
        $('#modalNoConfirmarAsistencia').modal('hide');
      }
      
    function mensaje_success(){
      Swal.fire({
                      title: '¡Genial!',
                      text: 'Ha confirmado su asistencia',                 // 'Cuando es un abono, solo se permite registrar a una sola persona'
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
  
    function mensaje_success2(){
      Swal.fire({
                      title: '¡Gracias por confirmar!',
                      text: 'Lamentamos no poder verte este día, pero otra ocasión será',                 // 'Cuando es un abono, solo se permite registrar a una sola persona'
                      // html:'<b class="">Hola</b>',
                      icon: 'success',   //warning | error | success | info | question
                      confirmButtonText: 'Ok',
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
  
    function mensaje_error(){
      Swal.fire({
                      title: 'Ooops',
                      text: '¡Creo te falto algún dato!',                 // 'Cuando es un abono, solo se permite registrar a una sola persona'
                      // html:'<b class="">Hola</b>',
                      icon: 'warning',   //warning | error | success | info | question
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
                      showCloseButton: true
                      // closeButtonAriaLabel:'Cerrar',
  
                      // imageUrl:'Content/themes/images/Logo_empresa.png',
                      // imageWidth:'200px',
                      // imageHeight:'100px',
                      // imageAlt:'Logo'
                  })
                  return false;
              }