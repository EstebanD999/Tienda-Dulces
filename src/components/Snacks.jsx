export default function Snacks({snacks, addToCart}) {

    const handleClick=(snacks)=>{
    setCart(snacks)
    }


return (

        <div class="col-md-6 col-lg-4 my-4 row align-items-center">
            <div class="col-4">
              <img class="img-fluid" src={`/img/${snacks.image}`} alt={snacks.alt}/>
            </div>
            <div class="col-8">
              <h3 class="text-black fs-4 fw-bold text-uppercase">{snacks.name}</h3>
              <p>{snacks.description}</p>
              <p class="fw-black text-primary fs-3">${snacks.price}</p>
              <button type="button" class="btn btn-dark w-100"
              onClick={()=>addToCart(snacks)}>Agregar al Carrito</button>
            </div>
          </div>
)

}