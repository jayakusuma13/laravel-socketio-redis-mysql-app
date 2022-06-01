import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { Button } from "react-bootstrap";

export default function TestButton (){

    window.Echo.channel('laravel_database_user-channel').listen('.UserEvent', (data) => {
        $("#containery").append('<Button variant="secondary">'+data.title[0]+' '+data.title[1]+'</Button>');
    });


    return(
        <div id="containery"></div>
    )
}

if (document.getElementById('test-button')) {
    ReactDOM.render(<TestButton />, document.getElementById('test-button'));
}