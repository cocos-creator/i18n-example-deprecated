const i18n = require('i18n');
cc.Class({
    extends: cc.Component,

    properties: () => ({
        label: cc.Label,
        playerName: ''
    }),

    // use this for initialization
    onLoad: function () {
        this.label.string = i18n.t('WELCOME', {name: this.playerName});
    }
});
