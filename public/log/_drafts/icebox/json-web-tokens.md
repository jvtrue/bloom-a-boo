The Contested Space client is split between Unity and it's WebKit UI. Each of these layers connects to a different collection of online services. Here's a quick outline.

* Unity
** Lobby HTTP
** Lobby WebSocket
** Instance server
* UI
** Lobby HTTP

So the client needs to authenticate with four different services. We can't have the user logging in four times in a row. I needed to find a simple way to forward the user's identity across these services. The solution to this problem is a little standard called [JSON Web Token](http://jwt.io/).

JSON Web Tokens are a simple way to send trusted information between two parties. I use JWTs to recreate sessions across the various services a client needs. Here's how the process works.

* Client logs in and creates what I call the parent session
* Client requests a JWT from the parent session
* Client uses the JWT to authenticate a 2nd session