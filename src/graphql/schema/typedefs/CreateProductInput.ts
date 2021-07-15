import { GraphQLBoolean, GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const CreateProductInput = new GraphQLInputObjectType({
    name: 'CreateProductInput',
    description: 'Create product input',
    fields: {
        productName: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'product name',
        },
        productPrice: {
            type: new GraphQLNonNull(GraphQLBoolean),
            description: 'product price',
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'product description',
        },
    },
});

export default CreateProductInput;