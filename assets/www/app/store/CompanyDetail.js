/*
 * File: app/store/CompanyDetail.js
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

Ext.define('ProDooMobileApp.store.CompanyDetail', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    config: {
        storeId: 'CompanyDetail',
        fields: [
            {
                name: 'CompanyName'
            },
            {
                name: 'CompanyAddress'
            },
            {
                name: 'CountryId'
            },
            {
                name: 'Vat'
            },
            {
                name: 'Phone'
            },
            {
                name: 'Detail'
            },
            {
                name: 'UserCompanyId'
            },
            {
                name: 'Logo'
            }
        ],
        proxy: {
            type: 'rest',
            reader: {
                type: 'json',
                rootProperty: 'items'
            },
            writer: {
                type: 'json'
            }
        },
        listeners: [
            {
                fn: 'onJsonstoreBeforeLoad',
                event: 'beforeload'
            }
        ]
    },

    onJsonstoreBeforeLoad: function(store, operation, eOpts) {
        var url = ApiBaseUrl + 'UserCompany/Get';
        var storeApi = store.getProxy().getApi();
        if(storeApi.read === undefined)
            storeApi.read = url;
    }

});