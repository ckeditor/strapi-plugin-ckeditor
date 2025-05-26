"use strict";

module.exports = {
  index(ctx) {
    ctx.body = {
      ckeditor: {
        licenseKey: process.env.CKEDITOR_LICENSE_KEY || "",
      }
    }
  },
};
