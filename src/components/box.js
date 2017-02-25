import React from 'react';
import { getOffset, getColor, getSpan } from '../tool';

class Box extends React.Component{

    constructor(props){
        super(props);
        this.lvMap = [2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9]; /*存储对应索引关卡的一行span数目*/
    }

    shouldComponentUpdate(nexrProps){
        return nexrProps.lv != this.props.lv
    }

    render(){
        let lv = this.props.lv;                                     /* 获取当前等级(也是积分) */
        let degree = this.lvMap[this.props.lv] || 9;                /* 获取一行的span数目*/
        let offset = getOffset(degree, lv);                         /* 获取偏离数值 */
        let { color, offsetColor } = getColor(offset);              /* 获取正常颜色和偏离颜色 */
        let spanArr = getSpan(degree, color, offsetColor);          /* 获取所有的span */

        return(
            <div id="box" className={`lv${degree}`} style={{width: '500px', height: '500px'}}  onClick={this.props.handleClick}>
                { spanArr }
            </div>
        );
    }

}

Box.propTypes = {
    handleClick: React.PropTypes.func.isRequired,   /* 点击的回调函数*/
    lv: React.PropTypes.number.isRequired           /* 当前的关卡数(也是积分数)*/
};

export default Box;
