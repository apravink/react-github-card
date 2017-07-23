import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const Card = (props) => {
    return(
        <div style={{margin:'1em'}}>
            <img src={props.avatar_url} style ={{display:"inline-block", height:'100px', width:'100px'}}/>
            <div style = {{display:"inline-block"}}>
                <h2 style = {{marginLeft:'10px', marginTop:'4px'}}>{props.name}</h2>
                <p style = {{ marginLeft:'10px', marginTop:'4px'}}>{props.location}</p>
            </div>
            
        </div>
    )
}

const CardList = (props) => {
    return(
        <div>
            <Card name="Abhilash Kumar"
                avatar_url="https://avatars2.githubusercontent.com/u/5935955?v=4" 
                location="Toronto"/>
            <Card />
            <Card />
        </div>
    )
}









ReactDOM.render(
    <CardList />, document.getElementById('root'));

