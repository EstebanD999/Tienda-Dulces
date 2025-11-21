import Snacks from "./Snacks"

export default function Header({ cart , removeFromCart}) {

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
                                                            >
                                                                -
                                                            </button>
                                                            {snacks.quantity}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
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
                                        <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
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