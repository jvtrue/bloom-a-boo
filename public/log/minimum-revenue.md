Today I’ll be going over what it will take for Contested Space to sustain itself financially. The following is an estimate of the minimum revenue needed to run the company, improve the game, and grow the customer base.

## Labor

So far I’ve been working on the game by myself. Most of the game’s overhead will be paying my family’s bills. My wife and I have two children, a mortgage, modest student loans, and live in Bloomington Indiana. We’re both pretty frugal and share a car that we own outright. My wife is currently on maternity leave to take care of our 4 month old daughter. Normally she works as a preschool teacher. All that considered we would be comfortable if I earned around $ 40,000 a year.

## Hosting

The second largest overhead is hosting. I estimate each player will cost around $1 a month on average. That doesn’t sound like much by itself, but that’s a fair amount of horsepower when you add everything up. The game will be hosted on the [Rackspace Cloud](http://www.rackspace.com/cloud/) using servers that cost $ 0.04 an hour and bandwidth that costs $ 0.12 a GB.

Most of these servers will be hosting location instances. Instances running with only one player in them are the least efficient, but they don’t consume many resources on the server. I should be able to fit at least 8 of these lonely instances into each server. That comes to $ 0.005 an hour per player. Normally a server will have around 32 players if they are sharing instances. In that case the cost goes down to $ 0.00125 an hour per player.

Say a player spends all of their time alone. (Contested Space won’t have any NPCs so this will be rare.) This player travels a lot and ends of up downloading a ton of ship and station designs. They use up around 2 GB of bandwidth costing around $ 0.24. They would be able to play for 152 hours a month before going over budget. That’s just the most expensive outcome. Players grouped together more efficiently could play every waking hour without going over the monthly budget.

The hosting costs are just an educated guess, but I doubt they will be much higher than this estimate. While testing the prototype I’ve found that the client starts to have trouble rendering large battles before the server has trouble simulating them.

## Misc

Other than labor and hosting I’d like to put aside 10% of the company’s revenue for other purposes. This money would go to paying for anything else the company might need.

## Payment Processing

It’s common for credit card processors to take around 5% of each transaction.

## Expenses Per Subscription

<table>
	<tr>
		<td>Hosting</td>
		<td class="numeric">$ 1.00</td>
	</tr>
	<tr>
		<td>Misc</td>
		<td class="numeric">$ 0.50</td>
	</tr>
	<tr>
		<td>Payment processing</td>
		<td class="numeric">$ 0.25</td>
	</tr>
	<tr>
		<td>Total</td>
		<td class="numeric">$ 1.75</td>
	</tr>
</table>

## Minimum Revenue

Now that we know the subscription overhead we can figure out how many are needed to pay labor costs.

<table>
	<tr>
		<td>Monthly labor costs</td>
		<td class="numeric">$ 3,333.33</td>
	</tr>
	<tr>
		<td>Profit Per Sub</td>
		<td class="numeric">$ 3.25</td>
	</tr>
	<tr>
		<td>Minimum subscriptions</td>
		<td class="numeric">1026</td>
	</tr>
	<tr>
		<td>Minimum monthly revenue</td>
		<td class="numeric">$ 5,128.20</td>
	</tr>
	<tr>
		<td>Minimum yearly revenue</td>
		<td class="numeric">$ 61,538.40</td>
	</tr>
</table>

## Summary

Basically, Contested Space is the cockroach of MMOs. Once it obtains a small and loyal customer base the game can keep running, improving, and growing indefinitely.