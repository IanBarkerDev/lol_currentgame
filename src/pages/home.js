import React, {Component} from 'react';

//import MainDisplay from 'components/MainDisplay';

class Home extends Component {
    constructor () {
        super();
        this.state = {
            currName: ""
        }
    };

    updateCurrName = (e) => {
        if(e.key == "Enter") {
            this.submitCurrName();
        } else {
            this.setState({
                currName: e.target.value
            })
        }
    };

    submitCurrName = () => {
        const name = this.state.currName;
        $.ajax({
            url: "/search/" + name,
            type: "get",

            success: function(d) {
                console.log(d);
            }
        })
    };


    render() {
        return (
            <div className="home">
                <div className="search-bar">
                    <input className="search-input" type="text" placeholder="Summoner Name" onChange={this.updateCurrName} />
                    <button className="search-submit" type="button" onClick={this.submitCurrName} >Search</button>
                </div>
            </div>
        )
    }
}

export default Home;