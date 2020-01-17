import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'World'
    }
    buttonWorld = () => {
        const newWorld = 'World'
        this.setState({
            who : newWorld
        })

    }
    buttonFriend = () => {
        const newFriend = 'Friend'
        this.setState({
            who : newFriend
        })
    }
    buttonReact = () => {
        const newReact = 'React'
        this.setState({
            who : newReact
        })
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.buttonWorld}>World</button>
                <button onClick={this.buttonFriend}>Friend</button>
                <button onClick={this.buttonReact}>React</button>
            </div>
        )
    }
}

export default HelloWorld