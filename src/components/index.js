import React from 'react';

const Index = ({display, showRoom}) => (
    <div className={`page ${display ? '' : 'hide'}`} id="index">
        <h1>看你有多色</h1>
        <div id="help">找出所有色块里颜色不同的一个</div>
        <div className="btns">
            <button data-type="color" className="btn btn-play" onClick={showRoom}>普通模式</button>
            <button data-type="color2" className="btn btn-play btn-new">双飞模式</button>
        </div>
    </div>
);

Index.propTypes = {
    display: React.PropTypes.bool.isRequired,   /* 是否显示Index组件 */
    showRoom: React.PropTypes.func.isRequired   /* 开始游戏，即加载Room组件 */
};

export default Index;