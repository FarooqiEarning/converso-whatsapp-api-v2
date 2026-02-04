FROM node:24-alpine AS builder

RUN apk update && \
    apk add --no-cache git ffmpeg wget curl bash openssl

LABEL version="2.3.1" description="Api to control whatsapp features through http requests." 
LABEL maintainer="Davidson Gomes" git="https://github.com/DavidsonGomes"
LABEL contact="contato@converso-whatsapp-api.com"

WORKDIR /converso-whatsapp-api

COPY ./package*.json ./
COPY ./tsconfig.json ./
COPY ./tsup.config.ts ./

RUN npm ci --silent

COPY ./src ./src
COPY ./public ./public
COPY ./prisma ./prisma
COPY ./admin-panel ./admin-panel
COPY ./.env.example ./.env
COPY ./runWithProvider.js ./

COPY ./Docker ./Docker

RUN chmod +x ./Docker/scripts/* && dos2unix ./Docker/scripts/*

RUN ./Docker/scripts/generate_database.sh

RUN npm run build

FROM node:24-alpine AS final

RUN apk update && \
    apk add tzdata ffmpeg bash openssl

ENV TZ=America/Sao_Paulo
ENV DOCKER_ENV=true

WORKDIR /converso-whatsapp-api

COPY --from=builder /converso-whatsapp-api/package.json ./package.json
COPY --from=builder /converso-whatsapp-api/package-lock.json ./package-lock.json

COPY --from=builder /converso-whatsapp-api/node_modules ./node_modules
COPY --from=builder /converso-whatsapp-api/dist ./dist
COPY --from=builder /converso-whatsapp-api/prisma ./prisma
COPY --from=builder /converso-whatsapp-api/admin-panel ./admin-panel
COPY --from=builder /converso-whatsapp-api/public ./public
COPY --from=builder /converso-whatsapp-api/.env ./.env
COPY --from=builder /converso-whatsapp-api/Docker ./Docker
COPY --from=builder /converso-whatsapp-api/runWithProvider.js ./runWithProvider.js
COPY --from=builder /converso-whatsapp-api/tsup.config.ts ./tsup.config.ts

ENV DOCKER_ENV=true

EXPOSE 7871

ENTRYPOINT ["/bin/bash", "-c", ". ./Docker/scripts/deploy_database.sh && npm run start:prod" ]
