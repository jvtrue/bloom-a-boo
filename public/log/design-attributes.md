The design UI has been reimplemented in HTML. The game's HTML UI is a static [Backbone](http://backbonejs.org/) app built with [Gulp](http://gulpjs.com/) and [Browserify](http://browserify.org/). The UI is continually rebuilt as it's source files change. It's organized so the UI can be refreshed without restarting the game. So working on the UI is very convenient.

While working on the UI I couldn't resist adding some extra functionality. The game will now dynamically assign performance attributes to your designs. The idea is to make large heavy looking ships tougher and slower than others. Designs are also validated to make sure ships are a reasonable size and have a fair amount of boosters and weapons.

![Design Attributes Preview](/images/log/design-attributes.png)

I haven't made much of an attempt to balance these attributes. The important part is that the designer can now calculate a ship's performance characteristics without slowing down too much.