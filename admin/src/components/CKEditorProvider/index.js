import { memo } from 'react';
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
  const cloud = useCKEditorCloud( {
    version: '43.0.0',
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
