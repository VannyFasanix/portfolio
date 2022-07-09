const dbConnector = require('./db-connector.js')
const firstRoute = require('./ff-routes.js')
const gatsby = require('gatsby-plugin-nodejs')

const fastify = require('fastify')({
    logger: true
  })

gatsby.prepare({ app: fastify, framework: 'fastify' }, () => {});

fastify.register(dbConnector)
fastify.register(firstRoute)

fastify.listen(8000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})