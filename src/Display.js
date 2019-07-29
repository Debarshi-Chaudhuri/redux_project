import React,{Component} from 'react'
import {connect} from 'react-redux'
import User from './User'
import Songs from './Songs'
import { bindActionCreators } from 'redux';
import {selectUser} from './Action.js'
class Display extends Component{
    render(){
        console.log(this.props.curr);
        
        return(
            <div>

                <User users={this.props.users} selectUser={this.props.selectUser}/>
                <hr></hr>
                <Songs songs={this.props.songs}/>
                {this.props.curr ? <p>{this.props.curr.address}</p> : <p>No User Selected</p>}
            </div>
        )
        
    }
}

const mapStateToProps=(store)=>{
    return(
        {
            users:store.users.users,
            curr:store.users.currentUser,
            songs:store.songs
        }
    );
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        selectUser
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Display);