# zepha.get_block

Returns the block identifier of the block at position `pos`. If the chunk containing the block is unloaded, the function will return `builtin:invalid`.

## Syntax

`zepha.get_block(pos)`

## Parameters

`pos`: A vector for what location to get the block at. The position must be within loaded chunks otherwise `builtin:invalid` will be returned.

## Example

```
-- A snow layer block that will update grass below it
-- to zeus:default:grass_with_snow on the on_construct callback.

zepha.register_block("zeus:default:snow_layer", {
	...
	on_construct = function(pos)
		local check = {x = pos.x, y = pos.y - 1, z = pos.z}
		if zeus.get_block(check) == "zeus:default:grass" then
			zeus.set_block(check, "zeus:default:grass_with_snow")
		end
	end,
	...
})
```

## Client Side

If the client has locally updated the block at `pos`, that block will be returned, not the "real" block that is stored on the server side. Use with caution.
