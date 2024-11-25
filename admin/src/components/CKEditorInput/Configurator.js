import { StrapiMediaLib } from "./plugins/StrapiMediaLib";
import { StrapiEditorUsageDataPlugin } from "./plugins/StrapiEditorUsageData.js";

import MaximumLength from "../../vendor/ckeditor5-maximum-length/index";
import "../../vendor/ckeditor5-maximum-length/index-editor.css";

const {
  Alignment,
  Autoformat,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Subscript,
  Superscript,
  BlockQuote,
  CodeBlock,
  Essentials,
  FontSize,
  FontFamily,
  FontColor,
  FontBackgroundColor,
  FindAndReplace,
  Heading,
  HorizontalLine,
  HtmlEmbed,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResize,
  Indent,
  IndentBlock,
  Link,
  LinkImage,
  List,
  ListProperties,
  TodoList,
  Markdown,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  TableColumnResize,
  TableCaption,
  WordCount,
  Highlight
} = window.CKEDITOR;

const CKEDITOR_BASE_CONFIG_FOR_PRESETS = {
  light: {
    plugins: [
      Autoformat,
      Bold,
      Italic,
      Essentials,
      Heading,
      Image,
      ImageCaption,
      ImageStyle,
      ImageToolbar,
      ImageUpload,
      Indent,
      Link,
      List,
      Paragraph,
      PasteFromOffice,
      Table,
      TableToolbar,
      TableColumnResize,
      TableCaption,
      WordCount,
      StrapiMediaLib,
      StrapiEditorUsageDataPlugin
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
      Autoformat,
      Bold,
      Italic,
      BlockQuote,
      CodeBlock,
      Essentials,
      Heading,
      Image,
      ImageCaption,
      ImageStyle,
      ImageToolbar,
      ImageUpload,
      Indent,
      Link,
      LinkImage,
      List,
      MediaEmbed,
      Paragraph,
      PasteFromOffice,
      Table,
      TableToolbar,
      TableColumnResize,
      TableCaption,
      WordCount,
      StrapiMediaLib,
      StrapiEditorUsageDataPlugin
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
      Alignment,
      Autoformat,
      Bold,
      Italic,
      Underline,
      Strikethrough,
      Code,
      Subscript,
      Superscript,
      BlockQuote,
      CodeBlock,
      Essentials,
      FontSize,
      FontFamily,
      FontColor,
      FontBackgroundColor,
      FindAndReplace,
      Heading,
      HorizontalLine,
      HtmlEmbed,
      Image,
      ImageCaption,
      ImageStyle,
      ImageToolbar,
      ImageUpload,
      ImageResize,
      Indent,
      IndentBlock,
      Link,
      LinkImage,
      List,
      ListProperties,
      TodoList,
      MediaEmbed,
      Paragraph,
      PasteFromOffice,
      RemoveFormat,
      SpecialCharacters,
      SpecialCharactersEssentials,
      Table,
      TableToolbar,
      TableProperties,
      TableCellProperties,
      TableColumnResize,
      TableCaption,
      WordCount,
      Highlight,
      StrapiMediaLib,
      StrapiEditorUsageDataPlugin
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
    const licenseKey = this.fieldConfig.licenseKey;

    config.licenseKey = licenseKey;

    if ( outputOption === 'Markdown' ) {
      config.plugins.push( Markdown );
    }

    if ( maxLength ) {
      config.plugins.push( MaximumLength );

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
