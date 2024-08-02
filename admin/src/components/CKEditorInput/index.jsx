import React, { useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { Flex } from '@strapi/design-system';
import { Field } from '@strapi/design-system';
import PropTypes from "prop-types";

import { getGlobalStyling } from './GlobalStyling';
import Configurator from './Configurator';
import MediaLib from '../MediaLib';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import 'ckeditor5/build/ckeditor5-dll.js';
import '@ckeditor/ckeditor5-editor-classic/build/editor-classic.js';

import sanitize from './utils/utils';
import { useField } from '@strapi/strapi/admin';

const strapiTheme = localStorage.getItem( 'STRAPI_THEME' ) || 'light';
const GlobalStyling = getGlobalStyling( strapiTheme );

const CKEditorInput = ({
  attribute,
  name,
  disabled = false,
  labelAction = null,
  required = false,
  description = null,
  error = null
}) => {
  const { onChange, value } = useField( name );
  const [ editorInstance, setEditorInstance ] = useState(false);
  const { formatMessage } = useIntl();
  const { maxLengthCharacters:maxLength , ...options } = attribute.options;
  const configurator = new Configurator( { options, maxLength } );
  const editorConfig = configurator.getEditorConfig();

  const wordCounter = useRef( null );

  const [ mediaLibVisible, setMediaLibVisible ] = useState( false );

  const handleToggleMediaLib = () => setMediaLibVisible( prev => !prev );

  const handleChangeAssets = assets => {
    let imageHtmlString = '';

    assets.map( asset => {
      if ( asset.mime.includes('image') ) {
        const url = sanitize( asset.url );
        const alt = sanitize( asset.alt );

        imageHtmlString += `<img src="${ url }" alt="${ alt }" />`;
      }
    } );

    const viewFragment = editorInstance.data.processor.toView( imageHtmlString );
    const modelFragment = editorInstance.data.toModel( viewFragment );
    editorInstance.model.insertContent( modelFragment );

    handleToggleMediaLib();
  };

  return (
    <Field.Root
      name= {name }
      id={ name }
      // GenericInput calls formatMessage and returns a string for the error
      error={ error }
      hint={ description && formatMessage( description ) }
    >
      <Flex spacing={ 1 } alignItems="normal" style={ { 'flexDirection': 'column' } }>
        <Field.Label action={ labelAction } required={ required }>
          { formatMessage( { id: 'ckeditor.label', defaultMessage: 'CKEditor' } ) }
        </Field.Label>
        <GlobalStyling />
        <CKEditor
          editor={ window.CKEditor5.editorClassic.ClassicEditor }
          disabled={ disabled }
          data={ value }
          onReady={ ( editor ) => {
            const wordCountPlugin = editor.plugins.get( 'WordCount' );
            const wordCountWrapper = wordCounter.current;
            wordCountWrapper.appendChild( wordCountPlugin.wordCountContainer );

            const mediaLibPlugin = editor.plugins.get( 'strapiMediaLib' );
            mediaLibPlugin.connect( handleToggleMediaLib );

            setEditorInstance( editor );
          }}
          onChange={ ( event, editor ) => {
            const data = editor.getData();

            onChange( { target: { name, value: data } } );

            const wordCountPlugin = editor.plugins.get( 'WordCount' );
            const numberOfCharacters = wordCountPlugin.characters;

            if ( numberOfCharacters > maxLength ) {
              console.log( 'Too long' );
            }
          }}
          config={ editorConfig }
        />
        <div ref={ wordCounter }></div>
        <Field.Hint />
        <Field.Error />
      </Flex>
      <MediaLib isOpen={ mediaLibVisible } onChange={ handleChangeAssets } onToggle={ handleToggleMediaLib } />
    </Field.Root>
  );
};

CKEditorInput.propTypes = {
  intlLabel: PropTypes.object,
  attribute: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.object,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  labelAction: PropTypes.object,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export default CKEditorInput;
