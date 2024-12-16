# Unhandled Promise Rejection in Express.js Middleware

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous middleware.  The bug involves an asynchronous operation within a route handler that doesn't properly handle potential errors, leading to the server crashing.

## Bug

The `bug.js` file contains an Express.js server with a route handler that performs an asynchronous operation (`doSomethingAsync`). This operation can fail, throwing an error. However, the error isn't caught, resulting in an unhandled promise rejection and the server crashing.

## Solution

The `bugSolution.js` file provides a corrected version of the server. It includes a `.catch()` block within the `.then()` chain of the asynchronous operation to handle potential errors gracefully.  This prevents the server from crashing and allows for more robust error management.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`. The server will start and then immediately crash.
4. Run `node bugSolution.js`. The server will start, and even if the asynchronous operation fails, it will continue running without crashing.