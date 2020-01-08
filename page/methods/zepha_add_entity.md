# zepha.add_entity

Creates an entity with the type `identifier` at position `pos`.
## Syntax

`zepha.add_entity(identifier, pos, staticdata)`

## Parameters

`identifier`: The type of entity to add, entity types are created using [zepha.register_entity](/docs/methods/zepha_register_entity).

`pos`: A vector containing the position to add the entity at.

`staticdata`: An optional string parameter to be passed into the entity's [on_create](/docs/definitions/entity_definition#on_create) method.

## Example

```
-- Add a zeus:default:dropped_item entity for 
-- zeus:default:dirt at [10.5, 10.5, 10.5] with static 
-- data containing what item for it to display as.

local pos = {x = 10, y = 10, z = 10}

zepha.add_entity("zeus:default:dropped_item", 
	{x = pos.x + 0.5, y = pos.y + 0.5, z = pos.z + 0.5},
	zepha.registered_blocks["zeus:default:dirt"].drop)
```
