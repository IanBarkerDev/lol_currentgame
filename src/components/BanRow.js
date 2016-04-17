import React, {Component} from 'react';

class BanRow extends Component {
    constructor() {
        super();
    }

    render() {
        var styleLeft = {float: "left"};
        var styleRight = {float: "right"};
        return (
            <div className="bans">
                {
                    this.props.banArray ?
                        this.props.banArray.map(function (val, i) {
                            return (
                                <img src="" alt={val.championId} key={"ban" + i} style={val.pickTurn % 2 == 1 ? styleLeft : styleRight}/>
                            )
                        }) : null
                }
            </div>
        )
    }
}

export default BanRow;