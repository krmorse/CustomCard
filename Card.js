Ext.define('Card', {
    extend: 'Rally.ui.cardboard.Card',
    alias: 'widget.customcard',

    initComponent: function() {
        this.plugins = []; //disable all the default plugins
        this.callParent(arguments);
    },

    _buildHtml: function() {
        return '<div>hi</div>';
    }
});
