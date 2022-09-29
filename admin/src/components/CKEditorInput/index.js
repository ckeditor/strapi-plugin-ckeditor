import React, { useRef } from 'react';
import { useIntl } from 'react-intl';
import { Stack } from '@strapi/design-system/Stack';
import { Field, FieldHint, FieldError, FieldLabel } from '@strapi/design-system/Field';
import PropTypes from "prop-types";

import { getGlobalStyling } from "./GlobalStyling";
import Configurator from "./Configurator";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ckeditor5Dll from "ckeditor5/build/ckeditor5-dll.js";
import ckeditor5EditorClassicDll from "@ckeditor/ckeditor5-editor-classic/build/editor-classic.js";

const CKEditorInput = ({
  attribute,
  onChange,
  name,
  value,
  disabled,
  labelAction,
  intlLabel,
  required,
  description,
  error
}) => {
  const { formatMessage } = useIntl();
  const maxLength = attribute.maxLengthCharacters;
  const configurator = new Configurator( { options: attribute.options, maxLength } );
  const editorConfig = configurator.getEditorConfig();

  const wordCounter = useRef(null);

  const strapiTheme = localStorage.getItem("STRAPI_THEME");
  const GlobalStyling = getGlobalStyling(strapiTheme);

  return (
    <Field
      name={name}
      id={name}
      // GenericInput calls formatMessage and returns a string for the error
      error={error}
      hint={description && formatMessage(description)}
    >
      <Stack spacing={1}>
        <FieldLabel action={labelAction} required={required}>
          {formatMessage(intlLabel)}
        </FieldLabel>
        <GlobalStyling />
        <CKEditor
          editor={window.CKEditor5.editorClassic.ClassicEditor}
          disabled={disabled}
          data={value}
          onReady={(editor) => {
            const wordCountPlugin = editor.plugins.get( 'WordCount' );
            const wordCountWrapper = wordCounter.current;
            wordCountWrapper.appendChild( wordCountPlugin.wordCountContainer );
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange({ target: { name, value: data } });

            const wordCountPlugin = editor.plugins.get( 'WordCount' );
            const numberOfCharacters = wordCountPlugin.characters;

            if ( numberOfCharacters > maxLength ) {
              console.log( 'Too long' );
            }
          }}
          config={editorConfig}
        />
        <div ref={wordCounter}></div>
        <FieldHint />
        <FieldError />
      </Stack>
    </Field>
  );
};

CKEditorInput.defaultProps = {
  description: null,
  disabled: false,
  error: null,
  labelAction: null,
  required: false,
  value: '',
};

CKEditorInput.propTypes = {
  intlLabel: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
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
