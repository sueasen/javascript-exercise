'use strict';

/**
 * 三角形
 */
export class Triangle {
    /**
     * コンストラクタ
     * @param {Number} bottom 底辺
     * @param {Number} height 高さ
     */
    constructor(bottom, height) {
        this.bottom = bottom;
        this.height = height;
    }
    /**
     * 面積を計算します
     * @return {Number} 面積
     */
    calcArea() {
        return this.bottom * this.height / 2;
    }
}
