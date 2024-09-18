# Changelog

## 0.1.0 (September 19, 2024)

We are happy to announce the release of CKEditor 5 Official Integration v0.1.0.

### Release highlights

In this release, we've made changes to the CKEditor 5 integration for Strapi 4 by switching from npm packages to loading the editor via the CKEditor CDN. This adjustment mirrors the integration method introduced in version 1.0.0, which supports Strapi 5.

All plugin versions in the 0.x.x series, including version 0.1.0, will continue to support Strapi 4.

### BREAKING CHANGES ℹ️

* **CKEditor 5 integration now uses CDN instead of npm**. In version 0.1.0, we've transitioned from npm packages to loading CKEditor 5 via the CKEditor CDN. As the editor will now be loaded from an external origin, you'll need to update your Content Security Policy (CSP) to include https://cdn.ckeditor.com in the `script-src` directive. Please see the updated installation instructions in the `README.md` for further details.
