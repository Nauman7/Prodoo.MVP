/*
 * File: app/view/RequestConfirmed.js
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

Ext.define('ProDooMobileApp.view.RequestConfirmed', {
    extend: 'Ext.Container',
    alias: 'widget.RequestConfirmed',

    requires: [
        'Ext.Container',
        'Ext.Img',
        'Ext.Label',
        'Ext.Button',
        'Ext.field.Hidden',
        'Ext.field.TextArea'
    ],

    config: {
        cls: 'RequestConfirmed',
        padding: '0 0 75 0',
        scrollable: true,
        items: [
            {
                xtype: 'container',
                cls: 'PresCompanyName',
                itemId: 'presCompanyName'
            },
            {
                xtype: 'container',
                cls: 'presYourName',
                html: 'Your Present ',
                itemId: 'mycontainer22',
                listeners: [
                    {
                        fn: function(component, eOpts) {
                            component.element.on('tap',function(){
                                this.next().show();
                            });
                        },
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'reqConfirmDetail',
                items: [
                    {
                        xtype: 'container',
                        padding: '10 0',
                        items: [
                            {
                                xtype: 'image',
                                cls: [
                                    'auto',
                                    'PresentUserImg'
                                ],
                                height: 133,
                                itemId: 'presentProfileImage',
                                width: 133,
                                src: 'resources/images/present/present.png'
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        cls: [
                            'presName',
                            'center'
                        ],
                        html: 'Henrik Haugaard',
                        itemId: 'presUserName'
                    },
                    {
                        xtype: 'label',
                        cls: [
                            'presSkill',
                            'center'
                        ],
                        html: 'Accounting Manager',
                        itemId: 'presDesignation'
                    },
                    {
                        xtype: 'container',
                        cls: 'reqConfirmContact',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'presPhone',
                                    'labelCls'
                                ],
                                html: '+65165-1651',
                                itemId: 'presPhone'
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'presEmail',
                                    'labelCls'
                                ],
                                html: 'henrik91@gmail.com',
                                itemId: 'presEmail'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'button',
                cls: 'reqArrowDown',
                pressedCls: null
            },
            {
                xtype: 'hiddenfield',
                itemId: 'HfUserDetailId'
            },
            {
                xtype: 'textareafield',
                cls: 'presEditArea',
                itemId: 'presDesciption',
                margin: '10 0'
            },
            {
                xtype: 'button',
                cls: [
                    'backIcon',
                    'btnCircle',
                    'l10',
                    'b10'
                ],
                docked: 'bottom',
                itemId: 'requestConfirmBackBtn',
                text: ' '
            },
            {
                xtype: 'button',
                cls: 'sendBtn2',
                docked: 'bottom',
                hidden: false,
                itemId: 'requestConfirmSendBtn',
                text: ' '
            }
        ],
        listeners: [
            {
                fn: 'onrequestConfirmBackBtnTap',
                event: 'tap',
                delegate: '#requestConfirmBackBtn'
            },
            {
                fn: 'onRequestConfirmSendBtnTap',
                event: 'tap',
                delegate: '#requestConfirmSendBtn'
            }
        ]
    },

    onrequestConfirmBackBtnTap: function(button, e, eOpts) {
        G.Pop();
    },

    onRequestConfirmSendBtnTap: function(button, e, eOpts) {
        Requests.ConfirmRequestedInvitation();
    }

});