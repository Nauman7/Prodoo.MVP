/*
 * File: app/store/ConfigurationStore.js
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

Ext.define('ProDooMobileApp.store.ConfigurationStore', {
    extend: 'Ext.data.Store',

    requires: [
        'ProDooMobileApp.model.ConfigurationModel',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'ProDooMobileApp.model.ConfigurationModel',
        storeId: 'ConfigurationStore',
        proxy: {
            type: 'rest',
            url: '../WebAPI/api/Configuration/ConfigurationList',
            reader: {
                type: 'json',
                rootProperty: 'items'
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
        var url = ApiBaseUrl + 'Configuration/ConfigurationList';
                        var storeApi = store.getProxy().getApi();
                        if(storeApi.read === undefined)
                            storeApi.read = url;
    }

});