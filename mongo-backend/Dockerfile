

# Stage 1
FROM golang:alpine as builder
ENV GOPATH /go
RUN apk update && apk add --no-cache git
RUN mkdir /build 
ADD . /build/
WORKDIR /build
RUN go get -d -v
RUN go build -o app-backend .
# Stage 2
FROM alpine
RUN adduser -S -D -H -h /app appuser
USER appuser
COPY --from=builder /build/ /app/
WORKDIR /app
CMD ["./app-backend"]
