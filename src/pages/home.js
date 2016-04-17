import React, {Component} from 'react';

import MainDisplay from 'components/MainDisplay';

class Home extends Component {
    constructor () {
        super();
        this.state = {
            currName: "",
            currGame: {participants: [], bannedChampions: []},
            team1: [],
            team2: []
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
                this.setState({
                    currGame: d,
                    team1: this.createTeam(d.participants, 1),
                    team2: this.createTeam(d.participants, 2)
                });
            }.bind(this)
        })
    };

    createTeam = (arr, num) => {
        var team = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].teamId === num * 100) {
                team.push(arr[i]);
            }
        }
        return team;
    };


    render() {
        return (
            <div className="home">
                <div className="search-bar">
                    22277779
                    <input className="search-input" type="text" placeholder="Summoner Name" onChange={this.updateCurrName} />
                    <button className="search-submit" type="button" onClick={this.submitCurrName} >Search</button>
                </div>
                <MainDisplay banArray={this.state.currGame.bannedChampions} team1={this.state.team1} team2={this.state.team2} />
            </div>
        )
    }
}

export default Home;