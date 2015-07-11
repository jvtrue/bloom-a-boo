Back in the early days of the Internet, it was common to find [MUDs](http://en.wikipedia.org/wiki/MUD) written by a single developer. Today, MMO games are made with huge teams and cost millions of dollars to develop. However, as game development becomes easier, we'll start to see more and small teams return to MMOs. Chances are, the next great MMO game will be made by indie developers.

The tools needed are already used by more simple multiplayer games and the web/mobile app industries. The tech necessary isn't even that exciting, which is good sign if you want things to be simple. Here I'll explain how Contested Space's architecture brings it into the realm of small scale indie development.

### Unity

Unity is a great platform for making singleplayer games. While it lacks some key features for multiplayer game development, with a little coaxing it isn't too bad. The game's client and [instance](http://en.wikipedia.org/wiki/Instance_dungeon) server are implemented in Unity.

### uLink

The folks at [MuchDifferent](http://www.muchdifferent.com/) make a networking library designed for MMOs called UnityPark. I mostly use [uLink](http://developer.muchdifferent.com/unitypark/uLink/uLink), but the rest of Contested Space's stack isn't very different from their other tools.

### Instancing

In Contested Space, every location on the map is a single instance server. Instance servers handle the location's physics simulation and keep any connected clients in sync. When a ship warps from place to place, it's actually switching what instance it's connected to. This separation is how the game scales to handle large amounts of players.

### The Lobby

Contested Space's lobby is responsible for authenticating players, storing data, and managing instance servers. The lobby is a [JSON](http://json.org/) [REST](http://en.wikipedia.org/wiki/Representational_state_transfer) service like those behind most contemporary web or mobile apps. Web developers have gotten extremely efficient at doing this sort of thing over the years. The tools they use are very powerful.

### Cloud Hosting

Netflix consumes a huge percentage of the Internet's bandwidth, but they don't own a single server. All of their hosting is done through [Amazon Web Services](http://aws.amazon.com/). Today, anyone can lease world class hosting infrastructure by the hour, and throw it away if they don't need it later. Contested Space uses the [Rackspace Cloud](http://www.rackspace.com/cloud/), but the same principles apply.

Contested Space isn't first MMO created at this scale. [Realm of the Mad God](http://en.wikipedia.org/wiki/Realm_of_the_Mad_God) is example of what you can do with limited resources. MMO development is becoming more and more accessible to indies.
