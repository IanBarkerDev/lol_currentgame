import React, {Component} from 'react';

class Page extends Component {
    render() {
        return (
            <div className="page">
                <img src="" alt={(this.props.type == 1 ? "Runes" : "Masteries") + " Page"} />
                {
                    this.props.type == 1 ? <ul><li>1</li><li>2</li></ul> : null
                }
            </div>
        )
    }
}

export default Page;