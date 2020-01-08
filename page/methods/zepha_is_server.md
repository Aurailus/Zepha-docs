
# zepha.is_server

Returns a boolean indicating whether the script is being run on the client or the server.

**Warning:** Running any `zepha.register*` function inside of a conditional using `zepha.is_server()` is forbidden, and clients will not be able to connect.

## Syntax

`zepha.is_server()`

## Example

```
if zepha.is_server() then
	print("I'm the server")
else
	print("I'm the client")
end

```
