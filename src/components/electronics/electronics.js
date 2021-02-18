import Product from "../product/product";
import classes from './electronics.module.css'


 const Electronics = (props)=>{
    return(
    <div>
    <div className={classes.arrangeBox}> {
        props.products.map((product) => {
            if (product.category == "Electronics") {
                return <Product key={product.id} product={product} handleClick={props.handleClick} />
            }


        })

    }</div>
    </div>)
}

export default Electronics;