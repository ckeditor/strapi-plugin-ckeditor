import { useState, useEffect } from 'react';

const CKEditorProvider = ( {
  attribute,
  name,
  disabled = false,
  labelAction = null,
  required = false,
  description = null,
  error = null,
  intlLabel } ) => {
  const [ importedEditor, setImportedEditor ] = useState( null );

  useEffect( () => {
    const importEditor = async () => {
      const module = await import( '../CKEditorInput' );
      const CKEditorInput = module.default;

      setImportedEditor(<CKEditorInput
        attribute={ attribute }
        name={ name }
        disabled={ disabled }
        labelAction={ labelAction }
        required={ required }
        description={ description }
        error={ error }
        intlLabel={ intlLabel }
        /> );
    };

    const injectAssetsFromCDN = setInterval( () => {
      const CDNScript = document.querySelector( '#ckeditor5-cdn-script' );
      const CDNStyles = document.querySelector( '#ckeditor5-cdn-styles' );

      if ( !CDNStyles ) {
        _injectStylesFromCDN();
      }

      if ( window.CKEDITOR ) {
        window.CKEditorCDNLoaded = true;

        importEditor();

        clearInterval( injectAssetsFromCDN );

        return;
      }

      if ( !CDNScript ) {
        _injectScriptFromCDN();

      }
    }, 100 )

    return () => {
      const CDNScript = document.querySelector( '#ckeditor5-cdn-script' );

      if ( CDNScript ) {
        CDNScript.remove();
      }

      window.CKEditorCDNLoaded = false;
    }
  }, [] );

  return (
    <>
      { window.CKEditorCDNLoaded && importedEditor }
    </>
  )
}

function _injectStylesFromCDN() {
  const link = document.createElement( 'link' );

  link.rel = 'stylesheet';
  link.href = 'https://cdn.ckeditor.com/ckeditor5/43.0.0/ckeditor5.css';
  link.id = 'ckeditor5-cdn-styles';

  document.head.appendChild( link );
}

function _injectScriptFromCDN() {
  const script = document.createElement( 'script' );

  script.src = "https://cdn.ckeditor.com/ckeditor5/43.0.0/ckeditor5.umd.js";
  script.async = true;
  script.id = 'ckeditor5-cdn-script'

  document.body.appendChild( script );
}

export default CKEditorProvider;
