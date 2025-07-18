const User = require("../models/user");


module.exports.renderSignupForm = (req,res) =>{
    res.render("users/signup.ejs");
}

module.exports.signup = async(req,res) =>{   
   try{
    let {username, email,password} = req.body;
    const newUser = new User({email,username});
    const registeredUser = await User.register(newUser,password);
    console.log(registeredUser); 
    req.login(registeredUser,(err) =>{
        if(err){
            return next(err);
        }
        req.flash("success","Welcome to StayUp");
        res.redirect("/listings");
    });
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/signup")

    }
    
}

module.exports.renderLoginForm = (req,res) =>{
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to StayUp!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    delete req.session.redirectUrl;
    res.redirect(redirectUrl);
  }

  module.exports.logout = (req,res) =>{
    req.logout((err) =>{
        if(err){
           return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    })
}

module.exports.renderLoginForm = (req,res) =>{
    
    if (req.query.returnTo) {
        req.session.redirectUrl = req.query.returnTo;
    }
    res.render("users/login.ejs");
};