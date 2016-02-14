/*
 * File: app/view/SearchResult.js
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

Ext.define('ProDooMobileApp.view.SearchResult', {
    extend: 'Ext.Container',
    alias: 'widget.SearchResult',

    requires: [
        'Ext.Button',
        'Ext.Label',
        'Ext.field.Hidden',
        'Ext.field.Search',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.field.Slider'
    ],

    config: {
        cls: 'tabPanel',
        itemId: 'searchResultView',
        scrollable: true,
        items: [
            {
                xtype: 'container',
                docked: 'top',
                height: 52,
                itemId: 'topButtons',
                margin: '10 0 0 0',
                padding: '2 0 0 ',
                scrollable: 'horizontal',
                layout: {
                    type: 'hbox',
                    align: 'start',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        cls: [
                            'activeBtn',
                            'tabIconSpan'
                        ],
                        html: '<span class="tabIcon profileTabIcon"> </span>',
                        itemId: 'profileBtn',
                        margin: '0 5'
                    },
                    {
                        xtype: 'button',
                        cls: 'tabIconSpan',
                        html: '<span class="tabIcon editTabIcon"> </span>',
                        itemId: 'SkillsBtn',
                        margin: '0 5'
                    },
                    {
                        xtype: 'button',
                        cls: 'tabIconSpan',
                        html: '<span class="tabIcon savedTabIcon"> </span>',
                        itemId: 'IndustryBtn',
                        margin: '0 5'
                    },
                    {
                        xtype: 'button',
                        cls: 'tabIconSpan',
                        html: '<span class="tabIcon skillTabIcon"> </span>',
                        itemId: 'keywordBtn',
                        margin: '0 5'
                    },
                    {
                        xtype: 'button',
                        cls: 'tabIconSpan',
                        html: '<span class="tabIcon certificationTabIcon"> </span>',
                        itemId: 'certificationBtn',
                        margin: '0 5'
                    },
                    {
                        xtype: 'button',
                        cls: 'locationIcon',
                        itemId: 'locationBtn',
                        margin: '0 5'
                    }
                ]
            },
            {
                xtype: 'label',
                cls: 'SearchLabel',
                docked: 'top',
                html: 'Profile',
                itemId: 'buttonsLabel'
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
                        xtype: 'hiddenfield',
                        itemId: 'SearchRecordID'
                    },
                    {
                        xtype: 'searchfield',
                        cls: 'searchRound',
                        itemId: 'mysearchfield',
                        clearIcon: false,
                        autoComplete: false,
                        placeHolder: 'Enter profile'
                    },
                    {
                        xtype: 'button',
                        cls: 'addIcon',
                        hidden: true,
                        html: ' ',
                        itemId: 'AddSearchBtn'
                    },
                    {
                        xtype: 'button',
                        cls: 'clearIcon',
                        hidden: true,
                        html: ' ',
                        itemId: 'ClearSearchIcon'
                    },
                    {
                        xtype: 'list',
                        scrollable: true,
                        cls: 'searchList',
                        height: 250,
                        hidden: true,
                        itemId: 'SearchList',
                        margin: '0 40',
                        itemTpl: [
                            '<div class="listResult">',
                            '        <span class="listTitle">{ProfileValue}{SkillValue}{KeywordValue}{CertificationValue}{IndustryValue}{CountryName}</span>',
                            '<!--     <span class="addIcon"><i> </i></span> -->',
                            '</div>'
                        ],
                        store: 'SearchProfile'
                    },
                    {
                        xtype: 'list',
                        id: 'ProfilesDetailsView1',
                        itemTpl: [
                            'Profile: {Value} <br/>',
                            'Experience: {Experience} <br/>',
                            'Match: {Score}'
                        ],
                        store: 'ProfilesForResumeStore'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'HelpCnt',
                docked: 'top',
                hidden: true,
                itemId: 'HelpCnt',
                items: [
                    {
                        xtype: 'container',
                        cls: 'HelpHeaderCnt',
                        padding: 10,
                        items: [
                            {
                                xtype: 'label',
                                cls: 'left',
                                itemId: 'HelpID'
                            },
                            {
                                xtype: 'label',
                                cls: 'labelCls',
                                html: 'Search for Profile',
                                itemId: 'HelpHeading'
                            },
                            {
                                xtype: 'button',
                                cls: 'helpClose',
                                hidden: true,
                                itemId: 'HelpClose'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        html: 'Type your profile search here and add it to search item',
                        itemId: 'HelpDetail',
                        padding: 10
                    },
                    {
                        xtype: 'hiddenfield',
                        html: ' all ',
                        itemId: 'HelpDisable'
                    }
                ]
            },
            {
                xtype: 'datepickerfield',
                cls: 'DateCls',
                itemId: 'SearchDatepicker',
                label: 'Start Date',
                labelCls: 'iYellow',
                labelWidth: 120,
                value: {
                    day: new Date().getDate(),
                    month: (new Date().getMonth()+1),
                    year: new Date().getFullYear()
                },
                picker: {
                    height: '100%',
                    zIndex: 35,
                    yearFrom: 2015,
                    yearTo: 2099
                },
                listeners: [
                    {
                        fn: function(component, eOpts) {
                            component.setLabelAlign('left');
                        },
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'resultCnt',
                margin: '10 0 100 ',
                items: [
                    {
                        xtype: 'container',
                        cls: 'LabelCnt',
                        hidden: true,
                        itemId: 'ProfileCnt',
                        margin: '0 0 10',
                        padding: '0 10',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'heading',
                                    'iYellow'
                                ],
                                html: 'Profile '
                            },
                            {
                                xtype: 'container',
                                hidden: true,
                                margin: '0 0 5 0',
                                layout: {
                                    type: 'hbox',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'label',
                                        cls: 'labelCls',
                                        hidden: false,
                                        html: 'sample'
                                    },
                                    {
                                        xtype: 'sliderfield',
                                        flex: 1,
                                        cls: 'sliderCls',
                                        itemId: 'mysliderfield3',
                                        label: 'sample text for profile with large text',
                                        labelAlign: 'top',
                                        value: [
                                            0
                                        ],
                                        maxValue: 10,
                                        listeners: [
                                            {
                                                fn: function(component, eOpts) {
                                                    var thumb = component.element.dom.querySelector('.x-thumb');
                                                    thumb.insertAdjacentHTML( 'afterBegin', '<span class="xValue">0</span>' );
                                                },
                                                event: 'initialize'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        cls: [
                                            'closeIcon',
                                            'noBorder'
                                        ],
                                        itemId: 'ProfileListClose',
                                        text: ' '
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'LabelCnt',
                        hidden: true,
                        itemId: 'LocationCnt',
                        margin: '0 0 10',
                        padding: '0 10',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'heading',
                                    'iYellow'
                                ],
                                html: 'Location'
                            },
                            {
                                xtype: 'container',
                                hidden: true,
                                margin: '0 0 5 0',
                                layout: {
                                    type: 'hbox',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'label',
                                        cls: 'labelCls',
                                        html: 'Sample Location',
                                        width: 120
                                    },
                                    {
                                        xtype: 'sliderfield',
                                        flex: 1,
                                        cls: 'sliderCls',
                                        itemId: 'mysliderfield3',
                                        value: [
                                            0
                                        ],
                                        maxValue: 10,
                                        listeners: [
                                            {
                                                fn: function(component, eOpts) {
                                                    var thumb = component.element.dom.querySelector('.x-thumb');
                                                    thumb.insertAdjacentHTML( 'afterBegin', '<span class="xValue">0</span>' );
                                                    component.setLabelAlign('left');
                                                },
                                                event: 'initialize'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        cls: [
                                            'closeIcon',
                                            'noBorder'
                                        ],
                                        itemId: 'mybutton16',
                                        text: ' '
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'LabelCnt',
                        hidden: true,
                        itemId: 'SkillCnt',
                        margin: '0 0 10',
                        padding: '0 10',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'heading',
                                    'iYellow'
                                ],
                                html: 'Skills'
                            },
                            {
                                xtype: 'container',
                                hidden: true,
                                margin: '0 0 5 0',
                                layout: {
                                    type: 'hbox',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'label',
                                        cls: 'labelCls',
                                        html: 'Sample Skills',
                                        width: 120
                                    },
                                    {
                                        xtype: 'sliderfield',
                                        flex: 1,
                                        cls: 'sliderCls',
                                        itemId: 'mysliderfield3',
                                        value: [
                                            0
                                        ],
                                        maxValue: 10,
                                        listeners: [
                                            {
                                                fn: function(component, eOpts) {
                                                    var thumb = component.element.dom.querySelector('.x-thumb');
                                                    thumb.insertAdjacentHTML( 'afterBegin', '<span class="xValue">0</span>' );
                                                },
                                                event: 'initialize'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        cls: [
                                            'closeIcon',
                                            'noBorder'
                                        ],
                                        itemId: 'mybutton16',
                                        text: ' '
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'LabelCnt',
                        hidden: true,
                        itemId: 'IndustryCnt',
                        margin: '0 0 10',
                        padding: '0 10',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'heading',
                                    'iYellow'
                                ],
                                html: 'Industry'
                            },
                            {
                                xtype: 'container',
                                hidden: true,
                                margin: '0 0 5 0',
                                layout: {
                                    type: 'hbox',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'label',
                                        cls: 'labelCls',
                                        html: 'Sample Industry',
                                        width: 120
                                    },
                                    {
                                        xtype: 'sliderfield',
                                        flex: 1,
                                        cls: 'sliderCls',
                                        value: [
                                            0
                                        ],
                                        maxValue: 10,
                                        listeners: [
                                            {
                                                fn: function(component, eOpts) {
                                                    var thumb = component.element.dom.querySelector('.x-thumb');
                                                    thumb.insertAdjacentHTML( 'afterBegin', '<span class="xValue">0</span>' );
                                                },
                                                event: 'initialize'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        cls: [
                                            'closeIcon',
                                            'noBorder'
                                        ],
                                        itemId: 'mybutton16',
                                        text: ' '
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'LabelCnt',
                        hidden: true,
                        itemId: 'KeywordCnt',
                        margin: '0 0 10',
                        padding: '0 10',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'heading',
                                    'iYellow'
                                ],
                                html: 'Keyword'
                            },
                            {
                                xtype: 'container',
                                hidden: true,
                                margin: '0 0 5 0',
                                layout: {
                                    type: 'hbox',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'label',
                                        flex: 1,
                                        cls: 'labelCls',
                                        html: 'Sample keyword'
                                    },
                                    {
                                        xtype: 'button',
                                        cls: [
                                            'closeIcon',
                                            'noBorder'
                                        ],
                                        itemId: 'mybutton16',
                                        text: ' '
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'LabelCnt',
                        hidden: true,
                        itemId: 'CertificationCnt',
                        margin: '0 0 10',
                        padding: '0 10',
                        items: [
                            {
                                xtype: 'label',
                                cls: [
                                    'heading',
                                    'iYellow'
                                ],
                                html: 'Certification'
                            },
                            {
                                xtype: 'container',
                                hidden: true,
                                margin: '0 0 5 0',
                                layout: {
                                    type: 'hbox',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'label',
                                        flex: 1,
                                        cls: 'labelCls',
                                        html: 'Sample keyword'
                                    },
                                    {
                                        xtype: 'button',
                                        cls: [
                                            'closeIcon',
                                            'noBorder'
                                        ],
                                        itemId: 'mybutton16',
                                        text: ' '
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'button',
                cls: [
                    'btnCircle',
                    'helpIcon'
                ],
                docked: 'bottom',
                hidden: true,
                itemId: 'helpBtn',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'btnCircle',
                    'searchIcon4'
                ],
                docked: 'bottom',
                hidden: true,
                itemId: 'requestBtn',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'btnCircle',
                    'searchIcon3'
                ],
                docked: 'bottom',
                hidden: true,
                itemId: 'shortlistBtn',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'btnCircle',
                    'searchIcon2'
                ],
                docked: 'bottom',
                hidden: true,
                itemId: 'savedSearchBtn',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'btnCircle',
                    'searchIcon1'
                ],
                docked: 'bottom',
                itemId: 'globeBtn',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'homeIcon',
                    'btnCircle'
                ],
                docked: 'bottom',
                itemId: 'SearchHomeButton',
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'bigBtnCircle',
                    'searchIconBig'
                ],
                docked: 'bottom',
                itemId: 'SearchBtn',
                text: ' '
            }
        ],
        listeners: [
            {
                fn: 'onProfileTap',
                event: 'tap',
                delegate: '#profileBtn'
            },
            {
                fn: 'onSkillsTap',
                event: 'tap',
                delegate: '#SkillsBtn'
            },
            {
                fn: 'onIndustryTap',
                event: 'tap',
                delegate: '#IndustryBtn'
            },
            {
                fn: 'onKeywordTap',
                event: 'tap',
                delegate: '#keywordBtn'
            },
            {
                fn: 'onCertificationTap',
                event: 'tap',
                delegate: '#certificationBtn'
            },
            {
                fn: 'onlocationTap',
                event: 'tap',
                delegate: '#locationBtn'
            },
            {
                fn: 'onMysearchfieldKeyup',
                event: 'keyup',
                delegate: '#mysearchfield'
            },
            {
                fn: 'onMysearchfieldFocus',
                event: 'focus',
                delegate: '#mysearchfield'
            },
            {
                fn: 'onAddSearchBtnTap',
                event: 'tap',
                delegate: '#AddSearchBtn'
            },
            {
                fn: 'onClearSearchIconTap',
                event: 'tap',
                delegate: '#ClearSearchIcon'
            },
            {
                fn: 'onSearchListItemTap',
                event: 'itemtap',
                delegate: '#SearchList'
            },
            {
                fn: 'onHelpCloseTap',
                event: 'tap',
                delegate: '#HelpClose'
            },
            {
                fn: 'onMysliderfield3Drag',
                event: 'drag',
                delegate: '#mysliderfield3'
            },
            {
                fn: 'onCloseButtonTap',
                event: 'tap',
                delegate: '#ProfileListClose'
            },
            {
                fn: 'onMysliderfield3Drag2',
                event: 'drag',
                delegate: '#mysliderfield3'
            },
            {
                fn: 'onCloseButtonTap2',
                event: 'tap',
                delegate: '#mybutton16'
            },
            {
                fn: 'onMysliderfield3Drag1',
                event: 'drag',
                delegate: '#mysliderfield3'
            },
            {
                fn: 'onCloseButtonTap1',
                event: 'tap',
                delegate: '#mybutton16'
            },
            {
                fn: 'onCloseButtonTap12',
                event: 'tap',
                delegate: '#mybutton16'
            },
            {
                fn: 'onCloseButtonTap11',
                event: 'tap',
                delegate: '#mybutton16'
            },
            {
                fn: 'onCloseButtonTap111',
                event: 'tap',
                delegate: '#mybutton16'
            },
            {
                fn: 'onHelpBtnTap',
                event: 'tap',
                delegate: '#helpBtn'
            },
            {
                fn: 'onRequestBtnTap',
                event: 'tap',
                delegate: '#requestBtn'
            },
            {
                fn: 'onShortlistTap',
                event: 'tap',
                delegate: '#shortlistBtn'
            },
            {
                fn: 'onSavedSearchBtnTap',
                event: 'tap',
                delegate: '#savedSearchBtn'
            },
            {
                fn: 'onGlobeBtnTap',
                event: 'tap',
                delegate: '#globeBtn'
            },
            {
                fn: 'onHomeBtnTap',
                event: 'tap',
                delegate: '#SearchHomeButton'
            },
            {
                fn: 'onSearchBtnTap',
                event: 'tap',
                delegate: '#SearchBtn'
            },
            {
                fn: 'onSearchResultViewPainted',
                single: true,
                event: 'painted'
            }
        ]
    },

    onProfileTap: function(button, e, eOpts) {
        SearchResume.onTopBtnTap(button,'Profile');
    },

    onSkillsTap: function(button, e, eOpts) {
        SearchResume.onTopBtnTap(button,'Skill');
    },

    onIndustryTap: function(button, e, eOpts) {
        SearchResume.onTopBtnTap(button,'Industry');
    },

    onKeywordTap: function(button, e, eOpts) {
        SearchResume.onTopBtnTap(button,'Keyword');
    },

    onCertificationTap: function(button, e, eOpts) {
        SearchResume.onTopBtnTap(button,'Certification');
    },

    onlocationTap: function(button, e, eOpts) {
        SearchResume.onTopBtnTap(button,'Location');
    },

    onMysearchfieldKeyup: function(textfield, e, eOpts) {
        SearchResume.onPropertySearch(textfield);



    },

    onMysearchfieldFocus: function(textfield, e, eOpts) {
        //if(!textfield.getReadOnly()){
            G.show('SearchList');
            SearchResume.helpHide();
        //}
    },

    onAddSearchBtnTap: function(button, e, eOpts) {
        SearchResume.onAddSearchBtnTap();
    },

    onClearSearchIconTap: function(button, e, eOpts) {
        SearchResume.onClearSearchIconTap();
    },

    onSearchListItemTap: function(dataview, index, target, record, e, eOpts) {
        if (e.target == undefined)
        {
            e.target=target.element.dom.getElementsByTagName("span")[0];
        }

        SearchResume.onSearchListItemTap(e,dataview,record);
    },

    onHelpCloseTap: function(button, e, eOpts) {

        SearchResume.helpHide();
    },

    onMysliderfield3Drag: function(sliderfield, sl, thumb, e, eOpts) {
        SearchResume.onSliderfieldDrag(sliderfield);
    },

    onCloseButtonTap: function(button, e, eOpts) {
        button.up('container').hide();
    },

    onMysliderfield3Drag2: function(sliderfield, sl, thumb, e, eOpts) {
        SearchResume.onSliderfieldDrag(sliderfield);
    },

    onCloseButtonTap2: function(button, e, eOpts) {
        button.up('container').hide();
    },

    onMysliderfield3Drag1: function(sliderfield, sl, thumb, e, eOpts) {
        SearchResume.onSliderfieldDrag(sliderfield);
    },

    onCloseButtonTap1: function(button, e, eOpts) {
        button.up('container').hide();
    },

    onMysliderfield3Drag11: function(sliderfield, sl, thumb, e, eOpts) {
        SearchResume.onSliderfieldDrag(sliderfield);
    },

    onCloseButtonTap12: function(button, e, eOpts) {
        button.up('container').hide();
    },

    onCloseButtonTap11: function(button, e, eOpts) {
        button.up('container').hide();
    },

    onCloseButtonTap111: function(button, e, eOpts) {
        button.up('container').hide();
    },

    onHelpBtnTap: function(button, e, eOpts) {
        if(!button.element.hasCls('activeBtn')){// login for first time
            var helpDisble = G.get('HelpDisable');
            helpDisble.setHtml(' ');
            button.addCls('activeBtn');
            G.show('HelpCnt');
            button.removeCls('helpFirstClick');
        }
        else if(!IsVistor && !button.element.hasCls('helpFirstClick')){ // check if clicking on first time
            var HelpActive = SearchResume.UpdateHelpDetail('helpIconBtn');
            button.addCls('helpFirstClick');
        }
        else if(button.element.hasCls('activeBtn')){
            var helpDisble = G.get('HelpDisable');
            helpDisble.setHtml(' all ');// help disable for all icons
            G.hide('HelpCnt');
            button.removeCls('activeBtn');

            var authStore = Ext.getStore('AuthStore');
            if(authStore.getAt(0)){
            var isNotifcationRead= authStore.getAt(0).data.IsNotificationRead;
            if(isNotifcationRead!==undefined && !isNotifcationRead){
                SearchResume.MarkHelpNotificationRead();
            }
            }
        }

        if(IsVistor){
                var helpIcon=Ext.select('.helpIcon');
                  helpIcon.addCls('bottom78');
            }
    },

    onRequestBtnTap: function(button, e, eOpts) {

        var HelpActive = SearchResume.UpdateHelpDetail('helpRequestBtn');

        if(!HelpActive)
            Requests.ShowRequestView(true,true);
    },

    onShortlistTap: function(button, e, eOpts) {

        var HelpActive = SearchResume.UpdateHelpDetail('helpShorlistBtn');

        if(!HelpActive)
        {
            Shortlist.showShortListView();
        }
    },

    onSavedSearchBtnTap: function(button, e, eOpts) {
        var HelpActive = SearchResume.UpdateHelpDetail('helpSaveSearchBtn');
        if(!HelpActive)
            SaveSearch.saveSearchResume();
    },

    onGlobeBtnTap: function(button, e, eOpts) {
        SearchResume.onGlobeBtnTap(this,button);
    },

    onHomeBtnTap: function(button, e, eOpts) {
        if(IsVistor)
            { G.ShowView('LoginForm'); IsVistor=false;}
        else
            G.showHomeView();
    },

    onSearchBtnTap: function(button, e, eOpts) {
        var HelpActive = SearchResume.UpdateHelpDetail('helpSearchIcon');
        if(!HelpActive)
            SearchResume.onSearchBtnTap();
    },

    onSearchResultViewPainted: function(element, eOpts) {
        element.on('tap',function(e){
            var selectedElement =Ext.get(e.target);
            if(!selectedElement.parent('.searchViewCnt')){
                G.hide('SearchList');
            }
        });
    },

    initialize: function() {
        this.callParent();
        var authStore = Ext.getStore('AuthStore');
        var button= G.get('helpBtn');
        var helpDisble = G.get('HelpDisable');
        if(authStore.getAt(0)	 && !authStore.getAt(0).data.IsNotificationRead){
            helpDisble.setHtml(' ');
            button.addCls('activeBtn');
            G.show('HelpCnt');
            button.removeCls('helpFirstClick');
            SearchResume.onGlobeBtnTap(this,G.get("globeBtn"));
        }
        else{
            helpDisble.setHtml(' all ');
            G.hide('HelpCnt');
            button.removeCls('activeBtn');
        }
    }

});