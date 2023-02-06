/*
 *  Sanitizes the provided input by replacing certain special characters
 *  with entities.
 */

export default function sanitize( data ) {
  const characters = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }

  for ( const char in characters ) {
    const entity = characters[ char ];

    data = data.replaceAll( char, entity );
  }

  return data;
}
