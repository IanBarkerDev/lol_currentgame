import React, {Component} from 'react';

import Page from 'components/Page';

class Player extends Component {
    render() {
        var style = {float: this.props.float};
        return (
            <div className="player">
                <img src="" alt="Player Icon" className="player-icon" style={style} />
                <span className="summoner-name" style={style}>{this.props.val.summonerName}</span>
                <img src="" alt="Player Rank" className="player-rank" style={style} />
                <Page type={1} info={this.props.val.runes} className="runes" style={style} />
                <Page type={2} info={this.props.val.masteries} className="masteries" style={style} />
                <img src="" alt="Keystone" className="keystone" style={style} />
                <img src="" alt="Champion" className="champion" style={style} />
            </div>
        )
    }
}

export default Player;