'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = (event, context, callback) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "X-Requested-With": "*",
        "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,x-api-key,x-requested-with,Cache-Control',
    };

    const params = {
        TableName: process.env.TODOS_TABLE,
        Key: {
            id: event.pathParameters.id
        }
    };

    dynamoDb.get(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: 'Couldn\'t fetch the todo item.',
            });
            return;
        }

        if (result === undefined || result.Item === "") {
            callback(null, { statusCode: 400, body: "No item found. ", headers: { "Content-Type": "text/plain" } });
        } else {

            callback(null, {
                headers: headers,
                statusCode: 200,
                body: JSON.stringify(result.Item),
            });
        }
    });

};
