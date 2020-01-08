
# Block Definition

A Block Definition is a table representing the properties and callbacks of a block. Block Definitions are supplied when calling [zepha.register_block](/docs/methods/zepha_register_block). The block definitions for registered blocks can be found at runtime in the [zepha.registered_blocks](/docs/tables/registered_tables#zepha_registered_blocks) table.

The properties and callbacks that can be used in a Block Definition are as follows.

## Properties

### name

The displayed name for the block.

`name = "Grass"`

### model

The identifier of the [Block Model](/docs/structs/block_model) that the block will use.

`model = "zepha:base:cube"`

### visible

If the block should be rendered (default: true).

`visible = true`


### culls

If the block culls the faces of adjacent blocks (default: true).

`culls = true`

### solid

If players collide with the block's [Collision Box](/docs/structs/collision_box) (default: true).

`solid = true`

### textures

A table containing texture identifiers for the associated with the [Block Model](/docs/structs/block_model).

```
textures = {
	"zeus:default:grass_top",
	"zeus:default:dirt",
	"zeus:default:grass_side"
}
```

### lowdef_textures

A table containing texture identifiers to be used on a cube model when a block is sufficiently far away. See [Level of Detail](/docs/concepts/level_of_detail) for more information.

```
lowdef_textures = {
	"default_grass_top"
}
```

### lowdef_render

If the block should be rendered as a generic cube when suffiently far away. See [Level of Detail](/docs/concepts/level_of_detail) for more information.

`lowdef_render = true`

### toughness
```
toughness = {
	hand = 5
}
```

A table containing the block toughness values for various damage types. See [Tools](/docs/concepts/tools) for more information.

### selection_box

A table containing zero or more [Selection Boxes](/docs/structs/selection_box) indicating what part(s) of the block a player's cursor will highlight.

```
selection_box = {
	{1/16, 0, 1/16, 15/16, 1, 15/16}
}
```

### collision_box

A table containing zero or more [Selection Boxes](/docs/structs/selection_box) indicating what part of the block a player will collide with.

```
collision_box = {
	{1/16, 0, 1/16, 15/16, 1, 15/16}
}
```

## Server Side Callbacks

Server side callbacks get called on the server when certain events occur.

### before_construct

Called right before the block is placed into the world.

`before_construct = function(pos)`

### on_construct

Called when the block is placed into the world.

`on_construct = function(pos)`

### before_destruct

Called right before the block is destroyed (replaced by another block).

`before_destruct = function(pos)`

### on_destruct

Called right after the block is destroyed (replaced by another block).

`on_destruct = function(pos)`

### on_place

Called right after the block is placed by a player. Unline on_construct, this function is not called when a block is placed via the api.

`on_place = function(pos)`

### on_break

Called right after the block is placed by a player. Unline on_destruct, this function is not called when a block is removed via the api.

`on_break = function(pos)`

### on_interact

Called when the block is interacted with (right clicked) by a player.

`on_interact = function(pos)`

### on_hit

Called when the block is hit (left clicked) by the player. Unline on_break, this event fires immediately upon punching the block, it does not wait until the block is actually broken.

`on_hit = function(pos)`


## Client Side Callbacks

Client side callbacks get called on the client when certain events occur.

### on_place_client

Called when the client places the block.

`on_place_client = function(pos)`

### on_break_client

Called when the client breaks the block.

`on_break_client = function(pos)`

### on_interact_client

Called when the client interacts with the block.

`on_interact_client = function(pos)`

### on_hit_client

Called when the client hits the block.

`on_hit_client = function(pos)`

## Custom Properties
 
Custom properties may be included in a Block Definition. A Custom Property may use any valid table key that is not reserved by the engine. This may be used to store custom metadata for mods to be accessed later by searching the [zepha.registered_blocks](/docs/tables/registered_tables#zepha_registered_blocks) table. It is strongly recommended that custom properties are prefixed with an underscore to not conflict with any possible future engine properties.

```
zepha.register_block("foo", {
	...
	_bar = "baz", -- A valid Custom Property
	abc = "def",  -- A valid custom property, but discouraged, 
				  -- as future versions of the engine may use the name "abc"
				  -- for a different purpose.
	...
});
```
