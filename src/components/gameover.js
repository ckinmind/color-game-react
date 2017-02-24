import React from 'react';

class GameOver extends React.Component {

    constructor(props){
        super(props);
        this.lvTitle = ["瞎子", "色盲", "色郎", "色狼", "色鬼", "色魔", "超级色魔", "变态色魔", "孤独求色"];
    }

    getLvTitle(lv){
        let index = 20 > lv ? 0 : Math.ceil((lv - 20) / 10);
        let title = this.lvTitle[index] || this.lvTitle[this.lvTitle.length-1];
       return title;
    }

    render() {
        let lv = this.props.lv;
        let lvTitle = this.getLvTitle(lv);
        let text =  lvTitle + 'lv'+ lv;

        return (
            <div className={`page ${this.props.isGameOver ? '' : 'hide'}`} id="dialog">
                <div className="inner">

                    <div className="content gameover">
                        <div className="inner-content">
                            <h3>{ text }</h3>
                            {/*<p id="tips" style={{display:'none'}}>再得<em id="_score"></em>分，就可再打败<em id="_num"></em>万人</p>*/}
                            <div className="btn-wrap clearfix">
                                <button id="mode" className="btn btn-play" data-type="color">普通场</button>
                                <button className="btn btn-restart" onClick={this.props.rePlay}>重来</button>
                            </div>
                            <a href="http://mp.weixin.qq.com/s?__biz=MjM5NzAzODA0Ng==&mid=200533929&idx=1&sn=95644f093189b86639325100da7f0c2a#rd"
                               target="_blank" className="btn btn-boyaa">
                                更多游戏
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default GameOver;