import { useEffect } from "react";
// import { Link } from "react-router-dom";
import {useDispatch,useSelector}from "react-redux"
import {getProducts} from "../redux/products/action"
import {addToCart} from "../redux/cart/action"
import Swal from "sweetalert2";


const Products =()=>{
    const {products}=useSelector((state=>state.product))
   
    const dispatch= useDispatch();
    const handleaddToCart =(product)=>{
            dispatch(addToCart(product))
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Cart Updated',
                showConfirmButton: false,
                timerProgressBar:true,
                toast:true,
                timer: 3000
              })
    }
    useEffect(()=>{
dispatch(getProducts())
    },[dispatch])
    
    return(
        <>
         <div className="container">
            <div className="row mt-5 g-3">
                {products && products.map(product => (
                    <div className="col-md-3" key={product.id} >
                        <div className="card">
                            <img className="card-img-top" src={product.image} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">
                                    {product.description}
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button onClick={()=>handleaddToCart(product)} className="btn btn-sm btn-outline-success">
                                    Add to cart
                                </button>
                                <span>{product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default Products;