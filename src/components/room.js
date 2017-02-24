import React from 'react';
import GameBox from './gamebox'

class Room extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            time: 1000,
            isDanger: false
        };
    }
    componentWillReceiveProps(nextPorps){
        if(nextPorps.timeCounting && !this.props.timeCounting){
            this.interval = setInterval(() => {
                console.log('setInterval');
                this.handleTime()
            }, 1000);
        }
        if(nextPorps.isPause){

        }
    }

    handleTime(){
        console.log('handleTime time: '+this.state.time);
        /** 暂停*/
        if(this.props.isPause){
            return ;
        }

        let time = this.state.time;
        time--;
        /**
         * <= 0 游戏结束
         * < 6  加上一个danger的class
         * 其他情况 正常减一秒
         */
        if(time <=0){
            clearInterval(this.interval);
            this.props.showGameover();
        }else if(time <=6){
            this.setState({
                time: time,
                isDanger: true
            });
        }else{
            this.setState({time: time});
        }
    }

    handlePause(){
        console.log('handlePause');
        // this.setState({
        //     isPause: true
        // });
        this.props.showPause();
    }

    render(){
        return (
            <div className={`page ${this.props.display}`} id="room">
                <header>
                    <span className="lv">得分:<em>1</em></span>
                    <span className={`time ${this.state.isDanger ? 'danger' : ''}`}>{this.state.time}</span>
                    <span className="btn btn-pause" onClick={this.handlePause.bind(this)}>暂停</span>
                </header>
                {/*<div id="box" className="lv1">*/}
                {/*</div>*/}
                <GameBox />

            </div>
        );
    }


}

export default Room;