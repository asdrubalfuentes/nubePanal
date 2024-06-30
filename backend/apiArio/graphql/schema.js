const { gql } = require('apollo-server-express');

const schema = gql`
  type Trend {
    id: ID!
    value: Float!
    timestamp: String!
  }

  type Query {
    getTrends: [Trend]
  }

  type Mutation {
    updateTrend(id: ID!, value: Float!): Trend
  }
`;

module.exports = schema;
