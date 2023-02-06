import { prefixPluginTranslations } from '@strapi/helper-plugin';
import * as yup from 'yup';

import React from 'react';
import styled from 'styled-components';
import { Icon } from '@strapi/design-system/Icon';
import { Flex } from '@strapi/design-system/Flex';
import CKEditorIcon from './CKEditorIcon';

const IconBox = styled( Flex )`
  background-color: #f0f0ff; /* primary100 */
  border: 1px solid #d9d8ff; /* primary200 */
  svg > path {
    fill: #4945ff; /* primary600 */
  }
`;

export default {
  register( app ) {
    app.customFields.register( {
      name: 'CKEditor',
      type: 'richtext',
      pluginId: 'ckeditor',
      icon: () => {
        return (
          <IconBox justifyContent="center" alignItems="center" width={ 7 } height={ 6 } hasRadius aria-hidden>
            <Icon as={ CKEditorIcon } />
          </IconBox>
        );
      },
      intlLabel: {
        id: 'ckeditor.label',
        defaultMessage: 'CKEditor'
      },
      intlDescription: {
        id:  'ckeditor.description',
        defaultMessage: 'The rich text editor for every use case'
      },
      components: {
        Input: async () => import( './components/CKEditorInput' ),
      },
      options: {
        base: [
          {
            intlLabel: {
              id: 'ckeditor.preset.label',
              defaultMessage: 'Choose editor version',
            },
            description: {
              id: 'ckeditor.preset.description',
              defaultMessage: "Do you need more or less features?",
            },
            name: 'options.preset',
            type: 'select',
            options: [
              {
                key: 'light',
                value: 'light',
                metadatas: {
                  intlLabel: {
                    id: 'ckeditor.preset.light.label',
                    defaultMessage: 'Light version'
                  }
                }
              },
              {
                key: 'standard',
                value: 'standard',
                metadatas: {
                  intlLabel: {
                    id: 'ckeditor.preset.standard.label',
                    defaultMessage: 'Standard version'
                  }
                }
              },
              {
                key: 'rich',
                value: 'rich',
                metadatas: {
                  intlLabel: {
                    id: 'ckeditor.preset.rich.label',
                    defaultMessage: 'Rich version'
                  }
                }
              }
            ],
          },
          {
            intlLabel: {
              id: 'ckeditor.output.label',
              defaultMessage: 'Choose output type',
            },
            description: {
              id: 'ckeditor.output.description',
              defaultMessage: "Decide, whether you want to get your output in HTML or Markdown",
            },
            name: 'options.output',
            type: 'select',
            defaultValue: 'HTML',
            options: [
              {
                key: 'html',
                value: 'HTML',
                metadatas: {
                  intlLabel: {
                    id: 'ckeditor.output.html.label',
                    defaultMessage: 'HTML'
                  }
                }
              },
              {
                key: 'markdown',
                value: 'Markdown',
                metadatas: {
                  intlLabel: {
                    id: 'ckeditor.output.markdown.label',
                    defaultMessage: 'Markdown'
                  }
                }
              }
            ]
          }
        ],
        advanced: [
          {
            sectionTitle: null,
            items: [
              {
                name: 'required',
                type: 'checkbox',
                intlLabel: {
                  id:  'ckeditor.required.label',
                  defaultMessage: 'Required field',
                },
                description: {
                  id:  'ckeditor.required.description',
                  defaultMessage: "You won't be able to create an entry if this field is empty",
                },
              },
              // Note: We can't call it simply "maxLength" because then Strapi
              // applies this to the length of HTML string automatically.
              // We want to apply this to the number of characters in the editor,
              // hence – a unique name.
              {
                name: 'options.maxLengthCharacters',
                type: 'checkbox-with-number-field',
                intlLabel: {
                  id: 'ckeditor.maxLength.label',
                  defaultMessage: 'Maximum length (characters)',
                }
              }
            ],
          },
        ],
        validator: args => ( {
          preset: yup.string().required( {
            id: 'ckeditor.preset.error.required',
            defaultMessage: 'Editor preset is required',
          } ),
        } ),
      },
    } );
  },
  async registerTrads( { locales } ) {
    const importedTrads = await Promise.all(
      locales.map( ( locale ) => {
        return import( `./translations/${ locale }.json` )
          .then( ( { default: data } ) => {
            return {
              data: data,
              locale,
            };
          } )
          .catch( () => {
            return {
              data: {},
              locale,
            };
          } );
      } )
    );

    return Promise.resolve( importedTrads );
  },
};
