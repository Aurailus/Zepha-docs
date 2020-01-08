# Environment Variables

The engine exposes local environment variables to lua files to give them knowledge of their relation to other files. These properties are in the global namespace, and are prefixed with `_`.

All of the environment variables are listed below.

## Variables

### \_PATH

The current sandboxed path of the file being executed. 

For a mod named `test:mod` in the file `main.lua`, `\_PATH` would be set to `test:mod`. 

### \_FILE

The current sandboxed path and name of the file being executed. 

For a mod named `test:mod` in the file `main.lua`, `\_FILE` would be set to `test:mod/main`.

### \_MODNAME

The name of the mod which the file belongs to.

For a mod named `test:mod`, `\_MODNAME` would be set to `test:mod`.
