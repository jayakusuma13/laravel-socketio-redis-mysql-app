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
            '<Button type="button" class="btn btn-primary">'+data.title[0]+'</Button>'+
            '<Button type="button" class="btn btn-primary">'+data.title[1]+'</Button>'+
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
            <Button type="button" class="btn btn-primary">{item.value1}</Button>
            <Button type="button" class="btn btn-primary">{item.value2}</Button>
            </div>
            
    }

    render () {
        return (
            <div className="containery">
                <h1>ExistingButton</h1>
                { this.state.projects.map(this.renderData) }
            </div>
        )
    }
}

if (document.getElementById('existing-button')) {
    ReactDOM.render(<ExistingButton />, document.getElementById('existing-button'));
}