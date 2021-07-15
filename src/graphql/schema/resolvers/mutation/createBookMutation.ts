import { Book } from "@prisma/client";
import { createBook } from "@src/data/bookService";
import { IApolloServerContext } from "@src/lib/interfaces/IApolloServerContext";
import { GraphQLNonNull } from "graphql";
import CreateBookInput from "../../typedefs/CreateBookInput";
import GqlBook from "../../typedefs/GqlBook";

const createBookMutation = {
    type: GqlBook,
    args: {
        input: {
            type: GraphQLNonNull(CreateBookInput),
            description: 'Book input to be created',
        },
    },
    resolve: async (
        _source: unknown,
        {input: {title, author}}: any,
        _context: IApolloServerContext
    ): Promise<Book> => {
        return createBook(title, author);
    },
};

export default createBookMutation;