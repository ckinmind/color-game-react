import React from 'react';
import Index from './index';
import Room from './room';
import Loading from './loading';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,   /* 加载页*/
            index: false,    /* 首页*/
            room: false      /* 游戏页*/
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading: false,
                index: true
            });
        },1000);
    }

    /** 显示游戏页 */
    showRoom(){
        this.setState({
            index: false,
            room: true
        });
    }

    /**
     * 重玩游戏
     * 先销毁游戏页，再显示新的游戏也
     */
    rePlay(){
        this.setState({
            room: false
        },function(){
            this.setState({
                room: true
            });
        });
    }


    render() {
        let {loading, index, room } = this.state;
        return (
            <div className="grid">
                <Loading display={ loading }/>
                <Index   display={ index } showRoom={ this.showRoom.bind(this) }/>
                { room ? <Room  rePlay={ this.rePlay.bind(this) } /> : null }
            </div>
        );
    }
}

export default App;


/**
 * 备注提醒
 * 1. id=dialog重复问题
 *
 *
 *
 * */
