import { Link } from "react-router-dom";
import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Anonymous",
            type: "asshole"
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
        const { name, type } = this.state;
        return (
            <form onSubmit={this._handleSubmit}>
                <label for="type">Choose one of these, please:</label>
                    <select id="type" name="type" onChange={(event) => {
                        this._onChange(event.target.name, event.target.value);
                    }}>
                        <option value="asshole">When someone hates your pull request</option>
                        <option value="cool">When someone leaves a really long pull request</option>
                        <option value="dense">When someone merges broken code to main</option>
                        <option value="dumbledore">When the pull request won't automerge</option>
                        <option value="idea">When the pull request merges perfectly</option>
                        <option value="logs">When there is a pull request with no message</option>
                        <option value="life">When someone makes a pull request at 4:45 on a Friday</option>
                        <option value="yeah">When everything is perfectly committed</option>
                    </select>
                <label>
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Your first name..."
                        onChange={(event) => {
                            this._onChange(event.target.name, event.target.value);
                        }}/>
                </label>
                <Link to={`/${name}/${type}`}>
                    <button type="submit">Create my message</button>
                </Link>
                
            </form>
        )
    }
    
}

export default Input;