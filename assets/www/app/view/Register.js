/*
 * File: app/view/Register.js
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

Ext.define('ProDooMobileApp.view.Register', {
    extend: 'Ext.form.Panel',
    alias: 'widget.Register',

    requires: [
        'Ext.Img',
        'Ext.Label',
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Password',
        'Ext.field.Select',
        'Ext.Button'
    ],

    config: {
        cls: 'LoginFormCnt',
        items: [
            {
                xtype: 'container',
                cls: 'loginProdoo',
                margin: '10 0 0 0 ',
                items: [
                    {
                        xtype: 'image',
                        height: 138,
                        src: 'resources/images/Login.png'
                    },
                    {
                        xtype: 'label',
                        cls: 'loginHeading',
                        html: 'Prodoo'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                cls: 'loginForm',
                hidden: true,
                itemId: 'registerationForm',
                padding: 20,
                items: [
                    {
                        xtype: 'textfield',
                        cls: 'field',
                        clearIcon: false,
                        name: 'Name',
                        maxLength: 50,
                        placeHolder: 'Name'
                    },
                    {
                        xtype: 'emailfield',
                        cls: 'field',
                        clearIcon: false,
                        name: 'Email',
                        required: true,
                        maxLength: 50,
                        placeHolder: 'Email'
                    },
                    {
                        xtype: 'passwordfield',
                        cls: 'field',
                        clearIcon: false,
                        labelAlign: 'top',
                        name: 'Password',
                        required: true,
                        maxLength: 50,
                        placeHolder: 'Password'
                    },
                    {
                        xtype: 'selectfield',
                        cls: 'SignUpDropDown',
                        padding: '5 10',
                        labelAlign: 'top',
                        name: 'IsFreelancer',
                        placeHolder: 'Choose Preferred Usage',
                        autoSelect: false,
                        defaultPhonePickerConfig: {
                            zIndex: 999
                        },
                        defaultTabletPickerConfig: {
                            zIndex: 999
                        },
                        displayField: 'Type',
                        store: 'UserType',
                        valueField: 'Val'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                cls: 'loginForm',
                hidden: true,
                itemId: 'forgotPasswordForm',
                padding: 20,
                items: [
                    {
                        xtype: 'emailfield',
                        cls: 'field',
                        itemId: 'forgetPasswordEmail',
                        clearIcon: false,
                        name: 'User Email',
                        placeHolder: 'Email'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                cls: 'loginForm',
                hidden: true,
                itemId: 'resetPasswordForm',
                padding: 20,
                items: [
                    {
                        xtype: 'passwordfield',
                        cls: 'field',
                        clearIcon: false,
                        labelAlign: 'top',
                        name: 'New Password',
                        maxLength: 50,
                        placeHolder: 'Password'
                    },
                    {
                        xtype: 'passwordfield',
                        cls: 'field',
                        clearIcon: false,
                        labelAlign: 'top',
                        name: 'ConfirmPassword',
                        maxLength: 50,
                        placeHolder: 'Confirm Password'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'SignUpCnt',
                html: 'Already have an account?<br><span class=\'SignUp\'>Sign In</span>',
                itemId: 'SignIn',
                margin: '20 0',
                padding: '0 20',
                listeners: [
                    {
                        fn: function(element, eOpts) {
                            element.on('tap',function(event){
                                var itemClick = event.target;
                                console.log(itemClick);
                                if(itemClick.className=="SignUp"){
                                    G.ShowView('LoginForm');
                                }
                            });
                        },
                        event: 'painted'
                    }
                ]
            },
            {
                xtype: 'button',
                cls: 'loginBtn',
                docked: 'bottom',
                itemId: 'createAccountBtn',
                text: 'Create Account'
            }
        ]
    }

});