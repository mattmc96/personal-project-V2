import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        GraphQLModule.forRoot({
            resolverValidationOptions: {
                requireResolversForResolveType: false,
            },
            autoSchemaFile: 'schema.gql',
            typePaths: ['.//*.graphql'],
            playground: true,
        }),
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: process.env.CONNECTION_STRING,
            entities: [join(__dirname, '/.entity{.ts,.js}')],
            synchronize: true,
            useNewUrlParser: true,
            logging: true,
        }),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
