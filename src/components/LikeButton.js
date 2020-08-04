import React, { Component } from 'react';


class LikeButton extends Component {
    state = { liked: '♡' }

    likeAlbum = () => {(this.state.liked === '♡') ? this.setState({liked: "❤"}) : this.setState({liked: '♡'})}

    render() {
        return (
            <button onClick={this.likeAlbum} >{this.state.liked}</button>
        );
    }
}

export default LikeButton;

// Beth's example

// state = { faved: false }

//     handleFave = () => {
//         console.log('clicked')
//         this.setState(prevState => ({ faved: !prevState.faved }))
//       }

//     render() {
//         return (
//             <span onClick={this.handleFave} style={{ color: `${ this.state.faved ? "gold" : "black" }` }}>★</span>
//         );
//     }