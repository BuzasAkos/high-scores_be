export const getMessage = async function (req, res) {
    const msg = 'Hello from the ExpressJs back-end!'
    res.status(200).json({
        message: msg
    })
} 