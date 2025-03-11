# Cursor To OpenAI

Convert the Cursor Editor to an OpenAI API interface service.

## Introduction

This project provides a proxy service that converts the AI chat of the Cursor Editor into an OpenAPI API, allowing you to reuse the LLM of the Cursor in other applications.

## Preparsuitue

1. Visit [Cursor](https://www.cursor.com) and register a account.
    - 150 fast premium requests are given, which can be reset by deleting the account and then registering again
    - Suggest to use gmail/outlook email, some temp emails have been disabled by Cursor.
2. Log in and open the developer tool in the browser (F12).
3. Find the cookie value named `WorkosCursorSessionToken` in Application-Cookies and save it (The value starts with `user_`).

## How to Run

### Run in docker
```
docker run -d --name cursor-to-openai -p 3010:3010 ghcr.io/jiuz-chn/cursor-to-openai:latest
```

### Run in npm
```
npm install
npm run start
```

## How to use the server

1. Get models
    - Url：`http://localhost:3010/v1/models`
    - Request：`GET`
    - Authentication：`Bearer Token`（The value of `WorkosCursorSessionToken`，supports comma-separated values）

2. Chat completion
    - Url：`http://localhost:3010/v1/chat/completions`
    - Request：`POST`
    - Authentication：`Bearer Token`（The value of `WorkosCursorSessionToken`，supports comma-separated values）

 for the response body, please refer to the OpenAI interface

### Python demo
```
from openai import OpenAI

client = OpenAI(api_key="{{{WorkosCursorSessionToken of your account, starts with user_...}}}}",
                base_url="http://localhost:3010/v1")

response = client.chat.completions.create(
    model="claude-3-7-sonnet",
    messages=[
        {"role": "user", "content": "Hello."},
    ],
    stream=False
)

print(response.choices)
```

## Notes

- Please keep your WorkosCursorSessionToken properly and do not disclose it to others
- This project is for study and research only, please abide by the Cursor Terms of Use

## Acknowledgements

- This project is based on [cursor-api](https://github.com/zhx47/cursor-api)(by zhx47).
- This project integrates the commits in [cursor-api](https://github.com/lvguanjun/cursor-api)(by lvguanjun).
