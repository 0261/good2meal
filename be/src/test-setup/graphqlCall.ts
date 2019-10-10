import 'reflect-metadata';
import { graphql } from 'graphql';
import { createSchema } from '../core/createSchema';

interface GraphqlCall {
    source: string;
    variableValues?: {
        [key: string]: any;
    };
}

export const graphqlCall = async ({ source, variableValues }: GraphqlCall) => {
    return graphql({
        schema: await createSchema(),
        source,
        variableValues,
    });
};
