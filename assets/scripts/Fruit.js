cc.Class({
    extends: cc.Component,

    properties: {
        id: 0,
    },
    init(data) {
        this.id = data.id
        const img = this.node.getComponent(cc.Sprite)
        img.spriteFrame = data.iconSF

    },
    start() {

    },
    onBeginContact(contact, self, other) {
        if (self.node && other.node) {
            const s = self.node.getComponent('Fruit')
            const o = other.node.getComponent('Fruit')
            if (s && o && s.id === o.id) {
                self.node.emit('sameContact', { self, other });
            }
        }
    },
});