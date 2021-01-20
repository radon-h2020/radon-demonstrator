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

    if (event.pathParameters.id === undefined) {
        return callback(null, { headers: headers, statusCode: 400, body: JSON.stringify("Missing 'id' in URL path.")});
    }

    const params = {
        TableName: process.env.TODOS_TABLE,
        Key: {
            id: event.pathParameters.id
        }
    };

    dynamoDb.delete(params, (error) => {
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: headers,
                body: JSON.stringify('Couldn\'t delete todo.'),
            });
            return;
        }

        callback(null, {
            headers: headers,
            statusCode: 200,
            body: JSON.stringify({})
        });
    });

};
