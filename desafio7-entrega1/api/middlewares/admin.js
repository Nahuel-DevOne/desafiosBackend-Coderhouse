const isAdmin = (bool) => {
    if (bool) {
        return true;
    } else {
        return false;
    }
}

const admin = (req, res, next) => {
    const admin = isAdmin(true);

    if (admin) {
        next();
    } else {
        res.status(401).json({ error: "You are not authorized" });
    }
}

module.exports = admin;