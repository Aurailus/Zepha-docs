# dump

Prints the contents of a table to the command line.

Tables in lua do not have explicit ordering, so the output might not match the order the keys have been written in.

## Syntax

`dump(table)`

## Parameters

`table`: The table to dump.

## Example

```
local table = {
    foo = "bar",
    bar = "baz??",
    baz = "..um",
    tbl2 = {
        key1 = "a",
        key2 = "b"
    }
}

dump(table);
```

Prints:
```
tbl2 = {
  key1 = a
  key2 = b
}
bar = baz??
baz = ..um
foo = bar
```
