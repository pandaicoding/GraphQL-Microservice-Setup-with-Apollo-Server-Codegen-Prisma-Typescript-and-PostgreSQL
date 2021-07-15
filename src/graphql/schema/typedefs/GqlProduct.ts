import { GraphQLBoolean, GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

const GqlProduct = new GraphQLObjectType({
    name: 'Product',
    description: 'A product',
    fields: {
        id: {
            type: GraphQLNonNull(GraphQLID),
            description: 'id of the product'
        },
        productName: {
            type: GraphQLString,
            description: 'name of product'
        },
        productPrice: {
            type: GraphQLBoolean,
            description: 'price of product'
        },
        description: {
            type: GraphQLString,
            description: 'description of product'
        },
    },
});

export default GqlProduct;