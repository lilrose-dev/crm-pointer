const http = require("http");
const express = require("express");
const app = express();
const { PORT } = require("./config");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const modules = require("./modules");
app.use(cors());

const server = new ApolloServer({
	modules,
	context: ({ req }) => {
		return {
			token: req.headers?.token
		}
	},
	introspection: true,
	playground: true,
});

const httpServer = http.createServer(app);
server.applyMiddleware({ app });

server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: PORT }, () => {
	console.log(PORT + server.graphqlPath);
	console.log(PORT + server.subscriptionsPath);
});