import classes from './cartItem.module.css'

const CartItem=(props)=>{
        console.log('product props', props)
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
    <p>Quantity {props.product.quantity}</p>
    </div>
    <div>
   {props.product.quantity>1 ?<button className={classes.submit} onClick={()=>props.remove(props.product.id)}>Reduce Quantity</button>:<button className={classes.submit} onClick={()=>props.remove(props.product.id)}>Remove</button>} 
    </div>
    </div>
    </div>
)
}

export default CartItem;