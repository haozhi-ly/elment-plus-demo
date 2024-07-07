import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors';

// 初始化 express 应用
const app = express();

app.use(cors())

// 设置文件存储配置
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // 文件存储目录
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // 文件名
  }
});

const upload = multer({ storage: storage });

// 创建文件上传路由
app.post('/upload', upload.single('file'), (req, res) => {
  res.send({
    message: 'File uploaded successfully',
    file: req.file
  });
});


app.use(express.static(path.join(__dirname, '../uploads')));

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
