import React,{Component} from 'react'
class User extends Component{
    render(){
        return(
            <div>{
                this.props.users ? this.props.users.map((item, index)=>{
                    return(<div key={index}>
                        <p>{item.name}</p>
                        <p>{item.address}</p>
                        <button onClick={()=>this.props.selectUser(item)}>PRESS</button>
                        </div>
                    )
                }) : <p>No users</p>
            }</div>
        )
    }
}
export default User;