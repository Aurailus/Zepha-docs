# zepha.remove_block

Replaces the block in the world at the position supplied with air.

An alias of <code><a href="/docs/methods/zepha_set_block">zepha.set_block</a>("builtin:air")</code>

## Syntax 

`zepha.remove_block(pos)`

## Parameters

`position`: A vector for what location to remove the block at. The position must be within loaded chunks otherwise it will have no effect.

## Client Side

If this function is called on the client, it will update the block locally and desynchronize the client from the server. This can be useful for block prediction, however care must be taken to not cause unintentional behavior.
