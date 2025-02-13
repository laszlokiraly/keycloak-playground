// from https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
function parseJwt (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

oidc_token = {
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFX3ljRzNxbzB5eWU1MUdEWkp0c0hfdUF0UDd5TnJPdzREYmxWTTd6QjZFIn0.eyJleHAiOjE3MjczMjg4NzQsImlhdCI6MTcyNzMyODU3NCwiYXV0aF90aW1lIjoxNzI3MzI4MTA2LCJqdGkiOiIyNzk1MjAxYi1iZmE5LTRkNTAtODUwMS0wZmQzZjEwYWI1YWMiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL2xvcyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjOWZhYzhmOS04MGQ5LTQ1NWEtYWMzNC0yN2M2ZjgwY2NkMjEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJsb3NsZWJlbi1hcHAiLCJzaWQiOiI2NTVhMjQ2NC1lOGM1LTQ3ZTQtYThjZi01OGFmMGQ1NGE5ZGMiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtbG9zIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3QgdGVzdCIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3QiLCJnaXZlbl9uYW1lIjoidGVzdCIsImZhbWlseV9uYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSJ9.LKjztmFJjJy6kvFkIkZL6nBFGFkGLSokN6Tl3nyAdIWjTbq4Xxe6U3hJMhOc9mtZoi2qPtnYtyvKjFz24_tdONav3uYGxCuV0-AwPBpf-y4_ppMbGl7GCMpJpgBXo_umFl8qaJxFQt1rJjXoyXq42ppFCsyaYheYX4pYGziKNfNvU4OJ-vPQ7bcMRF689rto83aTXsqqL4u1xSLl__5aHaikvf4c9T1r7ReEmG-rzrZRcxGEmjP_ItP3e_oKoQUKLklusxnoKZ86tm0HMrfc-A0JlAqrnrEGkdDWonXu8ElCqR5rgzEN9f-5Fb6xl2xXHGZa1i3Ar4jpwh6rN9TKlw",
    "expires_in": 300,
    "refresh_expires_in": 1800,
    "refresh_token": "eyJhbGciOiJIUzUxMiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2ODljZWUzOC1mNDkwLTRjNWItYTFhNi1kODY3MjY2NTJjYjkifQ.eyJleHAiOjE3MjczMzAzNzQsImlhdCI6MTcyNzMyODU3NCwianRpIjoiMGM1YWUyM2EtZmQxNS00ZjAyLTgzMzAtN2EzOWYxZjAyNzU3IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9sb3MiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL2xvcyIsInN1YiI6ImM5ZmFjOGY5LTgwZDktNDU1YS1hYzM0LTI3YzZmODBjY2QyMSIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJsb3NsZWJlbi1hcHAiLCJzaWQiOiI2NTVhMjQ2NC1lOGM1LTQ3ZTQtYThjZi01OGFmMGQ1NGE5ZGMiLCJzY29wZSI6Im9wZW5pZCB3ZWItb3JpZ2lucyBlbWFpbCByb2xlcyBhY3IgYmFzaWMgcHJvZmlsZSJ9.h1Ywvne5kF11axbcppI_lmlhSxGIoZfSgBLRea_6JlVfA3xUuYTYT2-T--SBMEEEU7I3kS3KTthxPozV8GRkRg",
    "token_type": "Bearer",
    "id_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFX3ljRzNxbzB5eWU1MUdEWkp0c0hfdUF0UDd5TnJPdzREYmxWTTd6QjZFIn0.eyJleHAiOjE3MjczMjg4NzQsImlhdCI6MTcyNzMyODU3NCwiYXV0aF90aW1lIjoxNzI3MzI4MTA2LCJqdGkiOiIwOTljOTA2OC0wMGUxLTRkMjEtYjdhYS0zMWEzMDZlODk5NzQiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL2xvcyIsImF1ZCI6Imxvc2xlYmVuLWFwcCIsInN1YiI6ImM5ZmFjOGY5LTgwZDktNDU1YS1hYzM0LTI3YzZmODBjY2QyMSIsInR5cCI6IklEIiwiYXpwIjoibG9zbGViZW4tYXBwIiwic2lkIjoiNjU1YTI0NjQtZThjNS00N2U0LWE4Y2YtNThhZjBkNTRhOWRjIiwiYXRfaGFzaCI6IlZkN2xKcV9qU1ZEemQ5MnBJYU5OdFEiLCJhY3IiOiIwIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdCB0ZXN0IiwicHJlZmVycmVkX3VzZXJuYW1lIjoidGVzdCIsImdpdmVuX25hbWUiOiJ0ZXN0IiwiZmFtaWx5X25hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIn0.UMkBtszQWfPAwU3U-nPo2GNKwAZ9K-WvCwjBJLK2UqSEV3Yuiq6yVAZkINFbXvZ_mVcnCDqzqZW1xJyQeydPVHs0R53_3Rx80lCOchS38a8Vr2yV3YZ0IStp9VildZS55cN38_Qy-n0FHjPqQIH6LmF6NGsKDiWvE61XXtziy65j5xObAhog6usHU1_xzJzpy9s_yUv612JGZFgSqBloN8SDMToOrXWGWHj_kFlhnrbOBgQaJ0MJYLdJdiexIAGt9fYozKJ_bJyVvIna_9fQepcHDqwGT4PuaAbf8cD3jEBehzWMnV-gFDMYxBjM5qBzBWq1P7zNyXsv78T_CIkYYw",
    "not-before-policy": 0,
    "session_state": "655a2464-e8c5-47e4-a8cf-58af0d54a9dc",
    "scope": "openid email profile"
  }

console.log(parseJwt(oidc_token.access_token));
console.log(parseJwt(oidc_token.refresh_token));
console.log(parseJwt(oidc_token.id_token));
