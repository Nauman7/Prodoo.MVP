/*
 * File: app/view/Feedback.js
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

Ext.define('ProDooMobileApp.view.Feedback', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Label',
        'Ext.form.Panel',
        'Ext.field.TextArea',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.Button'
    ],

    config: {
        itemId: 'FeedbackView',
        scrollable: true,
        cls: [
            'settingCnt',
            'scrollPadding'
        ],
        items: [
            {
                xtype: 'container',
                hidden: true,
                itemId: 'FeedbackSubmit',
                items: [
                    {
                        xtype: 'label',
                        cls: [
                            'SearchLabel',
                            'bgLightGreen'
                        ],
                        hidden: false,
                        html: 'Submit Feedback',
                        itemId: 'buttonsLabel',
                        margin: 0
                    },
                    {
                        xtype: 'formpanel',
                        height: '200px',
                        itemId: 'FeedbackSubmitForm',
                        layout: 'vbox',
                        modal: true,
                        scrollable: false,
                        items: [
                            {
                                xtype: 'textfield',
                                cls: [
                                    'inputCls',
                                    'bbBlack'
                                ],
                                itemId: 'FeedbackTitle',
                                clearIcon: false,
                                labelCls: 'labelCls',
                                name: 'Title',
                                maxLength: 50,
                                placeHolder: 'Title'
                            },
                            {
                                xtype: 'textareafield',
                                cls: 'FeedbackArea',
                                height: 200,
                                itemId: 'FeedbackDetail',
                                clearIcon: false,
                                name: 'Content',
                                placeHolder: 'Detail'
                            },
                            {
                                xtype: 'textfield',
                                hidden: true,
                                label: 'Field',
                                name: 'UserId'
                            },
                            {
                                xtype: 'textfield',
                                hidden: true,
                                label: 'Field',
                                name: 'FeedbackId'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'list',
                cls: 'requestList',
                itemId: 'FeedbackList',
                width: '100%',
                modal: false,
                itemTpl: [
                    '<div class="requestCnt feedbackList">',
                    '    <span class="feedbackNo">{FeedbackId}</span>',
                    '    <span class="savName">{Title}</span>',
                    '    <span class="closeIcon">',
                    '        <span class="x-button-label closeBtn"> </span>',
                    '    </span>',
                    '</div>'
                ],
                pressedCls: null,
                selectedCls: null,
                store: 'FeedbackStore'
            },
            {
                xtype: 'button',
                cls: [
                    'homeIcon',
                    'btnCircle',
                    'bgLightGreen'
                ],
                docked: 'bottom',
                itemId: 'FeedbackHomeButton',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'addBtn',
                    'bgLightGreen'
                ],
                docked: 'bottom',
                itemId: 'FeedbackAdd',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'backIcon',
                    'btnCircle',
                    'l10',
                    'b10',
                    'bgLightGreen'
                ],
                docked: 'bottom',
                hidden: true,
                itemId: 'FeedbackBack',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'confirmIcon',
                    'btnCircle',
                    'bgLightGreen'
                ],
                docked: 'bottom',
                hidden: true,
                itemId: 'FeedbackSubmitBtn',
                text: ' '
            }
        ],
        listeners: [
            {
                fn: 'onListItemTap',
                event: 'itemtap',
                delegate: '#FeedbackList'
            },
            {
                fn: 'onFeedbackHomeBtnTap',
                event: 'tap',
                delegate: '#FeedbackHomeButton'
            },
            {
                fn: 'onFeedbackAddTap',
                event: 'tap',
                delegate: '#FeedbackAdd'
            },
            {
                fn: 'onFeedbackBackBtnTap',
                event: 'tap',
                delegate: '#FeedbackBack'
            }
        ]
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        //SaveSearch.onSavedSearchResumeItemClick(dataview, index, target, record, e, eOpts);
    },

    onFeedbackHomeBtnTap: function(button, e, eOpts) {
        G.showHomeView();
    },

    onFeedbackAddTap: function(button, e, eOpts) {
        // Manage views
        G.show('FeedbackSubmit');
        var form  = G.get('FeedbackSubmitForm');
        form.reset();
        G.hide('FeedbackList');

        //Manage Buttons
        G.show('FeedbackSubmitBtn');
        G.show('FeedbackBack');
        G.hide('FeedbackHomeButton');
        G.hide('FeedbackAdd');

        //Reset Form
        var form = G.get('FeedbackSubmitForm');
        form.reset();
        form.getFields().Title.setReadOnly(false);
        form.getFields().Content.setReadOnly(false);

    },

    onFeedbackBackBtnTap: function(button, e, eOpts) {
        G.hide('FeedbackSubmit');
        G.show('FeedbackList');

        G.hide('FeedbackSubmitBtn');
        G.hide('FeedbackBack');
        G.show('FeedbackHomeButton');
        G.show('FeedbackAdd');
    }

});