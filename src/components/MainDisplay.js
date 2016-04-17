import React, {Component} from 'react';

import BanRow from 'components/BanRow';
import PlayerCard from 'components/PlayerCard';

class MainDisplay extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="main-display">
                <BanRow banArray={this.props.banArray}/>
                <PlayerCard float={"left"} players={this.props.team1}/>
                <PlayerCard float={"right"} players={this.props.team2}/>
            </div>
        )
    }
}

export default MainDisplay;