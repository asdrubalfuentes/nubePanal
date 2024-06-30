const Trend = require('../models/trendModel');

const resolvers = {
  Query: {
    getTrends: async () => {
      return await Trend.find({});
    },
  },
  Mutation: {
    updateTrend: async (_, { id, value }) => {
      return await Trend.findByIdAndUpdate(id, { value }, { new: true });
    },
  },
};

module.exports = resolvers;
