import React from 'react';

class Index extends React.Component {


    handleClick(){
        this.props.showRoom();
    }


    render(){
        return (
            <div className={`page ${this.props.display}`} id="index">
                <h1>看你有多色</h1>

                <div id="help">找出所有色块里颜色不同的一个</div>
                <div className="btns">
                    <button data-type="color" className="btn btn-play" onClick={this.handleClick.bind(this)}>
                        普通模式
                    </button>
                    <button data-type="color2" className="btn btn-play btn-new">
                        双飞模式
                    </button>
                </div>
            </div>
        );
    }


}

export default Index;