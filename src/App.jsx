import Header from "./components/Header.jsx";
import Snacks from "./components/Snacks.jsx";
import { useState, useRef } from "react";
import {db} from "./assets/db.js";
function App() {

    //State
   const [data, setData] = useState(db)
   const [cart, setCart] = useState([])
   const [notification, setNotification] = useState({ message: '', type: '' })
   const notificationTimer = useRef(null)

  function showNotification(message, type = 'success') {
    setNotification({ message, type })
    if (notificationTimer.current) clearTimeout(notificationTimer.current)
    notificationTimer.current = setTimeout(() => {
      setNotification({ message: '', type: '' })
      notificationTimer.current = null
    }, 3000)
  }

  function addToCart(item) {
  const itemExists = cart.findIndex(snacks => snacks.id === item.id)

  if (itemExists >= 0) {
    const updateCart = [...cart]
    updateCart[itemExists].quantity++
    setCart(updateCart)
  } else {
    setCart(prevCart => [...prevCart, { ...item, quantity: 1 }])
    showNotification(`${item.name} agregado al carrito`, 'success')
  }

}

function removeFromCart(id){
  const item = cart.find(s => s.id === id)
  setCart(prevCart => prevCart.filter(snacks => snacks.id !== id))
  if (item) showNotification(`${item.name} eliminado del carrito`, 'danger')
}

function increaseQuantity(id) {
  setCart(prevCart => prevCart.map(item =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  ))
}

function decreaseQuantity(id) {
  setCart(prevCart => {
    const removedItem = prevCart.find(item => item.id === id && item.quantity === 1)
    const updated = prevCart.flatMap(item => {
      if (item.id !== id) return item
      const newQty = item.quantity - 1
      return newQty > 0 ? [{ ...item, quantity: newQty }] : []
    })
    if (removedItem) showNotification(`${removedItem.name} eliminado del carrito`, 'danger')
    return updated
  })
}

function emptyCart() {
  if (cart.length > 0) {
    setCart([])
    showNotification('Productos eliminados', 'danger')
  }
}

  return (
    <>
    <Header 
    cart={cart}
    removeFromCart={removeFromCart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
    emptyCart={emptyCart}
    />

    <div className="app-notification-wrapper" aria-live="polite" aria-atomic="true">
      {notification.message && (
        <div
          className={`app-notification ${notification.type === 'danger' ? 'danger' : 'success'} show`}
          role="status"
        >
          {notification.message}
        </div>
      )}
    </div>

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
