import React from 'react';
import { getOffset, getColor, getSpan } from '../tool';
import Time from './time';
import Pause from './pause';
import GameOver from './gameover';

class Room extends React.Component {

    constructor(props){
        super(props);
        this.lvMap = [2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9]; /*存储对应索引关卡的一行span数目*/
        this.offset = 0;
        this.state = {
            time: 10,
            isPause: false,
            isGameOver: false,
            lv: 0
        };
    }

    componentWillReceiveProps(nextPorps){
    }

    gameGoOn(){
        this.setState({isPause: false});
    }



    handlePause(){
        this.setState({isPause: true});
    }

    showGameover(){
        console.log('showGameover');
        this.setState({isGameOver:true});
    }


    /** 处理点击 */
    handleClick(e){
        /** 有key存在表示点中的是目标span*/
        if(e.target.dataset.key){
            let lv = this.state.lv +1;
            this.setState( { lv: lv } );
        }
    }

    render(){

        let lv = this.state.lv;                                          /* 获取当前等级(也是积分) */
        let degree = this.lvMap[lv] || 9;                                /* 获取一行的span数目值，如果没有则为9*/
        this.offset = getOffset(degree, lv);                             /* 获取偏离数值 */
        let { color, offsetColor } = getColor(this.offset);              /* 获取正常颜色和偏离颜色 */
        let spanArr = getSpan(degree, color, offsetColor);               /* 获取所有的span */

        return (
            <div className={`page ${this.props.display}`} id="room">
                <header>
                    <span className="lv">得分:<em>1</em></span>
                    <Time startCount={this.props.startCount}
                          showGameover={this.showGameover.bind(this)}
                          isPause={this.state.isPause}
                    />
                    <span className="btn btn-pause" onClick={this.handlePause.bind(this)}>暂停</span>
                </header>

                <div id="box" className={`lv${degree}`} style={{width: '500px', height: '500px'}}  onClick={this.handleClick.bind(this)}>
                    { spanArr}
                </div>

                <Pause isPause={this.state.isPause} gameGoOn={this.gameGoOn.bind(this)}/>
                <GameOver isGameOver={this.state.isGameOver}/>
            </div>
        );
    }


}

export default Room;