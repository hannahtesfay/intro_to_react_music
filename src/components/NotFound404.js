import React from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/404.css'

const NotFound404 = props => {
    return (

        <div className="page404">
            <p className="page404">Oops, what's happened here?</p> 
            <p className="page404">We don't have a page called { props.location.pathname }!</p>
            <button className="errorButton" onClick={props.history.goBack}>Go back!</button>
        </div>
    );
}

export default withRouter(NotFound404);