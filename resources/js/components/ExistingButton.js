import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { Button } from "react-bootstrap";
import axios from 'axios';

export default class ExistingButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount () {
        window.Echo.channel('laravel_database_user-channel').listen('.UserEvent', (data) => {
            $(".containery").append('<div>'+
            '<button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block mx-2 my-2 px-4 py-4 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">'+data.title[0]+'</button>'+
            '<button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block mx-2 my-2 px-4 py-4 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">'+data.title[1]+'</button>'+
            '</div>');
        });
    
        axios.get('/api/data').then(response => {
            this.setState({
                projects: response.data
            })
        })
    }

    renderData(item, index){
        return <div key={index}>
            <button type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    class="inline-block mx-2 my-2 px-4 py-4 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{item.value1}</button>
            <button type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    class="inline-block mx-2 my-2 px-4 py-4 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{item.value2}</button>
            </div>
            
    }

    render () {
        return (
            <div className="containery">
                { this.state.projects.map(this.renderData) }
            </div>
        )
    }
}

if (document.getElementById('existing-button')) {
    ReactDOM.render(<ExistingButton />, document.getElementById('existing-button'));
}