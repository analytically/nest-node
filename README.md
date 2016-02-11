# Nest cloud API NodeJS Client

A NodeJS client for [Nest(R) cloud API](https://developer.nest.com/documentation/cloud/about). The Nest cloud API is a 
near real-time data API, offering subscription-based access to data shared by Nest devices. We call that Nest Sense. 
With the Nest cloud API, you can build products that access Nest device data, and get the ability to read or write 
shared data values.

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

#### License

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

Copyright 2016 [Mathias Bogaert](mailto:mathias.bogaert@gmail.com).