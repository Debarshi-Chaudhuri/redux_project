import React,{Component} from 'react'
import {connect} from 'react-redux'
import User from './User'
import Songs from './Songs'

class Display extends Component{
    render(){
        console.log(this.props.users)
        return(
            <div>
                <User users={this.props.users}/>
                <hr></hr>
                <Songs songs={this.props.songs}/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return(
        {
            users:state.users,
            songs:state.songs
        }
    );
}

export default connect(mapStateToProps,null)(Display);