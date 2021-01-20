'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB();

module.exports.handler = (event, context, callback) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Content-Type": "application/json",
        "X-Requested-With": "*",
        "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,x-api-key,x-requested-with,Cache-Control',
    };

    const todoItem = JSON.parse(event.body);

    if (event.pathParameters.id === undefined) {
        return callback(null, { headers: headers, statusCode: 400, body: JSON.stringify("Missing 'id' in URL path.")});
    }

    const updateNames = {};
    const updateValues = {};
    const updateArray = [];
    if (todoItem.completed !== undefined) {
        updateNames["#c"] = "completed";
        updateValues[":c"] = { BOOL: todoItem.completed };
        updateArray.push("#c = :c");
    }
    if (todoItem.todo !== undefined) {
        updateNames["#t"] = "todo";
        updateValues[":t"] = { S: todoItem.todo };
        updateArray.push("#t = :t");
    }
    if (updateArray.length == 0) {
        return callback(null, { statusCode: 400, body: "No properties passed to update. Supports 'completed' and 'todo'.", headers: { "Content-Type": "text/plain" } });
    }
    const timestamp = Math.floor(new Date() / 1000);
    updateNames["#u"] = "updated";
    updateValues[":u"] = { N: timestamp.toString() };
    updateArray.push("#u = :u");

    const params = {
        ExpressionAttributeNames: updateNames,
        ExpressionAttributeValues: updateValues,
        Key: {
            "id": {
                S: event.pathParameters.id
            }
        },
        ReturnValues: "ALL_NEW",
        TableName: process.env.TODOS_TABLE,
        UpdateExpression: "SET " + updateArray.join(', ')
    };

    dynamoDb.updateItem(params, (error, data) => {
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: headers,
                body: JSON.stringify('Couldn\'t update the todo item.'),
            });
            return;
        }

        callback(null, {
            headers: headers,
            statusCode: 200
        });
    });

};
