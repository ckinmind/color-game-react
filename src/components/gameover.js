import React from 'react';

class Gameover extends React.Component {

    render() {
        return (
            <div className={`page ${this.props.display}`} id="dialog">
                <div className="inner">

                    <div className="content gameover">
                        <div className="inner-content">
                            <h3></h3>
                            <p id="tips">再得<em id="_score"></em>分，就可再打败<em id="_num"></em>万人</p>
                            <div className="btn-wrap clearfix">
                                <button id="mode" className="btn btn-play" data-type="color">
                                    普通场
                                </button>
                                <button className="btn btn-restart">
                                    重来
                                </button>
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

export default Gameover;