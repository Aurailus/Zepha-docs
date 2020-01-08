
# zepha.register_block

Registers a new block named `identifier`, with properties specified by the `block definition` table.

## Syntax

`zepha.register_block(identifier, block definition)`

## Parameters

`identifier`: The internal identifier for the block, used to refer to the block in Lua.

`block definition`: The [Block Definition](/docs/definitions/block_definition) that will define the block's parameters.

## Example

```
-- Register a grass block named "zeus:default:grass", 
-- using the default cube model and basic properties.

zepha.register_block("zeus:default:grass", {
	name = "Grass",
	model = "zepha:base:cube",
	textures = {
		"zeus:default:grass_top",
		"zeus:default:dirt",
		"zeus:default:grass_side"
	},
	lowdef_textures = {
		"zeus:default:grass_top",
	},
	lowdef_render = true,
	toughness = {
		hand = 5,
		shovel = 2,
		pickaxe = 4
	}
})
```
