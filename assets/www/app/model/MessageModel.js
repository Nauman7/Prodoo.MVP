/*
 * File: app/model/MessageModel.js
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

Ext.define('ProDooMobileApp.model.MessageModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'MessageId',
                type: 'int'
            },
            {
                name: 'Subject',
                type: 'string'
            },
            {
                name: 'MessageBody',
                type: 'string'
            },
            {
                name: 'User'
            },
            {
                name: 'DateCreated'
            },
            {
                name: 'IsRead',
                type: 'boolean'
            },
            {
                name: 'UserRequestMessageId',
                type: 'int'
            },
            {
                name: 'UserName'
            }
        ]
    }
});