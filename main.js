//VARIABLES
// declaro variables de los objetos que crea el usuario
const tipo=document.getElementById("tipo")
const combo=document.getElementById("combo")
const descripcion=document.getElementById("descripcion")

// Traigo valores guardados
const productos=[]
if (localStorage.getItem("productos")){
    productos=JSON.parse(localStorage.getItem("productos"))
}

// ARRAY y OBJETOS


    
// Objetos- bebida
let bebidas = [{
    nombre: "coca cola",
    precio: "200",
   
}, {
    nombre: "sprite",
    precio: "200",
    
}, {
    nombre: "agua saborizada",
    precio: "250",
    
},
{    
    nombre: "agua con gas",
    precio: "100",   

}];
// Objetos - hamburguesa
let carnes = [{
    tipoH: "Carne",
      
}, {
    tipoH: "Pollo",   
    
}, {
    tipoH: "Soja",    
    
},
{    
    tipoH: "Lentejas",     

}];


//recorro el array y muestro en html-

for (bebida of bebidas) {
    let parrafo = document.createElement("option");

    parrafo.innerHTML = "" + bebida.nombre + " $ " + bebida.precio;

    document.getElementById("gaseosa").appendChild(parrafo);
};
for (carne of carnes) {
    let parrafo2 = document.createElement("option");

    parrafo2.innerHTML = "" + carne.tipoH ;

    document.getElementById("tipo").appendChild(parrafo2);
};




//LOCAL STORAGE PEDIDO
// Guardo en localstorage-
const agregar=()=>{
const producto={
    tipo:tipo.value,
    combo:combo.value,
    descripcion:descripcion.value,
}
productos.push(producto) 
localStorage.setItem("carrito",JSON.stringify(productos))
}
// Evento click para guardar
document.getElementById("botonPedir").addEventListener("click",agregar)


// CARD PEDIDOS
// Evento para mostrar productos en card-

descripcion.addEventListener("change",()=>{
    const IngCard= document.getElementById("cardIng")
    IngCard.innerText= descripcion.value 
});

$("#tipo").on("change", function () {
    $('#cardTipo').html($("#tipo").val())
});

$("#gaseosa").on("change", function () {
    $('#cardBebida').html($("#gaseosa").val())
});
$("#combo").on("change", function () {
    $('#cardCombo').html($("#combo").val())
})

//confirmacion por consola 
$("#botonPedir").click(function () { 
    console.log("producto agregado");
});




                              //ANIMACIONES JQUERY

// texto dom
$("body").prepend('<h4  style="display: none" id="bienvenido" > BIENVENIDO!</h4>');
$("body").prepend('<h3  class="alert alert-warning" style="display: none" id="graciasPed" >¡Gracias por tu pedido!</h3>');

 

// modificacion css del texto
$("#bienvenido").css({"margin-left": "45%",
"color":"brown",
"margin-top":"20px" });
$("#graciasPed").css({
    "font-family":"arial",   
    "color":"darkslategray",
    
});

// animaciones jquery del texto
$("#bienvenido").fadeIn("slow", function(){
    $("#bienvenido").fadeOut("3000");
}) 

$("#botonPedir").click(function () {
   
    $("#graciasPed").fadeIn("slow");
        
        $("#graciasPed").fadeOut(3000);


 });

 
                           // GET
 // variable para la API
 const URLGET = "https://mocki.io/v1/01a8291b-e192-4b56-9ca6-4f16e8df79eb"
 // agrego boton al dom
 $("#menu").prepend('<button type="button" class="btn btn-secondary" id="btnMenu">VER MENÚ</button>');

 // evento del get
$("#btnMenu").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("#container-fluid").append(`>
              <div class="card" id="card" >
              <div class="card-body" id="cardBody">
                  <h5 class="card-title">${dato.nombre}</h5>
                  <p class="card-text"> ${dato.precio}</p>
                 
              </div>
              </div>
          `);
            }  
          }
    });
});
// modificacion de las cards
$("#cardBody").css({
    "margin-left":"150px",
})




                                //POST
// variable de post
const URLPOST   = "https://jsonplaceholder.typicode.com/posts"
//Declaramos la información a enviar
const infoPost =  "#exampleInputEmail1"
// boton enviar jquery
$("#suscripcion").append('<button type="button" class="btn btn-secondary" id="btnSuscribirse">ENVIAR</button>')

//evento click del botón 


$("#btnSuscribirse").click(() => { 
    $.post(URLPOST, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            $("#gracias").prepend(`<h2 id=respPost>
Gracias!
</h2>`);
        }  
    });
});

 
