const userTypeDefs = `#graphql
    type User {
        _id: ID!
        username: String!
        name: String!
        password: String!
        gender: String!
        profilePicture: String
    }

    type Query{
        user(userId: ID!): User
        authUser: User
    }

    type Mutation {
        signUp(input: SignUpInput!): User
        login(input: LoginInput!): User
        logout: LogoutResponse
    }

    input SignUpInput{
        username: String!
        name: String!
        password: String!
        gender: String!
    }

    input LoginInput{
        username: String!
        password: String!
    }

    type LogoutResponse{
        message: String!
    }
`;

export default userTypeDefs;
