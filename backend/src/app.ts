import express from "express";
import userRouter from "./modules/user/user.routes";
import { connect_db } from "./config/db";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "마인드맵 백엔드 서버가 실행 중 입니다!",
    timestamp: new Date().toISOString(),
  });
});

connect_db()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`${PORT}번 포트 에서 서버 실행중 입니다!`);
    });
  })
  .catch((error) => {
    console.error(" 데이터 베이스 연결 실패", error);
    process.exit(1);
  });
