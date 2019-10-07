import { DocumentClient } from 'aws-sdk/clients/dynamodb';

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
}
