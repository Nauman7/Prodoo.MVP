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
                cls: [
                    'confirmIcon',
                    'btnCircle',
                    'bgYellow'
                ],
                docked: 'bottom',
                itemId: 'FixRequest',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'confirmIcon',
                    'btnCircle',
                    'bgYellow'
                ],
                docked: 'bottom',
                hidden: true,
                itemId: 'SavedResumes',
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
                        pressedCls: null,
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
                                placeHolder: 'mm/dd/yyyy',
                                dateFormat: 'm/d/y',
                                picker: {
                                    itemId: 'requestStartDatePicker',
                                    zIndex: 30,
                                    doneButton: {
                                        itemId: 'requestStartDateDone',
                                        pressedCls: null,
                                        listeners: [
                                            {
                                                fn: function(component, eOpts) {
                                                    component.on('tap',function( b, e, eOpts){
                                                        var d = new Date();
                                                        d.setHours(0,0,0,0);
                                                        if(newrequestStartDate < d){
                                                            Ext.Msg.alert("Info","Date cannot be earlier than Today");
                                                            return false;
                                                        }

                                                    });
                                                },
                                                event: 'initialize'
                                            }
                                        ]
                                    },
                                    cancelButton: {
                                        pressedCls: null
                                    },
                                    listeners: [
                                        {
                                            fn: function(component, eOpts) {
                                                component.on('pick',function(oldDate, newDate, slot, eOpts){
                                                    newrequestStartDate = newDate;
                                                });
                                            },
                                            event: 'initialize'
                                        }
                                    ]
                                },
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            component.setLabelAlign('left');
                                            var d= new Date();
                                            d.getFullYear();
                                            component.getPicker().setYearFrom(d.getFullYear());
                                            component.getPicker().setYearTo(d.getFullYear()+5);
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
                                defaultPhonePickerConfig: {
                                    zIndex: 999
                                },
                                defaultTabletPickerConfig: {
                                    zIndex: 999
                                },
                                displayField: 'DayType',
                                options: [
                                    {
                                        DayType: 'Days'
                                    },
                                    {
                                        DayType: 'Weeks'
                                    },
                                    {
                                        DayType: 'Months'
                                    },
                                    {
                                        DayType: 'Years'
                                    }
                                ],
                                valueField: 'DayType'
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
                                name: 'LocationId',
                                value: 13,
                                placeHolder: 'Choose Location',
                                autoSelect: false,
                                defaultPhonePickerConfig: {
                                    zIndex: 999
                                },
                                defaultTabletPickerConfig: {
                                    zIndex: 999
                                },
                                displayField: 'CountryName',
                                store: 'CountryStore',
                                valueField: 'CountryId',
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
                                name: 'LanguageId',
                                value: 2,
                                placeHolder: 'Choose Language',
                                autoSelect: false,
                                defaultPhonePickerConfig: {
                                    zIndex: 999
                                },
                                defaultTabletPickerConfig: {
                                    zIndex: 999
                                },
                                displayField: 'LanguageValue',
                                store: 'SearchLanguage',
                                valueField: 'LanguageId',
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
                                defaultPhonePickerConfig: {
                                    zIndex: 999
                                },
                                defaultTabletPickerConfig: {
                                    zIndex: 999
                                },
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
                                defaultPhonePickerConfig: {
                                    zIndex: 999
                                },
                                defaultTabletPickerConfig: {
                                    zIndex: 999
                                },
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
                                label: 'Fee Range',
                                labelWidth: 90,
                                name: 'HourlyFee',
                                maxValue: 999,
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
                                width: 110,
                                label: '',
                                labelCls: 'labelCls',
                                name: 'FeeCurrencyType',
                                value: 'EUR',
                                placeHolder: 'hour',
                                autoSelect: false,
                                defaultPhonePickerConfig: {
                                    zIndex: 999
                                },
                                defaultTabletPickerConfig: {
                                    zIndex: 999
                                },
                                displayField: 'Currency',
                                options: [
                                    {
                                        Currency: 'USD'
                                    },
                                    {
                                        Currency: 'GBP'
                                    },
                                    {
                                        Currency: 'DKK'
                                    },
                                    {
                                        Currency: 'EUR'
                                    }
                                ],
                                valueField: 'Currency'
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
                fn: 'ShowSavedResume',
                event: 'tap',
                delegate: '#SavedResumes'
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
                fn: 'onfeeRangeItemIDDrag',
                event: 'drag',
                delegate: '#feeRangeItemID'
            },
            {
                fn: 'onfeeRangeItemIDChange',
                event: 'change',
                delegate: '#feeRangeItemID'
            }
        ]
    },

    onFixRequestTap: function(button, e, eOpts) {
         Requests.passModelToSavedSearchList();
    },

    ShowSavedResume: function(button, e, eOpts) {
        var form = button.up();
        var values = form.getValues();
        Requests.ShowSavedResumeRequest(values.RequestId);
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

    onfeeRangeItemIDDrag: function(sliderfield, sl, thumb, e, eOpts) {
        SearchResume.onSliderfieldDrag(sliderfield);
    },

    onfeeRangeItemIDChange: function(me, sl, thumb, newValue, oldValue, eOpts) {
        SearchResume.onSliderfieldDrag(me);
    }

});