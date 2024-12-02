import { createIntegrationUsageDataPlugin } from '@ckeditor/ckeditor5-integrations-common';
import * as pkg from '../../../../../package.json'

export const StrapiEditorUsageDataPlugin = createIntegrationUsageDataPlugin(
	'strapi',
	{
		version: pkg.version,
	}
);
