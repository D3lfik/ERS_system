module.exports.Flash = function ( req , res ,next){
    res.locals.flash = {
        'success' : req.flash('sucess'),
        'error' : req.flash('error')
    }
    
    next();

}