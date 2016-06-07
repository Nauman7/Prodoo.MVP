/*
 * File: app/controller/Account.js
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

Ext.define('ProDooMobileApp.controller.Account', {
    extend: 'Ext.app.Controller',
    alias: 'controller.Account',

    alternateClassName: [
        'Account'
    ],

    statics: {
        authCheck: function() {
            IsVistor=false;
            var authStore = Ext.getStore('AuthStore');
            if(authStore.data.items.length > 0){ // loggedin record exists

                //SystemLabel.LoadSystemLabel();  //Load all system label to local store
                var authRec = authStore.getAt(0);
                var userFullName = authRec.get('FirstName');
                var authType = authRec.get('AuthType');
                if(authType === 2 )
                {
                    FB.getLoginStatus(function(response) {
                        if (response.status === 'connected') {
                            //G.loadCommonLookups();
                            G.ShowView('StartScreen');
                            G.setLoggedUsername(userFullName);
                        } else if (response.status === 'not_authorized') {
                            authStore.removeAll();
                            authStore.sync();
                            G.ShowView('LoginForm');
                        } else {
                            authStore.removeAll();
                            authStore.sync();
                            G.ShowView('LoginForm');
                        }
                    });
                }
                else if(authType === 1){
                    if(IN.User.isAuthorized()){
                        //G.loadCommonLookups();
                        G.ShowView('StartScreen');
                        G.setLoggedUsername(userFullName);
                    }
                    else{
                        authStore.removeAll();
                        authStore.sync();
                        G.ShowView('LoginForm');
                    }
                }
                else if(authType === 0){
                    //G.loadCommonLookups();
                    G.ShowView('StartScreen');
                    G.setLoggedUsername(userFullName);
                }

            }
            else
            G.ShowView('LoginForm');
        },

        onVisitBtnClick: function() {
            Ext.Ajax.request({
                url: ApiBaseUrl+'Account/lookupdata',
                method: 'GET',
                scope: this,
                success: function(response, options) {
                    var result = G.getResponseData(response);
                    if (result.success) {
                        SearchResume.resetStores();
                        IsVistor=true;
                        G.ShowView('SearchResult');
                    } else {
                        G.showGeneralFailure();
                    }
                },
                failure: function(response, options) {
                    var response = G.getResponseData(response);
                    Ext.Msg.alert('', response.message);
                }
            });
        }
    },

    config: {
        control: {
            "mainview #showLoginButton": {
                tap: 'showLogin'
            },
            "mainview #showRegisterButton": {
                tap: 'showRegister'
            },
            "passwordfield#mypasswordfield1": {
                keyup: 'onMypasswordfield1Keyup'
            },
            "LoginForm #loginButton": {
                tap: 'login'
            },
            "button#createAccountBtn": {
                tap: 'onCreateAccountBtnTap'
            },
            "button#Logout": {
                tap: 'onLogoutTap'
            }
        }
    },

    showLogin: function(button, e, eOpts) {

        var loginForm = Ext.create('widget.loginform'),	// Login form
            mainView = this.getMainView();				// Main view

        // Navigate to login
        mainView.push({
            xtype: "loginform",
            title: "Login"
        });

    },

    showRegister: function(button, e, eOpts) {

        var registerForm = Ext.create('widget.registerform'),	// Registration form
            mainView = this.getMainView();						// Main view

        // Navigate to register
        mainView.push({
            xtype: "registerform",
            title: "Register"
        });

    },

    onMypasswordfield1Keyup: function(textfield, e, eOpts) {
        if (event.keyCode == 13)
        { this.LoginFunction(); }
    },

    login: function(button, e, eOpts) {
        this.LoginFunction();
    },

    onCreateAccountBtnTap: function(button, e, eOpts) {
        if(button.getText() === 'Forgot Password'){

            var email = G.get('forgetPasswordEmail').getValue();

            if(Ext.isEmpty(email) || !G.ValidateEmail(email))
            {
                Ext.Msg.alert('', 'Please enter valid email.');
                return;
            }

            Ext.Ajax.request({
                url: ApiBaseUrl+'Account/SendEmail?email='+email,
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                success: function(conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success) {
                        Ext.Msg.alert('', result.message);
                    } else {
                        Ext.Msg.alert('', result.message);
                    }
                    G.get('forgetPasswordEmail').setValue('');
                },
                failure: function(conn, response, options, eOpts) {
                    //failure catch
                    Ext.Msg.alert('',JSON.parse(conn.responseText).Message);
                }
            });
        }
        else{

            var form = button.up('formpanel'),			// register form
                values = form.getValues();				// Form values

            // preparing model for registration
            var model = values;
            model.ConfirmPassword = values.Password;
            model.ConfirmEmail = values.Email;
            model.IsFreelancer=values.IsFreelancer;

            if(Ext.isEmpty(values.Name) || Ext.isEmpty(values.Password)
               || Ext.isEmpty(values.Email) || Ext.isEmpty(values.IsFreelancer))
            {
                Ext.Msg.alert('', 'Please fill all form fields.');
                return;
            }

            if(!G.ValidateEmail(values.Email))
             {
                Ext.Msg.alert('', 'Please enter valid email address');
                return;
            }

            Ext.Ajax.request({
                url: ApiBaseUrl+'Account/Register',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                params : Ext.JSON.encode(model),
                success: function(conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText);
                    if (result.success) {
                        Ext.Msg.alert('', "Registered successfully, please login.");
                        G.ShowView('LoginForm');
                    } else {
                        Ext.Msg.alert('', result.message);
                    }
                },
                failure: function(conn, response, options, eOpts) {

                    Ext.Msg.alert('',JSON.parse(conn.responseText).Message);
                }
            });
        }
    },

    onLogoutTap: function(button, e, eOpts) {
        this.Logout();
    },

    Logout: function() {
        var authStore = Ext.getStore('AuthStore');

        if(authStore.data.items.length === 0)
        {
            G.ShowView('LoginForm');
            return;
        }

        authStore.removeAll();
        authStore.sync({
            success: function () {
                if(FB.getAccessToken() !== null ){
                    FB.logout();
                }
                //if(!Ext.isEmpty(IN.User) && IN.User.isAuthorized())
                //   IN.User.logout();
                G.ShowView('LoginForm');
            },
            failure: function (batch) {
                Ext.Msg.alert('', 'Please contact technical support');
            }
        });
        // to log out when user enter as visitor
        G.ShowView('LoginForm');
    },

    LoginFunction: function() {
        IsVistor=false;
        var form = G.get('LoginFormItemId');			// Login form
        var values = form.getValues();				// Form values


        var loginModel = values;
        loginModel.RememberMe = false;

        if(loginModel.Email && G.ValidateEmail(loginModel.Email) && loginModel.Password){
            Ext.Ajax.request({
                url: ApiBaseUrl+'Account/MobileLogin',
                method: 'POST',
                //headers: { 'Content-Type': 'application/json' },
                params : {Email: loginModel.Email, Password: loginModel.Password, RememberMe: loginModel.RememberMe},
                scope: this,
                success: function(response, options) {
                    var result = G.getResponseData(response);
                    if (result.success) {

                        var authStore = Ext.getStore('AuthStore');
                        var authModel = Ext.create('ProDooMobileApp.model.AuthModel');
                        authModel.data.ResumeId = result.items.ResumeId;
                        authModel.data.Email = result.items.Email;
                        authModel.data.FirstName = result.items.FirstName;
                        authModel.data.LastName = result.items.LastName;
                        authModel.data.UserId = result.items.UserId;
                        authModel.data.IsFreelancer= result.items.IsFreelancer;
                        authModel.data.IsNotificationRead = result.items.IsNotificationRead;
                        authModel.data.AuthType = 0; // without external login
                        authStore.add(authModel);
                        authStore.sync({
                            success: function () {

                                G.ShowView('StartScreen');
                                G.setLoggedUsername(result.items.FirstName);

                            },
                            failure: function (batch) {

                            }
                        });

                    } else {
                        Ext.Msg.alert('', 'Invalid email or password.');
                    }
                },
                failure: function(response, options) {

                    var response = G.getResponseData(response);
                    Ext.Msg.alert('', response.message);
                }
            });
        }
        else{
            Ext.Msg.alert('', 'Please add valid email and password to proceed.');
        }


    }

});