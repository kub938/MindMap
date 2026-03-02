FROM node:20-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

# 루트 설정 파일
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# 공유 패키지 전체 복사
COPY packages/ ./packages/

# api 소스 복사
COPY apps/api/ ./apps/api/

# 의존성 설치
RUN pnpm install --frozen-lockfile --filter @repo/api...

# 빌드
RUN pnpm --filter @repo/api build

# ---- 실행 스테이지 ----
FROM node:20-alpine AS runner

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/ ./packages/
COPY apps/api/ ./apps/api/

RUN pnpm install --frozen-lockfile --filter @repo/api... --prod

COPY --from=builder /app/apps/api/dist ./apps/api/dist

ENV PORT=4000
EXPOSE 4000

CMD ["node", "apps/api/dist/src/main"]