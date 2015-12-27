# NEST API NodeJS Client

### Dev Setup

Create a file `.env` in the root and set the following:

```
NEST_CLIENT_SECRET=your secret here
NEST_CLIENT_ID=your app id here
NODE_ENV=development
TOKEN=""
```

Use a repl or the tests to exchange a register link callback code for a token which you can add to `.env` for convenience.

### Test

    npm test
