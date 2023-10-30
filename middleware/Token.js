const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    const token = req.header('Authorization')

    if(!token) {
        return res.status(401).send({
            errorType: 'token non presente',
            statusCode: 401,
            message: 'serve il token'
        })
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.utente = verified

        next()
    } catch (error) {
        res.status(403).send({
            statusCode: 403,
            errorType:'token error',
            message:'token scaduto o non valido'
        })
    }
}