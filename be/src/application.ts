import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createSchema } from './core/createSchema';

import { RequestHandlerParams } from 'express-serve-static-core';

export class Application {
    private readonly app: Express.Application = Express();
    async start(): Promise<void> {
        try {
            const server = new ApolloServer({
                schema: await createSchema(),
            });
            server.applyMiddleware({ app: this.app });
            this.app.listen(4000, () =>
                console.log('http://localhost:4000/graphql'),
            );
        } catch (error) {
            throw new Error(error);
        }
    }
    public use(...handlers: Array<RequestHandlerParams>): void {
        this.app.use(...handlers);
    }
}
