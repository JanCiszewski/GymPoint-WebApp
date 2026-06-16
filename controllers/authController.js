const showLoginPage = (req, res) => {
    res.render("loginpage");
}

const showRegisterPage = (req, res) => {
    res.render("registerpage")
}

module.exports = {
    showLoginPage,
    showRegisterPage
}