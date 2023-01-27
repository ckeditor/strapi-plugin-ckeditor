import ckeditor5Dll from "ckeditor5/build/ckeditor5-dll.js";

import ckeditor5AlignmentDll from "@ckeditor/ckeditor5-alignment/build/alignment.js";
import ckeditor5AutoformatDll from "@ckeditor/ckeditor5-autoformat/build/autoformat.js";
import ckeditor5BasicStylesDll from "@ckeditor/ckeditor5-basic-styles/build/basic-styles.js";
import ckeditor5BlockQuoteDll from "@ckeditor/ckeditor5-block-quote/build/block-quote.js";
import ckeditor5CodeBlockDll from "@ckeditor/ckeditor5-code-block/build/code-block.js";
import ckeditor5EssentialsDll from "@ckeditor/ckeditor5-essentials/build/essentials.js";
import ckeditor5FontDll from "@ckeditor/ckeditor5-font/build/font.js";
import ckeditor5HeadingDll from "@ckeditor/ckeditor5-heading/build/heading.js";
import ckeditor5HighlightDll from '@ckeditor/ckeditor5-highlight/build/highlight.js';
import ckeditor5HtmlEmbedDll from "@ckeditor/ckeditor5-html-embed/build/html-embed.js";
import ckeditor5HorizontalLineDll from "@ckeditor/ckeditor5-horizontal-line/build/horizontal-line.js";
import ckeditor5MarkdownDll from '@ckeditor/ckeditor5-markdown-gfm/build/markdown-gfm';
import ckeditor5MediaEmbedDll from "@ckeditor/ckeditor5-media-embed/build/media-embed.js";
import ckeditor5ImageDll from "@ckeditor/ckeditor5-image/build/image.js";
import ckeditor5IndentDll from "@ckeditor/ckeditor5-indent/build/indent.js";
import ckeditor5LinkDll from "@ckeditor/ckeditor5-link/build/link.js";
import ckeditor5ListDll from "@ckeditor/ckeditor5-list/build/list.js";
import ckeditor5PasteFromOfficeDll from "@ckeditor/ckeditor5-paste-from-office/build/paste-from-office.js";
import ckeditor5FindAndReplaceDll from "@ckeditor/ckeditor5-find-and-replace/build/find-and-replace.js";
import ckeditor5RemoveFormatDll from "@ckeditor/ckeditor5-remove-format/build/remove-format.js";
import ckeditor5SpecialCharactersDll from "@ckeditor/ckeditor5-special-characters/build/special-characters.js";
import ckeditor5TableDll from "@ckeditor/ckeditor5-table/build/table.js";
import ckeditor5WordCountDll from "@ckeditor/ckeditor5-word-count/build/word-count.js";
import ckeditor5MaximumLengthDll from "@reinmar/ckeditor5-maximum-length/build/maximum-length.js";
import { StrapiMediaLib } from "./plugins/StrapiMediaLib";

