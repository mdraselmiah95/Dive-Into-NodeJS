# Dive Into NodeJS

#### We are going to explore the application we will build together. A multi-author blogging app using nodejs, expressjs, ejs template engines, MongoDB, mongoose, expression sessions and lot more.

![App Screenshot](https://res.cloudinary.com/mdraselmia/image/upload/v1669550603/feature_sktzax.png)

## NodeJS Express MongoDB Master🔥

### [[Chapter Notes]]

- **Node JS** installation from official site nodejs.org - use only LTS versions
- Use **terminal / command prompt** to check installation :
  `node -v`
  `npm -v `
- **VS Code** installation directly from code.visualstudio.com site
- Use VS code terminal to run **commands**
- **Node REPL** interface can be used directly by typing `node` in **terminal / command prompt** . Use **Ctrl+D** to exit interface. Use **CTRL+C** to exit terminal
- Running any JavaScript file from node using `node filename.js`
- **Modules** are basic containers in Node/JavaScript system. 1 file can be one module in Javascript.
- Two type of Module Systems in node JS are - **CommonJS** module and **ES** Modules.

- FileSystem Module(fs) is one of core modules of Node JS. **fs** can be used to read/write any file. There are many more core modules in NodeJS which you can check in NodeJS API docs.
- Reading files can be **Synchronous** or **Asynchronous**. **Async** is most preferred method in NodeJS. As there is **NO blocking of I/O in NodeJS**

- Node project can be initialized with `npm init` command which also creates `package.json` file
- **package.json** is a configuration file for node projects which has **scripts**, **dependencies**, **devDependencies** etc
- `npm install <package-name>` is used to install any online modules available for node on NPM repository online.
- `nodemon` is a package for running node server and track live changes to re-start again.
- `scripts` inside **package.json** can be used like `npm run <script-name>` e.g `npm run dev`. Only for `npm start` you can avoid `run`.
- use `npm install -g <package.json>` to install packages globally on your system. Not just in the project but useful all over your system.
- Node versions are formatted like **4.1.9** where these are `major.minor.patch` versions.
- you can install all dependencies again using `npm install` again
- **package-lock.json** has exact versions installed and link of dependencies of each package.
- use `npm update` to update packages safely. `npm outdated` shows outdated and latest versions of packages installed in your **package.json**
- use `npm uninstall <package-name>` to uninstall packages from `package.json`
- `node_modules` should not be shared - you can make `.gitignore`to ignore them to be uploaded.

#### HTTP requests

Request object comprises of many properties, but important ones are :

- **Type of Request** : GET, POST, PUT, DELETE etc.
- **Headers** : Meta data sent by your browser like browser name, cookies, authentication information etc.
- **Query Parameters** (url?`name=john`) : This is used in GET requests to send data to server
- **Route Params** (url/`john`)
- **Body data** : This is used in POST and other requests to send data to server

#### HTTP responses

Response object comprises of many properties, but important ones are :

- **Headers** : Meta data sent by your server back to client like server name, content size, last updated time etc.
- **Response status code** (`200`, `404`, `403`, `502`)
- **Response body** : Actual data to be sent to client : HTML, JS, JSON, CSS, Image etc.

#### More info

- HTTP requests and responses can be tracked from **Dev Tools** > **Network Tab**
- In Node, we can use core **http** module to create a Server which listens to requests, modify data in-between and provides responses. Server needs a **PORT** to be bound to - use only port number > 1024.
- Server can simply be said as **a function which receives a request and returns a response**. [ This is just for understanding]
- There are many **Headers** which exists on request and responses - shared a link below with list of existing headers.

- We can use Server to do 3 things:

  - **Static file Hosting** : Sending normal files without formatting or modifying.
  - **Server Side Rendering** : Mixing data with templates and rendering dynamic views (dynamic web pages)
  - **Web APIs** : Sending data via some APIs/ endpoints.

- Every Request has one and only one response. If there is more than 1 response which you want to send - you will encounter a error - "_Headers already sent_"
- POSTMAN is a software for doing complex API requests.
