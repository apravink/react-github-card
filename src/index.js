import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';


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

        //Make call to api and pass this data up to the App component
        let github_url = "https://api.github.com/users/";
        $.getJSON(github_url+this.state.username)
        .done((resp) => {
            
            this.props.onSubmit(resp);
        } );

        

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
       
        ]
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    };
    render(){
        return(
            <div style={{margin:"1em"}}>
                <Form onSubmit={this.addNewCard} />
                <CardList cards={this.state.cards} />
            </div>
        )
    }
}








ReactDOM.render(
    <App  />, document.getElementById('root'));

