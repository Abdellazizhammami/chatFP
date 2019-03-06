const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
let options =
{
    swaggerDefinition:
    {
        swagger: '2.0'
        , info:
        {
            title: 'API Explorer ok' // Title (required)
            , version: '1.0.0' // Version (required)
            , contact:
            {
                name: ''
                , url: ''
            }
        }
    },
    host: 'localhost:3001',
        basePath: '/',
        produces: [
            "application/json"
        ],
        schemes: ['http'],
    apis:['./server/routes/home.js',
'./server/routes/dashboard/Admin/listerUser.js','./server/routes/login.js']
};
const swaggerSpec = swaggerJSDoc(options);
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));





module.exports = router;