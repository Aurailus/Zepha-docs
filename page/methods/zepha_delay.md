
# zepha.delay

Delays the execution of a function for `delay` seconds by adding it to the event queue. Fractions may be used to get sub-second precision. Additional parameters after `delay` are passed into the function when it is ran. 

If the delayed function returns true, it will be queued to run again after the initially set `delay`, otherwise it will be removed from the queue and not run again.

## Syntax

`zepha.delay(function, delay, arguments..)`

## Parameters

`function`: The function to run.

`delay`: A number indicating the delay in seconds.

`arguments..`: Zero or more arguments to pass into `function` when ran.

## Examples

```
-- Run an anonymous function after 5 seconds.

zepha.delay(function(a, b, c)
	print(a .. b .. c) -- Prints "oh hi world".
end, 5, "oh ", "hi ", "world")
```

```
-- Print a message into the terminal once every 15 minutes.

function healthyHabits()
	print("Remember to take a break if you feel tired or frusturated!")
	return true -- Repeat with initial delay.
end

zepha.delay(healthyHabits, 15*60)
```

```
-- Save a function to be run when the server initializes.

mymod.initialize = function() 
	...
	print("Initialized!")
end

zepha.delay(mymod.initialize, 0)
```
