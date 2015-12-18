/*
 * File: app/view/SendRequest.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ProDooMobileApp.view.SendRequest', {
    extend: 'Ext.Container',
    alias: 'widget.SendRequest',

    requires: [
        'Ext.field.Hidden',
        'Ext.Label',
        'Ext.Button',
        'Ext.field.Search',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        cls: 'RequestScreen',
        scrollable: true,
        items: [
            {
                xtype: 'hiddenfield',
                itemId: 'resumeRequestData'
            },
            {
                xtype: 'container',
                cls: 'RequestHeadingCnt',
                docked: 'top',
                items: [
                    {
                        xtype: 'label',
                        cls: 'cReqNo',
                        html: '1'
                    },
                    {
                        xtype: 'label',
                        cls: 'cReqName',
                        html: 'Select shortlist and send request'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'searchViewCnt',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        cls: 'searchBtn',
                        itemId: 'searchBtn'
                    },
                    {
                        xtype: 'searchfield',
                        cls: 'searchRound',
                        itemId: 'mysearchfield',
                        clearIcon: false,
                        placeHolder: 'Filter shortlist'
                    }
                ]
            },
            {
                xtype: 'list',
                scrollable: true,
                cls: 'requestList',
                itemId: 'requestList',
                itemTpl: [
                    '<div class="requestCnt">',
                    '    <span class="reqNo">{ShortlistId}</span>',
                    '    <span class="reqName">{ShortlistName}</span>',
                    '    <span class="closeIcon">',
                    '        <span class="x-button-label"> </span>',
                    '    </span>',
                    '</div>'
                ],
                store: 'ShortlistResumeStore'
            },
            {
                xtype: 'button',
                cls: 'sendRequest',
                docked: 'bottom',
                itemId: 'sendRequest',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'backIcon',
                    'btnCircle',
                    'requestBack'
                ],
                docked: 'bottom',
                itemId: 'BackBtn',
                text: ' '
            }
        ],
        listeners: [
            {
                fn: 'onMysearchfieldKeyup',
                event: 'keyup',
                delegate: '#mysearchfield'
            },
            {
                fn: 'onSendRequestTap',
                event: 'tap',
                delegate: '#sendRequest'
            },
            {
                fn: 'onBackBtnTap',
                event: 'tap',
                delegate: '#BackBtn'
            }
        ]
    },

    onMysearchfieldKeyup: function(textfield, e, eOpts) {
        var store = Ext.getStore('ShortlistResumeStore');
        store.clearFilter();
        store.filter([
            {
                fn   : function(record) {
                    return record.get('ShortlistName').toLowerCase().startsWith(textfield.getValue().toLowerCase());
                },
                scope: this
            }
        ]);
    },

    onSendRequestTap: function(button, e, eOpts) {
        Requests.sendRequest();
    },

    onBackBtnTap: function(button, e, eOpts) {
        G.Pop();
    }

});