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
            var HelpActive = G.get('HelpCnt');
            if(!HelpActive.isHidden())
            {
                SearchResume.UpdateHelpDetail(lookupName);
            }
            else{

                SearchResume.hideActive(button);
                var lookupStore = '';
                if(lookupName=='Location')
                lookupStore = 'CreateRequestLocation';
                else if(lookupName=='Language')
                lookupStore = 'CreateRequestLanguage';
                else
                lookupStore = 'Search'+lookupName;

                var str=Ext.getStore(lookupStore);
                str.clearFilter();
                str.removeAll();

                var lookupPlaceholder = 'Enter '+lookupName.toLowerCase();
                var list = G.get('SearchList');
                list.setStore(lookupStore);
                list.hide();
                SearchResume.enableDisableItems(lookupName);
                var Searchfield = G.get('mysearchfield');
                Searchfield.setPlaceHolder(lookupPlaceholder);
                Searchfield.setValue('');
                //SearchResume.scrollToHeading();


                G.get('buttonsLabel').setHtml(lookupName);
            }
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
            else if(view=="Language"){
                enaItem = G.get('LanguageCnt').innerItems;
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
            var languages = G.get('LanguageCnt').items;

            var profilesObjs = [];
            var skillsObjs = [];
            var industeryIds = [];
            var keywordIds =  [];
            var certificationIds = [];
            var countryNames = [];
            var languageIds = [];

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
                        countryNames.push(item.getAt(2).getValue());
                    }
                });
            }

            // processing languages
            if(languages.items.length > 2){
                languages.items.forEach(function(item, index){
                    if(index > 1){
                        languageIds.push(item.getAt(2).getValue());
                    }
                });
            }

            if(profilesObjs.length===0 && skillsObjs.length===0 && keywordIds.length===0 &&
            certificationIds.length===0 && industeryIds.length===0 && countryNames.length===0 && languageIds.length===0)
            {
                Ext.Msg.alert('Status',Identifier.Title.Alert_Search_SearchFilter,null);

            }
            else{
                var searchObject = new Object();
                searchObject.ProfileIds = profilesObjs;
                searchObject.SkillIds = skillsObjs;
                searchObject.KeywordIds = keywordIds;
                searchObject.CertificationIds = certificationIds;
                searchObject.IndusteryIds = industeryIds;
                searchObject.Countries=countryNames;
                searchObject.Languages=languageIds;
                searchObject.Type='Only20';
                searchObject.SearchByMobile= true;
                searchObject.AvailabilityDate=G.get('SearchDatepicker').getFormattedValue();
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
            var query = textfield.getValue().toLowerCase();
            if(query.length>2 || query.length===0){
                var activeLookup = 'ProfileValue';
                var store = Ext.getStore('SearchProfile');
                var url='';

                // store to apply filter on
                var topBtns = G.get('topButtons');
                var items =  topBtns.items.items;

                items.forEach(function(item,index){
                    if (item.element.dom.classList.contains('activeBtn'))
                    if(index === 0){

                        store = Ext.getStore('SearchProfile');
                        url = ApiBaseUrl+'Profiles/ProfileLookup';
                    }
                    else if(index === 1){

                        store = Ext.getStore('SearchSkill');
                        url = ApiBaseUrl+'Skills/SkillsLookup';
                    }
                    else  if(index === 2){

                        store = Ext.getStore('SearchIndustry');
                        url = ApiBaseUrl+'Industries/IndustriesLookup';
                    }
                    else  if(index === 3){

                        store = Ext.getStore('SearchKeyword');
                        url = ApiBaseUrl+'keywords/KeywordsLookup';
                    }
                    else  if(index === 4){

                        store = Ext.getStore('SearchCertification');
                        url = ApiBaseUrl+'Certifications/CertificationsLookup';

                    }
                    else  if(index === 5){

                        store = Ext.getStore('CreateRequestLocation');
                        url = ApiBaseUrl+'Country/LocationsLookup';
                    }
                    else  if(index === 6){

                        store = Ext.getStore('CreateRequestLanguage');
                        url = ApiBaseUrl+'Language/LanguagesLookup';
                    }
                });


                if(query!=='')
                url = url + '?filter='+query;
                Ext.Ajax.request({
                    url: url,
                    method: 'Get',
                    headers: { 'Content-Type': 'application/json' },
                    success: function(conn, response, options, eOpts) {

                        var result = Ext.JSON.decode(conn.responseText);
                        if (result.success && result.items.length>0)
                        G.show('SearchList');
                        else
                        G.hide('SearchList');

                        store.setData(result.items);
                        store.sync();
                    },
                    failure: function(response, request) {
                        //failure catch
                        G.showGeneralFailure('', response);
                    }
                });
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
                    'closeIcon'
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
            else if(view=='Language'){
                Container=G.get('LanguageCnt');
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
                var re = /@LookupName/gi;
                var lookupMessage = Identifier.Title.Help_Search_Top_Lookup;
                lookupMessage = lookupMessage.replace(re, Name);
                if(Name == 'Profile' || Name == 'Skill' || Name == 'Industry' || Name == 'Keyword' || Name == 'Certification' || Name == 'Location' ){
                    G.get('HelpHeading').setHtml('Search for '+ Name);
                    G.get('HelpDetail').setHtml(lookupMessage);
                    var item = SearchResume.getActiveBtn();
                    G.get('HelpID').setHtml('');
                }
                else if(Name == 'helpRequestBtn'){
                    G.get('HelpHeading').setHtml('Request button');
                    G.get('HelpDetail').setHtml(Identifier.Title.Help_Search_RequestBtn);
                    G.get('HelpID').setHtml('');
                }
                else if(Name == 'helpShorlistBtn'){
                    G.get('HelpHeading').setHtml('Shortlist button');
                    G.get('HelpDetail').setHtml(Identifier.Title.Help_Search_ShortlistBtn);
                    G.get('HelpID').setHtml('');
                }
                else if(Name == 'helpSaveSearchBtn'){
                    G.get('HelpHeading').setHtml('Save button');
                    G.get('HelpDetail').setHtml(Identifier.Title.Help_Search_SaveBtn);
                    G.get('HelpID').setHtml('');
                }
                else if(Name == 'helpSearchIcon'){
                    G.get('HelpHeading').setHtml('Search button');
                    G.get('HelpDetail').setHtml(Identifier.Title.Help_Search_SearchBtn);
                    G.get('HelpID').setHtml('');
                }
                else if(Name == 'helpIconBtn'){
                    G.get('HelpHeading').setHtml('Help button');
                    G.get('HelpDetail').setHtml(Identifier.Title.Help_Search_HelpBtn);
                    G.get('HelpID').setHtml('');
                }
                else if(Name == 'helpGlobeBtn'){
                    G.get('HelpHeading').setHtml('Menu button');
                    G.get('HelpDetail').setHtml(Identifier.Title.Help_Search_MenuBtn);
                    G.get('HelpID').setHtml('');
                }
                else if(Name == 'SearchField'){
                    SearchResume.helpPositionUpdate('mysearchfield');
                    G.get('HelpHeading').setHtml('Search bar');
                    G.get('HelpDetail').setHtml(Identifier.Title.Help_Search_SearchBar);
                    G.get('HelpID').setHtml('');
                }

                if(Name == 'Profile'){
                    SearchResume.helpPositionUpdate('profileBtn');
                }
                else if(Name == 'Skill'){
                    SearchResume.helpPositionUpdate('SkillsBtn');
                }
                else if(Name == 'Industry'){
                    SearchResume.helpPositionUpdate('IndustryBtn');
                }
                else if(Name == 'Keyword'){
                    SearchResume.helpPositionUpdate('keywordBtn');
                }
                else if(Name == 'Certification'){
                    SearchResume.helpPositionUpdate('certificationBtn');
                }
                else if(Name == 'Location'){
                    SearchResume.helpPositionUpdate('locationBtn');
                }

                else if(Name == 'helpRequestBtn' || Name == 'helpShorlistBtn' || Name == 'helpSaveSearchBtn' || Name == 'helpIconBtn' || Name == 'helpGlobeBtn' || Name == 'helpSearchIcon'){
                    SearchResume.helpPositionUpdate(Name);
                }
            }
            return true;

        },

        helpPositionUpdate: function(ItemID) {
            var help = G.get('HelpCnt').element;
            var Arrow = Ext.get(Ext.query('.helpArrow')[0]);
            help.removeCls('helpIconBtn');
            help.removeCls('helpRequestBtn');
            help.removeCls('helpShorlistBtn');
            help.removeCls('helpSaveSearchBtn');
            help.removeCls('helpGlobeBtn');
            help.removeCls('helpSearchIcon');
            if(ItemID=='helpIconBtn' || ItemID=='helpRequestBtn' || ItemID=='helpShorlistBtn' || ItemID=='helpSaveSearchBtn' || ItemID=='helpGlobeBtn' || ItemID=='helpSearchIcon' || ItemID=='globeBtn'){
                help.addCls(ItemID);
                help.removeCls('MarginAuto');
                help.setTop(null);
                Arrow.setLeft(null);
            }
            var btn = G.get(ItemID);
            if(btn){
                var btnX = btn.element.getX();
                var btnY = btn.element.getY();

                help.addCls('MarginAuto');
                help.setTop(btnY + 70);
                var helpX = help.getX();
                var helpY = help.getY();
                var btnW = 50/2;
                var remPosition = btnX - helpX + btnW;
                var pos = Math.max(remPosition, 7);
                pos = Math.min(help.getWidth()+ helpX - 7, pos);
                Arrow.setLeft(pos);
                if(ItemID == 'mysearchfield'){
                    Arrow.setLeft(null);
                }
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
                else if(item===6)
                {
                    existingRecords = G.get('LanguageCnt').items.items;
                    recordID=record.data.LanguageId;
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

                    }
                    else if(item == 1){// if skill btn active
                        newCnt = this.createKeywordView('Skill',record.data.SkillValue,record.data.SkillId);
                        G.show('SkillCnt');

                    }
                    else if(item == 2){// if Industry btn active
                        newCnt = this.createKeywordView('Industry', record.data.IndustryValue, record.data.IndustryId);
                        G.show('IndustryCnt');

                    }
                    else if(item == 3){// if Keyword btn active
                        newCnt = this.createKeywordView('Keyword', record.data.KeywordValue, record.data.KeywordId);
                        G.show('KeywordCnt');

                    }
                    else if(item == 4){// if certification btn active
                        newCnt = this.createKeywordView('Certification', record.data.CertificationValue,record.data.CertificationId);
                        G.show('CertificationCnt');

                    }
                    else if(item == 5){// if certification btn active
                        newCnt = this.createKeywordView('Location', record.data.CountryName,record.data.CountryId);
                        G.show('LocationCnt');
                    }
                    else if(item == 6){// if certification btn active
                        newCnt = this.createKeywordView('Language', record.data.LanguageValue,record.data.LanguageId);
                        G.show('LanguageCnt');
                    }
                }
                searchField.setValue('');

            }

        },

        resetStores: function() {
            Ext.getStore('CreateRequestLocation').clearFilter();
            Ext.getStore('CreateRequestLocation').removeAll();
            Ext.getStore('SearchProfile').clearFilter();
            Ext.getStore('SearchProfile').removeAll();
            Ext.getStore('SearchSkill').clearFilter();
            Ext.getStore('SearchSkill').removeAll();
            Ext.getStore('SearchIndustry').clearFilter();
            Ext.getStore('SearchIndustry').removeAll();
            Ext.getStore('SearchKeyword').clearFilter();
            Ext.getStore('SearchKeyword').removeAll();
            Ext.getStore('SearchCertification').clearFilter();
            Ext.getStore('SearchCertification').removeAll();
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
                    G.showGeneralFailure('', response);
                },
                failure: function(response, request) {
                    //failure catch
                    G.showGeneralFailure('', response);
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
                        G.showGeneralFailure('', response);
                    },
                    failure: function(response, request) {
                        //failure catch
                        G.showGeneralFailure('', response);
                    }
                });
            }
            else
            {
                G.destroy('StartScreen');
                G.ShowView('StartScreen');
            }
        },

        LatestUserCompanyAddress: function() {

            var url = ApiBaseUrl+'usercompany/GetLatestUserCompanyCountry';
            Ext.Ajax.request({
                url: url,
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                success: function(conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success) {
                        SearchResume.createKeywordView('Location', result.items.CountryName,result.items.CountryId);
                        G.show('LocationCnt');

                    }
                },
                failure: function(response, request) {
                    //failure catch
                    G.showGeneralFailure('', response);
                }
            });
        }
    },

    config: {
    }
});