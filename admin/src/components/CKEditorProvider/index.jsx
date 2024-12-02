import { memo, useEffect } from 'react';
import { useCKEditorCloud } from '@ckeditor/ckeditor5-react';

const CKEditorProvider = ( {
  attribute,
  name,
  disabled = false,
  labelAction = null,
  required = false,
  description = null,
  error = null,
  intlLabel } ) => {

  // Clean up CDN scripts after unmounting the component.
  useEffect( () => {
    return () => {
      const assets = document.querySelectorAll( '[data-injected-by="ckeditor-integration"]' );

      assets.forEach( asset => asset.remove() );

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
      name={ name }
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
