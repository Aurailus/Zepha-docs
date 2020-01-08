
# zepha.register_blockmodel

Registers a new Blockmodel named `identifier`, with properties specified by the `blockmodel definition` table.

## Syntax

`zepha.register_blockmodel(identifier, blockmodel definition)`

## Parameters

`identifier`: The internal identifier for the Blockmodel, used to refer to the Block Model in Lua.

`blockmodel definition`: The [Blockmodel Definition](/docs/definitions/blockmodel_definition) that will define the blockmodel's parameters.

## Example

```
-- Register a diagonal cross-shaped blockmodel named `base:cross_large`. 
-- Has 2 vertical faces that make an X pattern when viewed from above.
-- Useful for representing plants, grass, etc.
-- Takes one texture, which is displayed on all 4 of its faces.

zepha.register_blockmodel("base:cross_large", {
    parts = {
        {
            face = "nocull",
            tex = 1,
            points = {
                0, 0, 0, 0, 1,
                1, 0, 1, 1, 1,
                1, 1, 1, 1, 0,
                0, 1, 0, 0, 0
            }
        }, {
            face = "nocull",
            tex = 1,
            points = {
                1, 1, 1, 1, 0,
                1, 0, 1, 1, 1,
                0, 0, 0, 0, 1,
                0, 1, 0, 0, 0
            }
        }, {
            face = "nocull",
            tex = 1,
            points = {
                1, 1, 0, 1, 0,
                1, 0, 0, 1, 1,
                0, 0, 1, 0, 1,
                0, 1, 1, 0, 0
            }
        }, {
            face = "nocull",
            tex = 1,
            points = {
                0, 0, 1, 0, 1,
                1, 0, 0, 1, 1,
                1, 1, 0, 1, 0,
                0, 1, 1, 0, 0
            }
        }
    }
})
```
