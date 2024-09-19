# Changelog

## 1.0.0 (September 19, 2024)

We are happy to announce the release of CKEditor 5 Official Integration v1.0.0.

### Release highlights

This release introduces compatibility between the CKEditor 5 Official Integration plugin and Strapi 5. We are providing an updated version of the plugin to allow early testing and ensure seamless integration with the Strapi 5 release.

For users who continue to work with Strapi 4, the plugin remains available in version 0.x.x (with 0.1.0 being the latest as of September 19th). This ensures full support for Strapi 4 environments.

### BREAKING CHANGES ℹ️

* **CKEditor 5 integration now uses CDN instead of npm**. In version 1.0.0, we've transitioned from npm packages to loading CKEditor 5 via the CKEditor CDN. As the editor will now be loaded from an external origin, you'll need to update your Content Security Policy (CSP) to include https://cdn.ckeditor.com in the `script-src` directive. Please see the updated installation instructions in the `README.md` for further details.
