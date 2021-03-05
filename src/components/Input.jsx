import { Link } from "react-router-dom";
import React, { Component } from "react";
import Button from "./Button";
import InputStyle from "./InputStyle";
import OptionStyle from "./OptionStyle";
import SelectStyle from "./SelectStyle";

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
                <label htmlFor="type">Choose one of these, please:</label>
                <br/>
                    <SelectStyle id="type" name="type" onChange={(event) => {
                        this._onChange(event.target.name, event.target.value);
                    }}>
                        <OptionStyle value="asshole">When you hate the pull request</OptionStyle>
                        <OptionStyle value="cool">When someone leaves a really long pull request</OptionStyle>
                        <OptionStyle value="dense">When someone merges broken code to main</OptionStyle>
                        <OptionStyle value="dumbledore">When the pull request won't automerge</OptionStyle>
                        <OptionStyle value="idea">When the pull request merges perfectly</OptionStyle>
                        <OptionStyle value="logs">When there is a pull request with no message</OptionStyle>
                        <OptionStyle value="life">When someone makes a pull request at 4:45 on a Friday</OptionStyle>
                        <OptionStyle value="yeah">When everything is perfectly committed</OptionStyle>
                    </SelectStyle>
                    <br/>
                <label>
                    <InputStyle 
                        name="name" 
                        type="text" 
                        placeholder="Your first name..."
                        onChange={(event) => {
                            this._onChange(event.target.name, event.target.value);
                        }}/>
                </label>
                <br/>
                <Link to={`/${name}/${type}`}>
                    <Button type="submit">Create my message</Button>
                </Link>
                
            </form>
        )
    }
    
}

export default Input;