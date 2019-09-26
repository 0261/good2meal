import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import path from 'path';
const resolversPath = path.resolve(__dirname, '..');
export const createSchema = async () =>
    await buildSchema({
        resolvers: [`${resolversPath}/resolvers/**/*.resolver.ts`],
        container: Container,
    });
