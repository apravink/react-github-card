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
};

//Data array object
let data = [
    
]

const CardList = (props) => {
    return(
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    )
}

class Form extends React.Component{
    state = {
        username:''
    }
    handleSubmit = (event) => {
        //Prevent page from refreshing with submit 
        event.preventDefault();

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                 value = {this.state.username}
                 onChange = {(event)=> this.setState({username:event.target.value})}
                 type="text" placeholder='Github username' required />
                <button type='submit'>Add Card</button>
            </form>

        );
    }
}

class App extends React.Component{
    state={
        cards: [
            {name: "Abhilash Kumar",
            avatar_url:"https://avatars2.githubusercontent.com/u/5935955?v=4" ,
            location:"Toronto"},

        ]
    };
    render(){
        return(
            <div style={{margin:"1em"}}>
                <Form />
                <CardList cards={this.state.cards} />
            </div>
        )
    }
}








ReactDOM.render(
    <App  />, document.getElementById('root'));

