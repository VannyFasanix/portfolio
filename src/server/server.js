
import Fastify from 'fastify'
import dbConnector from './db-connector.js'
import firstRoute from './ff-routes.js'
import  gatsby from 'gatsby-plugin-nodejs'

const fastify = Fastify({
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