import React from 'react';
import prefixFileUrlWithBackendUrl from '../../legacy-helper-plugin/prefixFileUrlWithBackendUrl';
import PropTypes from 'prop-types';
import { useStrapiApp } from '@strapi/strapi/admin';

const MediaLib = ( { isOpen = false, onChange = () => {}, onToggle = () => {} } ) => {
  const { components } = useStrapiApp( 'library', app => app );
  const MediaLibraryDialog = components[ 'media-library' ];

  const handleSelectAssets = files => {
    const formattedFiles = files.map(f => ( {
      alt: f.alternativeText || f.name,
      url: prefixFileUrlWithBackendUrl( f.url ),
      mime: f.mime,
    } ) );

    onChange( formattedFiles );
  };

  if ( !isOpen ) {
    return null
  };

  return(
    <MediaLibraryDialog onClose={ onToggle } onSelectAssets={ handleSelectAssets } />
  );
};

MediaLib.propTypes = {
  isOpen: PropTypes.bool,
  onChange: PropTypes.func,
  onToggle: PropTypes.func,
};

export default MediaLib;
