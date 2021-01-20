'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = (event, context, callback) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Content-Type": "application/json",
        "X-Requested-With": "*",
        "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,x-api-key,x-requested-with,Cache-Control',
    };
    
    const params = {
        TableName: process.env.TODOS_TABLE
    };

    dynamoDb.scan(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(null, {
                headers: headers,
                statusCode: error.statusCode || 501,
                body: JSON.stringify('Couldn\'t fetch the todos.'),
            });
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify(result.Items)
        };
        callback(null, response);
    });
};
