const fastify = require("fastify")();
const gatsby = require("gatsby-plugin-nodejs");

gatsby.prepare({ app: fastify, framework: "fastify" }, () => {});

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
