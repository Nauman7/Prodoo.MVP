/*
 * File: app/model/SearchRequestList.js
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

Ext.define('ProDooMobileApp.model.SearchRequestList', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        idProperty: 'RequestId',
        fields: [
            {
                name: 'RequestId',
                type: 'int'
            },
            {
                name: 'RequestName'
            },
            {
                name: 'StartDate'
            },
            {
                name: 'EndDate'
            },
            {
                name: 'Description'
            },
            {
                name: 'RequestTemplateId'
            },
            {
                name: 'Location'
            },
            {
                name: 'Language'
            },
            {
                name: 'Duration'
            },
            {
                name: 'DurationType'
            },
            {
                name: 'HourlyFee'
            },
            {
                name: 'FeeCurrencyType'
            },
            {
                name: 'SavedSearchedId'
            },
            {
                name: 'OtherDetails'
            },
            {
                name: 'IsSent'
            },
            {
                name: 'UserId'
            },
            {
                name: 'ShortlistId'
            },
            {
                name: 'Company'
            },
            {
                name: 'UserCompanyId'
            },
            {
                name: 'IsConfirmed'
            },
            {
                name: 'IsRead'
            },
            {
                name: 'CreateDate'
            }
        ]
    }
});