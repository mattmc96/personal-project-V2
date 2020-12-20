import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
    // constructor (
    // private readonly authorsService: AuthorsService
    // private readonly postsService: PostsService,
    // } {}

    @Query(() => String)
    async hello() {
        return 'hello';
    }
}
