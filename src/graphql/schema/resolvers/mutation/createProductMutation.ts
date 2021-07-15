import { Book } from "@prisma/client";
import { createBook } from "@src/data/bookService";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import { GraphQLNonNull } from "graphql";
import CreateBookInput from "../../typedefs/CreateBookInput";
import GqlProduct from "../../typedefs/GqlProduct";

const createProductMutation = {
    type: GqlProduct,
    args: {
        input: {
            type: GraphQLNonNull(CreateBookInput),
            description: 'Product input to be created',
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

export default createProductMutation;