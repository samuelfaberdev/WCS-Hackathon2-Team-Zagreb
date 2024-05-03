FROM node:18 as builder

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# ARG VITE_BACKEND_URL=${VITE_BACKEND_URL}
# ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}

COPY ./ /app
RUN npm install