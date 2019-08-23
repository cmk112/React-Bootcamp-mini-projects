import React from 'react';

class Header extends React.Component {

    constructor(){
        super();
        this.state = {
            name: "Meme Generator",
            links:[{
                name: "Home",
                url: "./#"
            },
            {
                name: "Make a Meme",
                url: "./#"
            }]
        };
    }

    render() {

        let links = this.state.links.map(link => {
            return(<a className="nav-item" href={link.url}>{link.name}</a>)
        });

        return(
            <header>
                <h1 className="logo">{this.state.name}</h1>
                <div className="nav">
                    {links}
                </div>
            </header>
        );
    };

}

export default Header;