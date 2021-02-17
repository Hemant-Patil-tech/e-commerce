import classes from './login.module.css'
import React, {Component}from 'react'

export class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:undefined,
            password:undefined
        }

    }
     validateUser=()=>{
         console.log(this.state)
        if(this.state.email==="admin@ecommerce.com" && this.state.password==="admin123"){
            return true;
            this.setState({email:undefined,password:undefined})
        }
        return false;
    }

     handleLogin =(e)=>{
         console.log('event', e)
        if(this.validateUser()){
            alert('Login Successful');
            this.setState({
                email:undefined,
                password:undefined
            })
            e.preventDefault();

        }else{
            alert('Please Check your credentials');
            e.preventDefault();
            this.setState({
                email:undefined,
                password:undefined
            })
        }
    }

    handleChange=(e)=>{
        if(e.target.type==='email'){
         let copyState =   this.state
         copyState.email=e.target.value;
         this.setState({copyState})
        }else {
            let copyState =   this.state
            copyState.password=e.target.value;
            this.setState({copyState})
        }
    }

    render(){
        
   
   
        return(
            <div className={classes.container}>
            <div className={classes.baner}>
            Login
            </div>
            <div className={classes.formcontainer}>
            <form className={classes.form} onSubmit={this.handleLogin.bind(this)}>
            <label className={classes.label}>
              Email :
              </label>
              <input type="email" value={this.state.email || ''}   onChange={this.handleChange.bind(this)}/>
            
            <label className={classes.label}>
              Password :
              </label>
              <input type="password" value={this.state.password || ''} onChange={this.handleChange.bind(this)} />
            
            <input className={classes.submit} type="submit" value="Submit" />
          </form>
                </div>
            </div>
        )
    }
}

