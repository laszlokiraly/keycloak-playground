Inspired by 
https://medium.com/@disa2aka/docker-deployments-for-keycloak-and-postgresql-e75707b155e5
and https://github.com/andissanayake/ForgeContainer/tree/example/keycloak-docker-compose

use .env with docker-compose: https://docs.docker.com/compose/environment-variables/set-environment-variables/

```
docker-compose up
docker-compose down
```

http://localhost:9080/#/ maildev
http://localhost:8080 keycloak admin


http://localhost:8080/realms/los/.well-known/openid-configuration

incomplete, missing auth calls: https://github.com/Baeldung/spring-security-oauth/tree/master/oauth-jwt/jwt-auth-server


complete example https://github.com/eugenp/tutorials/tree/master/spring-boot-modules/spring-boot-keycloak


typical flow: https://dev.to/oneadvanced/oauth-20-authorization-code-grant-with-postman-part-1-5238


confidential flow: https://developers.redhat.com/blog/authentication-and-authorization-using-the-keycloak-rest-api#keycloak_connection_using_a_java_application


authorization code with pkce: https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow-with-pkce/call-your-api-using-the-authorization-code-flow-with-pkce  


"client credential" flow: https://github.com/emyasa/medium-articles/tree/master/spring-boot-oauth & https://medium.com/javarevisited/oauth-2-0-authorization-code-flow-in-spring-boot-d8ff393f316d


grant type password https://medium.com/@adnenehamdouni/oauth2-and-openid-authentication-with-keycloak-and-spring-security-spring-boot-3-and-java-17-58e7521847c9 and https://medium.com/@adnenehamdouni/implémentation-de-lauthentification-oauth2-et-openid-avec-keycloak-et-spring-security-un-guide-6b7f64fc8516 and https://github.com/adnenehamdouni/oauth2-oicd-keycloak-sample/tree/feature/1.keyclock-auth

# [Keycloak Docs](https://www.keycloak.org/docs/latest/securing_apps/#supported-grant-types)

## 2.2. Supported Grant Types

This section describes the different grant types available to relaying parties.

### 2.2.1. Authorization code

The Authorization Code flow redirects the user agent to Keycloak. Once the user has successfully authenticated with Keycloak, an Authorization Code is created and the user agent is redirected back to the application. The application then uses the authorization code along with its credentials to obtain an Access Token, Refresh Token and ID Token from Keycloak.

The flow is targeted towards web applications, but is **also recommended for native applications, including mobile applications**, where it is possible to embed a user agent.

For more details refer to the Authorization Code Flow in the OpenID Connect specification.

# [Google OAuth2 Mobile Best Practice](https://developers.google.com/identity/protocols/oauth2/native-app)

- [AppAuth for Android](https://openid.github.io/AppAuth-Android/) library
- [AppAuth for iOS](https://openid.github.io/AppAuth-iOS/) library

# knowledge

## BFF(!)

- https://datatracker.ietf.org/doc/html/draft-bertocci-oauth2-tmi-bff-01
- https://github.com/spring-projects/spring-authorization-server/issues/297#issue-896744390

## OIDC

[Curity OpenID Code Flow](https://curity.io/resources/learn/openid-code-flow/)

## Introspection Endpoint

### [Okta OAuth 2.0 Token Introspection](https://www.oauth.com/oauth2-servers/token-introspection-endpoint/)

the OAuth 2.0 Token Introspection extension defines a protocol that returns information about an access token, **intended to be used by resource servers or other internal servers**.

An alternative to token introspection is to use a structured token format that is recognized by both the authorization server and resource server. The [JWT Profile for OAuth 2.0 Access Tokens](https://datatracker.ietf.org/doc/html/rfc9068) is a recent RFC that describes a standardized format for access tokens using JWTs. This enables a resource server to validate access tokens without a network call, by validating the signature and parsing the claims within the structured token itself.

### [Keycloak OAuth 2.0 Token Introspection](https://www.keycloak.org/docs/latest/securing_apps/#_token_introspection_endpoint)

The introspection endpoint is used to retrieve the active state of a token. In other words, you can use it to validate an access or refresh token. **This endpoint can only be invoked by confidential clients.**


## (anti)patterns

https://dzone.com/refcardz/oauth-patterns-and-anti-patterns
