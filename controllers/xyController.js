const main = {
    index:(req, res) =>{
        res.render('index');
    },
    about:(req, res) =>{
        res.render('about');
    },
    contact:(req, res) =>{
        res.render('contact');
    },
    gifts:(req, res) =>{
        res.render('gifts');
    },
    shop:(req, res) =>{
        res.render('shop');
    },
};

module.exports = main;