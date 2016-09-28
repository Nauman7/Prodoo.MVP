/*
 * File: app/view/CompanyDetail.js
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

Ext.define('ProDooMobileApp.view.CompanyDetail', {
    extend: 'Ext.Container',
    alias: 'widget.CompanyDetail',

    requires: [
        'Ext.Button',
        'Ext.Img',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        cls: 'darkBlue',
        items: [
            {
                xtype: 'button',
                bottom: 10,
                cls: [
                    'btnCircle',
                    'homeIcon',
                    'bgOrange'
                ],
                docked: 'bottom',
                itemId: 'companyHomebtn',
                left: 10,
                text: ' '
            },
            {
                xtype: 'button',
                cls: [
                    'btnCircle',
                    'backIcon',
                    'l10',
                    'b10'
                ],
                docked: 'bottom',
                hidden: true,
                itemId: 'companyBackBtn',
                text: ' '
            },
            {
                xtype: 'button',
                bottom: 10,
                cls: [
                    'addBtn',
                    'bgOrange'
                ],
                docked: 'bottom',
                itemId: 'CompanyAddNewBtn',
                right: 10,
                text: ' '
            },
            {
                xtype: 'container',
                centered: true,
                cls: [
                    'labelCls',
                    'center'
                ],
                docked: 'top',
                hidden: true,
                html: '',
                itemId: 'CompanySplash',
                items: [
                    {
                        xtype: 'image',
                        height: 128,
                        margin: 'auto',
                        width: 190,
                        src: 'resources/images/companyIcon.png'
                    }
                ]
            },
            {
                xtype: 'list',
                cls: 'companyDetail',
                height: '100%',
                itemId: 'CompanyDetailTpl',
                itemTpl: [
                    '<div class="compList">',
                    '    <div class="compView">',
                    '        <span class="companyEdit"> </span>',
                    '        <span class="companyDelete"> </span>',
                    '',
                    '        <div class="compImg">',
                    '            <img src=\'{Logo}\'>',
                    '        </div>',
                    '        <div class="compName">{CompanyName}</div>',
                    '        <div class="CompAddress">{CompanyAddress}</div>',
                    '        <div class="compPhone">{Phone}</div>',
                    '        <div class="compRegNo">{Vat}</div>',
                    '        <div class="compDetail"><div class="InnerCompDetail" style=\'white-space:pre;\'>{Detail}</div></div>',
                    '        <span class="compArrowDown"> </span>',
                    '    </div>',
                    '</div>',
                    ''
                ],
                pressedCls: null,
                selectedCls: null,
                store: 'CompanyDetail'
            }
        ]
    }

});