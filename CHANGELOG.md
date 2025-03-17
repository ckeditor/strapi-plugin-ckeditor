# Changelog

## 0.2.1 (March 17, 2025)

We are happy to announce the release of CKEditor 5 Official Integration v0.2.1.

### Release highlights

In this release, we fixed the issue related to integrating the custom field in repeatable components. See [#143](https://github.com/ckeditor/strapi-plugin-ckeditor/issues/143) to learn more.

## 0.2.0 (December 2, 2024)

We are happy to announce the release of CKEditor 5 Official Integration v0.2.0.

### Release highlights

In this release, we updated the CKEditor 5 version to [v44.0.0](https://github.com/ckeditor/ckeditor5/blob/master/CHANGELOG.md#4400-december-2-2024), which introduces high impact updates. Starting from the plugin version 0.2.0, the custom field will require passing a valid license key.

### BREAKING CHANGES ℹ️

* **CKEditor 5 custom field now requires the license key**. CKEditor 5 now requires a valid license key, which can be retrieved from [Customer Portal](https://portal.ckeditor.com/). You can sign up for a [commitment-free trial](https://portal.ckeditor.com/checkout?plan=free) and get instant access to your key. 

## 0.1.0 (September 19, 2024)

We are happy to announce the release of CKEditor 5 Official Integration v0.1.0.

### Release highlights

In this release, we've made changes to the CKEditor 5 integration for Strapi 4 by switching from npm packages to loading the editor via the CKEditor CDN. This adjustment mirrors the integration method introduced in version 1.0.0, which supports Strapi 5.

All plugin versions in the 0.x.x series, including version 0.1.0, will continue to support Strapi 4.

### BREAKING CHANGES ℹ️

* **CKEditor 5 integration now uses CDN instead of npm**. In version 0.1.0, we've transitioned from npm packages to loading CKEditor 5 via the CKEditor CDN. As the editor will now be loaded from an external origin, you'll need to update your Content Security Policy (CSP) to include https://cdn.ckeditor.com in the `script-src` directive. Please see the updated installation instructions in the `README.md` for further details.
