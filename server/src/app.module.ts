import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        GraphQLModule.forRoot({
            resolverValidationOptions: {
                requireResolversForResolveType: false,
            },
        }),
        MongooseModule.forRoot(`${process.env.CONNECTION_STRING}`),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
