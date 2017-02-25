import React from 'react';


class Time extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            time: 10,
            isDanger: false
        };
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    componentDidMount(){
       this.interval = setInterval(() => this.handleTime(), 1000);
    }

    /**
     * 定时器的回调
     * 1. this.props.isPause为true: 暂停游戏，time不变化
     * 2. time = 0: 执行游戏结束的回调
     * 3. time < 6: 时间减一秒，并且给span加上一个danger的class
     * 4. 其他情况: 正常减一秒
     */
    handleTime(){
        if(this.props.isPause){
            return ;
        }

        let time = this.state.time-1;
        if(time <=0){
            clearInterval(this.interval);
            this.setState({time: time});
            this.props.showGameOver();
        }else if(time <=6){
            this.setState({time: time, isDanger: true});
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

Time.propTypes = {
    isPause: React.PropTypes.bool.isRequired,      /* 是否暂停游戏 */
    showGameOver: React.PropTypes.func.isRequired   /* 游戏时间到了之后游戏结束的回调*/
};

export default Time