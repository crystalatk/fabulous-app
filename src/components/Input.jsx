import { Link } from "react-router-dom";
import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Anonymous",
        }
    }

    _handleSubmit(event) {
        event.preventDefault();
        const serverResponse = this.props.handleSubmit(
            this.state.name,
        );
        this.setState({
            serverResponse
        },
        () => {
            console.log("server response is: ", serverResponse);
        });
    };

    _onChange(field, value) {
        this.setState({
            [field]: value
        });
    };

    render() {
        const { name } = this.state;
        return (
            <form onSubmit={this._handleSubmit}>
                <label>
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Your first name..."
                        onChange={(event) => {
                            this._onChange(event.target.name, event.target.value);
                        }}/>
                </label>
                <Link to={`/${name}`}>
                    <button type="submit">Create my message</button>
                </Link>
                
            </form>
        )
    }
    
}

export default Input;