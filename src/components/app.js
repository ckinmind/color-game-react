import React from 'react';
import 'styles/m.min.css';
import Index from './index';
import Room from './room';
import Loading from './loading';
import Pause from './pause';
import Gameover from './gameover';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /** 个组件的显示状态*/
            loading: '',
            index: 'hide',
            room: 'hide',
            dialog: 'hide',
            pause: 'hide',
            gameover: 'hide',

            isPause: false,
            timeCounting: false,
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading: 'hide',
                index: ''
            });
        },2000);
    }

    showRoom(){
        this.setState({
            index: 'hide',
            room: '',
            timeCounting: true
        });
    }
    showPause(){
        console.log('showPause');
        this.setState({
            pause: '',
            isPause: true
        });
    }

    showGameover(){
        console.log('showGameover');
        this.setState({
            pause: 'hide',
            gameover: ''
        });
    }

    handleGoOn(){
        console.log('handleGoOn');
        this.setState({
            pause: 'hide',
            isPause: false
        });
    }


    render() {
        let {loading, index, room, pause, gameover } = this.state;
        return (
            <div className="grid">
                <Loading display={ loading }/>
                <Index   display={ index } showRoom={ this.showRoom.bind(this) }/>
                <Room    display={ room }
                         timeCounting={this.state.timeCounting}
                         showPause={this.showPause.bind(this)}
                         showGameover={this.showGameover.bind(this)}
                         isPause={this.state.isPause}
                />
                <Pause  display={ pause}
                        GoOn={this.handleGoOn.bind(this)}
                />
                <Gameover display={ gameover }/>
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
