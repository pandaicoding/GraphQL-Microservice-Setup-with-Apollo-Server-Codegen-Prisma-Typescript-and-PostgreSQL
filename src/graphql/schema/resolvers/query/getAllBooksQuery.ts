import { Book } from "@prisma/client";
import { getAllBooks } from "@src/data/bookService";
import { IApolloServerContext } from "@src/lib/interfaces/IApolloServerContext";
import { GraphQLList } from "graphql";
import GqlBook from "../../typedefs/GqlBook";

const getAllBooksQuery = {
    type: GraphQLList(GqlBook),
    resolve: (
        _source: unknown,
        _args: unknown,
        _context: IApolloServerContext,
        _info: unknown
        ): Promise<Book[]> => {
        return getAllBooks();
    },
};

export default getAllBooksQuery;