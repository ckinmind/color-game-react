import React from 'react';
import Gameover from './gameover';
import Pause from './pause';

class Dialog extends React.Component {

    render(){
        return (
            <div className={`page ${this.props.display}`} id="dialog">
                <div className="inner">
                    {/*<Gameover />*/}
                    <Pause />
                </div>
            </div>
        );
    }


}

export default Dialog;