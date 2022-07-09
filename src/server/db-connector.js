// ESM
const fastifyPlugin = require('fastify-plugin')
const fastifyMongo = require('fastify-mongodb')
const environment = require('../environment/environment.js')

async function dbConnector (fastify, options) {
    try {
        fastify.register(fastifyMongo, {
            url: "mongodb+srv://vannyfasanix:"+environment.mongodb.password+"@vannyscluster.l04mt.mongodb.net/?retryWrites=true&w=majority"
          })
    }
    catch (err) {
        throw err
    }

}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConnector)