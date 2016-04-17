import React, {Component} from 'react';

import Player from 'components/Player';

class PlayerCard extends Component {
    render() {
        console.log(this.props.players);
        return (
            <div className="player-card" style={{float: this.props.float}}>
                {
                    this.props.players.map(function (val2, i) {
                        return (
                            <Player val={val2} key={"player" + i} float={this.props.float} />
                        )
                    }, this)
                }
            </div>
        )
    }
}

export default PlayerCard;