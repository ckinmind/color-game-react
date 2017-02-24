import React from 'react';

class Pause extends React.Component {

    render() {
        return (
            <div className={`page ${this.props.display}`} id="dialog">
                <div className="inner">

                    <div className="content pause">
                        <div className="inner-content">
                            <h3>游戏暂停</h3>
                            <div className="btn-wrap clearfix">
                                <button className="btn btn-resume" onClick={this.props.GoOn}>继续</button>
                                <button className="btn btn-restart">重来</button>
                            </div>
                            <a href="" target="_blank" className="btn btn-boyaa">更多游戏</a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Pause;
