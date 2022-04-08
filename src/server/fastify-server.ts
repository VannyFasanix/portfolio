const fastify = require("fastify")({logger: true});
const gatsby = require("gatsby-plugin-nodejs");

gatsby.prepare({ app: fastify, framework: "fastify" }, () => {});

async function dbConnector (fastify: any, options: any) {
  fastify.register(require('fastify-mongodb'), {
    url: 'mongodb+srv://vannyfasanix:<password>@vannyscluster.l04mt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  }).then(()=> console.log("Mongo pronto"))
}


const port = process.env.PORT || 8000;

fastify.get('/items', (req: any, reply: any) => {
    reply.send({test: 'Hello'})
}) 

// Run the server!
const start = async () => {
  try {
    await fastify.listen(port)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
