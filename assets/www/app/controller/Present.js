/*
 * File: app/controller/Present.js
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

Ext.define('ProDooMobileApp.controller.Present', {
    extend: 'Ext.app.Controller',

    alternateClassName: [
        'Present'
    ],

    config: {
        control: {
            "button#PresentHomeButton": {
                tap: 'onHomeTap'
            },
            "button#PresentAddBtn": {
                tap: 'onPresentAddBtnTap'
            },
            "textfield#PresentNameField": {
                initialize: 'onPresentNameFieldInitialize',
                keyup: 'onPresentNameFieldKeyup'
            },
            "textfield#PositionField": {
                initialize: 'onPositionFieldInitialize',
                keyup: 'onPositionFieldKeyup'
            },
            "textfield#mytextfield7": {
                initialize: 'onPhoneFieldInitialize'
            },
            "emailfield#mytextfield8": {
                initialize: 'onEmailFieldInitialize'
            },
            "button#SocialMediaAddBtn": {
                tap: 'onSocialMediaAddBtnTap'
            },
            "button#PresentEditConfirm": {
                tap: 'onPresentEditConfirmTap'
            },
            "button#PresentEditBackBtn": {
                tap: 'onPresentEditBackBtnTap'
            },
            "button#facebookAvailable": {
                tap: 'onfacebookAvailableTap'
            },
            "button#twitterAvailable": {
                tap: 'ontwitterAvailableTap'
            },
            "button#linkedinAvailable": {
                tap: 'onlinkedinAvailableTap'
            },
            "button#googleplusAvailable": {
                tap: 'ongoogleplusAvailableTap'
            },
            "button#instagramAvailable": {
                tap: 'oninstagramAvailableTap'
            },
            "button#pinterestAvailable": {
                tap: 'onpinterestAvailableTap'
            },
            "button#driblleAvailable": {
                tap: 'ondriblleAvailableTap'
            },
            "button#behanceAvailable": {
                tap: 'onbehanceAvailableTap'
            },
            "button#facebookBtn": {
                tap: 'onfacebookBtnTap'
            },
            "button#twitterBtn": {
                tap: 'ontwitterBtnTap'
            },
            "button#linkedinBtn": {
                tap: 'onlinkedinBtnTap'
            },
            "button#googleBtn": {
                tap: 'ongoogleBtnTap'
            },
            "button#pinterestBtn": {
                tap: 'onpinterestBtnTap'
            },
            "button#dribbleBtn": {
                tap: 'ondribbleBtnTap'
            },
            "button#behanceBtn": {
                tap: 'obehanceTap'
            },
            "button#instagramBtn": {
                tap: 'oninstagramBtnTap'
            },
            "button#PresentSocialMediaConfirm": {
                tap: 'onPresentSocialMediaConfirmTap'
            },
            "button#PresentSocialMediaBackBtn": {
                tap: 'onPresentSocialMediaBackBtnTap'
            },
            "numberfield#PresentPhoneField": {
                keyup: 'onPresentPhoneFieldKeyup',
                initialize: 'onPresentPhoneFieldInitialize'
            },
            "emailfield#PresentEmailField": {
                keyup: 'onPresentEmailFieldKeyup',
                initialize: 'onPresentEmailFieldInitialize'
            },
            "filefield#PresentFileFieldItemId": {
                initialize: 'onPresentFileFieldItemIdInitialize'
            },
            "list#PresentDetailTpl": {
                itemtap: 'onPresentDetailTplItemTap'
            },
            "textfield#facebookLink": {
                blur: 'onFacebookLinkBlur'
            },
            "textfield#twitterLink": {
                blur: 'onTwitterLinkBlur'
            },
            "textfield#linkedinLink": {
                blur: 'onLinkedinLinkBlur'
            },
            "textfield#googleplusLink": {
                blur: 'onGoogleplusLinkBlur'
            },
            "textfield#pinterestLink": {
                blur: 'onPinterestLinkBlur'
            },
            "textfield#driblleLink": {
                blur: 'onDriblleLinkBlur'
            },
            "textfield#behanceLink": {
                blur: 'onBehanceLinkBlur'
            },
            "textfield#instagramLink": {
                blur: 'onInstagramLinkBlur'
            }
        }
    },

    onHomeTap: function(button, e, eOpts) {
        G.showHomeView();
    },

    onPresentAddBtnTap: function(button, e, eOpts) {
        SocialMediaList=new Array();
        Ext.getStore("SocialMediaStore").data.items.forEach(function(item,index){
            item.data.isAdded=false;
            SocialMediaList.push(item.data);
        });
        G.Push('PresentEdit');
    },

    onPresentNameFieldInitialize: function(component, eOpts) {
        component.setLabelAlign('left');
    },

    onPositionFieldInitialize: function(component, eOpts) {
        component.setLabelAlign('left');
    },

    onPhoneFieldInitialize: function(component, eOpts) {
        component.setLabelAlign('left');
    },

    onEmailFieldInitialize: function(component, eOpts) {
        component.setLabelAlign('left');
    },

    onSocialMediaAddBtnTap: function(button, e, eOpts) {
        var form = G.get('PresentAddForm');
        UserDetail=form.getValues();
        G.Push('PresentSocialMedia');
        SocialMediaList.forEach(function(item,index){
            if (item.isAdded)
            {
                var socialMediaField=G.get(item.name+"Link");
                socialMediaField.setValue(item.URL);
            }
        });
    },

    onPresentEditConfirmTap: function(button, e, eOpts) {
        var loggedUserId = Ext.getStore('AuthStore').getAt(0).get('UserId');
        var form = button.up();
        var fields=form.getFields();
        fields.UserId.setValue(loggedUserId);
        var obj = form.getValues();
        obj.Logo = G.get('profileImg').getSrc();

        if(obj.UserName.trim()==null || obj.UserName.trim()=="")
        {
            fields.UserName.addCls('isRequired');
            Ext.Msg.alert('',"Unable to save, Name is required.");
            return null;
        }

        /*
        PD-216
        if(obj.UserName != null && obj.UserName != "" &&  !G.ValidateAlphabet(obj.UserName))
        {
            fields.UserName.addCls('isRequired');
            Ext.Msg.alert('',"Unable to save,  Name is invalid.");
            return null;
        }
        */

        if(obj.Phone != null && obj.Phone != "" && !G.ValidateInteger(obj.Phone))
        {
            fields.Phone.addCls('isRequired');
            Ext.Msg.alert('',"Unable to save,  Phone No is invalid.");
            return null;
        }

        if(obj.Email != null && obj.Email != "" && !G.ValidateEmail(obj.Email))
        {
            fields.Email.addCls('isRequired');
            Ext.Msg.alert('',"Unable to save,  Email is invalid.");
            return null;
        }


        var socialMedias= new Array();
        SocialMediaList.forEach(function(item,index){
            if (item.isAdded)
            {
                var record = Ext.create('ProDooMobileApp.model.UserDetailSocialMediaModel');
                record.Id=0;
                record.UserDetailId=0;
                record.SocialMediaId=item.Id;
                record.Enabled=item.Enabled;
                record.URL=item.URL;
                socialMedias.push(record);
            }
        });
        //record.data.CampaignDictionaries = dictionaries;
        obj.socialLinks = socialMedias;
        obj.socialLinks.forEach(function(item,index){ item.id=0; });

        Ext.Ajax.request({
            url: ApiBaseUrl+'UserDetail/AddUserDetail',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            params : Ext.JSON.encode(obj),
            success: function(conn, response, options, eOpts) {
                var result = Ext.JSON.decode(conn.responseText);
                if (result.success) {
                    var loggedUserId = Ext.getStore('AuthStore').getAt(0).get('UserId');
                    Ext.getStore('UserDetail').load({
                        params : { userId : loggedUserId }
                    });
                    G.Pop();
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

    onPresentEditBackBtnTap: function(button, e, eOpts) {
        G.Pop();
    },

    onfacebookAvailableTap: function(button, e, eOpts) {
        G.get("PresentAddForm").CheckButtonFunctionality(button);
    },

    ontwitterAvailableTap: function(button, e, eOpts) {
        G.get("PresentAddForm").CheckButtonFunctionality(button);
    },

    onlinkedinAvailableTap: function(button, e, eOpts) {
        G.get("PresentAddForm").CheckButtonFunctionality(button);
    },

    ongoogleplusAvailableTap: function(button, e, eOpts) {
        G.get("PresentAddForm").CheckButtonFunctionality(button);
    },

    oninstagramAvailableTap: function(button, e, eOpts) {
        G.get("PresentAddForm").CheckButtonFunctionality(button);
    },

    onpinterestAvailableTap: function(button, e, eOpts) {
        G.get("PresentAddForm").CheckButtonFunctionality(button);
    },

    ondriblleAvailableTap: function(button, e, eOpts) {
        G.get("PresentAddForm").CheckButtonFunctionality(button);
    },

    onbehanceAvailableTap: function(button, e, eOpts) {
        G.get("PresentAddForm").CheckButtonFunctionality(button);
    },

    onfacebookBtnTap: function(button, e, eOpts) {
        var Cnt=button.up('container');
        Cnt.down('label').hide();
        Cnt.down('textfield').show();
        button.hide();
    },

    ontwitterBtnTap: function(button, e, eOpts) {
        var Cnt=button.up('container');
        Cnt.down('label').hide();
        Cnt.down('textfield').show();
        button.hide();
    },

    onlinkedinBtnTap: function(button, e, eOpts) {
        var Cnt=button.up('container');
        Cnt.down('label').hide();
        Cnt.down('textfield').show();
        button.hide();
    },

    ongoogleBtnTap: function(button, e, eOpts) {
        var Cnt=button.up('container');
        Cnt.down('label').hide();
        Cnt.down('textfield').show();
        button.hide();
    },

    onpinterestBtnTap: function(button, e, eOpts) {
        var Cnt=button.up('container');
        Cnt.down('label').hide();
        Cnt.down('textfield').show();
        button.hide();
    },

    ondribbleBtnTap: function(button, e, eOpts) {
        var Cnt=button.up('container');
        Cnt.down('label').hide();
        Cnt.down('textfield').show();
        button.hide();
    },

    obehanceTap: function(button, e, eOpts) {
        var Cnt=button.up('container');
        Cnt.down('label').hide();
        Cnt.down('textfield').show();
        button.hide();
    },

    oninstagramBtnTap: function(button, e, eOpts) {
        var Cnt=button.up('container');
        Cnt.down('label').hide();
        Cnt.down('textfield').show();
        button.hide();
    },

    onPresentSocialMediaConfirmTap: function(button, e, eOpts) {
        SocialMediaList.forEach(function(item,index){
            var socialMediaField=G.get(item.name+"Link");
            if (socialMediaField !== undefined)
            {
                var socialMediaVal=socialMediaField.getValue();
                var indx=SocialMediaList.map(function(x) {return x.name; }).indexOf(item.name);
                var isAdded=false;
                if (socialMediaVal !== "")
                {
                    isAdded=true;

                    if (SocialMediaList[indx].URL === undefined || SocialMediaList[indx].URL === null || SocialMediaList[indx].URL === "")
                    { SocialMediaList[indx].Enabled=true; }
                }

                SocialMediaList[indx].isAdded=isAdded;
                SocialMediaList[indx].URL=socialMediaVal;
            }
        });

        G.Pop();
        var form = G.get('PresentAddForm');
        UserDetail=form.setValues(UserDetail);

        SocialMediaList.forEach(function(item,index){
            var socialMedia=G.get(item.name);
            if (item.isAdded)
            {
                socialMedia.show();
                if (item.Enabled)
                {
                    var enableSocialMedia=G.get(item.name+"Available");
                    enableSocialMedia.fireEvent('tap', enableSocialMedia);
                }
            }
            else
            {
                socialMedia.hide();
            }
        });
    },

    onPresentSocialMediaBackBtnTap: function(button, e, eOpts) {
        G.Pop();
        var form = G.get('PresentAddForm');
        UserDetail=form.setValues(UserDetail);
    },

    onPresentNameFieldKeyup: function(textfield, e, eOpts) {
        if(textfield.element.dom.className.indexOf('isRequired')>-1)
        {
            textfield.removeCls('isRequired');
        }
    },

    onPositionFieldKeyup: function(textfield, e, eOpts) {
        if(textfield.element.dom.className.indexOf('isRequired')>-1)
        {
            textfield.removeCls('isRequired');
        }
    },

    onPresentPhoneFieldKeyup: function(textfield, e, eOpts) {
        if(textfield.element.dom.className.indexOf('isRequired')>-1)
        {
            textfield.removeCls('isRequired');
        }
    },

    onPresentPhoneFieldInitialize: function(component, eOpts) {
        component.setLabelAlign('left');
    },

    onPresentEmailFieldKeyup: function(textfield, e, eOpts) {
        if(textfield.element.dom.className.indexOf('isRequired')>-1)
        {
            textfield.removeCls('isRequired');
        }
    },

    onPresentEmailFieldInitialize: function(component, eOpts) {
        component.setLabelAlign('left');
    },

    onPresentFileFieldItemIdInitialize: function(component, eOpts) {
        G.get("PresentFileFieldItemId").on('change', function(event){
            file = event.getFiles()[0];
            var reader = new FileReader();
            reader.onload = function(event){
                Ext.ComponentQuery.query('#profileImg')[0].setSrc(event.target.result);
            };
            reader.onerror = function(){
                console.log('On Error Event');
            };
            reader.readAsDataURL(file);
        });
    },

    onPresentDetailTplItemTap: function(dataview, index, target, record, e, eOpts) {

        SocialMediaList=new Array();
        Ext.getStore("SocialMediaStore").data.items.forEach(function(item,index){
            item.data.isAdded=false;
            SocialMediaList.push(item.data);
        });

        record.data.socialLinks.forEach(function(item,index){
            var indx=SocialMediaList.map(function(x) {return x.Id; }).indexOf(item.SocialMediaId);
            if (indx > -1)
            {
                SocialMediaList[indx].isAdded=true;
                SocialMediaList[indx].Enabled=item.Enabled;
                SocialMediaList[indx].URL=item.URL;
            }
        });

        var selectedItem = e.target;
        if(selectedItem.className.indexOf('presArrowDown')>=0){
            Ext.get(selectedItem).toggleCls('presArrowUp');
            var detail = selectedItem.previousElementSibling;

            var socialMediaDiv=detail.getElementsByClassName("presSocialLinks")[0];

            var socialMediasDivs="";
            SocialMediaList.forEach(function(item,index){
                var socialMedia=G.get(item.name);
                if (item.isAdded && item.Enabled)
                {
                    var elm="";
                    switch(item.name)
                    {
                        case "facebook":
                            elm="<span class='presFacebook'>facebook</span>";
                            break;
                        case "twitter":
                            elm="<span class='presTwitter'>twitter</span>";
                            break;
                        case "linkedin":
                            elm="<span class='presLinkedin'>linked in</span>";
                            break;
                        case "googleplus":
                            elm="<span class='presGooglePlus'>google +</span>";
                            break;
                        case "pinterest":
                            elm="<span class='presPinterestPlus'>pinterest</span>";
                            break;
                        case "driblle":
                            elm="<span class='presDribllePlus'>Driblle</span>";
                            break;
                        case "behance":
                            elm="<span class='presBehancePlus'>Behance</span>";
                            break;
                        case "instagram":
                            elm="<span class='presInstagramPlus'>Instagram</span>";
                            break;
                    }
                    socialMediasDivs += elm;
                }
            });

            socialMediaDiv.innerHTML=socialMediasDivs;

            var innerEl = detail.children,
                elementHeight=0;
            for(var i=0; i< detail.childElementCount; i++){
                elementHeight += innerEl[i].clientHeight;
            }
            if ( Ext.get(selectedItem).hasCls('presArrowUp')) {
                detail.style.maxHeight = elementHeight+'px';
            }
            else{
                detail.style.maxHeight = '0px';
            }
        }
        else if(selectedItem.className.indexOf('presEdit')>=0)
        {
            G.Push('PresentEdit');

            var form = G.get('PresentAddForm');
            form.setValues(record.data);
            G.get('profileImg').setSrc(record.data.Logo);

            SocialMediaList.forEach(function(item,index){
                var socialMedia=G.get(item.name);
                if (item.isAdded)
                {
                    socialMedia.show();
                    if (item.Enabled)
                    {
                        var enableSocialMedia=G.get(item.name+"Available");
                        enableSocialMedia.fireEvent('tap', enableSocialMedia);
                    }
                }
                else
                { socialMedia.hide(); }
            });
        }
        else if(selectedItem.className.indexOf('presDelete')>=0)
        {
            var url = ApiBaseUrl+'UserDetail/DeleteUserDetail';

            Ext.Ajax.request({
                url: url,
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                params : Ext.JSON.encode(record.data),
                success: function(conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success) {
                        var loggedUserId = Ext.getStore('AuthStore').getAt(0).get('UserId');
                        Ext.getStore('UserDetail').load({
                            params : { userId : loggedUserId
                                     }
                        });
                    }
                },
                failure: function(conn, response, options, eOpts) {
                    //failure catch
                    G.showGeneralFailure();
                }
            });
        }
    },

    onFacebookLinkBlur: function(textfield, e, eOpts) {
        G.ValidateUrl(textfield);

    },

    onTwitterLinkBlur: function(textfield, e, eOpts) {
        G.ValidateUrl(textfield);
    },

    onLinkedinLinkBlur: function(textfield, e, eOpts) {
        G.ValidateUrl(textfield);
    },

    onGoogleplusLinkBlur: function(textfield, e, eOpts) {
        G.ValidateUrl(textfield);
    },

    onPinterestLinkBlur: function(textfield, e, eOpts) {
        G.ValidateUrl(textfield);
    },

    onDriblleLinkBlur: function(textfield, e, eOpts) {
        G.ValidateUrl(textfield);
    },

    onBehanceLinkBlur: function(textfield, e, eOpts) {
        G.ValidateUrl(textfield);
    },

    onInstagramLinkBlur: function(textfield, e, eOpts) {
        G.ValidateUrl(textfield);
    }

});