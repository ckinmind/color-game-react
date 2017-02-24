import React from 'react';

/**
 * 获取颜色偏离值
 * @param degree 当前关卡的一行数目，对应lvMap[lv]
 * @param lv    当前关卡(也是积分，第几关)
 */
function getOffset(degree, lv){
    let offset = 15 * Math.max(9 - degree, 1); /** 颜色偏离值和当前的关卡数相关，当关卡即lvMap[lv]=8 之后，offset恒为15 */
    offset = lv > 20 ? 10 : offset;               /** 随着lv变大，offset偏离值编写，颜色越加接近 */
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



/**
 * 获取所有span的数组
 * @param degree       当前关卡的一行数目
 * @param color        正常的颜色
 * @param offsetColor  偏移的颜色值
 * @returns {Array}    返回包含所有span的数组
 */
function getSpan(degree, color, offsetColor) {
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

export { getOffset, getColor, getSpan };