import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
    imports: [
        GraphQLModule.forRoot({
            resolverValidationOptions: {
                requireResolversForResolveType: false,
            },
        }),
        MongooseModule.forRoot(
            `mongodb+srv://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_URI}`,
        ),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
