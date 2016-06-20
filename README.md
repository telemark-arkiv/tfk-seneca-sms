# tfk-seneca-sms
Send sms via pswincom

```curl -d '{"role": "sms", "cmd":"send", "sender": "tfk", "message": "Hello, world!", "receivers":["4712345678"]}' -v http://localhost:8000/act```

```curl -d '{"role": "sms", "cmd":"send", "sender": "tfk", "message": "263A270C", "operation": 9, "receivers":["4712345678"]}' -v http://localhost:8000/act```