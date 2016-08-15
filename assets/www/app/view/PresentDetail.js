/*
 * File: app/view/PresentDetail.js
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

Ext.define('ProDooMobileApp.view.PresentDetail', {
    extend: 'Ext.Container',
    alias: 'widget.PresentDetail',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.Img',
        'Ext.Button'
    ],

    config: {
        cls: 'darkBlue',
        items: [
            {
                xtype: 'list',
                cls: 'presentDetail',
                height: '100%',
                itemId: 'PresentDetailTpl',
                itemTpl: [
                    '<div class="presList">',
                    '    <div class="presView">',
                    '        <span class="presEdit"> </span>',
                    '        <span class="presDelete"> </span>',
                    '',
                    '',
                    '        <div class="presImg">',
                    '            <img src=\'{Logo}\'>',
                    '        </div>',
                    '        <div class="presName">{UserName}</div>',
                    '        <div class="presSkill">{Position}</div>',
                    '',
                    '        <div class="presContact">',
                    '            <span class="presPhone">{Phone}</span>',
                    '            <span class="presEmail">{Email}</span>',
                    '        </div>',
                    '        <div class="presDetail">',
                    '            <div class="InnerPresDetail">',
                    '                <div class="presSocialLinks">',
                    '                </div>',
                    '                <div class="PresDesc" style="white-space:pre">{Detail}</div>',
                    '',
                    '            </div>',
                    '        </div>',
                    '        ',
                    '        <tpl if="SocialLinksEnabledPresent == true" > <span class="presArrowDown"> </span> </tpl>',
                    '    </div>',
                    '</div>',
                    ''
                ],
                pressedCls: null,
                selectedCls: null,
                store: 'UserDetail'
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
                html: '<br><br>Add your presentation and tell them about you',
                itemId: 'PresentSplash',
                items: [
                    {
                        xtype: 'image',
                        height: 128,
                        margin: 'auto',
                        width: 190,
                        src: 'resources/images/splash/present.png'
                    }
                ]
            },
            {
                xtype: 'button',
                bottom: 10,
                cls: [
                    'addBtn',
                    'bgRed'
                ],
                docked: 'bottom',
                itemId: 'PresentAddBtn',
                right: 10,
                text: ' '
            },
            {
                xtype: 'button',
                bottom: 10,
                cls: [
                    'btnCircle',
                    'homeIcon',
                    'bgRed'
                ],
                docked: 'bottom',
                itemId: 'PresentHomeButton',
                left: 10,
                text: ' '
            }
        ]
    }

});