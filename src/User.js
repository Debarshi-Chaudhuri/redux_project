import React,{Component} from 'react'
class User extends Component{
    render(){
        return(
            <div>{
                this.props.users ? this.props.users.map((item)=>{
                    return(<div>
                        <p>{item.name}</p>
                        <p>{item.address}</p>
                        </div>
                    )
                }) : <p>No users</p>
            }</div>
        )
    }
}
export default User;