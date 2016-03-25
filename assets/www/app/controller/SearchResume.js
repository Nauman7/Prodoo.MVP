/*
 * File: app/controller/SearchResume.js
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

Ext.define('ProDooMobileApp.controller.SearchResume', {
    extend: 'Ext.app.Controller',
    alias: 'controller.SearchResume',

    alternateClassName: [
        'SearchResume'
    ],

    statics: {
        onTopBtnTap: function(button,lookupName) {

            SearchResume.hideActive(button);
            var lookupStore = '';
            if(lookupName=='Location')
            lookupStore = 'CreateRequestLocation';
            else
            lookupStore = 'Search'+lookupName;

            var str=Ext.getStore(lookupStore);
            str.clearFilter();

            if (lookupName == "Keyword")
            { str.setData(JSON.parse(localStorage.globalKeywords)); }
            else if (lookupName == "Certification")
            { str.setData(JSON.parse(localStorage.globalCertifications)); }

            var lookupPlaceholder = 'Enter '+lookupName.toLowerCase();
            var list = G.get('SearchList');
            list.setStore(lookupStore);
            list.hide();
            SearchResume.enableDisableItems(lookupName);
            var Searchfield = G.get('mysearchfield');
            Searchfield.setPlaceHolder(lookupPlaceholder);
            Searchfield.setValue('');
            //SearchResume.scrollToHeading();
            SearchResume.UpdateHelpDetail(lookupName);

            G.get('buttonsLabel').setHtml(lookupName);
        },

        scrollToHeading: function(context) {
            var item = SearchResume.getActiveBtn(),
                Cnt;

            if(item===0){// if profile btn active
                Cnt = G.get('ProfileCnt');
            }
            else if(item == 1){// if skill btn active
                Cnt = G.get('SkillCnt');
            }
            else if(item == 2){// if Industry btn active
                Cnt = G.get('IndustryCnt');
            }
            else if(item == 3){// if Keyword btn active
                Cnt = G.get('KeywordCnt');
            }
            else if(item == 4){// if certification btn active
                Cnt = G.get('CertificationCnt');
            }
            else if(item == 5){// if certification btn active
                Cnt = G.get('LocationCnt');
            }

            if(!Cnt.getHidden()){
                var elementY = Cnt.element.getY() - 250 + context.getScrollable().getScroller().position.y;
                context.getScrollable().getScroller().scrollTo(0,elementY);
            }
        },

        hideActive: function(button) {
            var TopCont = G.get('topButtons');
            var items =TopCont.items.items;
            for( var i=0; i<items.length; i++){
                items[i].removeCls('activeBtn');
            }

            button.addCls('activeBtn');
        },

        enableDisableItems: function(view) {
            var enaItem;
            SearchResume.disableAllItem();
            if(view=="Profile"){
                enaItem = G.get('ProfileCnt').innerItems;
            }
            else if(view=="Skill"){
                enaItem = G.get('SkillCnt').innerItems;
            }
            else if(view=="Industry"){
                enaItem = G.get('IndustryCnt').innerItems;
            }
            else if(view=="Keyword"){
                enaItem = G.get('KeywordCnt').innerItems;
            }
            else if(view=="Certification"){
                enaItem = G.get('CertificationCnt').innerItems;
            }
            else if(view=="Location"){
                enaItem = G.get('LocationCnt').innerItems;
            }

            for(var i=1; i< enaItem.length; i++){
                enaItem[i].enable();

                if(enaItem[i].down('sliderfield')){
                    enaItem[i].down('sliderfield').enable();
                }
                if(enaItem[i].down('button')){
                    enaItem[i].down('button').enable();
                }
            }
        },

        disableAllItem: function() {
            var CntItems, CntInnerItem;
            CntItems = G.get('resultCnt').innerItems;

            for(var j=0; j<CntItems.length; j++){
                CntInnerItem = CntItems[j].innerItems;
                for(var i=1; i< CntInnerItem.length; i++){
                    CntInnerItem[i].disable();
                    if(CntInnerItem[i].down('sliderfield')){
                        CntInnerItem[i].down('sliderfield').disable();
                    }
                    if(CntInnerItem[i].down('button')){
                        CntInnerItem[i].down('button').disable();
                    }
                }
            }
        },

        getActiveBtn: function() {
            var topBtnItems = G.get('topButtons').innerItems;
            for(var i=0; i< topBtnItems.length; i++){
                if(topBtnItems[i].element.dom.className.indexOf('activeBtn') >= 0){
                    return i;
                }
            }
        },

        onSearchBtnTap: function() {
            var end, start;

            start = new Date();
            var profiles =  G.get('ProfileCnt').items;
            var skills =  G.get('SkillCnt').items;
            var industeries =  G.get('IndustryCnt').items;
            var keywords = G.get('KeywordCnt').items;
            var certifications = G.get('CertificationCnt').items;
            var counteries = G.get('LocationCnt').items;

            var profilesObjs = new Array();
            var skillsObjs = new Array();
            var industeryIds = new Array();
            var keywordIds =  new Array();
            var certificationIds = new Array();
            var countryNames = new Array();

            // processing profiles
            if(profiles.items.length > 2){
                profiles.items.forEach(function(item, index){
                    if(index > 1){
                        profilesObjs.push(item.getAt(2).getValue());
                    }
                });
            }

            // processing skills
            if(skills.items.length > 2){
                skills.items.forEach(function(item, index){
                    if(index > 1){
                        skillsObjs.push(item.getAt(2).getValue());
                    }
                });
            }

            // processing industeries
            if(industeries.items.length > 2){
                industeries.items.forEach(function(item, index){

                    if(index > 1){
                        industeryIds.push(item.getAt(2).getValue());
                    }
                });
            }

            // processing keywords
            if(keywords.items.length > 2){
                keywords.items.forEach(function(item, index){
                    if(index > 1){
                        keywordIds.push(item.getAt(2).getValue());
                    }
                });
            }

            // processing certifications
            if(certifications.items.length > 2){
                certifications.items.forEach(function(item, index){
                    if(index > 1){
                        certificationIds.push(item.getAt(2).getValue());
                    }
                });
            }

            // processing locations
            if(counteries.items.length > 2){
                counteries.items.forEach(function(item, index){
                    if(index > 1){
                        countryNames.push(item.getAt(0).getHtml());
                    }
                });
            }


            if(profilesObjs.length==0 && skillsObjs.length==0 && keywordIds.length==0 &&
            certificationIds.length==0 && industeryIds.length==0 && countryNames.length==0 )
            {
                Ext.Msg.alert('Status', 'Please add search filter first.',null);

            }
            else{
                var searchObject = new Object();
                searchObject.ProfileIds = profilesObjs;
                searchObject.SkillIds = skillsObjs;
                searchObject.KeywordIds = keywordIds;
                searchObject.CertificationIds = certificationIds;
                searchObject.IndusteryIds = industeryIds;
                searchObject.Countries=countryNames;
                searchObject.Type='Only20';
                searchObject.AvailabilityDate=G.get('SearchDatepicker').getValue();
                var searchObj = JSON.stringify(searchObject);
                var store = Ext.getStore('SearchResultSaved');
                store.getProxy().setExtraParam("model", searchObj);
                store.currentPage=1;
                store.load({
                    scope: this,
                    callback: function(records,operation,success){

                        if(success && records.length>0){
                            G.Push('SearchResultSavedScreen');
                            Ext.select('.SavedListCnt .closeIcon').hide(); // hiding close button in case of search resumes
                            //Ext.Viewport.setActiveItem(view);
                        }//end if
                        else
                        Ext.Msg.alert('Status', 'No matched resume found!',null);
                    }//end callback

                });
            }

        },

        onPropertySearch: function(textfield) {

            var activeLookup = 'ProfileValue';
            var store = Ext.getStore('SearchProfile');

            // store to apply filter on
            var topBtns = G.get('topButtons');
            var items =  topBtns.items.items;
            var query = textfield.getValue().toLowerCase();

            items.forEach(function(item,index){
                if (item.element.dom.classList.contains('activeBtn'))
                if(index === 0){
                    activeLookup = 'ProfileValue';
                    store = Ext.getStore('SearchProfile');
                }
                else if(index === 1){
                    activeLookup = 'SkillValue';
                    store = Ext.getStore('SearchSkill');
                }
                else  if(index === 2){
                    activeLookup = 'IndustryValue';
                    store = Ext.getStore('SearchIndustry');
                }
                else  if(index === 3){
                    activeLookup = 'KeywordValue';

                }
                else  if(index === 4){
                    activeLookup = 'CertificationValue';
                }
                else  if(index === 5){
                    activeLookup = 'CountryName';
                    store = Ext.getStore('CreateRequestLocation');
                }
            });

            if(activeLookup === 'KeywordValue'){
                var url = ApiBaseUrl+'Allkeywords/KeywordsLookup';
                if(query!=='')
                url = url + '?filter='+query;
                Ext.Ajax.request({
                    url: url,
                    method: 'Get',
                    headers: { 'Content-Type': 'application/json' },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText);
                        if (result.success) {
                            store = Ext.getStore('SearchKeyword');
                            store.setData(result.items);
                            store.sync();
                        } else {
                            G.showGeneralFailure();
                        }
                    },
                    failure: function(conn, response, options, eOpts) {
                        //failure catch
                        G.showGeneralFailure();
                    }
                });

            }

            else if(activeLookup === 'CertificationValue'){
                var url = ApiBaseUrl+'AllCertifications/CertificationsLookup';
                if(query!=='')
                url = url + '?filter='+query;
                Ext.Ajax.request({
                    url: url,
                    method: 'Get',
                    headers: { 'Content-Type': 'application/json' },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText);
                        if (result.success) {
                            store = Ext.getStore('SearchCertification');
                            store.setData(result.items);
                            store.sync();
                        } else {
                            G.showGeneralFailure();
                        }
                    },
                    failure: function(conn, response, options, eOpts) {
                        //failure catch
                        G.showGeneralFailure();
                    }
                });

            }
            else if(activeLookup === 'IndustryValue'){
                var url = ApiBaseUrl+'AllIndustries/IndustriesLookup';
                if(query!=='')
                url = url + '?filter='+query;
                Ext.Ajax.request({
                    url: url,
                    method: 'Get',
                    headers: { 'Content-Type': 'application/json' },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText);
                        if (result.success) {
                            store = Ext.getStore('SearchIndustry');
                            store.setData(result.items);
                            store.sync();
                        } else {
                            G.showGeneralFailure();
                        }
                    },
                    failure: function(conn, response, options, eOpts) {
                        //failure catch
                        G.showGeneralFailure();
                    }
                });

            }
            else if(activeLookup === 'ProfileValue'){
                var url = ApiBaseUrl+'AllProfiles/ProfileLookup';
                if(query!=='')
                url = url + '?filter='+query;
                Ext.Ajax.request({
                    url: url,
                    method: 'Get',
                    headers: { 'Content-Type': 'application/json' },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText);
                        if (result.success) {
                            store = Ext.getStore('SearchProfile');
                            store.setData(result.items);
                            store.sync();
                        } else {
                            G.showGeneralFailure();
                        }
                    },
                    failure: function(conn, response, options, eOpts) {
                        //failure catch
                        G.showGeneralFailure();
                    }
                });

            }
            else if(activeLookup === 'SkillValue'){
                var url = ApiBaseUrl+'AllSkills/SkillsLookup';
                if(query!=='')
                url = url + '?filter='+query;
                Ext.Ajax.request({
                    url: url,
                    method: 'Get',
                    headers: { 'Content-Type': 'application/json' },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText);
                        if (result.success) {
                            store = Ext.getStore('SearchSkill');
                            store.setData(result.items);
                            store.sync();
                        } else {
                            G.showGeneralFailure();
                        }
                    },
                    failure: function(conn, response, options, eOpts) {
                        //failure catch
                        G.showGeneralFailure();
                    }
                });

            }
            else{

                store.clearFilter();
                store.filter([
                {
                    fn   : function(record) {
                        //if(record.get(activeLookup) !== null )
                        return record.get(activeLookup).toLowerCase().indexOf(query)>-1;
                    },
                    scope: this
                }
                ]);
            }
        },

        onAddSearchBtnTap: function() {

            //G.hide('AddSearchBtn');
            //G.hide('ClearSearchIcon');

            var item = this.getActiveBtn();
            var searchField =  G.get('mysearchfield');
            var value = searchField.getValue();
            var recordID = G.get('SearchRecordID');
            var newCnt;
            var alreadyExist = false;
            var existingRecords = null;

            if(item===0 || item===1 || item===2 || item ===6){
                if(item===0)
                existingRecords = G.get('ProfileCnt').items.items;
                else if(item===1)
                existingRecords = G.get('SkillCnt').items.items;
                else if(item===2)
                existingRecords = G.get('IndustryCnt').items.items;

                existingRecords.forEach(function(item,index){
                    if(index>1){
                        var tempId = item.items.items[3].getValue();
                        if(recordID.getValue() === tempId)
                        alreadyExist = true;
                    }
                });
            }

            else if(item===3 || item===4 || item===5){
                if(item===3)
                existingRecords = G.get('KeywordCnt').items.items;
                else if(item===4)
                existingRecords = G.get('CertificationCnt').items.items;
                else if(item===5)
                existingRecords = G.get('LaguageCnt').items.items;

                existingRecords.forEach(function(item,index){
                    if(index>1){
                        var tempId = item.items.items[2].getValue();
                        if(recordID.getValue() === tempId)
                        alreadyExist = true;
                    }
                });
            }

            if(alreadyExist){
                searchField.setValue('');
                searchField.setReadOnly();
            }
            else {

                if(item===0){// if profile btn active
                    newCnt = SearchResume.createView('Profile', value, recordID.getValue());
                    G.show('ProfileCnt');
                }
                else if(item == 1){// if skill btn active
                    newCnt = SearchResume.createView('Skill', value, recordID.getValue());
                    G.show('SkillCnt');
                }
                else if(item == 2){// if Industry btn active
                    newCnt = SearchResume.createView('Industry', value, recordID.getValue());
                    G.show('IndustryCnt');
                }
                else if(item == 3){// if Keyword btn active
                    newCnt = SearchResume.createKeywordView('Keyword', value, recordID.getValue());
                    G.show('KeywordCnt');
                }
                else if(item == 4){// if certification btn active
                    newCnt = SearchResume.createKeywordView('Certification', value, recordID.getValue());
                    G.show('CertificationCnt');
                }

                SearchResume.scrollIntoView(newCnt);
                searchField.setValue('');
                searchField.setReadOnly();
            }
        },

        scrollIntoView: function(el) {
            //var elementY = el.element.getY() - 250 + this.getScrollable().getScroller().position.y;
            //this.getScrollable().getScroller().scrollTo(0,elementY);
        },

        createKeywordView: function(view,labelVal,keywordId) {

            var Cnt=Ext.create('Ext.Container', {
                padding: '5 0',
                layout: {
                    type: 'hbox',
                    align: 'center'
                },
                items: [
                {
                    xtype: 'label',
                    flex: 1,
                    cls: 'labelCls',
                    html: labelVal,
                },
                {
                    xtype: 'button',
                    cls: [
                    'closeIcon',
                    'noBorder'
                    ],
                    text: ' ',
                    listeners: [
                    {
                        fn: function(button, e, eOpts) {
                            var cnt = button.up('container');
                            if(cnt.up('container').innerItems.length <= 3){
                                cnt.up('container').hide();
                            }
                            button.up('container').destroy();
                        },
                        event: 'tap'
                    }
                    ]
                },
                {
                    xtype: 'hiddenfield',

                    value: keywordId
                }
                ]
            });
            var Container;

            if(view=='Profile'){
                Container=G.get('ProfileCnt');
            }
            else if(view=='Skill'){
                Container=G.get('SkillCnt');
            }
            else if(view=='Industry'){
                Container=G.get('IndustryCnt');
            }
            else if(view=='Keyword'){
                Container=G.get('KeywordCnt');
            }
            else if(view=='Certification'){
                Container=G.get('CertificationCnt');
            }
            else if(view=='Location'){
                Container=G.get('LocationCnt');
            }
            Container.add(Cnt);

            return Cnt;

        },

        onClearSearchIconTap: function() {
            G.hide('AddSearchBtn');
            G.hide('ClearSearchIcon');
            var searchField = G.get('mysearchfield');
            searchField.setValue('');
            searchField.setReadOnly();
        },

        onGlobeBtnTap: function(context,button) {
            if(IsVistor){

                if(button.element.hasCls('activeBtn'))
                context.down('#helpBtn').hide();
                else
                {

                    context.down('#helpBtn').show();
                    var helpIcon=Ext.select('.helpIcon');
                    helpIcon.addCls('bottom78');
                }
            }
            else{

                if(button.element.hasCls('activeBtn')){
                    context.down('#savedSearchBtn').hide();
                    context.down('#shortlistBtn').hide();
                    context.down('#requestBtn').hide();
                    context.down('#helpBtn').hide();

                    //Reset Help notification
                    SearchResume.helpHide();
                    context.down('#helpBtn').removeCls('activeBtn');
                    G.get('HelpDisable').setHtml(' all ');
                }
                else{
                    context.down('#savedSearchBtn').show();
                    context.down('#shortlistBtn').show();
                    context.down('#requestBtn').show();
                    context.down('#helpBtn').show();
                }
            }

            button.toggleCls('activeBtn');
        },

        createView: function(view,labelVal,labelId, experienceLevel) {
            if(experienceLevel === null)
            experienceLevel =0;
            var Cnt=Ext.create('Ext.Container', {
                padding: '5 0',
                layout: {
                    type: 'hbox',
                    align: 'center'
                },
                items: [
                {
                    xtype: 'label',
                    cls: 'labelCls',
                    html: labelVal,
                    width: 120
                },
                {
                    xtype: 'sliderfield',
                    flex: 1,
                    cls: 'sliderCls',
                    //             itemId: 'sliderfieldItemID',
                    value: [
                    experienceLevel
                    ],
                    maxValue: 10,
                    listeners: [
                    {
                        fn: function(component, eOpts) {
                            var thumb = component.element.dom.querySelector('.x-thumb');
                            var val = component.getValue()[0];
                            thumb.insertAdjacentHTML( 'afterBegin', '<span class="xValue">'+val+'</span>' );
                        },
                        event: 'initialize'
                    },
                    {
                        fn: function(sliderfield, sl, thumb, e, eOpts) {
                            var slider=sliderfield.element.dom.querySelector('.xValue');
                            slider.innerText = sliderfield.getValue()[0];
                        },
                        event: 'drag'
                    },
                    {
                        fn: function(sliderfield, sl, thumb, e, eOpts) {
                            var slider=sliderfield.element.dom.querySelector('.xValue');
                            slider.innerText = sliderfield.getValue()[0];
                        },
                        event: 'change'
                    }
                    ]
                },
                {
                    xtype: 'button',
                    cls: [
                    'closeIcon',
                    'noBorder'
                    ],
                    text: ' ',
                    listeners: [
                    {
                        fn: function(button, e, eOpts) {
                            var cnt = button.up('container');
                            if(cnt.up('container').innerItems.length <= 3){
                                cnt.up('container').hide();
                            }
                            button.up('container').destroy();
                        },
                        event: 'tap'
                    }
                    ]
                },

                {
                    xtype: 'hiddenfield',

                    value: labelId
                }
                ]
            });
            var Container;
            if(view=='Profile'){
                Container=G.get('ProfileCnt');
            }
            else if(view=='Skill'){
                Container=G.get('SkillCnt');
            }
            else if(view=='Industry'){
                Container=G.get('IndustryCnt');
            }
            Container.add(Cnt);

            return Cnt;
        },

        onConfirmBtnTap: function(context,button) {
            if(button.element.hasCls('activeBtn')){
                context.down('#savedSearchBtn').show();
                context.down('#shortlistBtn').show();
                context.down('#requestBtn').show();
                context.down('#helpBtn').show();
            }
            else{
                context.down('#savedSearchBtn').hide();
                context.down('#shortlistBtn').hide();
                context.down('#requestBtn').hide();
                context.down('#helpBtn').hide();
            }
            button.toggleCls('activeBtn');
        },

        onSearchListItemTap: function(e,dataview,record) {
            var selectedElement =  Ext.get(e.target);

            if(selectedElement.hasCls('listResult') || selectedElement.parent().hasCls('listResult')){
                //G.show('AddSearchBtn');
                //G.show('ClearSearchIcon');

                var searchField = G.get('mysearchfield');
                var recordID = 0;
                dataview.hide();
                var item = SearchResume.getActiveBtn();
                var alreadyExist = false;
                var existingRecords = null;

                if(item===0)
                {
                    existingRecords = G.get('ProfileCnt').items.items;
                    recordID=record.data.ProfileId;
                }
                else if(item===1)
                {  existingRecords = G.get('SkillCnt').items.items;
                    recordID=record.data.SkillId;
                }
                else if(item===2)
                { recordID=record.data.IndustryId;
                    existingRecords = G.get('IndustryCnt').items.items;
                }
                else if(item===3)
                {
                    existingRecords = G.get('KeywordCnt').items.items;
                    recordID=record.data.KeywordId;
                }
                else if(item===4)
                {
                    existingRecords = G.get('CertificationCnt').items.items;
                recordID=record.data.CertificationId;}
                else if(item===5)
                {
                    existingRecords = G.get('LocationCnt').items.items;
                    recordID=record.data.CountryId;
                }


                existingRecords.forEach(function(item,index){
                    if(index>1){
                        var tempId = item.items.items[2].getValue();
                        if(recordID == tempId)
                        alreadyExist = true;
                    }
                });


                if(alreadyExist){
                    searchField.setValue('');
                    searchField.setReadOnly();
                }
                else{

                    if(item===0){// if profile btn active
                        newCnt = this.createKeywordView('Profile',record.data.ProfileValue,record.data.ProfileId);
                        G.show('ProfileCnt');
                        //searchField.setValue(record.data.ProfileValue);
                        //recordID.setValue(record.data.ProfileId);
                    }
                    else if(item == 1){// if skill btn active
                        newCnt = this.createKeywordView('Skill',record.data.SkillValue,record.data.SkillId);
                        G.show('SkillCnt');
                        //searchField.setValue(record.data.SkillValue);
                        //recordID.setValue(record.data.SkillId);
                    }
                    else if(item == 2){// if Industry btn active
                        newCnt = this.createKeywordView('Industry', record.data.IndustryValue, record.data.IndustryId);
                        G.show('IndustryCnt');
                        //searchField.setValue(record.data.IndustryValue);
                        //recordID.setValue(record.data.IndustryId);
                    }
                    else if(item == 3){// if Keyword btn active
                        newCnt = this.createKeywordView('Keyword', record.data.KeywordValue, record.data.KeywordId);
                        G.show('KeywordCnt');
                        //searchField.setValue(record.data.KeywordValue);
                        //recordID.setValue(record.data.KeywordId);
                    }
                    else if(item == 4){// if certification btn active
                        newCnt = this.createKeywordView('Certification', record.data.CertificationValue,record.data.CertificationId);
                        G.show('CertificationCnt');
                        //searchField.setValue(record.data.CertificationValue);
                        //recordID.setValue(record.data.CertificationId);
                    }
                    else if(item == 5){// if certification btn active
                        newCnt = this.createKeywordView('Location', record.data.CountryName,record.data.CountryId);
                        G.show('LocationCnt');
                        //searchField.setValue(record.data.CertificationValue);
                        //recordID.setValue(record.data.CertificationId);
                    }
                }
                searchField.setValue('');

            }

        },

        onSliderfieldDrag: function(sliderfield) {
            var a=sliderfield.element.dom.querySelector('.xValue');
            a.innerText = sliderfield.getValue()[0];
        },

        UpdateHelpDetail: function(Name) {
            var disbleValue = G.get('HelpDisable').getHtml();

            if(disbleValue.indexOf(' '+Name+' ')>=0 || disbleValue.indexOf(' all ')>=0){ //if name is Already exist, then hide HelpCnt
                G.hide('HelpCnt');
                return false;
            }
            else{
                G.show('HelpCnt');
                SearchResume.helpPositionUpdate(Name);

                if(Name == 'Profile' || Name == 'Skill' || Name == 'Industry' || Name == 'Keyword' || Name == 'Certification' || Name == 'Location' ){
                    G.get('HelpDetail').setHtml('Type your '+Name+' search here and add it to search item');
                    G.get('HelpHeading').setHtml('Search for '+ Name);
                    var item = SearchResume.getActiveBtn();
                    G.get('HelpID').setHtml('');
                }
                else if(Name == 'helpRequestBtn'){
                    G.get('HelpHeading').setHtml('Request button');
                    G.get('HelpDetail').setHtml('Tap to show request screen');
                    G.get('HelpID').setHtml('');
                }
                else if(Name == 'helpShorlistBtn'){
                    G.get('HelpHeading').setHtml('Shortlist button');
                    G.get('HelpDetail').setHtml('Tap to show shortlist screen');
                    G.get('HelpID').setHtml('');
                }
                else if(Name == 'helpSaveSearchBtn'){
                    G.get('HelpHeading').setHtml('Save button');
                    G.get('HelpDetail').setHtml('Tap to show saved search screen');
                    G.get('HelpID').setHtml('');
                }
                else if(Name == 'helpSearchIcon'){
                    G.get('HelpHeading').setHtml('Search button');
                    G.get('HelpDetail').setHtml('Tap to show your search resume screen');
                    G.get('HelpID').setHtml('');
                }
                else if(Name == 'helpIconBtn'){
                    G.get('HelpHeading').setHtml('Help button');
                    G.get('HelpDetail').setHtml('It will show user guide <br> Tap again to close this help ');
                    G.get('HelpID').setHtml('');
                }

            }
            return true;

        },

        helpPositionUpdate: function(Name) {
            var helpCnt = G.get('HelpCnt');
            helpCnt.removeCls('helpIconBtn');
            helpCnt.removeCls('helpRequestBtn');
            helpCnt.removeCls('helpShorlistBtn');
            helpCnt.removeCls('helpSaveSearchBtn');
            helpCnt.removeCls('helpGlobeBtn');
            helpCnt.removeCls('helpSearchIcon');


            if(Name=='helpIconBtn' || Name=='helpRequestBtn' || Name=='helpShorlistBtn' || Name=='helpSaveSearchBtn' || Name=='helpGlobeBtn' || Name=='helpSearchIcon' ){
                helpCnt.addCls(Name);
            }
        },

        helpHide: function() {
            var helpCnt = G.get('HelpCnt');
            var HelpHidden = G.get('HelpDisable'); // contains html code for hiding HelpBox

            helpCnt.hide();
            // G.get('helpBtn').removeCls('activeBtn');
            var helpIcon = ['helpIconBtn', 'helpRequestBtn', 'helpShorlistBtn', 'helpSaveSearchBtn', 'helpGlobeBtn', 'helpSearchIcon'];
            for( var i=0; i<helpIcon.length; i++ ){
                if( helpCnt.element.hasCls( helpIcon[i] ) ){
                    HelpHidden.setHtml( HelpHidden.getHtml() + helpIcon[i] + ' ' );
                    return;
                }
            }

            helpIcon = ['Profile', 'Skill','Industry', 'Keyword', 'Certification', 'Location'];
            var item = SearchResume.getActiveBtn();
            HelpHidden.setHtml( HelpHidden.getHtml() + helpIcon[item] + ' ' );
        },

        resetStores: function() {
            Ext.getStore('CreateRequestLocation').clearFilter();
            Ext.getStore('SearchProfile').clearFilter();
            Ext.getStore('SearchSkill').clearFilter();
            Ext.getStore('SearchIndustry').clearFilter();
            Ext.getStore('SearchKeyword').clearFilter();
            Ext.getStore('SearchCertification').clearFilter();
        },

        MarkHelpNotificationRead: function() {
            var authStore = Ext.getStore('AuthStore');
            var rec= authStore.getAt(0);


            Ext.Ajax.request({
                url: ApiBaseUrl+'user/MarkHelpNotificationRead?userId='+authStore.getAt(0).data.UserId,
                method: 'Get',
                headers: { 'Content-Type': 'application/json' },

                success: function(conn, response, options, eOpts) {

                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success)
                    {
                        rec.data.IsNotificationRead=true;
                        rec.dirty=true;
                        authStore.sync();
                    }
                    else
                    G.showGeneralFailure();
                },
                failure: function(conn, response, options, eOpts) {
                    //failure catch
                    G.showGeneralFailure();
                }
            });
        },

        ChangeUserMode: function(isFreelancer) {

            var authStore = Ext.getStore('AuthStore');
            var rec= authStore.getAt(0);
            if(isFreelancer !=rec.data.IsFreelancer) // only run when user existing state will diferent from current

            {
                Ext.Ajax.request({
                    url: ApiBaseUrl+'user/ChangeProfileMode?userId='+rec.data.UserId+'&isFreelancer='+rec.data.IsFreelancer,
                    method: 'Get',
                    headers: { 'Content-Type': 'application/json' },

                    success: function(conn, response, options, eOpts) {

                        var result = Ext.JSON.decode(conn.responseText);
                        if (result.success)
                        {
                            rec.data.IsFreelancer=isFreelancer;
                            rec.dirty=true;
                            authStore.sync();
                            G.destroy('StartScreen');
                            G.ShowView('StartScreen');
                        }
                        else
                        G.showGeneralFailure();
                    },
                    failure: function(conn, response, options, eOpts) {
                        //failure catch
                        G.showGeneralFailure();
                    }
                });
            }
            else
            {
                G.destroy('StartScreen');
                G.ShowView('StartScreen');
            }
        }
    },

    config: {
    }
});