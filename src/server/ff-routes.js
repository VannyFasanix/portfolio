async function routes (fastify, options) {
    const collection = fastify.mongo.client.db('firstdb').collection('users')
  
    fastify.get('/products', async (request, reply) => {
      const result = await collection.find({}).toArray()
      if (result.length === 0) {
        console.info(result);
        throw new Error('No documents found')
      }
      reply.sent=true
      return result
    })

  }
  
export default routes