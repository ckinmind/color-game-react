import React from 'react';

const Pause = ({isPause, gameGoOn, rePlay}) => (
    <div className={`page ${isPause ? '' : 'hide'}`} id="dialog">
        <div className="inner">

            <div className="content pause">
                <div className="inner-content">
                    <h3>游戏暂停</h3>
                    <div className="btn-wrap clearfix">
                        <button className="btn btn-resume" onClick={gameGoOn}>继续</button>
                        <button className="btn btn-restart" onClick={rePlay}>重来</button>
                    </div>
                    <a href="" target="_blank" className="btn btn-boyaa">更多游戏</a>
                </div>
            </div>

        </div>
    </div>
);

Pause.propTypes = {
    isPause: React.PropTypes.bool.isRequired,    /* 是否显示Pause组件 */
    gameGoOn: React.PropTypes.func.isRequired,   /* 继续游戏，重置isPause为false */
    rePlay: React.PropTypes.func.isRequired      /* 重玩游戏 */
};

export default Pause;
