# CKEditor 5 custom field for Strapi, with AWS Bedrock AI-powered capabilities



https://github.com/Jeff-Tian/strapi-plugin-ckeditor/assets/3367820/26b46207-96c4-4767-8510-794f1323195e



This package provides a custom field for Strapi that lets you use and configure CKEditor quickly.

Custom fields are supported since Strapi 4.4+ and offer powerful API to create highly customizable fields.

This is NOT an official plugin! 👋


## <a id="features"></a>✨ Features

* **No code field customization:** customize each field for its specific usage scenario – let it be short note, blog article, or a document.
* **Predefined editor presets:** a couple predefined editor presets (sets of CKEditor 5 plugins and their configuration) to choose from.
* **Custom max length validation:** Twitter-like length validation with visual indicators, based on the number of characters in the text, not the HTML string.
* **Dark mode support:** because you like it.
* **Media library integration:** inserting images directly from Strapi's media library.
* **More features coming soon:** upload adapter integration, more granular editor toolbar and plugins configuration, and more.

## <a id="installation"></a>🔧 Installation

	@@ -45,32 +50,36 @@ or:
yarn build
```

## <a id="contributing"></a>🛠 Contributing

This section covers the way how to configure your environment if you want to contribute to this package.

### Setting up the environment

In order to start making changes in the plugin you first need to install Strapi infrastructure on top of the plugin repository.

```
npx create-strapi-app --quickstart strapi
cd strapi
```

By default Strapi does not create plugins folder so we need to create it.

```
mkdir -p src/plugins
```

Now we should clone this repository so we can work on it.

```
git clone git@github.com:ckeditor/strapi-plugin-ckeditor.git src/plugins/strapi-plugin-ckeditor
```

Let's add an entry inside `./package.json` file so, we won't need to use `yarn` inside plugin itself.

```
"workspaces": ["./src/plugins/strapi-plugin-ckeditor"]
	@@ -82,8 +91,8 @@ Install dependencies:
yarn install
```

Now we need to register plugin so strapi can use it. In order to do that we need
to create (if not already created) `./config/plugins.js` file and add entry to it.

```
module.exports = ({ env }) => ({
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor"
  },
});
```

Rebuild the project and start the server:

```
yarn build
yarn develop
```
