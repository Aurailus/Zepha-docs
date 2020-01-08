
# Entity Definition

An Entity Definition is a table representing the properties and callbacks of an entity. Entity Definitions are supplied when calling [zepha.register_entity](/docs/methods/zepha_register_entity). The entity definitions for registered entities can be found at runtime in the [zepha.registered_entities](/docs/tables/registered_tables#zepha_registered_entities) table.

The properties and callbacks that can be used in a Block Definition are as follows.

## Properties

### display

Used to specify how the entity renders. Valid parameters:

`gameobject`: Render as a registered Block or Item.

`model`: Render as a loaded B3D Model.

`display = "gameobject"`

### display_object

Used to specify additional parameters based on the `display` property.

If the `display` property is `"gameobject"`, this property sets the Block or Item that is rendered.

If the `display` property is `"model"`, this property specifies the name of the model to render.

`display_object = "zeus:materials:stick"`

### display_texture

If the `display` property is `model`, this property specfies the texture to use for the model.

`display_texture = "zeus:default:player"`

## Callbacks

### on_create

Called when an instance of the entity is added to the world, or loaded from a serialized state.

`static` contains a serialized data structure if one was supplied during construction, or one was saved for this entity by on_serialize.

`on_create = function(self, static)`

### on_update

Called every update step.

`delta` is the time in seconds since the last update step.

`on_update = function(self, delta)`

### on_destroy

Called before the object is destroyed.

`on_destroy = function(self)`

### on_serialize

Called when the object is unloaded. When an object is unloaded it can supply a string of serialized data to store for when it gets loaded in later.

`on_serialize = function(self) return "data" end`
