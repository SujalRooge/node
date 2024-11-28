const { app } = require('@azure/functions');

app.http('HttpExample', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        // Log the incoming request
        context.log(`HTTP trigger function processed a request. URL: ${request.url}`);

        // Respond with "Hello, Azure!"
        return { 
            status: 200, 
            body: "Hello, Azure!" 
        };
    }
});
