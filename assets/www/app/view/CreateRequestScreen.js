/*
 * File: app/view/CreateRequestScreen.js
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

Ext.define('ProDooMobileApp.view.CreateRequestScreen', {
    extend: 'Ext.form.Panel',
    alias: 'widget.CreateRequestScreen',

    requires: [
        'Ext.Label',
        'Ext.Img',
        'Ext.field.Hidden',
        'Ext.Button',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.field.Slider',
        'Ext.field.TextArea'
    ],

    config: {
        cls: 'RequestScreen',
        itemId: 'CreateRequestScreen',
        padding: '0 0 100 0',
        scrollable: true,
        items: [
            {
                xtype: 'container',
                cls: 'RequestHeadingCnt',
                items: [
                    {
                        xtype: 'label',
                        cls: 'cReqNo',
                        html: '1'
                    },
                    {
                        xtype: 'label',
                        cls: 'cReqName',
                        html: 'Create Request',
                        itemId: 'requestTopHeading'
                    },
                    {
                        xtype: 'image',
                        cls: 'clone',
                        height: 38,
                        hidden: true,
                        itemId: 'cloneBtn',
                        width: 38,
                        src: 'resources/images/requestScreen/copy.png',
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    component.on('tap',function(){

                                        Requests.cloneRequest(this);
                                    });
                                },
                                event: 'initialize'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'searchViewCnt',
                items: [
                    {
                        xtype: 'label',
                        cls: [
                            'labelCls',
                            'center'
                        ],
                        docked: 'left',
                        hidden: true,
                        html: 'Title',
                        padding: 10,
                        width: '100%'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'inputCls',
                        itemId: 'mytextfield1',
                        clearIcon: false,
                        label: 'Title',
                        labelCls: 'labelCls',
                        labelWidth: 90,
                        name: 'RequestName',
                        placeHolder: 'Enter Title',
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    component.setLabelAlign('left');
                                },
                                event: 'initialize'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'hiddenfield',
                itemId: 'hfShortlistId'
            },
            {
                xtype: 'hiddenfield',
                itemId: 'hfSavedSearchId'
            },
            {
                xtype: 'button',
                cls: 'fixRequest',
                docked: 'bottom',
                itemId: 'FixRequest',
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
            },
            {
                xtype: 'button',
                cls: 'saveRequest',
                docked: 'bottom',
                itemId: 'DraftRequestBtn',
                text: ' '
            },
            {
                xtype: 'container',
                cls: 'relative',
                hidden: true,
                margin: '0 0 5 0',
                padding: '10 40 10 10',
                items: [
                    {
                        xtype: 'label',
                        cls: 'labelCls',
                        html: 'Search Saved Name'
                    },
                    {
                        xtype: 'button',
                        cls: [
                            'closeIcon',
                            'requestCloseIcon'
                        ],
                        text: ' '
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'CreateRequestDateCnt',
                items: [
                    {
                        xtype: 'container',
                        cls: [
                            'DateHeading',
                            'bbBlack'
                        ],
                        itemId: 'headingCnt',
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    component.element.on('tap',function(){
                                        var items=G.get('CreateRequestDateCnt').innerItems;
                                        if(this.hasCls('collapseActive')){
                                            items.forEach(function(item){
                                                if(!(item.getItemId()=='headingCnt')){
                                                    item.show();
                                                }
                                            });
                                        }
                                        else {
                                            items.forEach(function(item){
                                                if(!(item.getItemId()=='headingCnt')){
                                                    item.hide();
                                                }
                                            });
                                        }

                                        this.toggleCls('collapseActive');
                                    });
                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'requestInnerCnt',
                        items: [
                            {
                                xtype: 'datepickerfield',
                                cls: 'DateCls',
                                itemId: 'mydatepicker',
                                label: 'Start Date',
                                labelCls: 'labelCls',
                                labelWidth: 90,
                                name: 'StartDate',
                                value: {
                                    year: 2015,
                                    month: 7,
                                    day: 26
                                },
                                placeHolder: 'mm/dd/yyyy',
                                dateFormat: 'd/m/y',
                                picker: {
                                    zIndex: 30
                                },
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            component.setLabelAlign('left');
                                        },
                                        event: 'initialize'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'requestInnerCnt',
                        margin: '0 0 5 0',
                        padding: '0 5',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'sliderfield',
                                flex: 1,
                                cls: 'sliderCls',
                                itemId: 'durationItemID',
                                label: 'Duration',
                                labelWidth: 80,
                                name: 'Duration',
                                value: [
                                    6
                                ],
                                maxValue: 12,
                                minValue: 1,
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            component.setLabelAlign('left');
                                            var thumb = component.element.dom.querySelector('.x-thumb');
                                            thumb.insertAdjacentHTML( 'afterBegin', '<span class="xValue">0</span>' );

                                            SearchResume.onSliderfieldDrag(component);
                                        },
                                        event: 'initialize'
                                    }
                                ]
                            },
                            {
                                xtype: 'selectfield',
                                cls: 'DateCls',
                                itemId: 'DurationType',
                                width: 110,
                                label: '',
                                labelCls: 'labelCls',
                                name: 'DurationType',
                                value: 'Months',
                                displayField: 'DayType',
                                store: 'CreateRequestDay',
                                valueField: 'DayType'
                            },
                            {
                                xtype: 'button',
                                cls: [
                                    'closeIcon',
                                    'noBorder'
                                ],
                                hidden: true,
                                itemId: 'DurationCloseBtn',
                                margin: 0,
                                text: ' '
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'CreateRequestLocationCnt',
                items: [
                    {
                        xtype: 'container',
                        cls: 'LocationHeading',
                        itemId: 'LocationHeading',
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    component.element.on('tap',function(){
                                        var items=G.get('CreateRequestLocationCnt').innerItems;
                                        if(this.hasCls('collapseActive')){
                                            items.forEach(function(item){
                                                if(!(item.getItemId()=='LocationHeading')){
                                                    item.show();
                                                }
                                            });
                                        }
                                        else {
                                            items.forEach(function(item){
                                                if(!(item.getItemId()=='LocationHeading')){
                                                    item.hide();
                                                }
                                            });
                                        }

                                        this.toggleCls('collapseActive');
                                    });
                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'requestInnerCnt',
                        items: [
                            {
                                xtype: 'selectfield',
                                cls: 'DateCls',
                                itemId: 'myselectfield5',
                                label: 'Location',
                                labelCls: 'labelCls',
                                labelWidth: 110,
                                name: 'Location',
                                value: 'Denmark',
                                placeHolder: 'Choose Location',
                                autoSelect: false,
                                displayField: 'CountryName',
                                store: 'CreateRequestLocation',
                                valueField: 'CountryName',
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            component.setLabelAlign('left');
                                        },
                                        event: 'initialize'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'requestInnerCnt',
                        items: [
                            {
                                xtype: 'selectfield',
                                cls: 'DateCls',
                                itemId: 'myselectfield5',
                                label: 'Language',
                                labelCls: 'labelCls',
                                labelWidth: 110,
                                name: 'Language',
                                value: 'Danish',
                                placeHolder: 'Choose Language',
                                autoSelect: false,
                                displayField: 'LanguageValue',
                                store: 'SearchLanguage',
                                valueField: 'LanguageValue',
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            component.setLabelAlign('left');
                                        },
                                        event: 'initialize'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'requestInnerCnt',
                        items: [
                            {
                                xtype: 'selectfield',
                                cls: 'DateCls',
                                itemId: 'requestCompany',
                                label: 'Company',
                                labelCls: 'labelCls',
                                labelWidth: 110,
                                name: 'UserCompanyId',
                                placeHolder: 'Choose Company',
                                displayField: 'CompanyName',
                                store: 'CompanyDetail',
                                valueField: 'UserCompanyId',
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            component.setLabelAlign('left');
                                        },
                                        event: 'initialize'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'requestInnerCnt',
                        items: [
                            {
                                xtype: 'selectfield',
                                cls: 'DateCls',
                                itemId: 'fieldSavedSearchedId',
                                label: 'Saved Search',
                                labelCls: 'labelCls',
                                labelWidth: 110,
                                name: 'SavedSearchedId',
                                value: 1,
                                placeHolder: 'Choose Saved Search',
                                displayField: 'SearchName',
                                store: 'SavedSearchStore',
                                valueField: 'SavedSearchId',
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            component.setLabelAlign('left');
                                        },
                                        event: 'initialize'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'requestInnerCnt',
                        items: [
                            {
                                xtype: 'textareafield',
                                cls: 'textarea',
                                clearIcon: false,
                                name: 'Description'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: [
                            'requestInnerCnt',
                            'bbBlack'
                        ],
                        hidden: false,
                        margin: '0 0 5 0',
                        padding: '0 5',
                        layout: {
                            type: 'hbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'sliderfield',
                                flex: 1,
                                cls: 'sliderCls',
                                itemId: 'feeRangeItemID',
                                label: 'fee range',
                                labelWidth: 90,
                                name: 'HourlyFee',
                                value: [
                                    1
                                ],
                                maxValue: 2000,
                                minValue: 1,
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            component.setLabelAlign('left');
                                            var thumb = component.element.dom.querySelector('.x-thumb');
                                            thumb.insertAdjacentHTML( 'afterBegin', '<span class="xValue">0</span>' );
                                        },
                                        event: 'initialize'
                                    }
                                ]
                            },
                            {
                                xtype: 'selectfield',
                                cls: 'DateCls',
                                width: 110,
                                label: '',
                                labelCls: 'labelCls',
                                name: 'FeeCurrencyType',
                                value: 'EUR',
                                placeHolder: 'hour',
                                autoSelect: false,
                                displayField: 'Currency',
                                store: 'CreateRequestFeeRange',
                                valueField: 'Currency'
                            },
                            {
                                xtype: 'button',
                                cls: [
                                    'closeIcon',
                                    'noBorder'
                                ],
                                hidden: true,
                                itemId: 'DurationCloseBtn',
                                margin: 0,
                                text: ' '
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'hiddenfield',
                name: 'RequestId'
            },
            {
                xtype: 'hiddenfield',
                itemId: 'resumeDirectRequestData'
            }
        ],
        listeners: [
            {
                fn: 'onFixRequestTap',
                event: 'tap',
                delegate: '#FixRequest'
            },
            {
                fn: 'onBackBtnTap',
                event: 'tap',
                delegate: '#BackBtn'
            },
            {
                fn: 'onAddBtnTap',
                event: 'tap',
                delegate: '#DraftRequestBtn'
            },
            {
                fn: 'ondurationItemIDDrag',
                event: 'drag',
                delegate: '#durationItemID'
            },
            {
                fn: 'onDurationItemIDChange',
                event: 'change',
                delegate: '#durationItemID'
            },
            {
                fn: 'onDurationCloseBtnTap',
                event: 'tap',
                delegate: '#DurationCloseBtn'
            },
            {
                fn: 'onfeeRangeItemIDDrag',
                event: 'drag',
                delegate: '#feeRangeItemID'
            },
            {
                fn: 'onfeeRangeItemIDChange',
                event: 'change',
                delegate: '#feeRangeItemID'
            },
            {
                fn: 'onDurationCloseBtnTap1',
                event: 'tap',
                delegate: '#DurationCloseBtn'
            }
        ]
    },

    onFixRequestTap: function(button, e, eOpts) {
         Requests.passModelToSavedSearchList();
    },

    onBackBtnTap: function(button, e, eOpts) {

        G.Pop();

    },

    onAddBtnTap: function(button, e, eOpts) {

        Requests.createResumeRequest(true);
    },

    onCloseButtonTap13: function(button, e, eOpts) {
        button.up('container').hide();
    },

    ondurationItemIDDrag: function(sliderfield, sl, thumb, e, eOpts) {
        SearchResume.onSliderfieldDrag(sliderfield);
    },

    onDurationItemIDChange: function(me, sl, thumb, newValue, oldValue, eOpts) {
        SearchResume.onSliderfieldDrag(me);
    },

    onDurationCloseBtnTap: function(button, e, eOpts) {
        button.up('container').hide();
    },

    onfeeRangeItemIDDrag: function(sliderfield, sl, thumb, e, eOpts) {
        SearchResume.onSliderfieldDrag(sliderfield);
    },

    onfeeRangeItemIDChange: function(me, sl, thumb, newValue, oldValue, eOpts) {
        SearchResume.onSliderfieldDrag(me);
    },

    onDurationCloseBtnTap1: function(button, e, eOpts) {
        button.up('container').hide();
    }

});