import React,{Component} from 'react'
class Songs extends Component{
    render(){
        return(
            <div>{
                this.props.songs ? this.props.songs.map((item)=>{
                    return(<div>
                        <p>{item.name}</p>
                        <p>{item.singer}</p>
                        </div>
                    )
                }) : <p>No Songs</p>
            }</div>
        )
    }
}
export default Songs;