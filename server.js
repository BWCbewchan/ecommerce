const app = require('./src/app');

const PORT = 3055

//cho app chỉ định port http là 3055,
const server = app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

// khi ctrol+c thì nó báo server là dừng lại
process.on('SIGINT', () => {
    server.close(() => {
        console.log('Exit Server Express');
        
    })
})