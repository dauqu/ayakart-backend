const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const fileUpload = require("express-fileupload");

//Cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());



//Allow cors
const cors = require("cors");
//Loop of allowed origins
const allowedOrigins = ["http://localhost:3001", "http://localhost:3000"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Enable file upload using express-fileupload
app.use(
  fileUpload({
    createParentPath: true,
  })
);

//Server accept JSON
app.use(express.json());

//Connect to database
const connectDB = require("./config/database");
connectDB();

//Send html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
//Create User API
// const users = require("./routes/users");
app.use("/api/users", require("./routes/users"));

//Request and responce for login user
// const login = require("./routes/login");
app.use("/api/login", require("./routes/login"));

//Request and responce for Category
// const category = require("./routes/category");
app.use("/api/categories", require("./routes/category"));

//Request and responce for Notes
// const note = require("./routes/note");
app.use("/api/note", require("./routes/note"));

//Request and responce for Notes
// const products = require("./routes/products");
app.use("/api/products", require("./routes/products"));

//Request and responce for Files
// const files = require("./routes/files");
app.use("/api/files", require("./routes/files"));

//Request and responce for Coupon
// const coupon = require("./routes/coupon");
app.use("/api/coupon", require("./routes/coupon"));

//Request and responce for Blogs
// const blogs = require("./routes/blogs");
app.use("/api/blogs", require("./routes/blogs"));

//Request and responce for Support
// const support = require("./routes/support");
app.use("/api/support", require("./routes/support"));

//Request and responce for Server Info
// const serverInfo = require("./routes/settings/server_info");
app.use("/api/server_info", require("./routes/settings/server_info"));

//Request and responce for WebSocket
// const ws = require("./routes/socket");
app.use("/api/socket", require("./routes/socket"));

//Request and responce for mail
// const mail = require("./routes/settings/mail");
app.use("/api/mail", require("./routes/settings/mail"));

//Request and responce for MenuItem
// const menuItem = require("./routes/menu_item");
app.use("/api/menu_item", require("./routes/menu_item"));

//Request and responce for Settings
// const settings = require("./routes/settings/settings");
app.use("/api/settings", require("./routes/settings/settings"));

//Request and responce for Comments
// const comments = require("./routes/comments");
app.use("/api/comments", require("./routes/comments"));

//Request and responce for Orders
// const orders = require("./routes/orders");
app.use("/api/orders", require("./routes/orders"));

//Profile Request and responce
// const profile = require("./routes/profile");
app.use("/api/profile", require("./routes/profile"));

//Request and responce for Invoice
// const invoice = require("./routes/invoice");
app.use("/api/invoice", require("./routes/invoice"));

//Request and responce for Cors
// const cors_settings = require("./routes/settings/cors");
app.use("/api/cors", require("./routes/settings/cors"));

//Request and responce for Cart
// const cart = require("./routes/cart");
app.use("/api/cart", require("./routes/cart"));

//Request and responce for Template
// const template = require("./routes/settings/template");
app.use("/api/template", require("./routes/settings/template"));

//Request and responce for Transcation History
// const transactionHistory = require("./routes/transaction_history");
app.use("/api/transaction_history", require("./routes/transaction_history"));

//Request and responce for Payment
// const payment = require("./routes/payments/razorpay");
app.use("/api/payment", require("./routes/payments/razorpay"));

//Request and responce for Notifications
// const notifications = require("./routes/notifications");
app.use("/api/notifications", require("./routes/notifications"));

//Request and responce for visits 
// const visits = require("./routes/statistics/visits");
app.use("/api/visits", require("./routes/statistics/visits"));

//Request and responce for statistics
// const statistics = require("./routes/statistics/statistics");
app.use("/api/statistics", require("./routes/statistics/statistics"));

//Request and responce for register
// const register = require("./routes/register_user");
app.use("/api/register", require("./routes/register_user"));

//Request and responce for token
// const token = require("./routes/token");
app.use("/api/token", require("./routes/token")); 

//Request and responce for tags
app.use("/api/tags", require("./routes/tags"));

//Request and responce for pages
app.use("/api/pages", require("./routes/pages"));


app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`); 
});
