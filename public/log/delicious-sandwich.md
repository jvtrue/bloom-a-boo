We've reached an internal milestone today. The new "web sandwich" architecture is now complete. Contested Space can now run with a nice HTML UI backed by nimble lobby API written in Node. We now have feature parity with the live version of the game, but with much slicker infrastructure. Here's a random collection of highlights.

## Generic Persistence

Instance servers now use a generic system to create, save, restore, and destroy persistent objects. It doesn't matter if these objects are a ship, station, planet, or sun they all use a common framework to persist themselves in the game's universe. This means I won't have to write a bunch of boilerplate to add new object types to the game.

## JSON Web Tokens

Contested Space is a combination of different components. There's the client, the client's HTML UI, the lobby API, and instance servers. These components need to authenticate with each other, but it's not feasible to open a log in dialog for every type of session that needs to be created. The answer to this problem is another web technology called [JSON Web Tokens](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html). JSON Web Tokens can be used to duplicate an authenticated session. For example the client can authenticate with the lobby API using a log in dialog and duplicate that session to connect to an instance server. Previously the game used different ad hoc solutions for session duplication, but now JSON Web Tokens are used everywhere.

## Separate Client and Server Code

Unity doesn't make it easy to share common assets between two projects in real time. I've created a little Node module called [Duplet](https://github.com/zon/duplet) that watches two directories and keeps them synchronized. I'm not syncing anything crazy, but now the client and server both have a directory called `Assets/Scripts/ContestedCore`. I run a little Node script while coding that uses Duplet to keep the scripts in those directories synchronized.

## Socket.IO

The lobby API uses WebSockets to monitor and communicate with the instance servers. WebSockets are great but they are a little low level. Contested Space now uses [Socket.IO](http://socket.io/) which adds a little extra on top of WebSockets to make them more useful. Eventually the client will use Socket.IO to facilitate chat so players can converse with each other regardless of where they are in the universe.

## Next Up

With all of these changes it's going to take a significant amount of work to clean everything up and get it ready for a public release. That's too much work for a new version of the game that is superficially the same compared to the previous one. Instead I'm going to immediately move on to creating new features to the game. The next version of the game will start to introduce economic elements. I'll post my plans in more detail soon.