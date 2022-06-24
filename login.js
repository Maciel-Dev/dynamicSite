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
        cls: '',

        
        items:[{
            xtype:'fieldset',
            checkboxToggle:true,
            title: 'User Information',
            autoHeight: true,
            collapsed: true,
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

        },{
            xtype: 'fieldset',
            title: 'Phone Number',
            collapsible: true,
            autoHeight: true,
            defaults: {width: 210},
            defaultType: 'textfield',
            items: [{
                fieldLabel: 'Home',
                name: 'home',
                placeholder: 'Olá'
            },{
                fieldLabel: 'Business',
                name: 'business'
            },{
                fieldLabel: 'Mobile',
                name: 'mobile'
            },{
                fieldLabel: 'Fax',
                name: 'fax'
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
