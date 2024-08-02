// Deprecated in Strapi v5
// https://docs-next.strapi.io/dev-docs/migration/v4-to-v5/guides/helper-plugin#prefixfileurlwithbackendurl
// Original code:
// https://github.com/strapi/strapi/blob/v4.25.2/packages/core/helper-plugin/src/utils/prefixFileUrlWithBackendUrl.ts
function prefixFileUrlWithBackendUrl ( fileURL ) {
  return !!fileURL && fileURL.startsWith('/') ? `${ window.strapi.backendURL }${ fileURL }` : fileURL;
};

export default prefixFileUrlWithBackendUrl;
