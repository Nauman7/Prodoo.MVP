/*
 * File: app/controller/Requests.js
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

Ext.define('ProDooMobileApp.controller.Requests', {
    extend: 'Ext.app.Controller',
    alias: 'controller.Requests',

    alternateClassName: [
        'Requests'
    ],

    statics: {
        createResumeRequest: function(isNew) {
            var form  = G.get('CreateRequestScreen');
            var values = form.getValues();
            if(values.RequestName){
                var model = null;
                var store = Ext.getStore('SearchRequestList');
                store.removeAll(); //Remove if there is something already in store
                model = Ext.create('ProDooMobileApp.model.SearchRequestList');
                isNew = values.RequestId ==='';
                model.set(values);


                if(isNew){
                    var loggedUserId = Ext.getStore('AuthStore').getAt(0).get('UserId');
                    model.set('RequestId', 0);
                    model.set('UserId',loggedUserId);
                }

                model.set('Duration', values.Duration[0]);
                model.set('HourlyFee', values.HourlyFee[0]);
                model.set('EndDate', Ext.Date.toString());
                model.set('IsSent', false);

                if(isNew)
                store.add(model);

                store.sync({
                    success: function () {

                        G.Pop();
                        Requests.ShowRequestView(false,false);
                    },
                    failure: function (batch) {
                        //var message = batch.operations[0].request.scope.reader.jsonData["message"];
                        store.load();
                    }
                });
            }
            else
            Ext.Msg.alert('', 'Request title required to proceed');
        },

        sendRequest: function() {
            if(localStorage.SubmitDirectRequest=="true" || G.get('requestList').getSelection()[0]){
                var loggedUserId = Ext.getStore('AuthStore').getAt(0).get('UserId');
                var store = Ext.getStore('SearchRequestList');
                store.removeAll(); //Remove if there is something already in store

                if(localStorage.SubmitDirectRequest=="true")
                {

                    var record  = G.get('resumeDirectRequestData').getData();
                    record.set('SavedSearchedId',G.get('hfSavedSearchId').getValue());
                    record.set('ShortlistId',G.get('hfShortlistId').getValue());
                }
                else
                {
                    var record  = G.get('resumeRequestData').getData();
                    record.set('ShortlistId',G.get('requestList').getSelection()[0].data.ShortlistId);
                }

                record.set('IsSent', true);

                var model = Ext.create('ProDooMobileApp.model.SearchRequestList');
                model.set(record.data);


                store.add(model);
                store.sync({
                    success: function () {

                        G.Pop();
                        G.Pop();

                        if(localStorage.SubmitDirectRequest!="true") //Show request details
                        Requests.ShowRequestView(false,false);
                    },
                    failure: function (batch) {
                        //var message = batch.operations[0].request.scope.reader.jsonData["message"];
                        //store.load();
                    }
                });
            }
            else
            Ext.Msg.alert('', 'Please select shortlist to proceed.');
        },

        passModelToSavedSearchList: function() {
            var form  = G.get('CreateRequestScreen');
            var values = form.getValues();

            if(values.RequestName){
                //var model = null;
                var loggedUserId = Ext.getStore('AuthStore').getAt(0).get('UserId');


                var model = Ext.create('ProDooMobileApp.model.SearchRequestList');
                model.set(values);
                model.set('Duration', values.Duration[0]);
                model.set('HourlyFee', values.HourlyFee[0]);
                model.set('EndDate', Ext.Date.toString());
                model.set('IsSent', false);
                model.set('UserId',loggedUserId);

                if(values.RequestId ==='' || values.RequestId ==='0')
                model.set('RequestId', 0);

                if(localStorage.SubmitDirectRequest=="true")
                {
                    Shortlist.onCreateShortlist(values.RequestName+'-shortlist',ResumeIdList);
                    G.get('resumeDirectRequestData').setData(model);
                }
                else{
                    var shortlistStore = Ext.getStore('ShortlistResumeStore');
                    shortlistStore.load({
                        params : { userId : loggedUserId
                        }
                    });
                    G.Push('SendRequest');
                    G.get('resumeRequestData').setData(model);
                }
                // massign model to send request view
            }
            else
            Ext.Msg.alert('', 'Request title required to proceed');
        },

        requestTopButtonsClick: function(buttonName) {
            var store = Ext.getStore('SearchRequestList');
            var loggedUserId = Ext.getStore('AuthStore').getAt(0).get('UserId');

            store.load({
                params : { userId : loggedUserId,
                    requestType : buttonName
                }
            });
        },

        cloneRequest: function(context) {
            var form = context.up().up();
            var values = form.getValues();
            values.RequestId = '0'; // for cloning
            form.setValues(values);
            var fields = form.getFields();
            fields.Duration.enable();
            fields.StartDate.enable();
            fields.Description.enable();
            fields.OtherDetails.enable();
            fields.Location.enable();
            fields.Language.enable();
            fields.HourlyFee.enable();
            fields.Duration.enable();
            fields.FeeCurrencyType.enable();
            fields.DurationType.enable();
            fields.SavedSearchedId.enable();
            Ext.Msg.alert('Status', 'Request cloned successfully');
        },

        DeleteRequestResume: function(requestId, requestName, innerView) {
            var requestObject = new Object();

            requestObject.RequestId = requestId;
            requestObject.ResumeId = Ext.getStore('AuthStore').getAt(0).get('ResumeId');
            requestObject.RequestName = requestName;
            var url = ApiBaseUrl+'RequestsResumes/DeleteResumeRequest';

            Ext.Ajax.request({
                url: url,
                method: 'Put',
                headers: { 'Content-Type': 'application/json' },
                params : Ext.JSON.encode(requestObject),
                success: function(conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success) {
                        if(innerView)
                        {
                            G.Pop();
                        }

                        Requests.ShowRequestView(false,false);
                    }
                },
                failure: function(conn, response, options, eOpts) {
                    //failure catch
                    G.showGeneralFailure();
                }
            });
        },

        DeleteRequest: function(requestId, listType) {
            var url = ApiBaseUrl+'Requests/DeleteRequest?requestId='+requestId+'&type='+listType;

            Ext.Ajax.request({
                url: url,
                method: 'Get',
                headers: { 'Content-Type': 'application/json' },
                success: function(conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success) {
                        Requests.ShowRequestView(false,false);
                    }
                },
                failure: function(conn, response, options, eOpts) {
                    //failure catch
                    G.showGeneralFailure();
                }
            });
        },

        TapRequestTitle: function(target, item, record) {
            if(target.parent('.closeIcon')){
                if(item===0){ // Delete Recieved resume request
                    Requests.DeleteRequestResume(record.data.RequestId, record.data.RequestName, false);
                } else // Delete draft,sent request
                {
                    Requests.DeleteRequest(record.data.RequestId, item);
                }


            }
            else if(target.parent('.x-list-item')){

                if(item===0){// Inbox active
                    // G.ShowView('RequestDetail');
                    G.Push('RequestDetail');
                    var startDate= new Date(record.data.StartDate);

                    G.get("SpanDateDuration").setHtml(startDate.toDateString()+", Duration "+record.data.Duration+" "+record.data.DurationType);
                    G.get("SpanRequestName").setHtml(record.data.RequestName);
                    G.get("HFRequestId").setHtml(record.data.RequestId);
                    G.get("SpanHourlyFee").setHtml(record.data.HourlyFee  +" "+record.data.FeeCurrencyType);
                    if(record.data.Company && record.data.Company.CompanyName)
                    {
                        G.get("SpanCompanyName").setHtml(record.data.Company.CompanyName);
                        var companyStore = Ext.getStore('CompanyDetail');
                        companyStore.clearData();
                        companyStore.add({
                            CompanyName: record.data.Company.CompanyName,
                            CompanyAddress: record.data.Company.CompanyAddress,
                            Phone: record.data.Company.Phone,
                            Detail:record.data.Company.Detail,
                            Logo:record.data.Company.Logo,
                            Vat:record.data.Company.Vat,
                            UserCompanyId:record.data.Company.UserCompanyId,
                        });
                    }
                    else
                    G.get("SpanCompanyName").hide();
                    G.get("SpanLanguageLocation").setHtml(record.data.Language+" "+record.data.Location);
                    if(record.data.Description)
                    G.get("SpanDescription").setHtml(record.data.Description);
                    else
                    G.get("SpanDescription").hide();

                    if(record.data.IsConfirmed){
                        {
                            G.get("acceptRequestBtn").hide();
                            G.get("declineRequestBtn").hide();
                            G.get("labelInterestedOrNot").setHtml('Invitation already accepted.');

                        }



                    }

                    if(!record.data.IsRead) //Mark message as read
                    {
                        var rec= {RequestId: record.data.RequestId, ResumeId: Ext.getStore('AuthStore').getAt(0).get('ResumeId')};

                        Ext.Ajax.request({
                            url : ApiBaseUrl+'RequestsResumes/MarkNotificationRead/',
                            method : 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            params : Ext.encode(rec),
                            success : function (response) {
                                Requests.ShowRequestView();
                            }


                        });

                    }
                }
                else{ // Other active
                    var setDisable = true;
                    var isClonable = false;

                    if( item==1 ) // Draft active
                    setDisable = false;

                    // for enabling clone btn
                    if(item==2) // Sent active
                    {
                        isClonable = true;
                    }
                    G.Push('CreateRequestScreen');
                    var topHeadingLabel =G.get('requestTopHeading');
                    topHeadingLabel.setHtml('Request Details');

                    var form = G.get('CreateRequestScreen');
                    form.setValues(record.data);
                    var fields = form.getFields();
                    // setting start date
                    fields.StartDate.setValue(new Date(record.data.StartDate));

                    if(setDisable){
                        G.get('DraftRequestBtn').hide();
                        fields.Duration.disable();
                        fields.StartDate.disable();
                        fields.RequestName.disable();
                        fields.Description.disable();
                        fields.Location.disable();
                        fields.Language.disable();
                        fields.HourlyFee.disable();
                        fields.Duration.disable();
                        fields.UserCompanyId.disable();
                        fields.FeeCurrencyType.disable();
                        fields.DurationType.disable();
                        fields.SavedSearchedId.disable();
                    }

                    if(isClonable){
                        var cloneBtn = G.get('cloneBtn');
                        cloneBtn.show();
                    }
                }
            }
        },

        ShowConfirmRequestView: function() {
            Ext.Ajax.request({
                url: ApiBaseUrl+'UserDetail/GetOnlyOne?userId='+Ext.getStore('AuthStore').getAt(0).get('UserId'),
                method: 'Get',
                headers: { 'Content-Type': 'application/json' },

                success: function(conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success) {
                        if(result.items){
                            G.Push('RequestConfirmed');
                            G.get("HfUserDetailId").setValue(result.items.UserDetailId);
                            G.get("presCompanyName").setHtml(G.get('SpanCompanyName').getHtml());
                            G.get("presUserName").setHtml(result.items.UserName);
                            G.get("presDesignation").setHtml(result.items.Position);
                            G.get("presPhone").setHtml(result.items.Phone);
                            G.get("presEmail").setHtml(result.items.Email);
                            G.get("presDesciption").setValue(result.items.Detail);
                            G.get("presentProfileImage").setSrc(result.items.Logo);
                        }
                        else{
                            Ext.Msg.alert('', 'Please first add your contact details in Present menu then proceed. ',null);
                        }
                    }
                },
                failure: function(conn, response, options, eOpts) {
                    if (response.timedout)
                    Ext.Msg.alert('Error', 'Maximum request time exceeded');
                }
            });
        },

        ConfirmRequestedInvitation: function() {
            var requestId= G.get("HFRequestId").getHtml();
            var userDetailId= G.get("HfUserDetailId").getValue();
            var resumeId = Ext.getStore('AuthStore').getAt(0).get('ResumeId');

            var requestObject = new Object();

            requestObject.RequestId = requestId;
            requestObject.UserDetailId = userDetailId;
            requestObject.CoverLetter=G.get("presDesciption").getValue();
            requestObject.ResumeId = Ext.getStore('AuthStore').getAt(0).get('ResumeId');
            requestObject.RequestName = G.get('SpanRequestName').getHtml();
            var url = ApiBaseUrl+'RequestsResumes/AcceptResumeRequest';

            Ext.Ajax.request({
                url: url,
                method: 'Put',
                headers: { 'Content-Type': 'application/json' },
                params : Ext.JSON.encode(requestObject),
                success: function(conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success) {
                        G.Pop();
                        G.Pop();
                        Requests.ShowRequestView(false,false);
                        //Requests.requestTopButtonsClick('ToMe');
                    }
                },
                failure: function(conn, response, options, eOpts) {
                    //failure catch
                    G.showGeneralFailure();
                }
            });
        },

        ShowRequestView: function(pushView, loadLookup) {
            var isFreelancer=Ext.getStore('AuthStore').getAt(0).data.IsFreelancer;
            Ext.Ajax.request({
                url: ApiBaseUrl+'requests/GetRequests?isFreelancer='+isFreelancer+'&userId='+Ext.getStore('AuthStore').getAt(0).data.UserId,
                method: 'Get',
                headers: { 'Content-Type': 'application/json' },

                success: function(conn, response, options, eOpts) {

                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success)
                    {
                        if(pushView)
                        G.ShowView('RequestScreen');

                        if(isFreelancer)
                        {
                            if(result.items.Inbox.length>0){

                                var inboxStore = Ext.create('Ext.data.Store', {
                                    model:'ProDooMobileApp.model.SearchRequestList',
                                    data: result.items.Inbox
                                });
                                G.get('requestInboxList').setStore(inboxStore);
                                G.show('requestInboxList');
                                G.show('invitationLabel');
                                var numberOfItems= result.items.Inbox.length>0? result.items.Inbox.length:1;

                                G.get('requestInboxList').setHeight(72*numberOfItems);
                            }
                        }
                        else
                        {
                            // G.show('requestDraftList');
                            //s G.show('requestSendList');
                            var draftStore = Ext.create('Ext.data.Store', {
                                model:'ProDooMobileApp.model.SearchRequestList',
                                data: result.items.Draft
                            });

                            var sentStore = Ext.create('Ext.data.Store', {
                                model:'ProDooMobileApp.model.SearchRequestList',
                                data: result.items.Sent
                            });

                            var draftList= G.get('requestDraftList');
                            var sentList=G.get('requestSendList');

                            if(draftList.isHidden())
                            {
                                draftList.show();// to fix height problem
                                draftList.setStore(draftStore);
                                draftList.hide();
                            }
                            else
                            draftList.setStore(draftStore);

                            if(sentList.isHidden())
                            {
                                sentList.show();// to fix height problem
                                sentList.setStore(sentStore);
                                sentList.hide();
                            }
                            else
                            sentList.setStore(sentStore);





                            if(loadLookup){
                                // Loading Company and Search Store for request detail screen
                                var companyStore = Ext.getStore('CompanyDetail');
                                companyStore.clearData();
                                companyStore.load({
                                    params : { userId : Ext.getStore('AuthStore').getAt(0).get('UserId') }
                                });


                                var searchStore = Ext.getStore('SavedSearchStore');
                                searchStore.clearData();
                                searchStore.load({
                                    params : { userId : Ext.getStore('AuthStore').getAt(0).get('UserId')}
                                });
                            }
                        }

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
    },

    config: {
    }
});