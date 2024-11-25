import { memo } from 'react';
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
  const cloud = useCKEditorCloud( {
    version: 'nightly',
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
