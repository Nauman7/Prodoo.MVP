/*
 * File: app/controller/Company.js
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

Ext.define('ProDooMobileApp.controller.Company', {
    extend: 'Ext.app.Controller',

    alternateClassName: [
        'Company'
    ],

    config: {
        control: {
            "list#CompanyDetailTpl": {
                itemtap: 'onCompanyDetailTplItemTap'
            },
            "button#companyHomebtn": {
                tap: 'onCompanyHomeBtnTap'
            },
            "button#companyBackBtn": {
                tap: 'oncompanyBackBtnTap'
            },
            "button#CompanyAddNewBtn": {
                tap: 'onCompanyAddNewBtnTap'
            },
            "textfield#companyAddress": {
                initialize: 'onCompanyAddressInitialize',
                keyup: 'onCompanyAddressKeyup'
            },
            "textfield#companyPhone": {
                initialize: 'onCompanyPhoneInitialize'
            },
            "textfield#companyVAT": {
                initialize: 'onCompanyVATInitialize',
                keyup: 'onCompanyVATKeyup'
            },
            "button#CompanyEditBackBtn": {
                tap: 'onCompanyEditBackBtnTap'
            },
            "button#CompanyEditConfirm": {
                tap: 'onCompanyEditConfirmTap'
            },
            "textfield#CompanyName": {
                initialize: 'onCompanyNameInitialize',
                keyup: 'onCompanyNameKeyup'
            },
            "numberfield#companyPhone": {
                keyup: 'onCompanyPhoneKeyup',
                initialize: 'onCompanyPhoneInitialize'
            },
            "filefield#CompanyFileFieldItemId": {
                initialize: 'onCompanyFileFieldItemIdInitialize'
            }
        }
    },

    onCompanyDetailTplItemTap: function(dataview, index, target, record, e, eOpts) {
        var me=this;
        var selectedItem = e.target;
        if(selectedItem.className.indexOf('compArrowDown')>=0){
            Ext.get(selectedItem).toggleCls('compArrowUp');
            var detail = selectedItem.previousElementSibling;
            var innerEl = detail.children,
                elementHeight=0;
            for(var i=0; i< detail.childElementCount; i++){
                elementHeight += innerEl[i].clientHeight;
            }

            if ( Ext.get(selectedItem).hasCls('compArrowUp')) {
                detail.style.maxHeight = elementHeight+'px';
            }
            else{
                detail.style.maxHeight = '0px';
            }
        }
        else if(selectedItem.className.indexOf('companyEdit')>=0){
            G.Push('CompanyEdit');
            var form = G.get('CompanyAddForm');
            form.setValues(record.data);
            var cmbCountry=G.get('cmbCompanyCountry');
            cmbCountry.setValue(record.data.CountryId);
            G.get('companyImg').setSrc(record.data.Logo);

        }
        else if(selectedItem.className.indexOf('companyDelete')>=0)
        {

            G.DeleteItem('Comapny', function(){
                var url = ApiBaseUrl+'UserCompany/DeleteUserCompany';
                record.id=record.data.UserDetailId;
                Ext.Ajax.request({
                    url: url,
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    params : Ext.JSON.encode(record.data),
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText);
                        if (result.success) {
                            var loggedUserId = Ext.getStore('AuthStore').getAt(0).get('UserId');
                            Ext.getStore('CompanyDetail').load({
                                params : { userId : loggedUserId },
                                callback : function() {
                                    if(Ext.getStore('CompanyDetail').data.items.length<=0){
                                        G.show('CompanySplash');
                                        G.get('CompanySplash').setHtml(Identifier.Title.Splash_Company);
                                        G.hide('CompanyDetailTpl');
                                    }
                                }
                            });
                        }
                        else {  Ext.Msg.alert('', result.message); }
                    },
                   failure: function(response, request) {
                        //failure catch
                       G.showGeneralFailure('', response);
                    }
                });
            });

        }
    },

    onCompanyHomeBtnTap: function(button, e, eOpts) {
        G.showHomeView();
    },

    oncompanyBackBtnTap: function(button, e, eOpts) {
        G.Pop();
    },

    onCompanyAddNewBtnTap: function(button, e, eOpts) {
        G.Push('CompanyEdit');
    },

    onCompanyAddressInitialize: function(component, eOpts) {
        component.setLabelAlign('left');
    },

    onCompanyPhoneInitialize: function(component, eOpts) {
        component.setLabelAlign('left');
    },

    onCompanyVATInitialize: function(component, eOpts) {
        component.setLabelAlign('left');
    },

    onCompanyEditBackBtnTap: function(button, e, eOpts) {
        G.Pop();
    },

    onCompanyEditConfirmTap: function(button, e, eOpts) {

        var loggedUserId = Ext.getStore('AuthStore').getAt(0).get('UserId');
        var form = button.up();
        var fields=form.getFields();
        fields.UserId.setValue(loggedUserId);
        var obj = form.getValues();
        obj.Logo = G.get('companyImg').getSrc();

        if(obj.CompanyName.trim()==null || obj.CompanyName.trim()=="")
        {
            fields.CompanyName.addCls('isRequired');
            Ext.Msg.alert('',Identifier.Title.Alert_Company_TxtNameValidation);
            return null;
        }
        if(obj.CompanyAddress != null && obj.CompanyAddress != "" && !G.ValidateAlphanumeric(obj.CompanyAddress))
        {
            fields.CompanyAddress.addCls('isRequired');
            Ext.Msg.alert('',"Unable to save,  Address is invalid.");
            return null;
        }
        if(obj.CompanyAddress != null && obj.CompanyAddress != "" && !G.ValidateAlphanumeric(obj.CompanyAddress))
        {
            fields.CompanyAddress.addCls('isRequired');
            Ext.Msg.alert('',"Unable to save,  Address is invalid.");
            return null;
        }


        if(obj.Phone != null && obj.Phone != "" && !G.ValidateInteger(obj.Phone))
        {
            fields.Phone.addCls('isRequired');
            Ext.Msg.alert('',"Unable to save,  Phone No is invalid.");
            return null;
        }
        var countryId=G.get('cmbCompanyCountry');
        if(countryId._value === null)
        {
            Ext.Msg.alert('',"Choose any country to proceed.");
            return ;
        }
        var industryId=G.get('cmbCompanyIndustry');
        if(industryId._value === null)
        {
            Ext.Msg.alert('',"Choose any industry to proceed.");
            return ;
        }

        obj.CountryId=countryId._value.data.CountryId;
        obj.IndustryId=industryId._value.data.IndustryId;

        Ext.Ajax.request({
            url: ApiBaseUrl+'UserCompany/AddUserCompany',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            params : Ext.JSON.encode(obj),
            success: function(conn, response, options, eOpts) {
                var result = Ext.JSON.decode(conn.responseText);
                if (result.success) {
                    var loggedUserId = Ext.getStore('AuthStore').getAt(0).get('UserId');
                    Ext.getStore('CompanyDetail').load({
                        params : { userId : loggedUserId },
                        callback : function() {
                            if(Ext.getStore('CompanyDetail').data.items.length<=0){
                                G.show('CompanySplash');
                                G.get('CompanySplash').setHtml(Identifier.Title.Splash_Company);
                                G.hide('CompanyDetailTpl');
                            }
                            else{
                                G.hide('CompanySplash');
                                G.show('CompanyDetailTpl');
                            }
                        }
                    });
                    G.Pop();
                } else {
                   G.showGeneralFailure('', response);
                }
            },
           failure: function(response, request) {
                //failure catch
               G.showGeneralFailure('', response);
            }
        });

    },

    onCompanyNameInitialize: function(component, eOpts) {
        component.setLabelAlign('left');
    },

    onCompanyNameKeyup: function(textfield, e, eOpts) {
        if(textfield.element.dom.className.indexOf('isRequired')>-1)
        {
            textfield.removeCls('isRequired');
        }
    },

    onCompanyAddressKeyup: function(textfield, e, eOpts) {
        if(textfield.element.dom.className.indexOf('isRequired')>-1)
        {
            textfield.removeCls('isRequired');
        }
    },

    onCompanyPhoneKeyup: function(textfield, e, eOpts) {
        if(textfield.element.dom.className.indexOf('isRequired')>-1)
        {
            textfield.removeCls('isRequired');
        }
    },

    onCompanyPhoneInitialize: function(component, eOpts) {
        component.setLabelAlign('left');
    },

    onCompanyVATKeyup: function(textfield, e, eOpts) {
        if(textfield.element.dom.className.indexOf('isRequired')>-1)
        {
            textfield.removeCls('isRequired');
        }
    },

    onCompanyFileFieldItemIdInitialize: function(component, eOpts) {
        G.get("CompanyFileFieldItemId").on('change', function(event){
            file = event.getFiles()[0];
            var reader = new FileReader();
            reader.onload = function(event){

                //console.log(event.target.result);
                Ext.ComponentQuery.query('#companyImg')[0].setSrc(event.target.result);
            };
            reader.onerror = function(){
                console.log('On Error Event');
            };
            reader.readAsDataURL(file);
        });
    }

});