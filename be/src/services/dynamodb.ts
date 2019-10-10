import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import * as expression from '@typemon/dynamodb-expression';

interface Tables {
    restaurant: {
        location: string;
        sortKey: string;
        [key: string]: any;
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
    public async query() {
        try {
            console.log('dynamodb');
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

    public async put<K extends keyof Tables>(tableName: K, Item: Tables[K]) {
        try {
            const putOption = {
                TableName: tableName,
                Item,
            };
            console.log(putOption);
            await this.client.put(putOption).promise();
        } catch (error) {
            throw error;
        }
    }
}
