const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('/callback', (req, res) => {
    const logContent = `Thoi gian: ${new Date().toISOString()} - Body: ${JSON.stringify(req.body)} - Query: ${JSON.stringify(req.query)}\n`;
    fs.appendFileSync('log.txt', logContent);
    res.status(200).json({ status: "success", message: "Da nhan duoc tien" });
});

app.listen(port, () => {
    console.log(`Server dang chay tren port ${port}`);
});
