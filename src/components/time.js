import React from 'react';


class Time extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            time: 10,
            isDanger: false
        };
    }

    componentWillReceiveProps(nextPorps){
        if(nextPorps.startCount && !this.props.startCount) {
            this.interval = setInterval(() => this.handleTime(), 1000);
        }
    }

    /**
     * <= 0 游戏结束
     * < 6  加上一个danger的class
     * 其他情况 正常减一秒
     */
    handleTime(){
        console.log('handleTime time: '+this.state.time);
        if(this.props.isPause){   /* 暂停 */
            return ;
        }

        let time = this.state.time-1;
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

    render(){
        return (
            <span className={`time ${this.state.isDanger ? 'danger' : ''}`}>
                {this.state.time}
            </span>
        );
    }

}

export default Time