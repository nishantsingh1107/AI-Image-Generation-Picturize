import jwt from 'jsonwebtoken'


const userAuth = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({
            isSucess: false,
            message: "Not Authorized, Login Again"
        });
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            req.userId = tokenDecode.id;
        } else {
            return res.json({
                isSucess: false,
                message: "Not Authorized, Login Again"
            });
        }
        next();
    } catch (error) {
        res.json({
            isSucess: false,
            message: error.message
        });
    }
};

export default userAuth;