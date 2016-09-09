# Configure OAuth Services

Specify service keys in `settings.json`, then `import` this package into your top level on the server.
Inspired by https://themeteorchef.com/recipes/roll-your-own-authentication/
You must do this before using any of these OAuth logins, this package lets you do without cluttering up your source.

### Example

```
//settings.json
{
  "OAUTH": {
    "google":{
      "clientId":"apiKey",
      "secret":"apiSecret",
      "loginStyle":"redirect" //"popup" is default
    },
    "facebook":{
      "appId": "apiKey",
      "secret": "apiSecret"
    },
    "twitter":{
      "consumerKey": "apiKey",
      "secret": "apiSecret"
    },
    "github":{
      "clientId": "apiKey",
      "secret": "apiSecret"
    }
  }
}
```

The appropriate service initialization code is injected into the server upon installation of the package, so there's nothing else you need to do.