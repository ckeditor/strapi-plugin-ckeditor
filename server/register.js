'use strict';

const register = ( { strapi } ) => {
  strapi.customFields.register( {
    name: 'CKEditor',
    plugin: 'ckeditor',
    type: 'richtext'
  } )
};

module.exports = register;
