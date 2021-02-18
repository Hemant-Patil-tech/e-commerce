import classes from './homeappliances.module.css'
import Product from '../product/product';

const HomeAppliances=(props)=>{
    console.log(props.products)
    return(
    <div>

    <div className={classes.arrangeBox}> {
        props.products.map((product) => {
            if (product.category == "Home Appliance") {
                return <Product key={product.id} product={product} handleClick={props.handleClick} />
            }
        })

    }</div>
    </div>

)

}
export default HomeAppliances;