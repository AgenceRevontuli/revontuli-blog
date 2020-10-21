const settings = {
  "name": "revontuliblog",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "Revontuli Blog",
      "description": "Le meilleur blog du monde"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Marketing"
            ],
            [
              "Data"
            ],
            [
              "Développement web"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://revontuli.formego.fr/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
