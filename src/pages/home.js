import React, {Component} from 'react';

//import MainDisplay from 'components/MainDisplay';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="search-bar">
                    <input className="search-input" type="text" placeholder="Summoner Name" />
                    <button className="search-submit" type="button">Search</button>
                </div>
            </div>
        )
    }
}

export default Home;