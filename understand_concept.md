`Middleware`

    Middleware function is that have the access to request object ,the response
    Object and next Middleware function in the application of req res life cycle.


    our controller function has req res access
    middleware is very closely related to controller


    what is this app.use()

    app.use is also like middleware

    Application level middleware
        bind the application-level middleware instance of the app object by using
        the app.use() and app.method() functions where METHOD is the HTTP method
        of the request that the middleware function handles(such as get post or put)
        in lowercase

    for every request that in your services you want to work for that you use app.use
    when you do app.use(bodyParser.json())   this will work for all api for bodyParser
    before the req reach the controller for this you are intercepting the middleware
    anything interpeting your request is middleware
    this is the application level middleware

    there also package like response-time(it use for creating middleware and records the response time is defined elapsed time when request enters this middleware to when the headers are written out to the client)


    your order of middleware which you are calling need to be complete in the order
    because middleware is also function
    
`ERROR`

    class BadRequest extends Error{

    constructor(propertyMissing){
        const errorMessage = `${propertyMissing} is missing from the request body`;
        super(errorMessage);
        this.statusCode = 400;
        this.errorMessage = errorMessage;
    }
    }

    module.exports = {
    BadRequest
    }


    for Error why we are extending before the first is for all error
    we can'do new Error() its will effect the  clean code
    and second is for err.stack we get exact stack where error is coming
    if we don't do extends to ERROR so we don't get properly error in stack.

    

    controller never do any logic it s pass to services and in services 
    we do business logic
    and product services never interact with database
    database interaction should always happened with Repository



    when you do 
     name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false,
    }

    like this unique for name and when you hit api in postman with
    same name twice it still work and create data but our code 
    which is checking for unique why that not working?

    because when you use db.sync() it will add data it will not check unique ness
    