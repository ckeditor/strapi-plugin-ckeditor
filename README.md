# CKEditor 5 - Official Integration for Strapi

<img src="https://user-images.githubusercontent.com/156149/192792402-4bb1e040-6f8c-49be-af90-fd35fd3a4c66.png" alt="CKEditor 5 used inside Strapi. Article form consisting of a title, excerpt text, and content">

> [!IMPORTANT]  
> Starting from version 1.0.0, the CKEditor 5 custom field plugin is compatible with Strapi 5 and can’t be used in Strapi 4.4+. We decided to maintain integrations for both Strapi versions to ensure that you can still use our custom field before migrating to Strapi 5. Below is the [compatibility table](#compatibility) showing which plugin version should be used with your Strapi version.

This package provides a custom field for Strapi 5 that lets you use and configure CKEditor in no time.

Custom fields are supported since Strapi 4.4+ and offer powerful API to create highly customizable fields.

This is an official plugin, provided to you by the [CKEditor team](https://ckeditor.com) 👋

## <a id="features"></a>✨ Features

* **No code field customization:** customize each field for its specific usage scenario – let it be short note, blog article, or a document.
* **Predefined editor presets:** a couple predefined editor presets (sets of CKEditor 5 plugins and their configuration) to choose from.
* **Custom max length validation:** Twitter-like length validation with visual indicators, based on the number of characters in the text, not the HTML string.
* **Dark mode support:** because you like it.
* **Media library integration:** inserting images directly from Strapi's media library.
* **More features coming soon:** upload adapter integration, more granular editor toolbar and plugins configuration, and more.

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

Then, add the Content Security Policy configuration to allow loading CKEditor 5 from https://cdn.ckeditor.com origin, by adding the rule to `config/middlewares.ts` in your Strapi project root:

```js
export default [
  // ...
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ['https://cdn.ckeditor.com']
        },
      },
    },
  },
  // ...
```

Finally run build:

```bash
npm run build
```

or:

```bash
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
```

Install dependencies:

```
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

## <a id="compatibility"></a>🧩 Compatibility with Strapi versions

Starting from version 1.0.0, the CKEditor 5 custom field plugin is compatible with Strapi 5 and can't be used in Strapi 4.4+. We decided to maintain integrations for both Strapi versions to make sure that you still be able to use our custom field before migrating to Strapi 5. Below, you can find the compatibility table that shows which plugin version should be used with your Strapi version.

 <table>
    <thead>
        <tr>
            <th>
                Plugin version
            </th>
            <th>
                Strapi version
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                1.x.x
            </td>
            <td>
                ≥ 5.0.0
            </td>
        </tr>
        <tr>
            <td>
                0.x.x
            </td>
            <td>
                ≥ 4.4
            </td>
        </tr>
    </tbody>
</table>

## <a id="licensing"></a>⚖️ Licensing

The plugin "CKEditor 5 - Official Integration for Strapi" is licensed under MIT. Please note that [CKEditor 5 itself is licensed under GPL v2+](https://ckeditor.com/legal/ckeditor-oss-license/?utm_campaign=strapi-integration&utm_source=ck-github&utm_medium=referral) or a [commercial license](https://ckeditor.com/pricing/?utm_campaign=strapi-integration&utm_source=ck-github&utm_medium=referral).
