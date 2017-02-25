import React from 'react';

const lvTitle = ["瞎子", "色盲", "色郎", "色狼", "色鬼", "色魔", "超级色魔", "变态色魔", "孤独求色"];

function getLvTitle(lv){
    let index = 20 > lv ? 0 : Math.ceil((lv - 20) / 10);
    let title = lvTitle[index] || lvTitle[lvTitle.length-1];
    return title + 'Lv'+lv;
}


const GameOver = ({isGameOver, lv, rePlay}) => (
    <div className={`page ${isGameOver ? '' : 'hide'}`} id="dialog">
        <div className="inner">

            <div className="content gameover">
                <div className="inner-content">
                    <h3>{ getLvTitle(lv) }</h3>
                    {/*<p id="tips" style={{display:'none'}}>再得<em id="_score"></em>分，就可再打败<em id="_num"></em>万人</p>*/}
                    <div className="btn-wrap clearfix">
                        <button id="mode" className="btn btn-play" data-type="color">普通场</button>
                        <button className="btn btn-restart" onClick={rePlay}>重来</button>
                    </div>
                    <a href="" target="_blank" className="btn btn-boyaa">更多游戏</a>
                </div>
            </div>

        </div>
    </div>
);


GameOver.propTypes = {
    isGameOver: React.PropTypes.bool.isRequired,    /* 是否显示GameOver组件 */
    lv: React.PropTypes.number.isRequired,          /* 当前关卡 */
    rePlay: React.PropTypes.func.isRequired         /* 重玩游戏 */
};

export default GameOver;