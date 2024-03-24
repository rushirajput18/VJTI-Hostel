const isAdmin = (req, res, next) => {
    // Check if the user making the request is an admin
    if (req.user && req.user.userype === 'admin') {
        return next(); // Allow access if user is an admin
    } else {
        return res.status(403).json({ error: 'Access denied. Admin privilege required.' });
    }
};

const isBasicUser = (req, res, next) => {
    // Check if the user making the request is a basic user
    if (req.user && req.user.usertype === 'basic') {
        return next(); // Allow access if user is a basic user
    } else {
        return res.status(403).json({ error: 'Access denied. Basic user privilege required.' });
    }
};

module.exports = { isAdmin, isBasicUser };
