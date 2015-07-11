A while ago I decided to rewrite the Contested Space lobby API in Node instead of Scala. The rewrite didn't take very long. Only a week or so of development time. Today I'll try to justify that decision.

### JSON in JSON out

One of the lobby's primary responsibilities is to provide persistence for Contested Space. The lobby receives JSON representing game data, validates it, and then saves the data to a Mongo database. With Node you're working directly with JSON instead of some class abstracting over it.

### Consistent Concurrency

I originally picked Scala because I liked how it gave you a good deal of control over how your services handle concurrency. You can pick between threads, futures, and actors and each option has a fair amount of flexibility. However all these different choices make Scala libraries inconsistent. Many libraries don't use futures or actors at all. For these libraries it's often unclear how to safely use them in a concurrent application.

Node on the other hand is really straightforward. Most modules use callbacks. While Node callbacks aren't very elegant they are at least consistent. As a result it's easy to tie everything together and concurrent programing is simple.

### Overhead

Most of my web developer colleagues work on MacBook Pros and carry their single computer from place to place. As gamer I prefer systems that are fast instead of mobile. I've found that you can afford two desktop PCs for a similar amount of money. I keep one desktop at home and the other at the office.

This effectively means I'm always working on one slightly outdated machine. Running the Unity Editor, MonoDevelop, Intelij IDEA, the Scala lobby API, Mongo, and one or two Contested Space instance servers all at once was difficult for my older PC. Additionally the JVM was taking a fair amount of RAM on when deployed on Rackspace compared to the Unity instance servers. Resource overhead wasn't a big motivator in the switch, but I was glad to see my older system running happily again.

### Node is Simple

Basically Scala was a little too complicated for me. I would get stuck integrating libraries and reorganizing the app instead of just solving problems. However with Node I was able to quickly rewrite the whole lobby and I usually come up with a good implementation without too much refactoring.