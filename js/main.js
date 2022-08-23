let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};



window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

function backweb() {
   
    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("sharelink").style.display = "none";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("habitaciones").style.display = "none";
        document.getElementById("lugares").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;
        ids1();
        backarriba();
        

    }};

    function back() {

        if (contador==1) {
            document.getElementById("informacion").style.display = "block";
            document.getElementById("portafolio").style.display = "none";
            document.getElementById("sharelink").style.display = "none";
            document.getElementById("side").style.display = "none";
            conta=0;
            contador=0;
            backarriba();
            history.back();
    
        }
        else if(contador==2){
            document.getElementById("portafolio").style.display = "block";
            document.getElementById("habitaciones").style.display = "none";
            document.getElementById("lugares").style.display = "none";
            document.getElementById("screen4").style.display = "none";
            contador=1;
            ids1();
            backarriba();
    
        }};

function inicio() {
    backweb();
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("habitaciones").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("lugares").style.display = "none";
    conta=0;
    backarriba();
    
    
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
    ids1();


}

function categorias() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("habitaciones").style.display = "block";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("lugares").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    
    
}

function restaurante() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("habitaciones").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("lugares").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    
    
    
}

function planes() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("habitaciones").style.display = "none";
    document.getElementById("lugares").style.display = "none";
    conta=0;
    contador=2; 
    backarriba(); 
    ids2();
        
        
}

function sharetj() {
    document.getElementById("sharelink").style.display = "block";
    document.getElementById("lugares").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("habitaciones").style.display = "none";
    conta=0;
    contador=1;
    ids1();    
       
}
function lugares() {
    document.getElementById("lugares").style.display = "block";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("habitaciones").style.display = "none";
    conta=0;
    contador=2; 
    backarriba();
    ids2();
         
        
}

//   boton foto

document.querySelector('.slider')   
.addEventListener('click',function(){
    planes();
    

});

//   boton atras



       //    menu laterl 

       var btns = document.getElementById("inicio"),
       informacion = document.getElementById("infomacion"),
       conta=0;
   
       function sidebar()  {
   
           if (conta==0) {
               document.getElementById("side").style.display = "block";
               conta=1;
           }
           else{
               document.getElementById("side").style.display = "none";
               conta=0;
           }
           }
   
           function cerrarside() {
               document.getElementById("side").style.display = "none";
               conta=0;
               
           }
   
           // llevar cerrar side automatico
   
           document.querySelector('.tarjeta').addEventListener('click',()=>{
               document.getElementById("side").style.display = "none";
               conta=0;
               });
   
     // slider3
    
     const slider3 = document.querySelector("#slider3");
     let sliderSection3 = document.querySelectorAll(".slider__section3");
     let sliderSectionlast3 = sliderSection3[sliderSection3.length -1];
     
     const btnLeft3 = document.querySelector("#btn-left3");
     const btnRight3 = document.querySelector("#btn-rigth3");
     
     slider3.insertAdjacentElement('afterbegin', sliderSectionlast3);
     
     function next3 (){
         let sliderSectionFirst3 = document.querySelectorAll(".slider__section3")[0];
         slider3.style.marginLeft = "-200%";
         slider3.style.transition = "all 0.5s";
         setTimeout(function(){
             slider3.style.transition = "none";
             slider3.insertAdjacentElement('beforeend', sliderSectionFirst3);
             slider3.style.marginLeft = "-100%";
         }, 500);  
     }
     
     function Prev3 (){
         let sliderSection3 = document.querySelectorAll(".slider__section3");
         let sliderSectionLast3 = sliderSection3[sliderSection3.length -1];
         slider3.style.marginLeft = "0";
         slider3.style.transition = "all 0.5s";
         setTimeout(function(){
             slider3.style.transition = "none";
             slider3.insertAdjacentElement('afterbegin', sliderSectionLast3);
             slider3.style.marginLeft = "-100%";
         }, 500);  
     }
     
     btnRight3.addEventListener('click', function(){
         next3();
     });
     
     btnLeft3.addEventListener('click', function(){
         Prev3();
     });
     
     setInterval(function(){
         next3();
     },4000);  



   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }

        // llevar cerrar side automatico

        document.querySelector('.tarjeta').addEventListener('click',()=>{
            document.getElementById("side").style.display = "none";
            conta=0;
            });

  // slider
 
  const slider = document.querySelector("#slider");
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionlast = sliderSection[sliderSection.length -1];
  
  const btnLeft = document.querySelector("#btn-left");
  const btnRight = document.querySelector("#btn-rigth");
  
  slider.insertAdjacentElement('afterbegin', sliderSectionlast);
  
  function next (){
      let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
      slider.style.marginLeft = "-200%";
      slider.style.transition = "all 0.5s";
      setTimeout(function(){
          slider.style.transition = "none";
          slider.insertAdjacentElement('beforeend', sliderSectionFirst);
          slider.style.marginLeft = "-100%";
      }, 500);  
  }
  
  function Prev (){
      let sliderSection = document.querySelectorAll(".slider__section");
      let sliderSectionLast = sliderSection[sliderSection.length -1];
      slider.style.marginLeft = "0";
      slider.style.transition = "all 0.5s";
      setTimeout(function(){
          slider.style.transition = "none";
          slider.insertAdjacentElement('afterbegin', sliderSectionLast);
          slider.style.marginLeft = "-100%";
      }, 500);  
  }
  
  btnRight.addEventListener('click', function(){
      next();
  });
  
  btnLeft.addEventListener('click', function(){
      Prev();
  });
  
  setInterval(function(){
      next();
  },4000);   
  

