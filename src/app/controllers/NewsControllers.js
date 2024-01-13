class NewsControllers {
    index(req, res) {
        res.render("news");
    }

    detail(req, res) {
        res.send("news detail");
    }
}
module.exports = new NewsControllers;