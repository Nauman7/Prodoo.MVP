/*
 * File: app/controller/UserResume.js
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

Ext.define('ProDooMobileApp.controller.UserResume', {
    extend: 'Ext.app.Controller',
    alias: 'controller.UserResume',

    alternateClassName: [
        'UserResume'
    ],

    statics: {
        resumePropertySearch: function(textfield) {
            SearchResume.onPropertySearch(textfield);
        },

        onSearchListItemTap: function(dataview,record,e) {
            var selectedElement =  Ext.get(e.target);
            if(selectedElement.hasCls('listResult') || selectedElement.parent().hasCls('listResult')){
                //G.show('AddSearchBtn');
                //G.show('ClearSearchIcon');
                var searchField = G.get('mysearchfield');
                var recordID = G.get('SearchRecordID');
                dataview.hide();
                var item = UserResume.getActiveBtn();

                if(item===0){// if profile btn active
                    searchField.setValue(record.data.ProfileValue);
                    recordID.setValue(record.data.ProfileId);
                }
                else if(item == 1){// if skill btn active
                    searchField.setValue(record.data.SkillValue);
                    recordID.setValue(record.data.SkillId);
                }
                else if(item == 2){// if Industry btn active
                    searchField.setValue(record.data.IndustryValue);
                    recordID.setValue(record.data.IndustryId);
                }
                else if(item == 3){// if Keyword btn active
                    searchField.setValue(record.data.KeywordValue);
                    recordID.setValue(record.data.KeywordId);
                }
                else if(item == 4){// if certification btn active
                    searchField.setValue(record.data.CertificationValue);
                    recordID.setValue(record.data.CertificationId);
                }
                else if(item == 5){// if language btn active
                    searchField.setValue(record.data.LanguageValue);
                    recordID.setValue(record.data.LanguageId);
                }
                //searchField.setReadOnly(true);
                UserResume.onAddSearchBtnTap();
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

        hideActive: function(button) {
            var TopCont = G.get('topButtons');
            var items =TopCont.items.items;
            for( var i=0; i<items.length; i++){
                items[i].removeCls('activeBtn');
            }
            button.addCls('activeBtn');
            G.show('searchViewCntID');
            G.get('resultCnt').setMargin('50 0 100');

        },

        onTopBtnTap: function(button,lookupName) {

            G.hide('Confirm');
            var Searchfield = G.get('mysearchfield');
            UserResume.hideActive(button);
            G.hide('CreateCompanyExperience');
            G.hide('CompanyExperienceComfirm');
            if (lookupName == "Industry")
            {
                var loggedUser = Ext.getStore('AuthStore').getAt(0);
                var resumeId = loggedUser.get('ResumeId');

                var expStr = Ext.getStore('ResumeExperiencesStore');
                var expData=Ext.getStore("SearchResultDetail").data.items[0].data.ResumeExperience;
                expStr.setData(expData);
                Searchfield.hide();
                G.hide('searchBtn');
                G.get('buttonsLabel').setHtml('Professional Experience');
                G.show('CreateCompanyExperience');
                G.hide('createCompanyCnt');
                G.show('IndustryList');

                UserResume.SplashView(lookupName,!expData.length>0);

            }
            else
            {
                Searchfield.show();
                G.show('searchBtn');
                var storeName = 'Search'+lookupName;
                var placeHolder = 'Enter '+ lookupName.toLowerCase();
                var list = G.get('SearchList');
                var str=Ext.getStore(storeName);
                str.clearFilter();
                list.setStore(storeName);
                list.hide();


                Searchfield.setPlaceHolder(placeHolder);
                Searchfield.setValue('');
                G.get('buttonsLabel').setHtml(lookupName);
                UserResume.SplashView(lookupName);
            }

            UserResume.enableDisableItems(lookupName);
            UserResume.scrollToHeading();

        },

        enableDisableItems: function(view) {
            var enaItem, splash;
            UserResume.disableAllItem();
            if(view=="Profile"){
                enaItem = G.get('ProfileCnt');
            }
            else if(view=="Skill"){
                enaItem = G.get('SkillCnt');
            }
            else if(view=="Industry"){
                enaItem = G.get('IndustryCnt');
            }
            else if(view=="Keyword"){
                enaItem = G.get('KeywordCnt');
            }
            else if(view=="Certification"){
                enaItem = G.get('CertificationCnt');
            }
            else if(view ==="Language"){
                enaItem = G.get('LanguageCnt');
            }
            else if(view ==="Setting"){
                enaItem = G.get('SettingCnt');
            }
            enaItem.show();
        },

        SplashView: function(view, show) {
            var enaItem, splash;
            Splash = G.get('SplashCnt');
            Heading = G.get('SplashHeading');
            Detail = G.get('SplashDetail');

            enaItem = G.get(view + 'Cnt');
            if(view=="Profile"){
                Heading.setHtml("Welcome to your resume Profile section!");
                Detail.setHtml(Identifier.Title.Help_Resume_Profile);
            }
            else if(view=="Skill"){
                Heading.setHtml("Welcome to your resume Skill section!");
                Detail.setHtml(Identifier.Title.Help_Resume_Skills);
            }
            else if(view=="Industry"){
                Heading.setHtml("Welcome to your resume Professional Experience section!");
                Detail.setHtml(Identifier.Title.Help_Resume_ProExperiance);
            }
            else if(view=="Keyword"){
                Heading.setHtml("Welcome to your resume Keyword section!");
                Detail.setHtml(Identifier.Title.Help_Resume_Keyword);
            }
            else if(view=="Certification"){
                Heading.setHtml("Welcome to your resume Certification section!");
                Detail.setHtml(Identifier.Title.Help_Resume_Certification);
            }
            if(enaItem.items.items.length >= 3){
                Splash.hide();
            }
            else{
                Splash.show();
            }
            if(show){
                Splash.show();
            }

        },

        scrollToHeading: function() {
            var item = this.getActiveBtn(),
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
            else if(item == 5){// if language btn active
                Cnt = G.get('LanguageCnt');
            }
            if(!Cnt.getHidden()){
                //var elementY = Cnt.element.getY() - 250 + this.getScrollable().getScroller().position.y;
                //this.getScrollable().getScroller().scrollTo(0,elementY);
            }
        },

        disableAllItem: function() {
            var CntItems, CntInnerItem;
            CntItems = G.get('resultCnt').innerItems;
            for(var j=0; j<CntItems.length; j++){
                CntInnerItem = CntItems[j].hide();
            }
        },

        clearSearch: function() {
            G.hide('AddSearchBtn');
            G.hide('ClearSearchIcon');
            var searchField = G.get('mysearchfield');
            searchField.setValue('');
            searchField.setReadOnly();
        },

        onAddSearchBtnTap: function() {

            G.hide('AddSearchBtn');
            G.hide('ClearSearchIcon');
            G.hide('SplashCnt');
            var item = UserResume.getActiveBtn();
            var searchField =  G.get('mysearchfield');
            var value = searchField.getValue();
            var recordID = G.get('SearchRecordID');
            var newCnt;
            var alreadyExist = false;
            var existingRecords = null;

            if(item===0)
            existingRecords = G.get('ProfileCnt').items.items;
            else if(item===1)
            existingRecords = G.get('SkillCnt').items.items;
            else if(item===2)
            existingRecords = G.get('IndustryCnt').items.items;
            if(item===3)
            existingRecords = G.get('KeywordCnt').items.items;
            else if(item===4)
            existingRecords = G.get('CertificationCnt').items.items;
            else if(item===5)
            existingRecords = G.get('LanguageCnt').items.items;

            existingRecords.forEach(function(item,index){
                if(index>1){
                    var tempId = item.items.items[2].getValue();
                    if(recordID.getValue() === tempId)
                    alreadyExist = true;
                }
            });


            if(alreadyExist){
                searchField.setValue('');
                searchField.setReadOnly();
            }
            else {

                // get current logged user
                var loggedUser = Ext.getStore('AuthStore').getAt(0);

                var requestObj = new Object();
                requestObj.ResumeId = loggedUser.get('ResumeId');

                if(item===0){// if profile btn active
                    requestObj.LookupTypeId = 1; // profile lookup type is 1
                    requestObj.ObjectPK = recordID.getValue();
                    newCnt = G.createKeywordView('Profile', value,recordID.getValue(),0);
                    G.show('ProfileCnt');
                }
                else if(item == 1){// if skill btn active

                    requestObj.LookupTypeId = 2; // skill lookup type is 2
                    requestObj.ObjectPK = recordID.getValue();
                    newCnt = G.createKeywordView('Skill', value,recordID.getValue(),0);
                    G.show('SkillCnt');
                }
                else if(item == 2){// if Industry btn active
                    requestObj.LookupTypeId = 4; // industry lookup type is 4
                    requestObj.ObjectPK = recordID.getValue();
                    newCnt = G.createKeywordView('Industry', value, recordID.getValue(),0);
                    G.show('IndustryCnt');
                }
                else if(item == 3){// if Keyword btn active
                    requestObj.LookupTypeId = 3; // keyword lookup type is 3
                    requestObj.ObjectPK = recordID.getValue();
                    newCnt = G.createKeywordView('Keyword', value, recordID.getValue());
                    G.show('KeywordCnt');
                }
                else if(item == 4){// if certification btn active
                    requestObj.LookupTypeId = 5; // certification lookup type is 5
                    requestObj.ObjectPK = recordID.getValue();
                    newCnt = G.createKeywordView('Certification', value, recordID.getValue());
                    G.show('CertificationCnt');
                }
                else if(item == 5){// if language btn active
                    requestObj.LookupTypeId = 6; // certification lookup type is 5
                    requestObj.ObjectPK = recordID.getValue();
                    newCnt = G.createKeywordView('Language', value, recordID.getValue(),0);
                    G.show('LanguageCnt');
                }

                UserResume.scrollIntoView(newCnt);
                searchField.setValue('');
                searchField.setReadOnly();

                Ext.Ajax.request({
                    url : ApiBaseUrl+'resumes/AddResumeDetail',
                    method : 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    params : Ext.JSON.encode(requestObj),
                    success : function (response) {
                        var responseDecode = Ext.decode(response.responseText);
                        if (responseDecode.success) {

                        }
                        else{
                            G.showGeneralFailure();
                        }

                    },
                    failure : function (e) {
                        G.showGeneralFailure();
                    }
                });
            }
        },

        scrollIntoView: function(el) {
            //var elementY = el.element.getY() - 250 + this.getScrollable().getScroller().position.y;
            //this.getScrollable().getScroller().scrollTo(0,elementY);
        },

        onSettingBtnTap: function(button) {
            UserResume.hideActive(button);
            G.hide('SplashCnt');

            var d=Ext.getStore('SearchResultDetail').getRange();

            UserResume.changeAvailibilityStatus(d[0].data.IsAvailable);

            G.hide('searchViewCntID');
            G.show('Confirm');
            G.get('resultCnt').setMargin('20 0');
            UserResume.enableDisableItems('Setting');

            G.get('buttonsLabel').setHtml('Settings');
        },

        SaveResumeLanguages: function() {
            var resumeLanguageModels = new Array();
            var slider = G.get('SettingCnt').element.query('.sliderCls');
            var dd=G.get('SettingCnt').element.query('.languageDD');
            for( var i=0; i< slider.length; i++){
                var ddId = Ext.get(dd[i]).getId();
                //Avoid duplicate enteries
                var languageAlreadyExist=false;
                resumeLanguageModels.forEach(function(lang){
                    if(G.get(ddId).getValue()== lang.LanguageId)
                    languageAlreadyExist=true;
                });
                if(!languageAlreadyExist){
                    var resumeLanguage=new Object();
                    var sliderId = Ext.get(slider[i]).getId();

                    resumeLanguage.ExperienceLevel = G.get(sliderId).getValue()[0];
                    resumeLanguage.LanguageId=G.get(ddId).getValue();
                    resumeLanguageModels.push(resumeLanguage);
                }
            }

            var requestSettingObj = new Object();
            requestSettingObj.ResumeLanguage=resumeLanguageModels;
            UserResume.updateSettings_Instant(requestSettingObj);

        },

        onResumeClick: function() {
            // Get Languages
            Ext.getStore('SearchLanguage').load();
            // Get Locations
            UserResume.LoadLocations();

            // get current logged user
            var loggedUser = Ext.getStore('AuthStore').getAt(0);
            var resumeId = loggedUser.get('ResumeId');

            Ext.Ajax.request({
                url : ApiBaseUrl+'resumes/getUserResume?resumeId='+resumeId,
                method : 'GET',
                headers: { 'Content-Type': 'application/json' },
                success : function (response) {
                    var responseDecode = Ext.decode(response.responseText);
                    if (responseDecode.success) {
                        var resume = responseDecode.items;
                        if(resume!==null){
                            G.hide('ResumeSplash');
                            G.show('UserResume');
                            var store = Ext.getStore('SearchResultDetail');
                            store.removeAll();
                            store.add(resume);
                            // store.sync();
                            //if(view == 'goBack'){
                            G.Pop();
                            //}
                            //else{
                            G.Push('UserResumeView');
                            //}
                            if(
                            resume.Certifications.length <=0 &&
                            resume.Keywords.length <=0 &&
                            resume.Languages.length <=0 &&
                            resume.Profiles.length <=0 &&
                            resume.ResumeExperience.length <=0 &&
                            resume.Skills.length <=0
                            ){


                                G.show('ResumeSplash');
                                G.get('ResumeSplash').setHtml(Identifier.Title.Splash_Resume);
                                G.hide('UserResume');
                            }
                        }
                    }
                    else{
                        G.showGeneralFailure();
                    }
                },
                failure : function (e) {
                    G.showGeneralFailure();
                }
            });
        },

        changeAvailibilityStatus: function(available, saveDB) {
            var button=G.get('availabilityBtn');
            if(available){

                button.removeCls('busyBtn');
                var Cnt = button.up('#availabilityCnt');
                Cnt.removeCls('BusyCnt');
                Cnt.down('#availabilityLbl').setHtml('Available');

            }
            else{
                button.addCls('busyBtn');
                var Cnt = button.up('#availabilityCnt');
                Cnt.addCls('BusyCnt');
                Cnt.down('#availabilityLbl').setHtml('Not Available');
            }

            if(saveDB){
                var requestSettingObj = new Object();
                requestSettingObj.IsAvailable = available;
                UserResume.updateSettings_Instant(requestSettingObj);
            }
        },

        ShowCreateResumeExperience: function(record, index) {
            G.show('createCompanyCnt');
            //reset  form
            G.get("CreateExpCompanyName").setValue('');
            G.get("CreateExpProfile").reset();
            G.get('CreateExpIndustry').reset();
            G.get("CreateExpStartDate").setValue(new Date());
            G.get("CreateExpEndDate").setValue(new Date());
            G.get("CreateExpDescription").setValue('');



            G.hide('IndustryList');
            G.get('CompanyExperienceComfirm').hide();
            G.show('CompanyExperienceComfirm');
            G.get('HFresumeExperienceId').setValue("0-0"); // id and index of record
            G.hide('EditResumeBackBtn');
            G.show('BackToExperience');
            G.hide('CreateCompanyExperience');
            G.hide('SplashCnt');
            Ext.getStore('IndustriesStore').load({
                params:{limit:10000}
            });
            Ext.getStore('ProfilesStore').load({
                params:{limit:10000}
            });

            if(record){
                G.get('HFresumeExperienceId').setValue(record.data.ResumeExperienceId+'-'+index);
                G.get("CreateExpCompanyName").setValue(record.data.CompanyWorked);
                G.get("CreateExpProfile").setValue(record.data.ProfileId);
                G.get("CreateExpIndustry").setValue(record.data.IndustryId);
                G.get("CreateExpStartDate").setValue(new Date(record.data.StartDate));
                G.get("CreateExpEndDate").setValue(new Date(record.data.EndDate));
                G.get("CreateExpDescription").setValue(record.data.Description);
            }
        },

        SaveCompanyExperience: function(rec) {

            var resumeId = Ext.getStore('AuthStore').getAt(0).get('ResumeId');

            var companyNameField=G.get("CreateExpCompanyName");
            var profileField=G.get("CreateExpProfile");
            var industryField=G.get("CreateExpIndustry");
            var StartDateField=G.get("CreateExpStartDate");
            var EndDateField=G.get("CreateExpEndDate");
            var DescriptionField=G.get("CreateExpDescription");
            var HFValue=G.get('HFresumeExperienceId').getValue();
            var resumeExpId=HFValue.split('-')[0];
            var index=HFValue.split('-')[1];

            var companyName=companyNameField.getValue();
            var profile=profileField.getValue();
            var industry=industryField.getValue();
            var StartDate=StartDateField.getValue();
            var EndDate=EndDateField.getValue();
            var Description=DescriptionField.getValue();

            if(companyName.trim()==null || companyName.trim()=="")
            {
                companyNameField.addCls('isRequired');
                Ext.Msg.alert('',"Company Name is required to proceed.");
                return null;
            }

            if(companyName != null && companyName != "" &&  !G.ValidateAlphabet(companyName))
            {
                companyNameField.addCls('isRequired');
                Ext.Msg.alert('',"Company Name is invalid to proceed.");
                return null;
            }

            if(profile == null)
            {
                profileField.addCls('isRequired');
                Ext.Msg.alert('',"Profile is required to proceed.");
                return null;
            }

            if(industry == null)
            {
                profileField.addCls('isRequired');
                Ext.Msg.alert('',"Industry is required to proceed.");
                return null;
            }

            if(StartDate  == null)
            {
                StartDateField.addCls('isRequired');
                Ext.Msg.alert('',"Start Date is required to proceed.");
                return null;
            }

            if(EndDate  == null)
            {
                EndDateField.addCls('isRequired');
                Ext.Msg.alert('',"End Date is required to proceed.");
                return null;
            }

            if(EndDate < StartDate)
            {
                StartDateField.addCls('isRequired');
                EndDateField.addCls('isRequired');
                Ext.Msg.alert('',"Start Date cannot be greater than end date to proceed.");
                return null;
            }

            if(Description.trim()==null || Description.trim()=="")
            {
                DescriptionField.addCls('isRequired');
                Ext.Msg.alert('',"Description is required to proceed.");
                return null;
            }

            var model=Ext.create("ProDooMobileApp.model.ResumeExperiencesModel");
            model.data.ResumeExperienceId=resumeExpId;
            model.data.ResumeId=resumeId;
            model.data.CompanyWorked=companyName;
            model.data.ProfileId=profile;
            model.data.IndustryId=industry;
            model.data.StartDate=StartDate;
            model.data.EndDate=EndDate;
            model.data.Description=Description;

            Ext.Ajax.request({
                url: ApiBaseUrl+'ResumeExperiences/AddResumeExperience',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                params : Ext.JSON.encode(model.data),
                success: function(conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success) {

                        var str=Ext.getStore("ResumeExperiencesStore");
                        model.data.StartDateYear=StartDate.getFullYear();
                        model.data.EndDateYear=EndDate.getFullYear() ;
                        model.data.ProfileValue=profileField.getRecord().data.ProfileValue;
                        model.data.IndsutryValue=industryField.getRecord().data.ProfileValue;

                        var resumeExperince = Ext.getStore("SearchResultDetail").data.items[0].data.ResumeExperience;

                        if(resumeExpId==0)
                        {
                            model.data.ResumeExperienceId= result.items.ResumeExperienceId;
                            str.insert(0,model);
                            resumeExperince.push(model.data);
                        }
                        else
                        {
                            str.removeAt(index);
                            str.insert(0,model);
                            resumeExperince.forEach(function(item,index){
                                if(item.ResumeExperienceId == resumeExpId){
                                    item.CompanyWorked = model.data.CompanyWorked;
                                    item.Description = model.data.Description;
                                    item.EndDate= model.data.EndDate;
                                    item.EndDateYear= model.data.EndDateYear;
                                    item.ProfileId= model.data.ProfileId;
                                    item.ProfileValue= model.data.ProfileValue;
                                    item.ResumeId= model.data.ResumeId;
                                    item.StartDate= model.data.StartDate;
                                    item.StartDateYear= model.data.StartDateYear;
                                }
                            });
                        }

                        G.hide('createCompanyCnt');
                        G.show('IndustryList');
                        G.get('CompanyExperienceComfirm').hide();
                        G.show('CreateCompanyExperience');
                        G.show('EditResumeBackBtn');
                        G.hide('BackToExperience');
                        G.show('CreateCompanyExperience');

                    } else {
                        G.showGeneralFailure();
                    }

                    companyNameField.setValue('');
                    profileField.setValue('');
                    StartDateField.setValue(new Date());
                    EndDateField.setValue(new Date());
                    DescriptionField.setValue('');
                },
                failure: function(conn, response, options, eOpts) {
                    //failure catch
                    G.showGeneralFailure();
                }
            });
        },

        CloneLangaugeControl: function(expLevel, languageId) {
            var Cnt=Ext.create('Ext.Container', {
                //     xtype: 'container',
                cls: 'requestInnerCnt',
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
                    cls: ['sliderCls','languageExp'],
                    label: 'Level',
                    labelWidth: 80,
                    name: 'ExperienceLevel',
                    value: [
                    expLevel
                    ],
                    maxValue: 10,
                    listeners: [
                    {
                        fn: function(component, eOpts) {
                            component.setLabelAlign('left');
                            var thumb = component.element.dom.querySelector('.x-thumb');
                            thumb.insertAdjacentHTML( 'afterBegin', '<span class="xValue">0</span>' );
                            SearchResume.onSliderfieldDrag(component);
                        },
                        event: 'initialize'
                    },
                    {
                        fn: function(sliderfield, sl, thumb, e, eOpts){
                            SearchResume.onSliderfieldDrag(sliderfield);

                        },
                        event: 'drag'
                    },
                    {
                        fn: function(me, sl, thumb, newValue, oldValue, eOpts){
                            SearchResume.onSliderfieldDrag(me);
                            UserResume.SaveResumeLanguages();
                        },
                        event: 'change'
                    }
                    ]
                },
                {
                    xtype: 'selectfield',
                    cls: [
                    'DateCls',
                    'TriggerBlue',
                    'languageDD'
                    ],
                    //             itemId: 'languageDropdown',
                    width: 120,
                    label: '',
                    labelCls: 'labelCls',
                    name: 'LanguageId',
                    placeHolder: 'Language',
                    autoSelect: false,
                    displayField: 'LanguageValue',
                    store: 'SearchLanguage',
                    valueField: 'LanguageId',
                    value:languageId,
                    defaultPhonePickerConfig: {
                        zIndex: 999
                    },
                    defaultTabletPickerConfig: {
                        zIndex: 999
                    },
                    listeners: [
                    {
                        fn: function() {
                            UserResume.SaveResumeLanguages();
                        },
                        event: 'change'
                    }
                    ],
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
                        fn: function(button, eOpts) {
                            var dd=G.get('SettingCnt').element.query('.languageDD');
                            if(dd.length>2){
                                button.up('container').destroy();
                                UserResume.SaveResumeLanguages();
                            }
                            else
                            Ext.Msg.alert('','At least one language requires');

                        },
                        event: 'tap'
                    }
                    ]

                }
                ]
            });
            var Container;

            Container=G.get('SettingDateCnt');

            Container.add(Cnt);

        },

        updateSettings_Instant: function(params) {
            var AuthObj = Ext.getStore('AuthStore').getAt(0);
            params.UserId = AuthObj.get('UserId');
            params.ResumeId = AuthObj.get('ResumeId');
            Ext.Ajax.request({
                url: ApiBaseUrl+'Resumes/SettingsUpdate',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                params : Ext.JSON.encode(params),
                success: function(conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success) {
                        //   Ext.Msg.alert('Success',"Saved successfully.");
                    } else {

                        G.showGeneralFailure();
                    }
                },
                failure: function(conn, response, options, eOpts) {
                    //failure catch
                    G.showGeneralFailure();
                }
            });
        },

        LoadLocations: function() {
            var store = Ext.getStore('CreateRequestLocation');
            var url = ApiBaseUrl+'Country/GetFiltered';
            Ext.Ajax.request({
                url: url,
                method: 'Get',
                headers: { 'Content-Type': 'application/json' },
                success: function(conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText);
                    store.setData(result.items);
                    store.sync();
                },
                failure: function(conn, response, options, eOpts) {
                    //failure catch
                    G.showGeneralFailure();
                }
            });

        }
    },

    config: {
    }
});