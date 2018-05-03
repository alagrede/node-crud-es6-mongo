# Install Mongo

```
brew install mongodb
brew services start mongodb
```

MongoDB explorer tool: `https://robomongo.org/download`


## Project init

```
npm init
npm install --save-dev babel babel-cli babel-preset-es2015 babel-preset-stage-0 nodemon 
npm install --save body-parser express moment mongoose morgan
```
```
.babelrc
{
  "presets": ["es2015", "stage-0"]
}
```


# Run application
`npm start`

# Populate db
`node_modules/babel-cli/bin/babel-node.js populate.js`


# Build & run Docker
```
docker build -t tony/node-web-app .
docker run --name node-web-app -e DB_URL=mongodb://host.docker.internal/notes -p 8080:3000 -d tony/node-web-app
```
// --restart=always 

_Alternatively if you want externalize project sources from container_
1. Comment in Dockerfile `#COPY package*.json ./` and `#COPY . .`
2. Add volume option at container startup `-v /Users/tony/Desktop/node/tickets:/usr/src/app`


## Connect to container
```
docker exec -it node-web-app /bin/bash
```

## See startup logs
```
docker logs --follow django-mysite
```

