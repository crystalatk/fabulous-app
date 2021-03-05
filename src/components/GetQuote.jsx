import React, { Component } from 'react';

class GetQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            from: ""
        }
    }

    async componentDidMount () {
        const { name, type } = this.props;
        const url = `https://www.foaas.com/${type}/${name}`;
        const quoteData = await fetch(url, {
            headers: {'Accept': 'application/json'}
        })
          .then(response => response.json());
        this.setState({
            quote: quoteData.message,
            from: quoteData.subtitle
        });
        console.log('THIS IS THE QUOTE: ', this.state.quote)
      }

    render() {
        return (
            <>
                <h1>{this.state.quote}</h1>
                <h3>{this.state.from}</h3>
            </>
        )
    }
}

export default GetQuote;

