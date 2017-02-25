import React from 'react';
import Time from './time';
import Pause from './pause';
import GameOver from './gameover';
import Box from './box';

class Room extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isPause: false,
            isGameOver: false,
            lv: 0
        };
    }

    /** 继续游戏*/
    gameGoOn(){
        this.setState({isPause: false});
    }

    /** 暂停游戏*/
    showGamePause(){
        this.setState({isPause: true});
    }

    /** 显示游戏结束页面*/
    showGameOver(){
        this.setState({isGameOver: true});
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

        return (
            <div className="page" id="room">
                <header>
                    <span className="lv">得分: <em>{this.state.lv}</em></span>
                    <Time showGameOver={this.showGameOver.bind(this)} isPause={this.state.isPause} />
                    <span className="btn btn-pause" onClick={this.showGamePause.bind(this)}>暂停</span>
                </header>

                {/*<div id="box" className={`lv${this.getDegree()}`} style={{width: '500px', height: '500px'}}  onClick={this.handleClick.bind(this)}>*/}
                    {/*{ this.getSpanArr() }*/}
                {/*</div>*/}

                <Box lv={this.state.lv} handleClick={this.handleClick.bind(this)} />

                <Pause isPause={this.state.isPause} gameGoOn={this.gameGoOn.bind(this)} rePlay={this.props.rePlay}/>
                <GameOver isGameOver={this.state.isGameOver} lv={this.state.lv} rePlay={this.props.rePlay}/>
            </div>
        );
    }


}

export default Room;