// llevar arriba
    
document.querySelector('.side')   
.addEventListener('click',()=>{
    backarriba();
});

        document.querySelector('.side1')   
        .addEventListener('click',()=>{
            backarriba();
        });

        document.querySelector('.side2')   
        .addEventListener('click',()=>{
            backarriba();
        });

        document.querySelector('.side3')   
        .addEventListener('click',()=>{
            backarriba();
        });

        document.querySelector('.back')   
        .addEventListener('click',()=>{
            backarriba();
        });
        
//formulario>
        document.querySelector("#submit").addEventListener("click", e => {
            e.preventDefault();
          
            //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
            let telefono = "573999786232";
          
            let cliente = document.querySelector("#cliente").value;
            let cantidad = document.querySelector("#edad").value;
            let fecha = document.querySelector("#fecha").value;
            let hora = document.querySelector("#hora").value;
            let modulos = document.querySelector("#modulos").value;
            let resp = document.querySelector("#respuesta");
          
            resp.classList.remove("fail");
            resp.classList.remove("send");
          
            let url = `https://api.whatsapp.com/send?phone=593999786232&text=
                  *La Estancia de Runtún*%0A
                  *Datos de la Reserva*%0A
                  *Nombre*%0A
                  ${cliente}%0A
                  *Cantidad de Personas*%0A
                  ${cantidad}%0A
                  *Fecha de Reserva*%0A
                  ${fecha}%0A
                  *Hora de Entrada*%0A
                  ${hora}%0A
                  *Alojamiento*%0A
                  ${modulos}%0A`;
          
            if (cliente === "" || edad === "" || fecha === "" || hora === "") {
              resp.classList.add("fail");
              resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
              return false;
            }
            resp.classList.remove("fail");
            resp.classList.add("send");
            resp.innerHTML = `Tu Reserva Fue Enviada, ${cliente}`;
          
            window.open(url);
          });
          
    
     //ALERTAS>
     function save(){
        let url = `https://drive.google.com/u/0/uc?id=1MA3Vu8sPHROK7y_tcaz_oEDtE0yDfH9N&export=download`;
        window.open(url); 
       };
      
      function ftuser() {
          Swal.fire({
              text: 'Alojamiento Baños-Ecuador',
              imageUrl: 'img/logoruntun.png',
              imageWidth: 200,
              confirmButtonText: 'Añadir a Contactos',
              showCloseButton: 'true',
              showCancelButton: true,
        
          
            }).then((result) => {
              if (result.isConfirmed) {
                save();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Descarga Correcta',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
      
       
      };
      
      function abrirpagos(){
        let urla = `https://laestanciaderuntun.blogspot.com/p/opciones-de-pago.html`;
        window.open(urla); 
       };


       function verpagos(){
        let urlsp = `https://laestanciaderuntun.blogspot.com/p/opciones-de-pago.html`;
        window.open(urlsp); 
       };


      function msjpagos() {
        Swal.fire({
            title: 'Opciones de Pago',
            icon: 'success',
            html:
           '<a href="https://api.whatsapp.com//send?text=Opciones%20de%20Pago%20https://laestanciaderuntun.blogspot.com/p/opciones-de-pago.html" class="botonp" ><span class="fa fa-share-alt"></span >&nbsp;Compartir nro. Cuenta</a>',
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ver nro. Cuenta',
          })
          .then((result) => {
            if (result.isConfirmed) {
              verpagos();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Información ',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
      
       
      };
      
      function msj2() {
        Swal.fire({
        showCloseButton: true,
        icon: 'success',
        title: 'Tarjeta Digital',
        text: 'Link Copiado a Portapapeles',
        footer: 'La Estancia de Runtún'
        });
      
       
      };



const $content = document.getElementById('textareacopy');
      $btncopy = document.getElementById ('btcopi');
      $title = document.getElementById ('titlelink')

      $btncopy.addEventListener('click', e => {
        $content.select();
        document.execCommand('copy')
        msj2();
      });

    // nuevo share

const shareData = {
    title: 'Web Tarjeta Digital',
    text: 'La Estancia de Runtún',
    url: 'https://laestanciaderuntun.blogspot.com'
  }
  
  
  // Share must be triggered by "user activation"

  function shareplus (){
    if (navigator.share) {
        navigator
       .share(shareData)
       .then(() => console.log('correcto'))
       .catch(error => console.log ('error sharing',error) );
    }else {
        sharetj();
    }
 }    




