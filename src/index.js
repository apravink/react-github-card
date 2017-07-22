import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Card = (props) => {
    return(
        <div>
            <img src="http://placehold.it/100" />
            <div style={{}}
            >
                <h2>Name..</h2>
                <p>Company..</p>
            </div>
            
        </div>
    )
}

//const CardList = ...








ReactDOM.render(
    <Card />, document.getElementById('root'));

