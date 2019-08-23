import React from 'react';

// Using chuck norris API
// http://api.icndb.com/jokes/random

class App extends React.Component {

    constructor(){
        super();

        // set initial states.
        this.state = {
            loading: false,
            joke: {}
        }
    }

    componentDidMount(){
        // set loading to true on initial setup.
        this.setState({
            loading: true
        })

        // fetch joke, convert to json, store in state.
        fetch("http://api.icndb.com/jokes/random")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    joke: data.value
                })
            })

    }

    render(){
      return (
            <div>
              {this.state.loading ? "Loading..." : this.state.joke.joke}
            </div>
        );
    }
}

export default App;
