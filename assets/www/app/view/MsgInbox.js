/*
 * File: app/view/MsgInbox.js
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

Ext.define('ProDooMobileApp.view.MsgInbox', {
    extend: 'Ext.Container',
    alias: 'widget.MsgInbox',

    requires: [
        'Ext.Button',
        'Ext.Label',
        'Ext.field.Search',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.field.Hidden',
        'Ext.field.TextArea'
    ],

    config: {
        itemId: 'MsgViewCnt',
        scrollable: true,
        cls: [
            'MsgPanel',
            'MsgInboxCnt'
        ],
        items: [
            {
                xtype: 'container',
                docked: 'top',
                itemId: 'topButtons',
                margin: '10 0 0 0',
                layout: {
                    type: 'hbox',
                    align: 'start',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        cls: [
                            'recieveBtn',
                            'activeBtn'
                        ],
                        itemId: 'InboxBtn',
                        margin: '0 5',
                        text: ' '
                    },
                    {
                        xtype: 'button',
                        cls: 'sendRequestBtn',
                        itemId: 'SendMsgBtn',
                        margin: '0 5'
                    }
                ]
            },
            {
                xtype: 'label',
                cls: 'MessageLabel',
                docked: 'top',
                html: 'Inbox',
                itemId: 'buttonsLabel'
            },
            {
                xtype: 'container',
                cls: 'searchViewCnt',
                docked: 'top',
                hidden: true,
                itemId: 'searchCnt',
                items: [
                    {
                        xtype: 'button',
                        cls: 'searchBtn',
                        itemId: 'searchBtn'
                    },
                    {
                        xtype: 'searchfield',
                        cls: 'searchRound',
                        itemId: 'MessageSearchField',
                        clearIcon: false,
                        name: 'MessagesSearch'
                    }
                ]
            },
            {
                xtype: 'label',
                cls: [
                    'reqHead',
                    'reqInboxIcon'
                ],
                hidden: true,
                html: 'Invitations',
                itemId: 'invitationLabel',
                listeners: [
                    {
                        fn: function(component, eOpts) {
                            component.element.on('tap',function(){
                                if(this.hasCls('collapseActive')){
                                    this.next().show();
                                }
                                else{
                                    this.next().hide();
                                }
                                this.toggleCls('collapseActive');
                            });
                        },
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'list',
                scrollable: false,
                cls: 'requestListView',
                hidden: true,
                itemId: 'requestInboxList',
                emptyText: 'No record found',
                itemTpl: [
                    '<div class="requestCnt">',
                    '    <div class="msgDate">',
                    '         {[G.GetSpecificTimePeriod(values.CreateDate)]}',
                    '    </div>',
                    '    <div class="msgTime"> {[G.GetSpecificTime(values.CreateDate)]}</div>',
                    '    <tpl if="IsConfirmed == true">',
                    '        <div class="msgList confirmed">',
                    '    <tpl elseif="IsRead == false">',
                    '        <div class="msgList unRead">',
                    '    <tpl else>',
                    '        <div class="msgList">',
                    '    </tpl>',
                    '        ',
                    '                <span class="msgTitle">',
                    '                    {RequestName}',
                    '                </span>',
                    '        <span class="msgDesc">{Company.CompanyName}</span>',
                    '               ',
                    '      </div>         ',
                    '            <span class="closeIcon">',
                    '                <span class="x-button-label"> </span>',
                    '            </span>',
                    '  </div>',
                    '',
                    '',
                    ''
                ],
                loadingText: false,
                pressedCls: '',
                selectedCls: '',
                listeners: [
                    {
                        fn: function(component, eOpts) {
                            G.get('MsgViewCnt').AdjustListHeight(component);

                        },
                        single: true,
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'label',
                cls: [
                    'reqHead',
                    'reqInboxIcon'
                ],
                html: 'Messages',
                itemId: 'MsgInboxLbl',
                listeners: [
                    {
                        fn: function(component, eOpts) {
                            component.element.on('tap',function(){
                                if(this.hasCls('collapseActive')){
                                    this.next().show();
                                }
                                else{
                                    this.next().hide();
                                }
                                this.toggleCls('collapseActive');
                            });
                        },
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'list',
                scrollable: false,
                cls: 'requestListView',
                hidden: false,
                itemId: 'MsgList',
                margin: '0 0 70 0',
                emptyText: 'No messages found',
                itemTpl: Ext.create('Ext.XTemplate', 
                    '<div class="requestCnt">',
                    '    <div class="msgDate">',
                    '          {[this.returnDate(values.DateCreated)]}',
                    '    </div>',
                    '',
                    '    <div class="msgTime">{[this.returnTime(values.DateCreated)]}</div>',
                    '    <tpl if="IsRead == false">',
                    '        <div class="msgList unRead">',
                    '            <tpl else> ',
                    '                <div class="msgList">',
                    '                    </tpl>',
                    '                <span class="msgTitle">',
                    '                    {Subject}',
                    '                </span>',
                    '                <span class="msgDesc">{MessageBody}</span>',
                    '                </div>',
                    '            <span class="closeIcon">',
                    '                <span class="x-button-label"> </span>',
                    '            </span>',
                    '        </div>',
                    {
                        returnDate: function(date) {
                            return G.GetSpecificTimePeriod(date);
                        },
                        returnTime: function(date) {
                            return G.GetSpecificTime(date);
                        }
                    }
                ),
                loadingText: false,
                pressedCls: '',
                selectedCls: '',
                store: 'MessageStore',
                listeners: [
                    {
                        fn: function(component, eOpts) {
                            G.get('MsgViewCnt').AdjustListHeight(component);
                        },
                        single: true,
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'container',
                hidden: true,
                itemId: 'MsgDetailList',
                items: [
                    {
                        xtype: 'list',
                        scrollable: true,
                        cls: 'MsgDetailView',
                        itemId: '',
                        itemTpl: [
                            '<div class="MsgView">',
                            '    <div class="msgDetailTitle">',
                            '        <span class="closeIcon">',
                            '            <span class="x-button-label"></span>',
                            '        </span>',
                            '    </div>',
                            '    <div class="msgNameCnt">',
                            '        <span class="msgDetailDate">10:12:2014</span>',
                            '        <span class="msgDetailUsername"></span>',
                            '        <span class="msgDetailTime">10:12</span>',
                            '    </div>',
                            '    <div class="msgDetailMsg"></div> ',
                            '</div>'
                        ],
                        store: 'MsgDetailList'
                    },
                    {
                        xtype: 'hiddenfield',
                        itemId: 'selectedMsg'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: [
                    'relative',
                    'MsgCreateCnt'
                ],
                hidden: true,
                itemId: 'MsgCreateNew',
                items: [
                    {
                        xtype: 'textfield',
                        cls: [
                            'searchRound',
                            'MsgField'
                        ],
                        itemId: 'MsgUserField',
                        clearIcon: false,
                        placeHolder: 'Select reciever'
                    },
                    {
                        xtype: 'hiddenfield',
                        clearIcon: false,
                        itemId: 'MsgUserSearchRecordID'
                    },
                    {
                        xtype: 'container',
                        cls: 'SubjectFieldTo',
                        itemId: 'MsgToField',
                        items: [
                            {
                                xtype: 'label',
                                cls: 'left',
                                html: 'To:',
                                padding: 10
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        cls: 'SubjectField',
                        itemId: 'MsgSubjectField',
                        clearIcon: false,
                        name: 'Subject',
                        placeHolder: 'Subject:'
                    },
                    {
                        xtype: 'textareafield',
                        cls: 'TextMsg',
                        height: '100%',
                        itemId: 'MsgContentField',
                        clearIcon: false,
                        placeHolder: 'Compose Message'
                    },
                    {
                        xtype: 'list',
                        scrollable: true,
                        cls: 'searchList',
                        height: 250,
                        hidden: true,
                        itemId: 'MsgUserSearchList',
                        margin: '0 40',
                        itemTpl: [
                            '<div class="listResult">',
                            '        <span class="listTitle">{UserFirstname}&nbsp{UserLastname}</span>',
                            '</div>'
                        ],
                        loadingText: false,
                        store: 'UserStore'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: [
                    'relative',
                    'MsgReplyCnt'
                ],
                hidden: true,
                itemId: 'MsgDetailReply',
                items: [
                    {
                        xtype: 'container',
                        cls: 'msgDetailTitle',
                        items: [
                            {
                                xtype: 'label',
                                cls: 'msgReplyTitle',
                                html: 'Sample Title',
                                itemId: 'selectedMsgTitle'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: [
                            'msgNameCnt',
                            'clearfix'
                        ],
                        items: [
                            {
                                xtype: 'label',
                                cls: 'msgDetailDate',
                                html: 'Yesterday'
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'msgDetailUsername',
                                    'left'
                                ],
                                html: 'Username',
                                itemId: 'seletedMsgUsername'
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'msgDetailTime',
                                    'right'
                                ],
                                html: '7:01'
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        cls: 'SubjectField',
                        hidden: true,
                        clearIcon: false,
                        placeHolder: 'Subject:'
                    },
                    {
                        xtype: 'label',
                        cls: 'MsgReplyView',
                        html: 'Lorem Ipsum is simply dummy text of the printing',
                        itemId: 'seletedMsgBody'
                    },
                    {
                        xtype: 'textareafield',
                        cls: 'TextMsg',
                        itemId: 'replyMsgArea',
                        clearIcon: false,
                        placeHolder: 'Compose Message'
                    }
                ]
            },
            {
                xtype: 'button',
                cls: [
                    'editIcon',
                    'b10',
                    'r10'
                ],
                docked: 'bottom',
                hidden: false,
                itemId: 'EditBtn',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'replyIcon',
                    'b10',
                    'r10'
                ],
                docked: 'bottom',
                hidden: true,
                itemId: 'ReplyBtn',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'homeIcon',
                    'btnCircle'
                ],
                docked: 'bottom',
                itemId: 'HomeBtn',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'btnCircle',
                    'backIcon',
                    'b10',
                    'l10'
                ],
                docked: 'bottom',
                hidden: true,
                itemId: 'backBtn',
                text: ' '
            },
            {
                xtype: 'button',
                cls: 'sendBtn2',
                docked: 'bottom',
                hidden: true,
                itemId: 'SendBtn',
                text: ' '
            }
        ],
        listeners: [
            {
                fn: 'onMysearchfieldKeyup',
                event: 'keyup',
                delegate: '#MessageSearchField'
            },
            {
                fn: 'onrequestListTap1',
                event: 'itemtap',
                delegate: '#requestInboxList'
            }
        ]
    },

    onMysearchfieldKeyup: function(textfield, e, eOpts) {
        Messages.searchMessages(textfield);
    },

    onrequestListTap1: function(dataview, index, target, record, e, eOpts) {
        var target =  Ext.get(e.target);

        Requests.TapRequestTitle(target, 0, record);
    },

    AdjustListHeight: function(component) {
        component.on('refresh',function(){

            this.setHeight(null);
            var ViewHeight = Ext.get(this.element.query('.x-scroll-scroller')[0]).getHeight();
            if(ViewHeight > 10)
                this.setHeight(ViewHeight);
        });
    }

});