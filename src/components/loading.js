import React from 'react';

class Loading extends React.Component {

    render(){
        return (
            <div className={`page ${this.props.display}`} id="loading">
                <div className="loading-txt">加载中...</div>
            </div>
        );
    }
}

export default Loading;