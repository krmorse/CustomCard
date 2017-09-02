Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        this.add({
            xtype: 'rallycardboard',
            types: ['User Story'],
            attribute: 'ScheduleState',
            context: this.getContext(),
            cardConfig: {
                xtype: 'customcard'
            }
        });
    }
});
