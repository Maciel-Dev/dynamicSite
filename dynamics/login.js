/*!
 * Ext JS Library 3.4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.onReady(function(){

    Ext.QuickTips.init();
    
    var fsf = new Ext.FormPanel({
        labelWidth: 75,
        frame: true,
        title : "Simple form",
        bodyStyle:'padding:5px 5px 0',
        width: 350,
        cls:'text-center container mt-5',

        
        items:[{
            xtype:'fieldset',
            title: 'User Information',
            autoHeight: true,
            defaultType: 'textfield',
            items:[{
                fieldLabel: 'First Name',
                name: 'first',
                allowBlank: false
            },{
                fieldLabel: 'LastName',
                name: 'last'
            },{
                fieldLabel: 'Company',
                name: 'company'
            },{
                fieldLabel: 'Email',
                name: 'email',
                vtype: 'email'
            }]

        }],



        buttons: [{
            text: 'Save'
        },{
            text: 'Cancel'
        }]

    });

    
    fsf.render(document.body);


});
