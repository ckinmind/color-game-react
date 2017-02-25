import React from 'react';

const Loading = ({display}) => (
    <div className={`page ${display ? '' : 'hide'}`} id="loading">
        <div className="loading-txt">加载中...</div>
    </div>
);

Loading.propTypes = {
    display: React.PropTypes.bool.isRequired   /* 是否显示Loading组件*/
};

export default Loading;