import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "마인드맵 백엔드 서버가 실행 중 입니다!",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트 에서 서버 실행중 입니다!`);
});