const CKEDITOR_BASE_CONFIG_FOR_PRESETS = {
  light: {
    plugins: [
      window.CKEditor5.autoformat.Autoformat,
      window.CKEditor5.basicStyles.Bold,
      window.CKEditor5.basicStyles.Italic,
      window.CKEditor5.essentials.Essentials,
      window.CKEditor5.heading.Heading,
      window.CKEditor5.image.Image,
      window.CKEditor5.image.ImageCaption,
      window.CKEditor5.image.ImageStyle,
      window.CKEditor5.image.ImageToolbar,
      window.CKEditor5.image.ImageUpload,
      window.CKEditor5.indent.Indent,
      window.CKEditor5.link.Link,
      window.CKEditor5.list.List,
      window.CKEditor5.paragraph.Paragraph,
      window.CKEditor5.pasteFromOffice.PasteFromOffice,
      window.CKEditor5.table.Table,
      window.CKEditor5.table.TableToolbar,
      window.CKEditor5.table.TableColumnResize,
      window.CKEditor5.table.TableCaption,
      window.CKEditor5.wordCount.WordCount,
      StrapiMediaLib
    ],
    toolbar: [
      'undo', 'redo',
      '|',
      'heading',
      '|',
      'bold', 'italic',
      '|',
      'link', 'strapiMediaLib', 'insertTable',
      '|',
      'bulletedList', 'numberedList'
    ],
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
        { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
      ]
    },
    image: {
      toolbar: [
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        '|',
        'toggleImageCaption',
        'imageTextAlternative'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        '|',
        'toggleTableCaption'
      ]
    },
  },

  standard: {
    plugins: [
      window.CKEditor5.autoformat.Autoformat,
      window.CKEditor5.basicStyles.Bold,
      window.CKEditor5.basicStyles.Italic,
      window.CKEditor5.blockQuote.BlockQuote,
      window.CKEditor5.codeBlock.CodeBlock,
      window.CKEditor5.essentials.Essentials,
      window.CKEditor5.heading.Heading,
      window.CKEditor5.image.Image,
      window.CKEditor5.image.ImageCaption,
      window.CKEditor5.image.ImageStyle,
      window.CKEditor5.image.ImageToolbar,
      window.CKEditor5.image.ImageUpload,
      window.CKEditor5.indent.Indent,
      window.CKEditor5.link.Link,
      window.CKEditor5.link.LinkImage,
      window.CKEditor5.list.List,
      window.CKEditor5.mediaEmbed.MediaEmbed,
      window.CKEditor5.paragraph.Paragraph,
      window.CKEditor5.pasteFromOffice.PasteFromOffice,
      window.CKEditor5.table.Table,
      window.CKEditor5.table.TableToolbar,
      window.CKEditor5.table.TableColumnResize,
      window.CKEditor5.table.TableCaption,
      window.CKEditor5.wordCount.WordCount,
      StrapiMediaLib
    ],
    toolbar: [
        'undo', 'redo',
        '|',
        'heading',
        '|',
        'bold', 'italic',
        '|',
        'link', 'strapiMediaLib', 'mediaEmbed', 'blockQuote', 'insertTable', 'codeBlock',
        '|',
        'bulletedList', 'numberedList', 'outdent', 'indent'
    ],
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
        { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
      ]
    },
    image: {
      toolbar: [
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        '|',
        'toggleImageCaption',
        'imageTextAlternative',
        '|',
        'linkImage'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        '|',
        'toggleTableCaption'
      ]
    },
  },

  rich: {
    plugins: [
      window.CKEditor5.alignment.Alignment,
      window.CKEditor5.autoformat.Autoformat,
      window.CKEditor5.basicStyles.Bold,
      window.CKEditor5.basicStyles.Italic,
      window.CKEditor5.basicStyles.Underline,
      window.CKEditor5.basicStyles.Strikethrough,
      window.CKEditor5.basicStyles.Code,
      window.CKEditor5.basicStyles.Subscript,
      window.CKEditor5.basicStyles.Superscript,
      window.CKEditor5.blockQuote.BlockQuote,
      window.CKEditor5.codeBlock.CodeBlock,
      window.CKEditor5.essentials.Essentials,
      window.CKEditor5.font.FontSize,
      window.CKEditor5.font.FontFamily,
      window.CKEditor5.font.FontColor,
      window.CKEditor5.font.FontBackgroundColor,
      window.CKEditor5.findAndReplace.FindAndReplace,
      window.CKEditor5.heading.Heading,
      window.CKEditor5.horizontalLine.HorizontalLine,
      window.CKEditor5.htmlEmbed.HtmlEmbed,
      window.CKEditor5.image.Image,
      window.CKEditor5.image.ImageCaption,
      window.CKEditor5.image.ImageStyle,
      window.CKEditor5.image.ImageToolbar,
      window.CKEditor5.image.ImageUpload,
      window.CKEditor5.image.ImageResize,
      window.CKEditor5.indent.Indent,
      window.CKEditor5.indent.IndentBlock,
      window.CKEditor5.link.Link,
      window.CKEditor5.link.LinkImage,
      window.CKEditor5.list.List,
      window.CKEditor5.list.ListProperties,
      window.CKEditor5.list.TodoList,
      window.CKEditor5.mediaEmbed.MediaEmbed,
      window.CKEditor5.paragraph.Paragraph,
      window.CKEditor5.pasteFromOffice.PasteFromOffice,
      window.CKEditor5.removeFormat.RemoveFormat,
      window.CKEditor5.specialCharacters.SpecialCharacters,
      window.CKEditor5.specialCharacters.SpecialCharactersEssentials,
      window.CKEditor5.table.Table,
      window.CKEditor5.table.TableToolbar,
      window.CKEditor5.table.TableProperties,
      window.CKEditor5.table.TableCellProperties,
      window.CKEditor5.table.TableColumnResize,
      window.CKEditor5.table.TableCaption,
      window.CKEditor5.wordCount.WordCount,
      window.CKEditor5.highlight.Highlight,
      StrapiMediaLib
    ],
    toolbar: {
      items: [
        'undo', 'redo',
        '|',
        'findAndReplace', 'selectAll',
        '|',
        'heading',
        '|',
        'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
        '|',
        'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'code', 'removeFormat',
        '-',
        'link', 'strapiMediaLib', 'mediaEmbed', 'insertTable', 'horizontalLine', 'blockQuote', 'codeBlock', 'htmlEmbed', 'specialCharacters', 'highlight',
        '|',
        'alignment',
        '|',
        'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent', 
      ],
      shouldNotGroupWhenFull: true
    },
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
        { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
      ]
    },
    list: {
      properties: {
          styles: true,
          startIndex: true,
          reversed: true
      }
    },
    image: {
      resizeUnit: "%",
      resizeOptions: [ {
        name: 'resizeImage:original',
        value: null,
        icon: 'original'
      },
      {
        name: 'resizeImage:25',
        value: '25',
        icon: 'small'
      },
      {
        name: 'resizeImage:50',
        value: '50',
        icon: 'medium'
      },
      {
        name: 'resizeImage:75',
        value: '75',
        icon: 'large'
      } ],
      toolbar: [
        'imageStyle:inline', 'imageStyle:block', 'imageStyle:side',
        '|',
        'toggleImageCaption', 'imageTextAlternative',
        '|',
        'linkImage',
        '|',
        'resizeImage:25', 'resizeImage:50', 'resizeImage:75', 'resizeImage:original'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        '|',
        'tableCellProperties',
        'tableProperties',
        '|',
        'toggleTableCaption'
      ]
    },
    fontSize: {
      options: [
          9,
          11,
          13,
          'default',
          17,
          19,
          21,
          27,
          35,
      ],
      supportAllValues: false
    },
    fontFamily: {
      options: [
        'default',
        'Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif',
        'Courier New, Courier, monospace',
        'Georgia, serif',
        'Lucida Sans Unicode, Lucida Grande, sans-serif',
        'Tahoma, Geneva, sans-serif',
        'Times New Roman, Times, serif',
        'Trebuchet MS, Helvetica, sans-serif',
        'Verdana, Geneva, sans-serif',
        'Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif',
      ],
      supportAllValues: true
    },
    fontColor: {
      columns: 5,
      documentColors: 10,
    },
    fontBackgroundColor: {
      columns: 5,
      documentColors: 10,
    },
  }
};

export default class Configurator {
  constructor ( fieldConfig ) {
    this.fieldConfig = fieldConfig;
  }

  getEditorConfig() {
    const config = this._getBaseConfig();

    const maxLength = this.fieldConfig.maxLength;
    const outputOption = this.fieldConfig.options.output;

    if ( outputOption === 'Markdown' ) {
      config.plugins.push( window.CKEditor5.markdownGfm.Markdown );
    }

    if ( maxLength ) {
      config.plugins.push( window.CKEditor5.maximumLength.MaximumLength );

      config.maximumLength = {
        characters: maxLength
      };
    }

    return config;
  }

  _getBaseConfig() {
    const presetName = this.fieldConfig.options.preset;

    switch ( presetName ) {
      case 'light':
        return CKEDITOR_BASE_CONFIG_FOR_PRESETS.light;
      case 'standard':
        return CKEDITOR_BASE_CONFIG_FOR_PRESETS.standard;
      case 'rich':
        return CKEDITOR_BASE_CONFIG_FOR_PRESETS.rich;
      default:
        throw new Error('Invalid preset name ' + presetName);
    }
  }
}
