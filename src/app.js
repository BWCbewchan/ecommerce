const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

//init middleware
app.use(morgan("dev"));
//helmet dùng để ngăn chặn các trang web khác vào đọc cookie và công nghệ cũng chúng ta. nhầm mục tấn công và đọc mã nguồn
app.use(helmet())
//giảm tải việc dowload của web lại với compression
app.use(compression())


//init db
//req (request) yêu cầu gửi đến máy chủ
//res (response) trả về lại cho giao diện
//next: Đây là hàm callback 

//init routes
app.get("/", (req, res ,next) => {
    const strcompress = 'hello fantipjs'
    return res.status(200).json({
        message:"wellcom fantipjs",
        metadata: strcompress.repeat(10000)
    })
})
//handling error

module.exports = app