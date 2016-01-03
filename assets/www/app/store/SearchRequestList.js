/*
 * File: app/store/SearchRequestList.js
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

Ext.define('ProDooMobileApp.store.SearchRequestList', {
    extend: 'Ext.data.Store',

    requires: [
        'ProDooMobileApp.model.SearchRequestList',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    config: {
        model: 'ProDooMobileApp.model.SearchRequestList',
        storeId: 'SearchRequestList',
        proxy: {
            type: 'rest',
            timeout: 60000,
            url: '../webapi/api/requests',
            reader: {
                type: 'json',
                rootProperty: 'items.Sent'
            },
            writer: {
                type: 'json'
            }
        },
        listeners: [
            {
                fn: 'onJsonstoreBeforeSync',
                event: 'beforesync'
            }
        ]
    },

    onJsonstoreBeforeSync: function(options, eOpts) {
                var storeApi = this.getProxy().getApi();
                        if(storeApi.read === undefined)
                            storeApi.read = ApiBaseUrl + 'requests/GetRequests';
                        if(storeApi.create === undefined)
                            storeApi.create = ApiBaseUrl + 'requests/post';
    }

});