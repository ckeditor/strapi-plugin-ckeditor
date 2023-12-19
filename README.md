# CKEditor 5 custom field for Strapi, with AWS Bedrock AI-powered capabilities



https://github.com/Jeff-Tian/strapi-plugin-ckeditor/assets/3367820/26b46207-96c4-4767-8510-794f1323195e



This package provides a custom field for Strapi that lets you use and configure CKEditor quickly.

Custom fields are supported since Strapi 4.4+ and offer powerful API to create highly customizable fields.

This is NOT an official plugin! 👋

## <a id="features"></a>✨ Features

* **No code field customization:** Customize each field for its specific usage scenario – let it be a short note, blog article, or a document.
* **Predefined editor presets:** A couple of predefined editor presets (sets of CKEditor 5 plugins and their configuration) to choose from.
* **Custom max length validation:** Twitter-like length validation with visual indicators based on the number of characters in the text, not the HTML string.
* **Dark mode support:** because you like it.
* **Media library integration:** inserting images directly from Strapi's media library.
* **More features coming soon:** upload adapter integration, more granular editor toolbar and plugin configuration, and more.
* **AWS Bedrock AI powered capabilities:** AI powered content productivity.[![3ABCrQ.png](https://a.l3n.co/i/3ABCrQ.png)](https://lensdump.com/i/3ABCrQ)

## <a id="installation"></a>🔧 Installation

Inside your Strapi app, add the package:

With `npm`:

```bash
npm install @ckeditor/strapi-plugin-ckeditor
```

With `yarn`:

```bash
yarn add @ckeditor/strapi-plugin-ckeditor
```

Then run build:

```bash
npm run build
```

or:

```bash
yarn build
```

## <a id="config"></a>🚀 Configuration

[![3ABQNe.png](https://c.l3n.co/i/3ABQNe.png)](https://lensdump.com/i/3ABQNe)

## <a id="contributing"></a>🛠 Contributing

This section covers configuring your environment if you want to contribute to this package.

### Setting up the environment

To start making changes in the plugin, you must first install Strapi infrastructure on top of the plugin repository.

```
npx create-strapi-app --quickstart strapi
cd strapi
```

Strapi does not create a plugin folder by default, so we need to create it.

```
mkdir -p src/plugins
```

Now, we should clone this repository so we can work on it.

```
git clone git@github.com:ckeditor/strapi-plugin-ckeditor.git src/plugins/strapi-plugin-ckeditor
```

Let's add an entry inside the `./package.json` file so we won't need to use `yarn` inside the plugin itself.

```
"workspaces": ["./src/plugins/strapi-plugin-ckeditor"]
```

Install dependencies:

```
yarn install
```

Now we need to register the plugin so strapi can use it. In order to do that, we need
to create (if not already created) `./config/plugins.js` file and add an entry.

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
