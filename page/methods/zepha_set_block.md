# zepha.set_block

Replaces the block in the world at the position supplied with the block specified.

Node metadata will be removed from the block, and any pending timers will be stopped.

## Syntax 

`zepha.set_block(pos, block)`

## Parameters

`pos`: A vector for what location to set the block at. The position must be within loaded chunks otherwise it will have no effect.

`block`: The identfier of the block to be placed.

## Example

```
-- Replace a block at position [0, 0, 0] with "zeus:default:stone".

zepha.set_block({x = 0, y = 0, z = 0}, "zeus:default:stone")
```

## Client Side

If this function is called on the client, it will update the block locally and desynchronize the client from the server. This can be useful for block prediction, however care must be taken to not cause unintentional behavior.
