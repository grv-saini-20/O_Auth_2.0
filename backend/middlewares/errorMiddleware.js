const notFound = (req, res, next) => {
    const error =  new Error(`Not Found ${req.originalUrl}`);
    error.status = 404;
    next(error);
}

const errorHandler = (err, req, res, next) => {
    const statusCode = req.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message || "Internal Server Error";

    if(err.name === "CastError" || err.name === "ObjectId") {
        statusCode = 404;
        message = "Resource not found";
    }


    res.status(statusCode).json({
        message
    })
}

export { notFound, errorHandler };