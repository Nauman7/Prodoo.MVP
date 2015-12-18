/*
 * File: app/store/SavedShortlistStore.js
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

Ext.define('ProDooMobileApp.store.SavedShortlistStore', {
    extend: 'Ext.data.Store',

    requires: [
        'ProDooMobileApp.model.SearchResultSaved',
        'Ext.data.proxy.Memory',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'ProDooMobileApp.model.SearchResultSaved',
        storeId: 'SavedShortlistStore',
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    }
});