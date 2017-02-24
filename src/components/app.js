import React from 'react';
import 'styles/m.min.css';
import Index from './index';
import Room from './room';
import Loading from './loading';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /** 个组件的显示状态*/
            loading: '',
            index: 'hide',
            room: 'hide',
            startCount: false,
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading: 'hide',
                index: ''
            });
        },1000);
    }

    showRoom(){
        this.setState({
            index: 'hide',
            room: '',
            startCount: true
        });
    }


    render() {
        let {loading, index, room } = this.state;
        return (
            <div className="grid">
                <Loading display={ loading }/>
                <Index   display={ index } showRoom={ this.showRoom.bind(this) }/>
                <Room    display={ room }  startCount={this.state.startCount}/>
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
