

const reducer = (state, action)=>{
    switch(action.type){
 
        case 'SET_INITIAL_STATE':
            console.log('setting state')
            return {
                ...action.json
            }

             
    }
    return state;
}

export default reducer