import React,{ Component } from 'react';

/**
 * 获取颜色偏离值
 * @param lvMap 关卡地图(存储每关的一列数目)
 * @param lv    当前关卡(也是积分，第几关)
 */
function getOffset(lvMap, lv){
    let offset = 15 * Math.max(9 - lvMap[lv], 1); /** 颜色偏离值和当前的关卡数相关 */
    offset = lv > 20 ? 10 : offset;
    offset = lv > 40 ? 8 : offset;
    offset = lv > 50 ? 5 : offset;
    return offset;
}

/**
 * 获取正常的颜色值和干扰色的颜色值
 * @param offset
 * @returns {{color: string, wrongClor: string}}
 */
function getColor(offset) {
    let random = 255 - offset;
    let r1 = Math.round(Math.random() * random),
        g1 = Math.round(Math.random() * random),
        b1 = Math.round(Math.random() * random);
    let r2 = r1 + offset + 10,
        g2 = g1 + offset + 10,
        b2 = b1 + offset + 10;
    let color = `rgb(${r1},${g1},${b1})`;
    let offsetColor = `rgb(${r2},${g2},${b2})`;
    return {
        color: color,
        offsetColor: offsetColor
    };
}



class GameBox extends Component {

    constructor(props){
        super(props);
        this.lvMap = [2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9];
        this.offset = 10;
        this.state = {
            lv: 0
        }
    }

    /**
     * 获取所有span的数组
     * @param degree       当前的关卡等级
     * @param color        正常的颜色
     * @param offsetColor  偏移的颜色值
     * @returns {Array}    返回包含所有span的数组
     */
    static getSpan(degree, color, offsetColor) {
        let num = degree * degree;                      /* span的数目*/
        let keyIndex = Math.floor(Math.random() * num); /* 偏移色的索引位置*/
        let spanArr = [];                               /* 存储span的数组*/
        for (let i = 0; i < num; i++) {
            if (i == keyIndex)
                spanArr.push(<span key={i} style={{backgroundColor: offsetColor}} data-key="true"></span>);
            else
                spanArr.push(<span key={i} style={{backgroundColor: color}}></span>);
        }
        return spanArr;
    }

    /**
     * 暂停的时候会引起Room组件中的更新，也会导致当前的GameBox更新，触发一次渲染，即使没有任何新的属性变化
     * 但是重新渲染在这里会引起问题，就是render中有很多涉及random导致颜色值改变，所以必须在这里判断
     * 除了lv的变化会导致更新
     */
    shouldComponentUpdate(nextProps, nextState){
        return nextState.lv != this.state.lv;
    }

    /**
     * 处理点击
     */
    handleClick(e){
        /** 有key存在表示点中的是目标span*/
        if(e.target.dataset.key){
            let lv = this.state.lv +1;
            this.setState( { lv: lv } );
        }
    }


    render() {
        let lv = this.state.lv;                                            /* 获取当前等级(也是积分) */
        this.offset = getOffset(this.lvMap, lv);                           /* 获取偏离数值 */
        let { color, offsetColor } = getColor(this.offset);                /* 获取正常颜色和偏离颜色 */
        let spanArr = GameBox.getSpan(this.lvMap[lv],color, offsetColor);  /* 获取所有的span */

        return (
            <div id="box" className={`lv${this.lvMap[lv]}`} style={{width: '500px', height: '500px'}}  onClick={this.handleClick.bind(this)}>
                { spanArr}
            </div>
        );
    }
}

export default GameBox;

