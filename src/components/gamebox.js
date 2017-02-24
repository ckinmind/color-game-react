import React from 'react';

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
        g2 = r1 + offset + 10,
        b2 = r1 + offset + 10;
    let color = `rgb(${r1},${g1},${b1})`;
    let wrongColor = `rgb(${r2},${g2},${b2})`;
    return {
        color: color,
        wrongColor: wrongColor
    };
}



class GameBox extends React.Component {

    constructor(props){
        super(props);
        this.lvMap = [2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9];
        this.lv = 0;   //当前的等级，也是得分，过一关得一分
        this.offset = 10;
    }


    getSpan(degree, color, wrongColor){
        let num = degree * degree;
        let wrongKey = Math.floor(Math.random() * num);
        let spanArr = [];
        for(let i=0;i<num;i++){
            if(i == wrongKey){
                spanArr.push(<span key={i} style={{backgroundColor: wrongColor}}></span>);
            }else{
                spanArr.push(<span key={i} style={{backgroundColor: color}}></span>);
            }
        }
        return spanArr;
    }

    componentWillReceiveProps(nextPorps){
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return false;
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }


    render() {
        // this.lv = this.props.lv;
        this.lv = 2;
        this.offset = getOffset(this.lvMap, this.lv);
        let { color, wrongColor } = getColor(this.offset);

        let spanArr = this.getSpan(this.lvMap[this.lv],color,wrongColor);

        return (
            <div id="box" className="lv4" style={{width: '500px', height: '500px'}}>
                {/*<span style={{backgroundColor: 'rgb(217, 217, 136)'}}></span>*/}
                {/*<span style={{backgroundColor: 'rgb(102, 102, 21)'}}></span>*/}
                {/*<span style={{backgroundColor: 'rgb(102, 102, 21)'}}></span>*/}
                {/*<span style={{backgroundColor: 'rgb(102, 102, 21)'}}></span>*/}
                { spanArr}
            </div>
        );
    }
}

export default GameBox;

