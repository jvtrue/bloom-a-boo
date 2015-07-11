It has been several months since the failed [Kickstarter campaign](https://www.kickstarter.com/projects/contested/contested-space-build-an-empire-in-an-online-sandb). Prior to the Kickstarter I funded Contested Space by working part time as a web and mobile application contractor. Running the campaign interrupted my contracting income and there was a small chance I would have to begin working full time to compensate. Today I'm happy to say that I've lined up enough contract work to sustain part time development on Contested Space.

In the mean time I have been working on ways of making development on Contested Space more efficient. Failing the Kickstarter was an opportunity to slow down and improve the game's architecture. Contested Space is an MMO on the cheap. It's a mixture of Unity and contemporary web technologies that make distributed system engineering easier than it was before. Here's a quick outline of the game's new infrastructure.

* Unity client
	* HTML UI
* JSON lobby API
	* Mongo database
	* Unity instance servers

The biggest change is an [HTML UI](http://coherent-labs.com/) added to the client. This will make it easier to add social and economic features to the game. I've been calling this architecture a web sandwich. It's a Unity game surrounded by an HTML UI and a JSON API.

The lobby API has been reimplemented in [Node](http://nodejs.org/). Currently the lobby is running on Scala. The rewrite took around a week to complete. Later on I'll write a post describing why the change was made.

Unity doesn't have the best concurrent programming model. I've been using my own proprietary [Future](http://en.wikipedia.org/wiki/Futures_and_promises) class. It's used to request ship designs from the lobby or help perform other asynchronous tasks. While working with Node I discovered the [Promises/A+](http://promisesaplus.com/) spec. My Future class didn't have the best interface, so it's been rewritten into an A+ Promise. I'll be open sourcing my Unity A+ Promise class after it's been proven to work in the next Contested Space release.

The next version of Contested Space will feature these three changes. It will put the project in a strong position to start adding more visible improvements in the releases that follow.