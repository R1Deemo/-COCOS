cc.Class({
    extends: cc.Component,

    properties: {
        //公布按钮节点，在属性检查器上可见
        btnNode: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:
    // 初始化
    onLoad() {
        this.btnNode.on("click", this.startGame, this)
    },


    startGame() {
        cc.director.loadScene("game");
    },

    start() {

    },
    // update (dt) {},
});