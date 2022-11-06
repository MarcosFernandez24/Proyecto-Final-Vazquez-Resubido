const clickButton = document.querySelectorAll('.button')
let carrito = []
let juegosOption = []
let cyberpunkImagen = document.querySelector("#juego1img")
let cyberpunkTitulo = document.querySelector("#nombreJuego1")




class Juegos
{
     constructor  (nombreJuego, precioJuego, imagenJuego)
      {
           this.nombreJuego = nombreJuego
           this.precioJuego = precioJuego
           this.imagenJuego = imagenJuego
     }
    }

    async function fetchJuegos(){

      const response = await fetch ('./app.json')
      return await response.json()
      
      
      }
    
      fetchJuegos().then(productos => {
    
        juegosOption = productos
        transformarCards()

        
        
        
      })

  
     function transformarCards(){
      cyberpunkImagen = juegosOption[0].imagenJuego
      console.log(cyberpunkImagen)
      cyberpunkTitulo = juegosOption[0].nombreJuego
      console.log(cyberpunkTitulo)


     }
      
      

      




/*
function addCarritoItem(e){

const button = e.target
const item = button.closest('.card')
const itemTittle = item.querySelector('.card-title').textContent
const itemPrice = item.querySelector('.precio')
const itemImg = item.querySelector('.card-img-top').src

console.log(itemTittle)
console.log(itemPrice)
console.log(itemImg)
}
*/