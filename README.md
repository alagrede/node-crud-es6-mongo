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
