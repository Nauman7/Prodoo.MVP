/*
 * File: app/view/Setting.js
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

Ext.define('ProDooMobileApp.view.Setting', {
    extend: 'Ext.Container',
    alias: 'widget.Setting',

    requires: [
        'Ext.Label',
        'Ext.Button',
        'Ext.dataview.DataView',
        'Ext.XTemplate'
    ],

    config: {
        cls: 'settingCnt',
        itemId: 'SettingView',
        scrollable: true,
        items: [
            {
                xtype: 'container',
                cls: [
                    'notificationCnt',
                    'bbBlack'
                ],
                padding: '15 50',
                items: [
                    {
                        xtype: 'label',
                        cls: 'labelCls',
                        html: 'Notification'
                    },
                    {
                        xtype: 'button',
                        cls: 'settingDownArrow',
                        itemId: 'ArrowNotification'
                    }
                ]
            },
            {
                xtype: 'container',
                hidden: true,
                items: [
                    {
                        xtype: 'container',
                        cls: [
                            'settingInnerCnt',
                            'bbBlack'
                        ],
                        padding: '15 70 15 15',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'labelCls',
                                    'left'
                                ],
                                html: 'Notification Tone'
                            },
                            {
                                xtype: 'button',
                                cls: 'socialCheck',
                                itemId: 'SettingToneNotofication'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: [
                            'settingInnerCnt',
                            'bbBlack'
                        ],
                        padding: '15 70 15 15',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'labelCls',
                                    'left'
                                ],
                                html: 'Message Notification'
                            },
                            {
                                xtype: 'button',
                                cls: 'socialCheck',
                                itemId: 'SettingMessageNotification'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: [
                            'settingInnerCnt',
                            'bbBlack'
                        ],
                        padding: '15 70 15 15',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'labelCls',
                                    'left'
                                ],
                                html: 'Request Notification'
                            },
                            {
                                xtype: 'button',
                                cls: 'socialCheck',
                                itemId: 'SettingRequestNotification'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                cls: [
                    'aboutProdooCnt',
                    'bbBlack'
                ],
                padding: '15 50',
                items: [
                    {
                        xtype: 'label',
                        cls: 'labelCls',
                        html: 'About PROODOO'
                    },
                    {
                        xtype: 'button',
                        cls: 'settingDownArrow',
                        itemId: 'ArrowProdoo'
                    }
                ]
            },
            {
                xtype: 'container',
                hidden: true,
                items: [
                    {
                        xtype: 'container',
                        cls: [
                            'settingInnerCnt',
                            'bbBlack'
                        ],
                        padding: '15 15 15 15',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'labelCls',
                                    'left'
                                ],
                                html: 'Current Version'
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'labelCls',
                                    'right'
                                ],
                                html: '',
                                itemId: 'currentVersion'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: [
                            'settingInnerCnt',
                            'bbBlack'
                        ],
                        padding: '15 15 15 15',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'labelCls',
                                    'left'
                                ],
                                html: 'Latest Version'
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'labelCls',
                                    'right'
                                ],
                                html: '',
                                itemId: 'latestVersion'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: [
                            'settingInnerCnt',
                            'bbBlack'
                        ],
                        padding: '15 70 15 15',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'labelCls',
                                    'left'
                                ],
                                html: 'Terms of Service'
                            },
                            {
                                xtype: 'button',
                                cls: 'SettingRightBtn',
                                itemId: 'SettingsProdooTermsBtn'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: [
                            'settingInnerCnt',
                            'bbBlack'
                        ],
                        padding: '15 70 15 15',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'labelCls',
                                    'left'
                                ],
                                html: 'Privacy Policy '
                            },
                            {
                                xtype: 'button',
                                cls: 'SettingRightBtn',
                                itemId: 'SettingsProdooPrivacyBtn'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: [
                            'settingInnerCnt',
                            'bbBlack'
                        ],
                        padding: '15 70 15 15',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'labelCls',
                                    'left'
                                ],
                                html: 'Legal Notices'
                            },
                            {
                                xtype: 'button',
                                cls: 'SettingRightBtn',
                                itemId: 'SettingsProdooLegalBtn'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                cls: [
                    'settingHelpCnt',
                    'bbBlack'
                ],
                padding: '15 50',
                items: [
                    {
                        xtype: 'label',
                        cls: 'labelCls',
                        html: 'FAQ'
                    },
                    {
                        xtype: 'button',
                        cls: 'settingDownArrow',
                        itemId: 'ArrowHelp'
                    }
                ]
            },
            {
                xtype: 'container',
                hidden: true,
                items: [
                    {
                        xtype: 'dataview',
                        cls: 'faqList',
                        height: 195,
                        itemId: 'FaqList',
                        itemTpl: [
                            '<div class="settingInnerCnt bbBlack">',
                            '<div class="labelCls">{Title}</div> ',
                            '    <div class="SettingRightBtn"></div>',
                            '    <br/>',
                            '<!-- <div>A: {Answer}</div><br/> -->',
                            '    </div>'
                        ],
                        store: 'FaqStore'
                    }
                ]
            },
            {
                xtype: 'button',
                cls: [
                    'homeIcon',
                    'btnCircle'
                ],
                docked: 'bottom',
                itemId: 'SettingsHomeButton',
                text: ' '
            }
        ],
        listeners: [
            {
                fn: 'onArrowNotificationTap',
                event: 'tap',
                delegate: '#ArrowNotification'
            },
            {
                fn: 'onMybutton23Tap112',
                event: 'tap',
                delegate: '#SettingToneNotofication'
            },
            {
                fn: 'onMybutton23Tap1121',
                event: 'tap',
                delegate: '#SettingMessageNotification'
            },
            {
                fn: 'onMybutton23Tap11211',
                event: 'tap',
                delegate: '#SettingRequestNotification'
            },
            {
                fn: 'onArrowProdooTap',
                event: 'tap',
                delegate: '#ArrowProdoo'
            },
            {
                fn: 'onMybutton23Tap11212',
                event: 'tap',
                delegate: '#SettingsProdooTermsBtn'
            },
            {
                fn: 'onMybutton23Tap112121',
                event: 'tap',
                delegate: '#SettingsProdooPrivacyBtn'
            },
            {
                fn: 'onMybutton23Tap1121211',
                event: 'tap',
                delegate: '#SettingsProdooLegalBtn'
            },
            {
                fn: 'onArrowHelpTap',
                event: 'tap',
                delegate: '#ArrowHelp'
            },
            {
                fn: 'onFaqListItemTap',
                event: 'itemtap',
                delegate: '#FaqList'
            },
            {
                fn: 'onHomeBtn1Tap',
                event: 'tap',
                delegate: '#SettingsHomeButton'
            }
        ]
    },

    onArrowNotificationTap: function(button, e, eOpts) {
        var Cnt = button.up('container');
        if(Cnt.element.hasCls('settingActiveCnt')){
            Cnt.element.next().hide();
            Cnt.removeCls('settingActiveCnt');

        }
        else{
            Cnt.element.next().show();
            Cnt.addCls('settingActiveCnt');
        }
    },

    onMybutton23Tap112: function(button, e, eOpts) {
        if(button.element.hasCls('socialBtnActive')){
            button.removeCls('socialBtnActive');
        }
        else{
            button.addCls('socialBtnActive');
        }
    },

    onMybutton23Tap1121: function(button, e, eOpts) {
        if(button.element.hasCls('socialBtnActive')){
            button.removeCls('socialBtnActive');
        }
        else{
            button.addCls('socialBtnActive');
        }
    },

    onMybutton23Tap11211: function(button, e, eOpts) {
        if(button.element.hasCls('socialBtnActive')){
            button.removeCls('socialBtnActive');
        }
        else{
            button.addCls('socialBtnActive');
        }
    },

    onArrowProdooTap: function(button, e, eOpts) {
        var Cnt = button.up('container');
        if(Cnt.element.hasCls('settingActiveCnt')){
            Cnt.element.next().hide();
            Cnt.removeCls('settingActiveCnt');

        }
        else{
            if(currentVersionNumber!==null)
                G.get('currentVersion').setHtml(currentVersionNumber);

            Cnt.element.next().show();
            Cnt.addCls('settingActiveCnt');
            var store = Ext.getStore('ConfigurationStore');
            store.load({
                scope: this,
                callback: function(records,operation,success){
                    if(success){
                        var store = Ext.getStore('ConfigurationStore');
                        var latestVersionNumber = store.findRecord('ConfigName','Release Version');
                        if(latestVersionNumber !== null){
                            G.get('latestVersion').setHtml(latestVersionNumber.get('ConfigValue'));
                        }

                    }//end if
                }
            });
        }

    },

    onMybutton23Tap11212: function(button, e, eOpts) {
        G.Push('SettingDetail');
        var list = G.get('settingList');
        var store = Ext.getStore('ConfigurationStore');
        var termsOfService = store.findRecord('ConfigName','Terms and Condition');
        if(termsOfService !== null){
        var model = Ext.create('ProDooMobileApp.model.SettingTerm');
        model.set('MainHeading', 'Terms Of Service');
        model.set('Heading','PROODOO Terms of condition of use');
        model.set('Detail', termsOfService.get('ConfigValue'));
        var listStore = list.getStore();
            listStore.removeAll();
            listStore.add(model);
         }
    },

    onMybutton23Tap112121: function(button, e, eOpts) {
        G.Push('SettingDetail');
        var list = G.get('settingList');
        var store = Ext.getStore('ConfigurationStore');
        var termsOfService = store.findRecord('ConfigName','Privacy policy');
        if(termsOfService !== null){
        var model = Ext.create('ProDooMobileApp.model.SettingTerm');
        model.set('MainHeading', 'Privacy Policy');
        model.set('Heading','PROODOO Privacy Policy');
        model.set('Detail', termsOfService.get('ConfigValue'));
        var listStore = list.getStore();
            listStore.removeAll();
            listStore.add(model);
         }
    },

    onMybutton23Tap1121211: function(button, e, eOpts) {
        G.Push('SettingDetail');
        var list = G.get('settingList');
        var store = Ext.getStore('ConfigurationStore');
        var termsOfService = store.findRecord('ConfigName','Legal notice');
        if(termsOfService !== null){
        var model = Ext.create('ProDooMobileApp.model.SettingTerm');
        model.set('MainHeading', 'Legal Notices');
        model.set('Heading','PROODOO Legal Notices');
        model.set('Detail', termsOfService.get('ConfigValue'));
        var listStore = list.getStore();
            listStore.removeAll();
            listStore.add(model);
         }
    },

    onArrowHelpTap: function(button, e, eOpts) {
        var Cnt = button.up('container');
        if(Cnt.element.hasCls('settingActiveCnt')){
            Cnt.element.next().hide();
            Cnt.removeCls('settingActiveCnt');
        }
        else{
            Cnt.element.next().show();
            Cnt.addCls('settingActiveCnt');
            var store = Ext.getStore('FaqStore');
        store.load();
        }


    },

    onFaqListItemTap: function(dataview, index, target, record, e, eOpts) {
        var Target = Ext.get(e.target);
        if(Target.hasCls('SettingRightBtn')){
            G.Push('SettingDetail');
            var list = G.get('settingList');
            var model = Ext.create('ProDooMobileApp.model.SettingTerm');
            model.set('MainHeading', 'FAQ');
            model.set('Heading',record.data.Title);
            model.set('Detail',record.data.Answer);
            var listStore = list.getStore();
            listStore.removeAll();
            listStore.add(model);
        }

    },

    onHomeBtn1Tap: function(button, e, eOpts) {
        G.showHomeView();
    }

});