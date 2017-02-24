import React from 'react';

class GameBox extends React.Component {

    render() {
        return (
            <div id="box" className="lv2" style={{width: '500px', height: '500px'}}>
                <span style={{backgroundColor: 'rgb(217, 217, 136)'}}></span>
                <span style={{backgroundColor: 'rgb(102, 102, 21)'}}></span>
                <span style={{backgroundColor: 'rgb(102, 102, 21)'}}></span>
                <span style={{backgroundColor: 'rgb(102, 102, 21)'}}></span>
            </div>
        );
    }
}

export default GameBox;

