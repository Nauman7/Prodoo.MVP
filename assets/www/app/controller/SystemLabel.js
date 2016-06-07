/*
 * File: app/controller/SystemLabel.js
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

Ext.define('ProDooMobileApp.controller.SystemLabel', {
    extend: 'Ext.app.Controller',

    alternateClassName: [
        'SystemLabel'
    ],

    statics: {
        LoadSystemLabel: function() {
            Ext.Ajax.request({
                url: ApiBaseUrl+'SystemLabel/GetSystemLabel',
                method: 'GET',
                scope: this,
                success: function(response, options) {
                    var result = G.getResponseData(response);
                    if (result.success) {

                        SystemLabel.BindSystemLabels(result);
                        // User is already loggedIn
                        Account.authCheck();
                    } else {
                        Ext.Msg.alert('', result.message);
                    }
                },
                failure: function(response, options) {
                    var response = G.getResponseData(response);
                    Ext.Msg.alert('', response.message);
                }
            });
        },

        getMessageByIdentifier: function(identifier) {
            var store = Ext.getStore('SystemLabelStore');
            var record = store.findRecord('Identifier',identifier);
            return record.get('Message');
        },

        BindSystemLabels: function(labels) {

            Ext.each(labels.items, function (label) {
                // label.Message= 'FromCMS_'+label.Message;
                switch(label.Identifier){
                    case "StartScreen_Search":
                    Identifier.Title.StartScreen_Search= label.Message;
                    break;
                    case "StartScreen_Resume":
                    Identifier.Title.StartScreen_Resume= label.Message;
                    break;
                    case "StartScreen_Request":
                    Identifier.Title.StartScreen_Request= label.Message;
                    break;
                    case "StartScreen_Message":
                    Identifier.Title.StartScreen_Message= label.Message;
                    break;
                    case "StartScreen_Present":
                    Identifier.Title.StartScreen_Present= label.Message;
                    break;
                    case "StartScreen_Company":
                    Identifier.Title.StartScreen_Company= label.Message;
                    break;
                    case "StartScreen_Statistics":
                    Identifier.Title.StartScreen_Statistics= label.Message;
                    break;
                    case "StartScreen_Setting":
                    Identifier.Title.StartScreen_Setting= label.Message;
                    break;
                    case "StartScreen_Feedback":
                    Identifier.Title.StartScreen_Feedback= label.Message;
                    break;

                    //For Splash screen
                    case "Splash_Resume":
                    Identifier.Title.Splash_Resume= label.Message;
                    break;
                    case "Splash_Present":
                    Identifier.Title.Splash_Present= label.Message;
                    break;

                    //For help Search
                    case "Help_Search_Top_Lookup":
                    Identifier.Title.Help_Search_Top_Lookup= label.Message;
                    break;
                    case "Help_Search_RequestBtn":
                    Identifier.Title.Help_Search_RequestBtn= label.Message;
                    break;
                    case "Help_Search_ShortlistBtn":
                    Identifier.Title.Help_Search_ShortlistBtn= label.Message;
                    break;
                    case "Help_Search_SaveBtn":
                    Identifier.Title.Help_Search_SaveBtn= label.Message;
                    break;
                    case "Help_Search_MenuBtn":
                    Identifier.Title.Help_Search_MenuBtn= label.Message;
                    break;
                    case "Help_Search_HelpBtn":
                    Identifier.Title.Help_Search_HelpBtn= label.Message;
                    break;

                    case "Help_Search_SearchBtn":
                    Identifier.Title.Help_Search_SearchBtn= label.Message;
                    break;
                    case "Help_Search_SearchBar":
                    Identifier.Title.Help_Search_SearchBar= label.Message;
                    break;


                    //For help Resume
                    case "Help_Resume_Profile":
                    Identifier.Title.Help_Resume_Profile= label.Message;
                    break;
                    case "Help_Resume_Skills":
                    Identifier.Title.Help_Resume_Skills= label.Message;
                    break;
                    case "Help_Resume_ProExperiance":
                    Identifier.Title.Help_Resume_ProExperiance= label.Message;
                    break;
                    case "Help_Resume_Keyword":
                    Identifier.Title.Help_Resume_Keyword= label.Message;
                    break;
                    case "Help_Resume_Certification":
                    Identifier.Title.Help_Resume_Certification= label.Message;
                    break;
                    //For help SearchResultSavedScreen
                    case "Help_SearchResultSaved_ExpandBtn":
                    Identifier.Title.Help_SearchResultSaved_ExpandBtn= label.Message;
                    break;
                    case "Help_SearchResultSaved_ResumeSummary":
                    Identifier.Title.Help_SearchResultSaved_ResumeSummary= label.Message;
                    break;
                    case "Help_SearchResultSaved_Score":
                    Identifier.Title.Help_SearchResultSaved_Score= label.Message;
                    break;
                    case "Help_SearchResultSaved_ShortlistBtn":
                    Identifier.Title.Help_SearchResultSaved_ShortlistBtn= label.Message;
                    break;
                    case "Help_SearchResultSaved_SkillDetail":
                    Identifier.Title.Help_SearchResultSaved_SkillDetail= label.Message;
                    break;


                    //For Notification Resume
                    case "Notification_ResumeList_ShortlistBtn":
                    Identifier.Title.Notification_ResumeList_ShortlistBtn= label.Message;
                    break;
                    case "Notification_ResumeList_RequestBtn":
                    Identifier.Title.Notification_ResumeList_RequestBtn= label.Message;
                    break;
                    case "Notification_ResumeList_SaveBtn":
                    Identifier.Title.Notification_ResumeList_SaveBtn= label.Message;
                    break;

                    //For Alter messages
                    case "Alert_Search_SearchFilter":
                    Identifier.Title.Alert_Search_SearchFilter= label.Message;
                    break;
                    case "Alert_ResumeList_SaveBtn":
                    Identifier.Title.Alert_ResumeList_SaveBtn= label.Message;
                    break;


                }


            }, this);


        },

        BindStartScreenLabels: function() {

            G.get('StartSearch').setHtml(Identifier.Title.StartScreen_Search);
            G.get('StartResume').setHtml(Identifier.Title.StartScreen_Resume);
            G.get('StartRequest').setHtml(Identifier.Title.StartScreen_Request);
            G.get('StartMessage').setHtml(Identifier.Title.StartScreen_Message);
            G.get('StartPresent').setHtml(Identifier.Title.StartScreen_Present);
            G.get('StartCompany').setHtml(Identifier.Title.StartScreen_Company);
            G.get('StartStatistics').setHtml(Identifier.Title.StartScreen_Statistics);
            G.get('StartSetting').setHtml(Identifier.Title.StartScreen_Setting);
            G.get('StartFeedback').setHtml(Identifier.Title.StartScreen_Feedback);

        }
    },

    config: {
    },

    init: function(application) {
        Identifier = {
            //Keep all of your Identifiers Here
            Title: {
                //start screen
                StartScreen_Search:"StartScreen_Search",
                StartScreen_Resume:  "StartScreen_Resume",
                StartScreen_Request:"StartScreen_Request",
                StartScreen_Message:  "StartScreen_Message",
                StartScreen_Present:  "StartScreen_Present",
                StartScreen_Company:  "StartScreen_Company",
                StartScreen_Statistics:  "StartScreen_Statistics",
                StartScreen_Setting:  "StartScreen_Setting",
                StartScreen_Feedback:  "StartScreen_Feedback",

                //splash screen
                Splash_Resume:"Splash_Resume",
                Splash_Present:"Splash_Present",

                //help-Search
                Help_Search_Top_Lookup:"Help_Search_Top_Lookup",
                Help_Search_RequestBtn:"Help_Search_RequestBtn",
                Help_Search_ShortlistBtn:"Help_Search_ShortlistBtn",
                Help_Search_SaveBtn:"Help_Search_SaveBtn",
                Help_Search_MenuBtn:"Help_Search_MenuBtn",
                Help_Search_HelpBtn:"Help_Search_HelpBtn",
                Help_Search_SearchBtn:"Help_Search_SearchBtn",
                Help_Search_SearchBar:"Help_Search_SearchBar",

                //help-resume
                Help_Resume_Profile:"Help_Resume_Profile",
                Help_Resume_Skills:"Help_Resume_Skills",
                Help_Resume_ProExperiance:"Help_Resume_ProExperiance",
                Help_Resume_Keyword:"Help_Resume_Keyword",
                Help_Resume_Certification:"Help_Resume_Certification",
                //help-searchresultsavedscreen
                Help_SearchResultSaved_ExpandBtn:"Help_SearchResultSaved_ExpandBtn",
                Help_SearchResultSaved_ResumeSummary:"Help_SearchResultSaved_ResumeSummary",
                Help_SearchResultSaved_Score:"Help_SearchResultSaved_Score",
                Help_SearchResultSaved_ShortlistBtn:"Help_SearchResultSaved_ShortlistBtn",
                Help_SearchResultSaved_SkillDetail:"Help_SearchResultSaved_SkillDetail",

                //notification-resumelist
                Notification_ResumeList_ShortlistBtn:"Notification_ResumeList_ShortlistBtn",
                Notification_ResumeList_RequestBtn:"Notification_ResumeList_RequestBtn",
                Notification_ResumeList_SaveBtn:"Notification_ResumeList_SaveBtn",

                //Alter-search
                Alert_Search_SearchFilter:"Alert_Search_SearchFilter",
                Alert_ResumeList_SaveBtn:"Alert_ResumeList_SaveBtn"

            },

        };

    }

});