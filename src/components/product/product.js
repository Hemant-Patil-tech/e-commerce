import classes from './product.module.css'

const Product=(props)=>{
        // console.log('product props', props)
return (
    <div className={classes.container}>
    <div className={classes.left}>
    <figure >
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt={props.product.description}
              />
            </figure>
        </div>
    <div className={classes.right}>
        <h3>
            {props.product.itemName}
        </h3>
    
    <div>
    <p>{props.product.price}</p>
    <p>{props.product.description}</p>
    <p>{props.product.stock} Available</p>
    </div>
    <div>
    <button className={classes.submit} onClick={()=>props.handleClick(props.product.id)}>Add to Cart</button>
    </div>
    </div>
    </div>
)
}

export default Product;