import Header from "./components/Header.jsx";
import Snacks from "./components/Snacks.jsx";
import { useState } from "react";
import {db} from "./assets/db.js";
function App() {

    //State
   const [data, setData] = useState(db)
   const [cart, setCart] = useState([])

  function addToCart(item) {
  const itemExists = cart.findIndex(snacks => snacks.id === item.id)

  if (itemExists >= 0) {
    const updateCart = [...cart]
    updateCart[itemExists].quantity++
    setCart(updateCart)
  } else {
    setCart(prevCart => [...prevCart, { ...item, quantity: 1 }])
  }

}

function removeFromCart(id){
  setCart(prevCart => prevCart.filter(snacks => snacks.id !== id))
}

  return (
    <>
    <Header 
    cart= {cart}
    removeFromCart={removeFromCart}/>

      <main class="container-xl mt-5">
        <h2 class="text-center">Nuestro Catálogo de Dulces</h2>
        <div class="row mt-5">

           {data.map((snacks) => (
            <Snacks
              key={snacks.id}
              snacks={snacks}
              setCart={setCart}
              addToCart={addToCart}
            />
          )
          )}



        </div>
      </main>

        <footer class="footer">
            <div class="container-xl">
            <p>© 2025 Snacks Dulces — Todos los derechos reservados</p>
            </div>
        </footer>


    </>
  )
}

export default App
