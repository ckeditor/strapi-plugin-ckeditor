import { memo, useEffect } from 'react';
import { useCKEditorCloud } from '@ckeditor/ckeditor5-react';

const CKEditorProvider = ( {
  attribute,
  onChange,
  name,
  value,
  disabled = false,
  labelAction = null,
  intlLabel,
  required = false,
  description = null,
  error = null } ) => {

  // Clean up CDN scripts after unmounting the component.
  useEffect( () => {
    return () => {
      const assets = document.querySelectorAll( '[data-injected-by="ckeditor-integration"]' );
      const editables = document.querySelectorAll( '.ck-editor__editable_inline ' );

      // Editors might be nested in repeated components, which are collapsable.
      // In this case, expanding another component will collapse the previous one,
      // and for a short period of time there will be two active instances. After the first instance is
      // collapsed, CDN assets will be removed, which will break the second instance.
      // To prevent that, let's check whether there is an active editor on the page, before removing assets.
      //
      // See: https://github.com/ckeditor/strapi-plugin-ckeditor/issues/143
      if ( !editables.length ) {
        assets.forEach( asset => asset.remove() );
      }

      window.CKEDITOR_VERSION = null;
    }
  }, [] )

  const cloud = useCKEditorCloud( {
    version: '44.0.0',
    plugins: {
      CKEditorInput: async () => ( await import('../CKEditorInput') ).CKEditorInput
    }
  } );

  if ( cloud.status !== 'success' ) {
    return null;
  }

  return (
    <cloud.loadedPlugins.CKEditorInput
      attribute={ attribute }
      onChange={ onChange }
      name={ name }
      value={ value }
      disabled={ disabled }
      labelAction={ labelAction }
      required={ required }
      description={ description }
      error={ error }
      intlLabel={ intlLabel }
    />
  )
}

export default memo( CKEditorProvider );
