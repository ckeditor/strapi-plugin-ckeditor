import { css } from "styled-components";

export const style = css`
  .ck-word-count {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    padding-block: 0.2rem;
    font-size: 1.4rem;
  }

  .ck-editor__main {
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }

    h1 {
      font-size: 3.2rem;
      margin-bottom: 0.6em;
      font-weight: 400;
    }

    h2 {
      font-size: 2.688rem;
      margin-bottom: 0.4em;
      font-weight: 400;
    }

    h3 {
      font-size: 2.176rem;
      margin-bottom: 0.2em;
      font-weight: 400;
    }

    h4 {
      font-size: 1.84rem;
      margin-bottom: 0.1em;
      font-weight: 400;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.6em;
      margin-bottom: 0.8em;
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 1.2rem;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    .image figcaption {
      font-size: 1.2rem;
    }

    blockquote {
    }

    .table {
      font-size: 1.6rem;
    }

    code {
      font-size: 1.4rem;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      font-size: 1.6rem;
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub
    }

    sup {
      vertical-align: super
    }

    // higher specificity needed
    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;

      // so it's more Strapi alike
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid rgb(73, 69, 255);
        box-shadow: rgb(73 69 255) 0 0 0 0.125rem;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        transition-property: border-color, box-shadow;
        transition-duration: 0.2s;
      }
    }
  }
  // Fix: Prevent dropdown panel to be hidden by Strapi left sidebar
  :root {
    --ck-toolbar-dropdown-max-width: 40vw;
  }
`;
