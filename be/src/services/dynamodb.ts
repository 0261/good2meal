import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { Expression } from '@typemon/dynamodb-expression';
import { Restaurant } from '../resolvers/restaurants/restaurant.model';

interface Tables {
    restaurant: {
        partitionKey: string;
        sortKey: string;
        [key: string]: any;
        model: Restaurant;
    };
}
export class DynamoDB {
    private static instance: DynamoDB;
    private client!: DocumentClient;
    constructor() {
        if (DynamoDB.instance) {
            return DynamoDB.instance;
        }
        this.client = new DocumentClient({
            region: 'ap-northeast-2',
        });
        DynamoDB.instance = this;
    }
    public async query<K extends keyof Tables>(
        tableName: K,
        expression: Expression,
        filterExpression?: Expression,
    ): Promise<DocumentClient.QueryOutput> {
        try {
            const queryOption: DocumentClient.QueryInput = {
                TableName: tableName,
                KeyConditionExpression: expression.expression,
                ExpressionAttributeNames: Object.assign(
                    expression.names,
                    filterExpression ? filterExpression.names : undefined,
                ),
                ExpressionAttributeValues: Object.assign(
                    expression.values,
                    filterExpression ? filterExpression.values : undefined,
                ),
                FilterExpression: filterExpression
                    ? filterExpression.expression
                    : undefined,
                Limit: 15,
            };
            const results = await this.client.query(queryOption).promise();
            return results;
        } catch (error) {
            throw error;
        }
    }
    public async update() {
        try {
            console.log('dynamodb');
        } catch (error) {
            throw error;
        }
    }
    public async delete() {
        try {
            console.log('dynamodb');
        } catch (error) {
            throw error;
        }
    }
    public async get() {
        try {
            console.log('dynamodb');
        } catch (error) {
            throw error;
        }
    }

    public async put<K extends keyof Tables>(
        tableName: K,
        partitionKey: Tables[K]['partitionKey'],
        sortKey: Tables[K]['sortKey'],
        Item: any,
    ) {
        try {
            const putOptions: DocumentClient.PutItemInput = {
                TableName: tableName,
                Item: {
                    location: partitionKey,
                    sortKey,
                    ...Item,
                },
            };
            await this.client.put(putOptions).promise();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
