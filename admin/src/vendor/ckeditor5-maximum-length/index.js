const { Plugin } = window.CKEDITOR;


export default class MaximumLength extends Plugin {
	static get pluginName() {
		return 'MaximumLength';
	}

	static get requires() {
		return [ 'WordCount' ];
	}

	init() {
		const editor = this.editor;
		const wordCount = editor.plugins.get( 'WordCount' );
		const characterLimit = editor.config.get( 'maximumLength.characters' );
		let hasMarker = false;

		editor.model.document.registerPostFixer( writer => {
			const currentCharacterCount = wordCount.characters;
			const excessRange = this._calculateExcessRange( characterLimit, currentCharacterCount );

			if ( excessRange ) {
				if ( !hasMarker ) {
					writer.addMarker( 'maximumLengthExcess', { range: excessRange, usingOperation: false } );
					hasMarker = true;
				} else {
					writer.updateMarker( 'maximumLengthExcess', { range: excessRange, usingOperation: false } );
				}
			} else if ( hasMarker ) {
				writer.removeMarker( 'maximumLengthExcess' );
				hasMarker = false;
			}
		} );

		editor.conversion.for( 'editingDowncast' ).markerToHighlight( {
			model: 'maximumLengthExcess',
			view: {
				classes: 'ck-maximum-length-excess'
			}
		} );
	}

	_calculateExcessRange( characterLimit, currentCharacterCount ) {
		if ( characterLimit > currentCharacterCount ) {
			return null;
		}

		const editor = this.editor;
		const contentRange = editor.model.createRangeIn( editor.model.document.getRoot() );
		const walker = contentRange.getWalker( { singleCharacters: true, direction: 'backward' } );

		let characterNumber = currentCharacterCount;
		let endPosition, startPosition;

		for ( const value of walker ) {
			if ( value.type == 'text' ) {
				if ( !endPosition ) {
					endPosition = value.previousPosition;
				}

				characterNumber--;

				if ( characterNumber < characterLimit ) {
					startPosition = value.previousPosition;

					return editor.model.createRange( startPosition, endPosition );
				}
			}
		}
	}
}
