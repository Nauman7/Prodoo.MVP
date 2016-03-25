/*
 * File: app/controller/G.js
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

Ext.define('ProDooMobileApp.controller.G', {
    extend: 'Ext.app.Controller',
    alias: 'controller.G',

    alternateClassName: [
        'G'
    ],

    statics: {
        get: function(itemId) {
            if(itemId.indexOf('.')==0) // Ext.ComponentQuery.query('#' + starting with dot ); // crash the application
            return null;

            var item = Ext.ComponentQuery.query('#' + itemId);
            if(!Ext.isEmpty(item) && !Ext.isEmpty(item[0]))
            return item[0];

            item = Ext.getCmp(itemId);
            if(!Ext.isEmpty(item))
            return item;

            item = Ext.get(itemId);
            if(!Ext.isEmpty(item))
            return item;
        },

        success: function(response, DontShow) {
            if(!Ext.isEmpty(response.operations) && !Ext.isEmpty(response.operations[0]))
            {
                var operation = response.operations[0];
                if(operation.success)
                {
                    if(!Ext.isEmpty(operation._response))
                    {
                        var obj = Ext.decode(operation._response.responseText);

                        if (!Ext.isEmpty(obj.message)) {
                            if(!DontShow)
                            {
                                Ext.Msg.alert('Info', obj.message);
                            }
                        } else if (obj.success === false) {
                            Ext.Msg.show('Error', obj.message);
                            // If the request was not successfull
                            return false;
                        }
                    }
                    if(!operation.success)
                    {
                        return false;
                    }
                }
            }
            if(!Ext.isEmpty(response.responseText))
            {
                var obj = Ext.decode(response.responseText);

                if(obj.success)
                {
                    if(!DontShow)
                    {
                        Ext.Msg.alert('', obj.message);
                    }
                }
                else
                {
                    Ext.Msg.alert('', obj.message);
                    return false;
                }
            }

            // If the request was successfull
            return true;
        },

        failure: function(response) {
            if(response.timedout)
            {
                Ext.Msg.alert("Error", "You request has timedout. Please try again later.");
                return;
            }
            if(response.status == 500)
            {
                Ext.Msg.alert("Error", "Internal server error.");
                return;
            }
            if(response.status == 401 || response.status == 400)
            {
                if(!Ext.isEmpty(response.responseText))
                {
                    Ext.Msg.alert("Error", Ext.decode(response.responseText).Message);
                    return;
                }
            }
            if(response.status === 0)
            {
                Ext.Msg.alert(Locale.text('Errors.Error'), "Cannot connect to server");
                return;
            }
            if(response.exception)
            {
                if(!Ext.isEmpty(response.exceptions))
                {
                    if(response.exceptions.length > 0)
                    {

                        var exception = response.exceptions[0];
                        if(!exception.success)
                        {
                            if(!Ext.isEmpty(exception._response))
                            {
                                var record = Ext.decode(exception._response.responseText);
                                if(!record.success)
                                {
                                    Ext.Msg.alert("Error", record.message);
                                    return;
                                }
                            }
                            if(!Ext.isEmpty(exception.error))
                            {
                                if(exception.error.status === 0)
                                {
                                    Ext.Msg.alert('', 'You request has timedout. Please try again later.');
                                }
                                else
                                {
                                    Ext.Msg.alert('', exception.error.statusText);
                                }
                            }
                        }
                    }
                }
            }
            console.log('response - ' + JSON.stringify(response));
        },

        IsFormValid: function(form) {
            if(form.getForm().isValid())
            return false;
            else
            Ext.Msg.alert('', 'Please fix validation errors.');
            return true;
        },

        mask: function() {
            Ext.Viewport.setMasked({xtype:'loadmask',message:'Please wait...'});
            Ext.Viewport.getMasked().element.dom.style.zIndex = 1000;
        },

        unmask: function() {
            Ext.Viewport.setMasked(false);
        },

        getResponseData: function(response) {
            if(!Ext.isEmpty(response.responseText))
            {
                var obj = Ext.decode(response.responseText);

                //if(obj.success)
                //{
                return obj;
                // }
            }

            if(!Ext.isEmpty(response.exceptions) && response.exceptions.length > 0)
            {
                var record = Ext.decode(response.exceptions[0]._response.responseText);
                if(record.success)
                {
                    return record;
                }
            }

            return null;
        },

        getCallbackData: function() {
            if(!Ext.isEmpty(response) && response.length > 0)
            {
                var obj = response[0].data;
                return obj;
            }
            return null;
        },

        hide: function(itemId) {
            var item = G.get(itemId);
            if(!Ext.isEmpty(item))
            item.hide();
        },

        show: function(itemId) {
            var item = G.get(itemId);
            if(!Ext.isEmpty(item))
            item.show();
        },

        destroy: function(itemId) {
            var item = G.get(itemId);
            if(!Ext.isEmpty(item)){
                var view = Ext.ComponentQuery.query('#' + itemId);

                for(var i =0; i< view.length; i++){
                    view[i].destroy();
                }
            }
        },

        ShowView: function(UserClassName) {
            var mainView = Ext.ComponentQuery.query('navigationview')[0];
            var view = Ext.create('ProDooMobileApp.view.' + UserClassName);
            mainView.removeAll(true);
            mainView.push(view);
        },

        Push: function(xtype) {
            var mainView = Ext.ComponentQuery.query('navigationview')[0];
            var view = Ext.create('ProDooMobileApp.view.' + xtype);
            if(mainView.child(xtype)){
                mainView.setActiveItem( mainView.child(xtype));
            }
            else{
                mainView.push(view);
            }
        },

        Pop: function(xtype) {
            var mainView = Ext.ComponentQuery.query('navigationview')[0];
            mainView.pop(xtype);
        },

        HideView: function(itemId) {
            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), false);
        },

        Capitalize: function(value) {
            return !value ? value : value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
        },

        externalLogin: function(providerName) {
            var context = this;
            switch (providerName) {

                case 'Facebook': {
                    FB.login(function (response) {
                        //alert('login response:' + response.authResponse);
                        if (response.authResponse) {
                            FB.api('/me?fields=picture,name,email', function (user) {
                                // alert('response from facebook: ' + JSON.stringify(user));
                                var authStore = Ext.getStore('AuthStore');
                                var authModel = Ext.create('ProDooMobileApp.model.AuthModel');
                                authModel.data.Email = user.email;
                                authModel.data.FirstName = user.name;
                                authModel.data.LastName = '';
                                authModel.data.IsFreelancer = false;
                                authModel.data.IsNotificationRead = false;
                                authModel.data.AuthType = 2; // lookup value, 2 stands for facebook
                                authStore.add(authModel);
                                authStore.sync({
                                    success: function () {
                                        // preparing model for registration
                                        var model = new Object();
                                        model.Name = user.name;
                                        model.Email = user.email;
                                        model.IsLoginByMobile = true;
                                        model.OAuthProviderId = 2; // lookupvalue for FB
                                        G.registerThirdPartyUser(model);
                                    },
                                    failure: function (batch) {

                                    }
                                });
                            });

                        }
                    },
                    { scope: "email" }
                    );
                    break;
                }
                case 'LinkedIn': {
                    if (IN.User.isAuthorized()) {
                        onLinedInAuth();
                    }
                    else {
                        onLinkedInAuthLogin();
                    }
                    break;
                }
            }
        },

        registerThirdPartyUser: function(model) {
            Ext.Ajax.request({
                url: ApiBaseUrl+'Account/RegisterThirdParty',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                params : Ext.JSON.encode(model),
                success: function(conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success) {
                        localStorage.globalKeywords=Ext.encode(result.items.LookupData.keywords);
                        localStorage.globalCertifications=Ext.encode(result.items.LookupData.certificates);


                        var authStore = Ext.getStore('AuthStore');
                        var rec = authStore.getAt(0);
                        rec.set('ResumeId', result.items.ResumeId);
                        rec.set('UserId', result.items.UserId);
                        rec.set('IsFreelancer', result.items.IsFreelancer);
                        rec.set('IsNotificationRead', result.items.IsNotificationRead);
                        rec.set('FirstName',result.items.DisplayName);
                        rec.dirty = true;
                        authStore.sync();
                        G.loadCommonLookups(result.items.LookupData);
                        G.ShowView('StartScreen');
                        G.setLoggedUsername(model.Name);

                    } else {
                        Ext.Msg.alert('', result.message);
                    }
                },
                failure: function(conn, response, options, eOpts) {
                    var response = G.getResponseData(response);
                    Ext.Msg.alert('', response.message);
                }
            });
        },

        setLoggedUsername: function(model) {
            var loggedUserLbl = G.get('loggedUser');
            loggedUserLbl.setHtml('Hello '+model);
        },

        createView: function(view,labelVal,lookupId,experinceLevel) {
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
                    value: [
                    experinceLevel
                    ],
                    maxValue: 10,
                    listeners: [
                    {
                        fn: function(component, eOpts) {
                            // getting initialized value
                            var val = component.getValue()[0];
                            var thumb = component.element.dom.querySelector('.x-thumb');
                            // setting dynamic vlaue
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
                            var experienceLevel = sliderfield.getValue()[0];

                            var cnt = sliderfield.up('container');
                            var primaryKey = cnt.items.items[3].getValue();
                            var lookupType = cnt.items.items[4].getValue();
                            var lookupVal = '';
                            if(lookupType === 'Profile')
                            lookupVal=1;
                            else if(lookupType === 'Skill')
                            lookupVal=2;
                            else if(lookupType === 'Industry')
                            lookupVal=4;
                            else if(lookupType === 'Language')
                            lookupVal=6;

                            // get current logged user
                            var loggedUser = Ext.getStore('AuthStore').getAt(0);

                            // preparing object to delete
                            var updObj = new Object();
                            updObj.LookupTypeId = lookupVal;
                            updObj.ResumeId = loggedUser.get('ResumeId');
                            updObj.ObjectPK = primaryKey;
                            updObj.ExperienceLevel = experienceLevel;
                            Ext.Ajax.request({
                                url: ApiBaseUrl+'resumes/UpdateExperienceLevel',
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                params : Ext.JSON.encode(updObj),
                                success: function(conn, response, options, eOpts) {
                                    var result = Ext.JSON.decode(conn.responseText);
                                    if (result.success) {


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
                        event: 'dragend'
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
                            var primaryKey = cnt.items.items[3].getValue();
                            var lookupType = cnt.items.items[4].getValue();
                            var lookupVal = '';
                            if(lookupType === 'Profile')
                            lookupVal=1;
                            else if(lookupType === 'Skill')
                            lookupVal=2;
                            else if(lookupType === 'Keyword')
                            lookupVal=3;
                            else if(lookupType === 'Industry')
                            lookupVal=4;
                            else if(lookupType === 'Certification')
                            lookupVal=5;
                            else if(lookupType === 'Language')
                            lookupVal=6;

                            // get current logged user
                            var loggedUser = Ext.getStore('AuthStore').getAt(0);

                            // preparing object to delete
                            var delObj = new Object();
                            delObj.LookupTypeId = lookupVal;
                            delObj.ResumeId = loggedUser.get('ResumeId');
                            delObj.ObjectPK = primaryKey;

                            Ext.Ajax.request({
                                url: ApiBaseUrl+'resumes/DeleteResumeDetail',
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                params : Ext.JSON.encode(delObj),
                                success: function(conn, response, options, eOpts) {
                                    var result = Ext.JSON.decode(conn.responseText);
                                    if (result.success) {
                                        if(cnt.up('container').innerItems.length <= 3){
                                            cnt.up('container').hide();
                                        }
                                        button.up('container').destroy();

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
                        event: 'tap'
                    }
                    ]
                },
                {
                    xtype:'hiddenfield',
                    value:lookupId
                },
                {
                    xtype:'hiddenfield',
                    value:view
                }
                ]
            });
            var Container;
            if(view=='Profile'){
                Container=G.get('ProfileCnt');
            }
            if(view=='Industry'){
                Container=G.get('IndustryCnt');
            }
            else if(view=='Skill'){
                Container=G.get('SkillCnt');
            }
            else if(view=='Language'){
                Container=G.get('LanguageCnt');
            }
            Container.add(Cnt);

        },

        createKeywordView: function(view,labelVal,lookupId) {
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
                            var primaryKey = cnt.items.items[2].getValue();
                            var lookupType = cnt.items.items[3].getValue();
                            var lookupVal = '';
                            if(lookupType === 'Profile')
                            lookupVal=1;
                            else if(lookupType === 'Skill')
                            lookupVal=2;
                            else if(lookupType === 'Keyword')
                            lookupVal=3;
                            else if(lookupType === 'Industry')
                            lookupVal=4;
                            else if(lookupType === 'Certification')
                            lookupVal=5;
                            else if(lookupType === 'Language')
                            lookupVal=6;

                            // get current logged user
                            var loggedUser = Ext.getStore('AuthStore').getAt(0);

                            // preparing object to delete
                            var delObj = new Object();
                            delObj.LookupTypeId = lookupVal;
                            delObj.ResumeId = loggedUser.get('ResumeId');
                            delObj.ObjectPK = primaryKey;

                            Ext.Ajax.request({
                                url: ApiBaseUrl+'resumes/DeleteResumeDetail',
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                params : Ext.JSON.encode(delObj),
                                success: function(conn, response, options, eOpts) {
                                    ;
                                    var result = Ext.JSON.decode(conn.responseText);
                                    if (result.success) {
                                        if(cnt.up('container').innerItems.length <= 3){
                                            cnt.up('container').hide();
                                        }
                                        button.up('container').destroy();

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
                        event: 'tap'
                    }
                    ]
                },
                {
                    xtype:'hiddenfield',
                    value:lookupId
                },
                {
                    xtype:'hiddenfield',
                    value:view
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
            else if(view=='Keyword'){
                Container=G.get('KeywordCnt');
            }
            else if(view=='Keyword'){
                Container=G.get('KeywordCnt');
            }
            else if(view=='Certification'){
                Container=G.get('CertificationCnt');
            }
            Container.add(Cnt);
        },

        showGeneralFailure: function() {
            Ext.Msg.alert('', 'Please contact tech support, sorry for inconvenience');

        },

        loadCommonLookups: function(LookupsData) {
            // loading stores at startup
            var store = Ext.getStore('SearchProfile');
            store.removeAll(true);
            LookupsData.profiles.forEach(function(item,index){
                store.add(item);
            });
            store.sync();

            var skillStore = Ext.getStore('SearchSkill');
            skillStore.removeAll(true);
            LookupsData.skills.forEach(function(item,index){
                skillStore.add(item);
            });
            skillStore.sync();

            /*var keywordStore = Ext.getStore('SearchKeyword');
            keywordStore.removeAll(true);
            LookupsData.keywords.forEach(function(item,index){
            keywordStore.add(item);
            });
            keywordStore.sync();*/

            /*var certificationStore = Ext.getStore('SearchCertification');
            certificationStore.removeAll(true);
            LookupsData.certificates.forEach(function(item,index){
            certificationStore.add(item);
            });
            certificationStore.sync();*/

            var industryStore = Ext.getStore('SearchIndustry');
            industryStore.removeAll(true);
            LookupsData.industeries.forEach(function(item,index){
                industryStore.add(item);
            });
            industryStore.sync();

            var languageStore = Ext.getStore('SearchLanguage');
            languageStore.removeAll(true);
            LookupsData.languages.forEach(function(item,index){
                languageStore.add(item);
            });
            languageStore.sync();

            var countryStore = Ext.getStore('CreateRequestLocation');
            countryStore.removeAll(true);
            LookupsData.countries.forEach(function(item,index){
                countryStore.add(item);
            });
            countryStore.sync();

        },

        convertUtctoLocalDate: function(date) {
            if(date!=null)
            {
                //date = new Date(date);
                date=Ext.Date.parse(date,"c");
                var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
                var offset = date.getTimezoneOffset() / 60;
                var hours = date.getHours();
                newDate.setHours(hours - offset);
                return newDate;
            }
            else
            {
                return new Date();
            }
        },

        GetSpecificTimePeriod: function(date) {
            var msgDate=G.convertUtctoLocalDate(date);
            var currentDate=new Date;
            var days=(currentDate-msgDate)/(1000*60*60*24);
            days=Math.ceil(days);
            if (days == 0 || days == 1)
            { return "Today"; }
            else if (days == 2)
            { return "Yesterday"; }
            else
            { return parseInt(msgDate.getMonth() + 1) +"/"+msgDate.getDate()+"/"+msgDate.getYear(); }
        },

        GetSpecificTime: function(date) {
            var msgDate=G.convertUtctoLocalDate(date);
            var type=null;
            var hour=msgDate.getHours();
            if (hour > 12) { type = "PM"; hour=hour-12; }
            else { type = "AM"; }
            return ('0'+hour).slice(-2)+":"+('0'+msgDate.getMinutes()).slice(-2)+" "+type;
        },

        showHomeView: function() {
            G.Pop();
            G.get('StartScreen').setActiveItem(ActiveScreen);
            G.setLoggedUsername(Ext.getStore('AuthStore').getAt(0).get('FirstName'));
        },

        ValidateEmail: function(email) {
            var re = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return re.test(email);
        },

        ValidateInteger: function(integer) {
            var re = /^[0-9]+$/;
            return re.test(integer);
        },

        ValidateAlphabet: function(alphabet) {
            var re = /^[a-zA-Z' ']+$/;
            return re.test(alphabet);
        },

        ValidateAlphanumeric: function(alphanumeric) {
            var re = /^[a-zA-Z0-9' '_./#&-]+$/;
            return re.test(alphanumeric);
        },

        GoBackScreen: function() {
            mainView = Ext.ComponentQuery.query('navigationview')[0];


            if(mainView.innerItems.length==1){

                Ext.Msg.show({
                    title: '',
                    message: 'Do you want to leave Prodoo?',
                    buttons: [
                    {
                        text: 'No',
                        ui: 'decline'
                    },
                    {
                        text: 'Yes',
                    }
                    ],
                    fn: function (buttonId) {

                        var args = {
                            isMainView:buttonId == 'Yes'
                        };


                        
                        cordova.exec(
                        function(success){
                        console.log('Tap button Cordova success');
                        },
                        function(failed){
                        console.log('Tap button Cordova failed');
                        },
                        "com.prodo.plugins.BackButtonCallbackPlugin",
                        "executeBBCPlugin",
                        [args]);
                        
                    }
                });
            }
            else{
                G.Pop();
            }

        }
    },

    config: {
    }
});