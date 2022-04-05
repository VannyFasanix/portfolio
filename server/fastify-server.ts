const fastify = require("fastify")();
const gatsby = require("gatsby-plugin-nodejs");

gatsby.prepare({ app: fastify, framework: "fastify" }, () => {});

const port = process.env.PORT || 8080;

fastify.get('/items', (req: any, reply: any) => {
    reply.send({test: 'Hello'})
}) 

fastify.listen(port, (err: any) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`listening on port ${port}`);
});