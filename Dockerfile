FROM nats:alpine
RUN apk add --no-cache curl

RUN apk add --no-cache go git

ENV GOPATH /go
ENV GOBIN $GOPATH/bin
ENV PATH $PATH:$GOBIN

RUN go install github.com/nats-io/natscli/nats@latest