
# Blockmodel Definition

A Blockmodel Definition is a table representing the properties of a Blockmodel. All blocks specify a Blockmodel to render as, which determines how that block renders. Blockmodel Definitions are supplied when calling [zepha.register_blockmodel](/docs/methods/zepha_register_blockmodel). The registered Blockmodel definitions can be found in the [zepha.registered_blockmodels](/docs/tables/registered_tables#zepha_registered_blockmodels) table.

The properties that can be used in a Block Definition are as follows.

## Properties

### parts

A table containing one or more [Blockmodel Parts](#blockmodel_part) for the model to use.

```
parts = {
    face = "nocull",
    tex = 1,
    points = {
        0, 0, 0, 0, 1,
        1, 0, 1, 1, 1,
        1, 1, 1, 1, 0,
        0, 1, 0, 0, 0
    }
}
```

### mesh_mods

An optional table containing one or more [Mesh Mod](#mesh_mod) for the model to use.

```
mesh_mods = {
	{
	    type = "offset_x",
	    amplitude = 0.2,
	}
}
```

## Blockmodel Part

A Blockmodel Part is a part of the Blockmodel. Each Part specifies a series of points that form one or more quads, a texture to use on said quads, and a face parameter defining what face the Part should render as. A Part can also contain a [Shader Mod](#shader_mod) which alters the visual properties of the face.

### face

The face property is used when culling, which is a process used to optimize the game's chunks. If the Part would be occluded by a cuboid block in one of the six cardinal directions, then the face value should be set to that direction. Is the Part should not be occluded for any reason, it should be set to `nocull`. This should be used in moderation, as it can have serious performance impacts when too many Parts are using it.

Valid values: 

`"top"`, `"bottom"`, `"right"`, `"left"`, `"front"`, `"back"`, `"nocull"` 

### tex

A number specifying which of a [block's textures](/docs/definitions/block_definition#textures) should be used for this Part's rendering. If the block contains fewer textures than the number specified, the last texture will be used.

`tex = 1`

### points

A list of float values specifying the vertices that make up the Blockmodel Part. Each vertex takes 5 floats, the first 3 being x, y, and z positions and the last two being the texture coordinates. Every face must have 4 vertexes to form a quad, so therefore the number of floats in the `points` table must be a multiple of 20. 

```
-- The top face of a cube model
points = {
    0, 1, 0, 0, 0,
    0, 1, 1, 0, 1,
    1, 1, 1, 1, 1,
    1, 1, 0, 1, 0
}
```

### shader_mod {#shader_mod_prop}

An optional table containing a [Shader Mod](#shader_mod) to apply to the part. Only one shader mod can be applied to each part.

## Mesh Mod

A Mesh Mod is a modifier which applies to an entire Blockmodel. The available mesh mods are listed below, followed by their properties:

### offset_x

Offset the model by a random number along the X direction.

`amplitude`: The maximum possible offset in the positive or negative direction.

### offset_y

Offset the model by a random number along the Y direction.

`amplitude`: The maximum possible offset in the positive or negative direction.

### offset_z

Offset the model by a random number along the Z direction.

`amplitude`: The maximum possible offset in the positive or negative direction.

## Shader Mod

A Shader Mod is a modifier which applies to a specific Blockmodel Part. The available shader mods are listed below, followed by their properties:

### rotate_x

Rotate the part at a set rate around the X axis.

`speed`: The speed at which the part rotates. Postive numbers are clockwise, negative numbers are counter clockwise.

### rotate_y

Rotate the part at a set rate around the Y axis.

`speed`: The speed at which the part rotates. Postive numbers are clockwise, negative numbers are counter clockwise.

### rotate_z

Rotate the part at a set rate around the Z axis.

`speed`: The speed at which the part rotates. Postive numbers are clockwise, negative numbers are counter clockwise.

### sway_attached

Apply wind sway to a part's vertices, if said vertices are not on one of the 8 corners of the block it is within.

`amplitude`: The amplitude at which the part sways.

### sway_full_block

Apply wind sway to all of a part's vertices unconditionally.

`amplitude`: The amplitude at which the part sways.
