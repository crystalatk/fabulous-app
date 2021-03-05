import React, { Component } from 'react';


class GetImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        gif: "",
        title: ""
    }
  }

  async componentDidMount () {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=vKQFVBkKu37h3XrK4p8e4J4AZGtI0NMX&tag=cat`;
    const gifData = await fetch(url)
      .then(response => response.json());
    this.setState({
      gif: gifData.data.image_url,
      title: gifData.data.title
    });
    console.log('THIS IS THE GIF: ', this.state.gif)
  }

  render() {

    return (
      <>
        <img src={this.state.gif} alt={this.state.title}/>
      </>
    )
  }
    
}
export default GetImage;