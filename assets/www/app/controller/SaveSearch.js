/*
 * File: app/controller/SaveSearch.js
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

Ext.define('ProDooMobileApp.controller.SaveSearch', {
    extend: 'Ext.app.Controller',

    alternateClassName: [
        'SaveSearch',
        'saveName'
    ],

    statics: {
        saveSearchResume: function(directSave, name) {
            // in case of direct create request, no need to validate, just add one search record and pass shortlistid and savedsearcheId to save request method
            var profiles =  G.get('ProfileCnt').items;
            var skills =  G.get('SkillCnt').items;
            var industeries =  G.get('IndustryCnt').items;
            var keywords = G.get('KeywordCnt').items;
            var certifications = G.get('CertificationCnt').items;
            var locationNames = G.get('LocationCnt').items;

            var hasDirty = false;
            var authStore = Ext.getStore('AuthStore');
            var authRec = authStore.getAt(0);

            var profilesObjs = new Array();
            var skillsObjs = new Array();
            var industeryIds = new Array();
            var keywordIds =  new Array();
            var certificationIds = new Array();
            var locations = new Array();

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
            if(locationNames.items.length > 2){
                locationNames.items.forEach(function(item, index){
                    if(index > 1){
                        locations.push(item.innerElement.dom.innerText.trim());
                    }
                });
            }



            var searchObject = new Object();
            searchObject.ProfileIds = profilesObjs;
            searchObject.SkillIds = skillsObjs;
            searchObject.KeywordIds = keywordIds;
            searchObject.CertificationIds = certificationIds;
            searchObject.IndusteryIds = industeryIds;
            searchObject.UserId = authRec.get('UserId');
            searchObject.Countries = locations;

            // if no search cretria set
            if(profilesObjs.length < 1
            &&  skillsObjs.length < 1
            &&    keywordIds.length < 1
            && certificationIds.length < 1
            && industeryIds.length < 1
            && locations.length <1
            )
            {

                var searchStore = Ext.getStore('SavedSearchStore');
                var loggedUserId =authRec.get('UserId');

                searchStore.load({
                    params : { userId : loggedUserId
                    }
                });
                G.Push('SavedSearch');
                return;
            }
            else if(!directSave)
            {
                Ext.Msg.confirm('Confirm', 'Do you want to save the current search parameters to be able to retrieve it later? If you press "No" you will be presented with the list of already saved searches.', function(btn){
                    if(btn === 'yes'){
                        Ext.defer( function() {
                            Ext.Msg.prompt('Add search title', '',function(button,text){
                                if(button==='ok')
                                {
                                    searchObject.SearchName = text;
                                    SaveSearch.SaveSearchParameters(searchObject, directSave);
                                }

                            });
                        }, 10 );

                    }
                    else{

                        var searchStore = Ext.getStore('SavedSearchStore');
                        var loggedUserId =authRec.get('UserId');

                        searchStore.load({
                            params : { userId : loggedUserId
                            }
                        });
                        G.Push('SavedSearch');
                        return;


                    }
                });
            } // End of confirm box
            else{
                searchObject.SearchName = name;
                SaveSearch.SaveSearchParameters(searchObject, directSave);
            }

        },

        onSavedSearchResumeItemClick: function(dataview, index, target, record, e, eOpts) {

            var savedSearchId = record.data.SavedSearchId;
            if(e.target.className.indexOf('x-button-label')>=0){
                Ext.Ajax.request({
                    url: ApiBaseUrl+'SavedSearches/RemoveSearch',
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    params : Ext.JSON.encode(record.data),
                    success: function(conn, response, options, eOpts) {

                        var r= JSON.parse(conn.responseText);
                        if(r.success){
                            var savedSearchStore=Ext.getStore("SavedSearchStore");
                            var loggedUserId = Ext.getStore('AuthStore').getAt(0).get('UserId');

                            savedSearchStore.load({
                                params : { userId : loggedUserId
                                }
                            });
                        }
                        else
                        Ext.Msg.alert('', r.message,null);
                    },
                    failure: function(conn, response, options, eOpts) {
                    }
                });
            }
            else{
                Ext.Ajax.request({
                    url: ApiBaseUrl+'SavedSearches/RetrieveResumeSearch?SavedSearchId='+savedSearchId,
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText);
                        if (result.success) {
                            G.Pop();
                            G.Pop();
                            G.Push('SearchResult');
                            if(result.items.Profiles.length > 0){
                                result.items.Profiles.forEach(function(item,index){
                                    var profileLabel = Ext.getStore('SearchProfile').findRecord('ProfileId',item[0]).data.ProfileValue;
                                    SearchResume.createKeywordView('Profile', profileLabel, item);
                                });
                                G.show('ProfileCnt');
                            }
                            if(result.items.Skills.length > 0){// if skill btn active
                                result.items.Skills.forEach(function(item,index){
                                    var skillLabel = Ext.getStore('SearchSkill').findRecord('SkillId',item[0]).data.SkillValue;
                                    SearchResume.createKeywordView('Skill', skillLabel, item);
                                });
                                //newCnt = SearchResume.createView('Skill', value, recordID.getValue());
                                G.show('SkillCnt');
                            }
                            if(result.items.Industeries.length > 0){// if Industry btn active
                                result.items.Industeries.forEach(function(item,index){
                                    var industryLabel = Ext.getStore('SearchIndustry').findRecord('IndustryId',item[0]).data.IndustryValue;
                                    SearchResume.createKeywordView('Industry', industryLabel, item);
                                }); G.show('IndustryCnt');
                            }
                            if(result.items.KeywordIds.length > 0){// if Keyword btn active
                                result.items.KeywordIds.forEach(function(item,index){
                                    var keywordLabel = Ext.getStore('SearchKeyword').findRecord('KeywordId',item).data.KeywordValue;
                                    newCnt = SearchResume.createKeywordView('Keyword', keywordLabel, item);
                                });
                                G.show('KeywordCnt');
                            }
                            if(result.items.CertificationIds.length > 0){// if certification btn active
                                result.items.CertificationIds.forEach(function(item,index){
                                    var certificationLabel = Ext.getStore('SearchCertification').findRecord('CertificationId',item).data.CertificationValue;
                                    newCnt = SearchResume.createKeywordView('Certification', certificationLabel, item);
                                });
                                G.show('CertificationCnt');
                            }
                            if(result.items.Countries.length > 0){
                                result.items.Countries.forEach(function(item,index){
                                    //var certificationLabel = Ext.getStore('CreateRequestLocation').findRecord('CountryName',item).data.CountryName;
                                    newCnt = SearchResume.createKeywordView('Location', item, item);
                                });
                                G.show('LocationCnt');
                            }
                            // enabling profile by default
                            SearchResume.enableDisableItems('Profile');
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
        },

        showSaveSearchResumeView: function() {
            var store = Ext.getStore('SavedSearchStore');
            var loggedUserId = Ext.getStore('AuthStore').getAt(0).get('UserId');

            var shortlistStore = Ext.getStore('ShortlistResumeStore');
            store.load({
                params : { userId : loggedUserId
                }
            });
            // if(G.get('SearchResultSavedScreenId')!==undefined)
            G.Push('SavedSearch');
            // else
            // G.ShowView('SavedSearch');
        },

        SaveSearchParameters: function(dataObject, directSave) {
            Ext.Ajax.request({
                url: ApiBaseUrl+'SavedSearches/SaveResumeSearch',
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                params : Ext.JSON.encode(dataObject),
                success: function(conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success)
                    {

                        if(!directSave){
                            if(result.items!==null){
                                var searchStore = Ext.getStore('SavedSearchStore');

                                searchStore.load({
                                    params : { userId : dataObject.UserId
                                    }
                                });
                                G.Push('SavedSearch');
                            }
                            else
                            G.showGeneralFailure();
                        }// end of indirectSave
                        else
                        {
                            G.get('hfSavedSearchId').setValue(result.items.SavedSearchId);
                            Requests.sendRequest();
                        }
                    }
                    else
                    G.showGeneralFailure();
                },
                failure: function(conn, response, options, eOpts) {
                    //failure catch
                }
            });
        }
    },

    config: {
    }
});