import React from 'react'


class MemeGenerator extends React.Component {
    constructor(){
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(event){
        fetch("https://api.imgflip.com/get_memes")
            .then(response=> response.json())
            .then(response =>{
                const {memes} = response.data
                console.log(memes[0])
                this.setState({allMemeImgs: memes})
            })
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        this.setState({
            randomImg: this.state.allMemeImgs[randomNum].url
        })
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        className="input" 
                        name="topText" 
                        type="text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    ></input>



                    <input 
                        className="input"
                        name="bottomText"
                        type="text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    ></input>

                    <button className="input">Submit</button>

                    

                </form>
                <div className="meme">
                        <img src={this.state.randomImg} alt="" />
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>
            </div>
        )
    }
}

export default MemeGenerator