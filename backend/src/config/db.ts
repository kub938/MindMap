import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

// 연결 및 쿼리 실행

export const connect_db = async () => {
  try {
    const client = await pool.connect();
    await client.query("SELECT NOW()");
    client.release();

    console.log(" 데이터베이스 연결 성공 ");
  } catch (error) {
    if (error instanceof Error) console.error("db연결 실패", error.message);
    throw error;
  }
  pool.query("SELECT NOW()", (err: Error, res: any) => {
    if (err) {
      console.error("쿼리 실행 오류:", err);
    } else {
      console.log("연결 성공! 현재 시간:", res.rows[0].now);
    }
  });
};
