import React from 'react';


class Time extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            time: 10,
            isDanger: false
        };
    }

    // componentWillReceiveProps(nextPorps){
    //     console.log('time componentWillReceiveProps');
    //     console.log(nextPorps);
    //     if(nextPorps.startCount && !this.props.startCount) {
    //        this.setTimeInterval();
    //     }
    //     /** 重来*/
    //     if(nextPorps.isReStar && (nextPorps.isPause || nextPorps.isGameOver)){
    //         this.setState({time:10,isDanger:false});
    //         this.setTimeInterval();
    //     }
    // }

    setTimeInterval(){
        clearInterval(this.interval);
        this.interval = setInterval(() => this.handleTime(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }


    componentDidMount(){
       this.setTimeInterval();
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

export default Time