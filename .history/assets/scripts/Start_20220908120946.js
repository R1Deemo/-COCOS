

cc.Class({
    extends: cc.Component,

    properties: {
        //公布按钮节点，在属性检查器上可见
        btnNode:cc.Node,
       
    },

    // LIFE-CYCLE CALLBACKS:
// 初始化
    onLoad () {
        // 按钮事件“click”的事件注册监听 
        // 固定写法：node.on("click",回调函数,this),
        this.btnNode.on("click",this.startGame,this)
    },

    //这里是回调函数，
    // 跳转场景的函数
    startGame(){
        // 这段代码才是主体（括号里是场景的名字）
        cc.director.loadScene("game");
    },

    start () {

    },
    // update (dt) {},
});
