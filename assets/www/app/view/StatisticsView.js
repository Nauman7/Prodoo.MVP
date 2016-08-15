/*
 * File: app/view/StatisticsView.js
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

Ext.define('ProDooMobileApp.view.StatisticsView', {
    extend: 'Ext.Container',
    alias: 'widget.StatisticsView',

    requires: [
        'Ext.Button',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.Legend',
        'Ext.chart.series.Area',
        'Ext.chart.interactions.PanZoom'
    ],

    config: {
        cls: 'StatisticsView',
        itemId: 'StatisticsScreen',
        scrollable: true,
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
                            'resumeStatsBtn',
                            'activeBtn'
                        ],
                        itemId: 'resumeStatsBtn',
                        margin: '0 5',
                        text: ' '
                    },
                    {
                        xtype: 'button',
                        cls: 'requestStatsBtn',
                        itemId: 'requestStatsBtn',
                        margin: '0 5',
                        text: ' '
                    },
                    {
                        xtype: 'button',
                        cls: 'graphStatsBtn',
                        itemId: 'graphStatsBtn',
                        margin: '0 5',
                        text: ' '
                    }
                ]
            },
            {
                xtype: 'label',
                cls: 'StatsHead',
                docked: 'top',
                html: 'RESUME STATISTICS',
                itemId: 'statsLbl'
            },
            {
                xtype: 'list',
                cls: 'statisticsList',
                itemId: 'StatsListView',
                itemTpl: [
                    '<div class="statsDate">{DateMonth}</div>',
                    '<div class="statsResume">{Count}</div>',
                    ''
                ],
                pressedCls: '',
                selectedCls: '',
                store: 'StatisticsResume'
            },
            {
                xtype: 'container',
                hidden: true,
                itemId: 'StatsGraphCnt',
                margin: '0 0 50 0',
                items: [
                    {
                        xtype: 'container',
                        cls: 'StatsGraphInnerCnt',
                        itemId: 'StatsGraphResumeCnt',
                        items: [
                            {
                                xtype: 'chart',
                                height: 400,
                                itemId: 'StatisticsGraphView',
                                width: '100%',
                                colors: [
                                    '#115fa6',
                                    '#94ae0a',
                                    '#a61120',
                                    '#ff8809',
                                    '#ffd13e',
                                    '#a61187',
                                    '#24ad9a',
                                    '#7c7474',
                                    '#a66111'
                                ],
                                innerPadding: {
                                    top: 10,
                                    left: 10,
                                    right: 10,
                                    bottom: 0
                                },
                                store: 'StatisticsGraph',
                                axes: [
                                    {
                                        type: 'category',
                                        fields: [
                                            'Time'
                                        ],
                                        label: {
                                            rotate: {
                                                degrees: 290
                                            },
                                            fillStyle: '#ffffff',
                                            x: 0,
                                            y: 0,
                                            textBaseline: 'middle',
                                            textAlign: 'center',
                                            fontSize: 12,
                                            fontFamily: 'Helvetica'
                                        }
                                    },
                                    {
                                        type: 'numeric',
                                        fields: [
                                            'Resume',
                                            'Request'
                                        ],
                                        grid: {
                                            odd: {
                                                stroke: 'rgba(0,0,0,0.5)'
                                            },
                                            even: {
                                                stroke: 'rgba(0,0,0,0)'
                                            }
                                        },
                                        label: {
                                            fillStyle: '#ffffff',
                                            x: 0,
                                            y: 0,
                                            textBaseline: 'middle',
                                            textAlign: 'center',
                                            fontSize: 12,
                                            fontFamily: 'Helvetica'
                                        },
                                        position: 'left'
                                    }
                                ],
                                series: [
                                    {
                                        type: 'line',
                                        style: {
                                            stroke: '#3ba2f6',
                                            lineWidth: 3
                                        },
                                        xField: 'Time',
                                        yField: 'Resume'
                                    },
                                    {
                                        type: 'line',
                                        style: {
                                            stroke: '#3cd4f6',
                                            lineWidth: 3
                                        },
                                        xField: 'Time',
                                        yField: 'Request'
                                    }
                                ],
                                interactions: [
                                    {
                                        type: 'itemhighlight'
                                    }
                                ],
                                legend: {
                                    xtype: 'legend',
                                    cls: 'chartLegend',
                                    docked: 'bottom',
                                    scrollable: false,
                                    itemTpl: [
                                        '<span class="x-legend-item-marker {[values.disabled?\'x-legend-inactive\':\'\']}" style="background:{mark};"></span>',
                                        ' {name}  '
                                    ]
                                }
                            },
                            {
                                xtype: 'container',
                                cls: [
                                    'statsImgCnt',
                                    'StatsResumeImg'
                                ],
                                height: 80,
                                hidden: true,
                                itemId: 'StatsGraphResume',
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            component.element.on('tap',function(){
                                                var Cnt =G.get('StatsGraphResumeCnt');
                                                if(Cnt.element.hasCls('activeImg')){
                                                    Cnt.removeCls('activeImg');
                                                    G.hide('StatsGraphResumeDate');
                                                    G.hide('StatsGraphResumeChart');
                                                }
                                                else{
                                                    Cnt.addCls('activeImg');
                                                    G.show('StatsGraphResumeDate');
                                                    G.show('StatsGraphResumeChart');
                                                }
                                            });
                                        },
                                        event: 'initialize'
                                    }
                                ]
                            },
                            {
                                xtype: 'chart',
                                height: 400,
                                hidden: true,
                                itemId: 'StatsGraphResumeChart',
                                width: '100%',
                                colors: [
                                    '#3ba2f6',
                                    '#94ae0a',
                                    '#a61120',
                                    '#ff8809',
                                    '#ffd13e',
                                    '#a61187',
                                    '#24ad9a',
                                    '#7c7474',
                                    '#a66111'
                                ],
                                innerPadding: {
                                    top: 0,
                                    left: 0,
                                    right: 10,
                                    bottom: 0
                                },
                                store: 'StatisticsResume',
                                axes: [
                                    {
                                        type: 'category',
                                        fields: [
                                            'DateMonth'
                                        ],
                                        label: {
                                            rotate: {
                                                degrees: 290
                                            },
                                            fillStyle: '#ffffff',
                                            x: 0,
                                            y: 0,
                                            textBaseline: 'middle',
                                            textAlign: 'center',
                                            fontSize: 12,
                                            fontFamily: 'Helvetica'
                                        }
                                    },
                                    {
                                        type: 'numeric',
                                        grid: {
                                            odd: {
                                                stroke: '#fff'
                                            },
                                            even: {
                                                stroke: '#fff'
                                            }
                                        },
                                        label: {
                                            fillStyle: '#ffffff',
                                            x: 0,
                                            y: 0,
                                            textBaseline: 'middle',
                                            textAlign: 'center',
                                            fontSize: 12,
                                            fontFamily: 'Helvetica'
                                        },
                                        position: 'left'
                                    }
                                ],
                                series: [
                                    {
                                        type: 'area',
                                        xField: 'DateMonth',
                                        yField: [
                                            'Count'
                                        ]
                                    }
                                ],
                                interactions: [
                                    {
                                        type: 'panzoom'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'clearfix',
                        items: [
                            {
                                xtype: 'container',
                                cls: [
                                    'StatsDateCnt',
                                    'left'
                                ],
                                hidden: true,
                                itemId: 'StatsGraphRequestDate',
                                padding: 7,
                                width: '50%',
                                items: [
                                    {
                                        xtype: 'button',
                                        cls: [
                                            'StatsDate',
                                            'left'
                                        ],
                                        hidden: true,
                                        margin: '0 10 0 0',
                                        pressedCls: null
                                    },
                                    {
                                        xtype: 'label',
                                        cls: 'StatsDatelbl',
                                        hidden: true,
                                        html: '1 - 7 August 2015'
                                    },
                                    {
                                        xtype: 'label',
                                        cls: 'StatsRequestLbl',
                                        hidden: true,
                                        html: '46 Request'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                cls: 'StatsDateCnt',
                                itemId: 'StatsGraphResumeDate',
                                padding: 7,
                                items: [
                                    {
                                        xtype: 'button',
                                        cls: [
                                            'StatsDate',
                                            'left'
                                        ],
                                        hidden: true,
                                        margin: '0 10 0 0',
                                        pressedCls: null
                                    },
                                    {
                                        xtype: 'label',
                                        cls: 'StatsDatelbl',
                                        hidden: true,
                                        html: '1 - 7 August 2015'
                                    },
                                    {
                                        xtype: 'label',
                                        cls: 'StatsResumeLbl',
                                        itemId: 'ResumeLabel'
                                    },
                                    {
                                        xtype: 'label',
                                        cls: 'StatsRequestLbl',
                                        hidden: false,
                                        html: '46 Request',
                                        itemId: 'RequestLabel'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: [
                            'StatsGraphInnerCnt',
                            'activeImg'
                        ],
                        hidden: true,
                        itemId: 'StatsGraphRequestCnt',
                        items: [
                            {
                                xtype: 'container',
                                cls: [
                                    'statsImgCnt',
                                    'StatsRequestImg'
                                ],
                                height: 80,
                                itemId: 'StatsGraphRequest',
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            component.element.on('tap',function(){
                                                var Cnt =G.get('StatsGraphRequestCnt');
                                                if(Cnt.element.hasCls('activeImg')){
                                                    Cnt.removeCls('activeImg');
                                                    G.hide('StatsGraphRequestDate');
                                                    G.hide('StatsGraphRequestChart');
                                                }
                                                else{
                                                    Cnt.addCls('activeImg');
                                                    G.show('StatsGraphRequestDate');
                                                    G.show('StatsGraphRequestChart');
                                                }
                                            });
                                        },
                                        event: 'initialize'
                                    }
                                ]
                            },
                            {
                                xtype: 'chart',
                                height: 400,
                                itemId: 'StatsGraphRequestChart',
                                width: '100%',
                                colors: [
                                    '#3cd4f6',
                                    '#94ae0a',
                                    '#a61120',
                                    '#ff8809',
                                    '#ffd13e',
                                    '#a61187',
                                    '#24ad9a',
                                    '#7c7474',
                                    '#a66111'
                                ],
                                innerPadding: {
                                    top: 0,
                                    left: 0,
                                    right: 10,
                                    bottom: 0
                                },
                                store: 'StatisticsRequest',
                                axes: [
                                    {
                                        type: 'category',
                                        label: {
                                            rotate: {
                                                degrees: 290
                                            },
                                            fillStyle: '#ffffff',
                                            x: 0,
                                            y: 0,
                                            textBaseline: 'middle',
                                            textAlign: 'center',
                                            fontSize: 12,
                                            fontFamily: 'Helvetica'
                                        }
                                    },
                                    {
                                        type: 'numeric',
                                        fields: [
                                            'Count'
                                        ],
                                        grid: {
                                            odd: {
                                                stroke: '#fff'
                                            },
                                            even: {
                                                stroke: '#fff'
                                            }
                                        },
                                        label: {
                                            fillStyle: '#ffffff',
                                            x: 0,
                                            y: 0,
                                            textBaseline: 'middle',
                                            textAlign: 'center',
                                            fontSize: 12,
                                            fontFamily: 'Helvetica'
                                        },
                                        position: 'left'
                                    }
                                ],
                                series: [
                                    {
                                        type: 'area',
                                        xField: 'DateMonth',
                                        yField: [
                                            'Count'
                                        ]
                                    }
                                ],
                                interactions: [
                                    {
                                        type: 'panzoom'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'statsBlue',
                docked: 'bottom',
                itemId: 'TotalStatsCnt',
                padding: '12 0 14',
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'label',
                        flex: 1,
                        cls: 'StatsBottom',
                        itemId: 'ResumeCount',
                        padding: '2 0 0 0'
                    },
                    {
                        xtype: 'label',
                        flex: 1,
                        cls: 'StatsBottom',
                        hidden: true,
                        itemId: 'RequestCount',
                        padding: '2 0 0 0'
                    }
                ]
            },
            {
                xtype: 'button',
                cls: [
                    'homeIcon',
                    'btnCircle',
                    'bgPurple'
                ],
                docked: 'bottom',
                itemId: 'StatisticsHomeButton',
                text: ' '
            }
        ],
        listeners: [
            {
                fn: 'onresumeTap',
                event: 'tap',
                delegate: '#resumeStatsBtn'
            },
            {
                fn: 'onRequestTap',
                event: 'tap',
                delegate: '#requestStatsBtn'
            },
            {
                fn: 'onGraphStatsBtnTap',
                event: 'tap',
                delegate: '#graphStatsBtn'
            },
            {
                fn: 'onStatisticsHomeButtonTap',
                event: 'tap',
                delegate: '#StatisticsHomeButton'
            }
        ]
    },

    onresumeTap: function(button, e, eOpts) {
        this.activeBtn(button);
        G.get('statsLbl').setHtml('RESUME STATISTICS');
        G.get('StatsListView').setStore('StatisticsResume');
        G.get('TotalStatsCnt').removeCls('statsLightBlue');
        G.get('ResumeCount').show();
        G.get('RequestCount').hide();
        G.show('StatsListView');
        G.show('TotalStatsCnt');
        G.hide('StatsGraphCnt');
    },

    onRequestTap: function(button, e, eOpts) {
        this.activeBtn(button);
        G.get('statsLbl').setHtml('REQUEST STATISTICS');
        G.get('StatsListView').setStore('StatisticsRequest');
        G.get('TotalStatsCnt').addCls('statsLightBlue');
        G.get('RequestCount').show();
        G.get('ResumeCount').hide();
        G.show('TotalStatsCnt');
        G.show('StatsListView');
        G.hide('StatsGraphCnt');

    },

    onGraphStatsBtnTap: function(button, e, eOpts) {
        this.activeBtn(button);
        G.get('statsLbl').setHtml('Graphical Stats');
        G.hide('StatsListView');
        G.hide('TotalStatsCnt');
        G.show('StatsGraphCnt');
    },

    onStatisticsHomeButtonTap: function(button, e, eOpts) {
        G.showHomeView();
    },

    activeBtn: function(button) {
        var TopCont = G.get('topButtons');
        var items =TopCont.items.items;
        for( var i=0; i<items.length; i++){
            items[i].removeCls('activeBtn');
        }

        button.addCls('activeBtn');
    }

});