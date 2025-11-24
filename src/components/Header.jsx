import { useState } from "react";

export default function Header({ cart, removeFromCart, increaseQuantity, decreaseQuantity, emptyCart }) {

    const [showConfirm, setShowConfirm] = useState(false)

    const handleConfirmEmpty = () => {
        emptyCart()
        setShowConfirm(false)
    }

    const handleCancelEmpty = () => setShowConfirm(false)

    const isEmpty = () => cart.length === 0
    const cartTotal=()=>cart.reduce((total, item)=>total+(item.price * item.quantity),0)

    return (
        <>

            <header class="py-5 header">
        <div class="container-xl">
          <div class="row justify-content-center justify-content-md-between">
            <div class="col-8 col-md-3">
              <a href="index.html">
                <img class="img-fluid logo-circular" src="./public/img/logo.jpg" alt="imagen logo" /> 
                <p class="titulo-snacks">Snacks Dulces</p>
              </a>
            </div>
            <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div class="carrito">
                <img class="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                                <div id="carrito" className="bg-white p-3">
                                    {isEmpty() ? (
                                        <p className="text-center">El carrito esta vacio</p>

                                    ):(<>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map(snacks => (
                                                    <tr key={snacks.id}>
                                                        <td>
                                                            <img className="img-fluid" src={`/img/${snacks.image}`} alt="imagen Snacks" />
                                                        </td>
                                                        <td>{snacks.name}</td>
                                                        <td className="fw-bold">
                                                            {snacks.price}
                                                        </td>
                                                        <td className="flex align-items-start gap-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => decreaseQuantity(snacks.id)}
                                                            >
                                                                -
                                                            </button>
                                                            {snacks.quantity}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => increaseQuantity(snacks.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => removeFromCart(snacks.id)}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>

                                                ))}

                                            </tbody>
                                        </table>
                                        <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal()}</span></p>
                                        <>
                                            <button
                                                className="btn btn-dark w-100 mt-3 p-2"
                                                onClick={() => setShowConfirm(true)}
                                            >
                                                Vaciar Carrito
                                            </button>

                                            {showConfirm && (
                                                <div className="confirm-modal-overlay" role="presentation" onClick={handleCancelEmpty}>
                                                    <div className="confirm-modal" role="dialog" aria-modal="true" aria-labelledby="confirmTitle" onClick={e => e.stopPropagation()}>
                                                        <h3 id="confirmTitle" className="fs-5 fw-bold">Confirmar acción</h3>
                                                        <p className="m-0">¿Estás seguro que deseas vaciar el carrito? Esta acción eliminará todos los productos.</p>
                                                        <div className="d-flex justify-content-end gap-4 mt-3">
                                                            <button className="btn btn-light" onClick={handleCancelEmpty}>Cancelar</button>
                                                            <button className="btn btn-danger" onClick={handleConfirmEmpty}>Vaciar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    </>
                                    )}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}