The prevailing wisdom is that game developers should publish lots of small games before embarking on a large project. Unfortunately, I'm not that wise. I've been dabbling in game development off and on for many years, but never finished anything until recently. Contested Space was started in 2012. Since then, it has been rewritten several times.

At first it was a sort of 2D [MOBA](http://en.wikipedia.org/wiki/Multiplayer_online_battle_arena). The project's purpose was to help me learn Unity and the networking library [uLink](http://developer.muchdifferent.com/unitypark/uLink/uLink). I didn't know 3D modeling and didn't want to illustrate the game's graphics. Instead, I attempted to procedurally generate models. The game created ships out of deformed cylinders.

![Procedural Ship](/images/log/the-prototype/procedural-ship.jpeg)

Most of the time, these procedural ships looked pretty bad, and they didn't have much variety. I decided it would take too long to develop a better ship generation system. I relented and began to learn 3D modeling like a normal developer.

Since I was using Unity and already creating 3D models, I decided that the game might as well be 3D. I also theorized that a simple MMO wouldn't necessarily be more work than programming the lobby and matchmaking of a good MOBA.

At this point, I was mired in scope creep. Physics and networking needed to be programmed. Ships and scenery needed to be modeled. Some kind of multi-server infrastructure needed to be created. Somehow, I persevered and came up with something that looked like this.

![Early Prototype](/images/log/the-prototype/early-prototype.jpeg)

The controls were very similar to what we have today. Play testing showed the combat system had potential. The game used [uZone](http://developer.muchdifferent.com/unitypark/uZone/uZone) to manage multiple instance servers, and the client could seamlessly warp between them. The next step was to polish the game for a Kickstarter video.

I started working on more ships and scenery, but progress was very slow. Large models like battleships and space stations were very time consuming to produce. To make matters worse, the game still looked very generic. Something had to change.

By then, however, it was the Summer of 2013 and wedding season. I was intermittently forced away from work. During these breaks, I conceived a hybrid approach between procedurally and manually created content. I had swallowed my pride and joined the multitude of indies using voxels.

The first ship editor lacked a GUI and was controlled using only the mouse and keyboard shortcuts. You could place and rotate a small collection of basic shapes. It only took around a week to program. Here's the first ship I made.

![First Block Ship](/images/log/the-prototype/first-block-ship.jpeg)

I then added a GUI with a color picker so the blocks could be painted. Things started to get interesting. The ships now had personality.

![Color Block Ship](/images/log/the-prototype/smooth-loud.jpeg)

That aesthetic started guiding the whole project. Not only was it easier to create content, but it was more straight forward to create the game's other assets. It became obvious how particle effects, planets, and other natural scenery should look. This breakthrough got the project to where it is today.
