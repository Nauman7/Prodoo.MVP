/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

    requires: [
        'Ext.MessageBox'
    ],
    models: [
        'SearchProfile',
        'SearchResultSaved',
        'AuthModel',
        'SearchRequestList',
        'SavedSearchModel',
        'UserModel',
        'Statistics',
        'StatisticsResume',
        'SocialMediaModel',
        'StatisticsModel',
        'ResumeExperiencesModel',
        'Faq',
        'ConfigurationModel',
        'SettingTerm',
        'Feedback',
        'Profiles',
        'MessageModel'
    ],
    stores: [
        'ProfilesStore',
        'SearchProfile',
        'SearchResultSaved',
        'SearchResultDetail',
        'AuthStore',
        'SearchSkill',
        'SearchKeyword',
        'SearchCertification',
        'SearchIndustry',
        'SearchRequestList',
        'CreateRequestLocation',
        'SavedSearchStore',
        'ShortlistResumeStore',
        'CompanyDetail',
        'UserStore',
        'MessageStore',
        'StatisticsResume',
        'StatisticsRequest',
        'settingTerms',
        'UserDetail',
        'SocialMediaStore',
        'StatisticsGraph',
        'ResumeExperiencesStore',
        'FaqStore',
        'ConfigurationStore',
        'FeedbackStore',
        'CountryStore',
        'IndustriesStore',
        'SearchLanguage',
        'UserDetailFreelancResumes',
        'CreateRequestLanguage'
    ],
    views: [
        'LoginForm',
        'SearchResult',
        'Register',
        'StartScreen',
        'SearchResumeDetail',
        'ResumeView',
        'RequestScreen',
        'CreateRequestScreen',
        'SendRequest',
        'SavedSearch',
        'MsgInbox',
        'CompanyDetail',
        'PresentDetail',
        'UserResumeView',
        'StatisticsView',
        'CompanyEdit',
        'PresentEdit',
        'Setting',
        'PresentSocialMedia',
        'SettingDetail',
        'Shortlist',
        'RequestDetail',
        'MyNavigationView',
        'RequestConfirmed',
        'Feedback',
        'PasswordChangeView'
    ],
    controllers: [
        'Account',
        'G',
        'UserResume',
        'SearchResume',
        'Messages',
        'Requests',
        'Statistics',
        'Shortlist',
        'SaveSearch',
        'Company',
        'Present',
        'Feedback',
        'SystemLabel'
    ],
    name: 'ProDooMobileApp',

    launch: function() {

        Ext.get('preLoader').destroy();
        Ext.Ajax.setTimeout(120000);

        this.override();
        SiteUrl = "http://localhost/EER/";
        ApiBaseUrl = "";
        ActiveScreen = 0;
        UserDetail=null;

        //SocialMediaList=Ext.getStore("SocialMediaStore").load().data.items;
        if(window.location.href.indexOf('localhost')>0)
            ApiBaseUrl= "http://localhost/PRODOO/webapi/api/";
        else if(window.location.href.indexOf('dev')>0)
            ApiBaseUrl= "http://mobile.dev.prodoo.dk/webapi/api/";
        else if(window.location.href.indexOf('staging')>0)
            ApiBaseUrl= "http://mobile.staging.prodoo.dk/WebAPI/api/";
        else
            ApiBaseUrl= "http://mobile.prodoo.dk/WebAPI/api/";

        // setting loading mask on viewport
        Ext.Viewport.setMasked({xtype:'loadmask',message:' '});
        Ext.Viewport.getMasked().setZIndex(1000);
        // disabling it by default
        Ext.Viewport.setMasked(false);

        Ext.Ajax.on('beforerequest', function (conn, response, options) {

            //  if(navigator.onLine){
            if(true){
                if(Ext.Viewport.getMasked() === null || Ext.Viewport.getMasked().isHidden() === true)
                {
                    Ext.Viewport.setMasked(true);
                }
            }
            else {
                Ext.Msg.alert('Status', 'Internet connection not available');
                return false;
            }
        });
        Ext.Ajax.on('requestcomplete', function (conn, response, options) {
            Ext.Viewport.setMasked(false);
        });

        Ext.Ajax.on('requestexception', function (conn, response, options) {
            Ext.Viewport.setMasked(false);

            switch(response.status) {
                case 0 :
                    Ext.Msg.alert('Status', 'Internet connection not available');
                    break;
            }
        });

        //fix scrolling issue for soft keyboard
        Ext.Viewport.setHeight(Ext.Viewport.getWindowHeight());
        Ext.Viewport.on('resize',function(){
            Ext.Viewport.setHeight(Ext.Viewport.getWindowHeight());
        });

        SystemLabel.LoadSystemLabel();  //Load all system label to local store

        this.globalErrorHandler();
        Ext.create('ProDooMobileApp.view.MyNavigationView', {fullscreen: true});
    },

    override: function() {
        Ext.override(Ext.util.SizeMonitor, {
            constructor: function(config) {
                var namespace = Ext.util.sizemonitor;

                if (Ext.browser.is.Firefox) {
                    return new namespace.OverflowChange(config);
                } else if (Ext.browser.is.WebKit) {
                    if (!Ext.browser.is.Silk && Ext.browser.engineVersion.gtEq('535') && !Ext.browser.engineVersion.ltEq('537.36')) {
                        return new namespace.OverflowChange(config);
                    } else {
                        return new namespace.Scroll(config);
                    }
                } else if (Ext.browser.is.IE11) {
                    return new namespace.Scroll(config);
                } else {
                    return new namespace.Scroll(config);
                }
            }
        });


        Ext.override(Ext.util.PaintMonitor, {
            constructor: function(config) {
                if (Ext.browser.is.Firefox || (Ext.browser.is.WebKit && Ext.browser.engineVersion.gtEq('536') && !Ext.browser.engineVersion.ltEq('537.36') && !Ext.os.is.Blackberry)) {
                    return new Ext.util.paintmonitor.OverflowChange(config);
                }
                else {
                    return new Ext.util.paintmonitor.CssAnimation(config);
                }
            }
        });
        Ext.override(Ext.MessageBox, {
            hide:  function() {
                if (this.activeAnimation && this.activeAnimation._onEnd) {
                    this.activeAnimation._onEnd();
                }
                return this.callParent(arguments);
            }
        });
    },

    globalErrorHandler: function() {
        Ext.Ajax.on({
            requestexception: function(exception, request){
                if(request.status === 401)
                    ProDooMobileApp.app.getController("Account").Logout();
            },
            scope: this
        });
    }

});
