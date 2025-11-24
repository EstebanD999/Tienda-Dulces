export default function Snacks({snacks, addToCart}) {

    const handleClick=(snacks)=>{
    setCart(snacks)
    }


return (

        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src={`/img/${snacks.image}`} alt={snacks.alt}/>
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">{snacks.name}</h3>
              <p>{snacks.description}</p>
              <br />
              <p className="fw-black text-primary fs-3">${snacks.price}</p>
              <button type="button" className="btn btn-dark w-100"
              onClick={()=>addToCart(snacks)}>Agregar al Carrito</button>
            </div>
          </div>
)

}