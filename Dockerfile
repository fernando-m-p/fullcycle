FROM golang as builder
WORKDIR /app
COPY . /app
RUN go build hello.go


FROM scratch
COPY --from=builder /app/hello .
ENTRYPOINT [ "./hello" ]

