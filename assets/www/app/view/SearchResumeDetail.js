/*
 * File: app/view/SearchResumeDetail.js
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

Ext.define('ProDooMobileApp.view.SearchResumeDetail', {
    extend: 'Ext.dataview.List',
    alias: 'widget.SearchResumeDetail',

    requires: [
        'Ext.XTemplate',
        'Ext.Button'
    ],

    config: {
        store: 'SearchResultDetail',
        cls: [
            'darkBlue',
            'resumeDetail'
        ],
        itemTpl: [
            '<div class="detailTitle">',
            '    <span class="tickIcon"></span>',
            '    <span class=\'marginForIcon\'>Available Now</span>',
            '</div>',
            '',
            '<div class="LocationDiv"><span class="location">{Region}</span>',
            '    <span class="onSite">on-site</span>',
            '</div>',
            '<div class="ViewCnt">',
            '    <div class="tabHead">',
            '        <span class="speakIcon"> </span>',
            '        <span class="ArrowUp"> </span>',
            '    </div>',
            '    <div class="Innerlist">',
            '        <tpl for="Languages">',
            '        <div class="listCnt">',
            '            ',
            '            <span class="language">{LanguageValue}</span>',
            '            <span class="level">Level <span class="levelNo orange2">{ExperienceLevel}</span></span>',
            '        </div>',
            '        </tpl>',
            '    </div>',
            '</div>',
            '<div class="ViewCnt">',
            '    <div class="tabHead">',
            '        <span class="userIcon"> </span>',
            '        <span class="ArrowUp"> </span>',
            '    </div>',
            '    <div class="Innerlist">',
            '        <tpl for="Profiles">',
            '        <div class="listCnt">',
            '            <span class="language">{ProfileValue}</span>',
            '            <span class="level"><span class="levelNo YearNo orange2">{ExperienceLevel}</span> Years</span>',
            '',
            '        </div>',
            '     </tpl>',
            '    </div>',
            '</div>',
            '',
            '<div class="ViewCnt">',
            '    <div class="tabHead">',
            '        <span class="langIcon"> </span>',
            '        <span class="ArrowUp"> </span>',
            '    </div>',
            '    <div class="Innerlist">',
            '        <div class="listCnt center">',
            '            <span class="language"><tpl for="Skills"> {SkillValue}, </tpl></span>',
            '        </div>',
            '',
            '    </div>',
            '</div>',
            '',
            '<div class="ViewCnt">',
            '    <div class="tabHead">',
            '        <span class="certIcon"> </span>',
            '        <span class="ArrowUp"> </span>',
            '    </div>',
            '    <div class="Innerlist">',
            '        <tpl for="Certifications">',
            '        <div class="listCnt">',
            '            <span class="language">{CertificationValue}</span>',
            '            <span class="yearExp">{CertificationDate:date("Y")}</span>',
            '        </div>',
            '            </tpl>',
            '    </div>',
            '</div>',
            '',
            '<div class="ViewCnt">',
            '    <div class="tabHead">',
            '        <span class="caseIcon"> </span>',
            '        <span class="ArrowUp"> </span>',
            '    </div>',
            '    <div class="Innerlist">',
            '    <tpl for="Industries">',
            '        <div class="tabHead InnerHead">',
            '            <span class="BoardGame">{IndustryValue}</span>',
            '            <span class="ArrowUp"> </span>',
            '        </div>',
            '    </tpl>',
            '        <!-- <div class="innerListLevel2">',
            '            <div class="listCnt">',
            '                <span class="language">Project Manager</span>',
            '                <span class="level"><span class="levelNo YearNo orange">3</span> Years</span>',
            '            </div>',
            '            <div class="listCnt">',
            '                <span class="resultSkills">Java, PHP, HTML, CSS, XML</span>',
            '                <span class="yearExp">2008</span>',
            '            </div>',
            '',
            '            <div class="listCnt para">',
            '                Lorem Ipsum is simply dummy text of the',
            '                printing and typesetting industry. Lorem Ipsum ',
            '                has been the industry\'s standard dummy text ever',
            '                since the 1500s, when an unknown printer took a galley ',
            '                of type and scrambled it to make a type specimen book. ',
            '                It has survived not only five centuries, but also the leap ',
            '                into electronic typesetting, remaining essentially unchanged. ',
            '                It was popularised in the 1960s with the release of Letraset sheets ',
            '                containing Lorem Ipsum passages, and more recently with desktop publishing',
            '                software like Aldus PageMaker including versions of Lorem Ipsum.',
            '            </div>',
            '',
            '            ',
            '        </div> -->',
            '    </div>',
            '</div>',
            ''
        ],
        listeners: [
            {
                fn: 'onListItemTap',
                event: 'itemtap'
            },
            {
                fn: 'onMybutton6Tap1',
                event: 'tap',
                delegate: '#mybutton7'
            },
            {
                fn: 'onMybutton4Tap',
                event: 'tap',
                delegate: '#shortlistResume'
            }
        ],
        items: [
            {
                xtype: 'button',
                bottom: 10,
                cls: [
                    'btnCircle',
                    'backIcon'
                ],
                docked: 'bottom',
                itemId: 'mybutton7',
                left: 10,
                text: ' '
            },
            {
                xtype: 'button',
                bottom: 10,
                cls: [
                    'btnCircle',
                    'searchIcon3'
                ],
                docked: 'bottom',
                itemId: 'shortlistResume',
                right: 10,
                text: ' '
            }
        ]
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        var selectedItem = e.target;
        if(selectedItem.className.indexOf('ArrowUp')>=0){
            Ext.get(selectedItem).toggleCls('ArrowDown');
            var detail = selectedItem.parentElement.nextElementSibling;

            if(!Ext.isEmpty(detail) && !Ext.isEmpty(detail.children))
            {
                var innerEl = detail.children,
                    elementHeight=0;
                for(var i=0; i< detail.childElementCount; i++){
                    elementHeight += innerEl[i].clientHeight;
                }
            }
            console.log(Ext.get(detail));
            var d = Ext.get(detail);
            if(!Ext.isEmpty(d) && d.hasCls('innerListLevel2')){
                detail.parentElement.style.maxHeight =parseInt( detail.style.maxHeight.split('px')[0]) + elementHeight+'px';
            }

            var sel = Ext.get(selectedItem);
            if (!Ext.isEmpty(sel) && !sel.hasCls('ArrowDown')) {
                detail.style.maxHeight = elementHeight+'px';
            }
            else{
                if(!Ext.isEmpty(detail) && detail.style.maxHeight===""){
                    detail.style.maxHeight = elementHeight+'px';
                }

                if(!Ext.isEmpty(detail))
                    detail.style.maxHeight = '0px';
            }
        }

        // if(selectedItem.className.indexOf('SrNo')>=0){
        //     Ext.get(selectedItem).toggleCls('rightSide');
        // }
    },

    onMybutton6Tap1: function(button, e, eOpts) {
        G.Pop();
    },

    onMybutton4Tap: function(button, e, eOpts) {
        Shortlist.showShortListView();
        var hf= G.get('hfResumeId');
        hf.setValue(this.getStore().getAt(0).get('ResumeId'));
    }

});