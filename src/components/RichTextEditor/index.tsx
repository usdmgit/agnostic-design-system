import React, { useRef, useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import styles from './RichTextEditor.css';
import classNames from 'classnames';
import MenuBar from './MenuBar';
import { MENU_EDIT_OPTIONS } from './richTextEditOptions';
import clsx from 'clsx';

interface Props {
  displayOnlyOnFocus?: boolean;
  editorContent?: string;
  menuEditOptions?: typeof MENU_EDIT_OPTIONS;
  menuPositionedBottom?: boolean;
  placeholderText?: string;
  variablesClassName?: string;
}

const RichTextEditor: React.FC<Props> = props => {
  const {
    displayOnlyOnFocus,
    editorContent,
    menuEditOptions,
    menuPositionedBottom,
    placeholderText,
    variablesClassName
  } = props;

  const [hideMenuBar, setHideMenuBar] = useState(displayOnlyOnFocus);

  const menuBarClassName = clsx(
    variablesClassName,
    hideMenuBar ? styles['menu-bar-container-hidden'] : styles['menu-bar-container-visible']
  );

  const buttonsMenuElement = useRef<HTMLDivElement>(null);
  const textAreaElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function buttonsMenuConcealer(event) {
      if (
        textAreaElement.current &&
        buttonsMenuElement.current &&
        !textAreaElement.current.contains(event.target) &&
        !buttonsMenuElement.current.contains(event.target)
      ) {
        setHideMenuBar(true);
      }
    }

    if (displayOnlyOnFocus) {
      document.addEventListener('mousedown', buttonsMenuConcealer);
      return () => {
        document.removeEventListener('mousedown', buttonsMenuConcealer);
      };
    }
  }, []);

  const buttonsMenuDisplayer = () => {
    displayOnlyOnFocus && setHideMenuBar(false);
  };

  const menuBarPosition = menuPositionedBottom ? styles['menu-bar-bottom-positioned'] : '';

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: classNames(styles['editor-container'], variablesClassName)
      }
    },
    extensions: [
      StarterKit,
      Image,
      Table.configure({
        resizable: true
      }),
      TableRow,
      TableHeader,
      Underline,
      TableCell,
      Placeholder.configure({
        placeholder: placeholderText,
        emptyEditorClass: styles['is-editor-empty']
      })
    ],
    content: editorContent || ''
  });

  return (
    <div className={classNames(variablesClassName, menuBarPosition)}>
      <MenuBar
        editor={editor}
        menuEditOptions={menuEditOptions}
        ref={buttonsMenuElement}
        variablesClassName={menuBarClassName}
      />
      <div ref={textAreaElement}>
        <EditorContent editor={editor} onClick={() => buttonsMenuDisplayer()} />
      </div>
    </div>
  );
};

RichTextEditor.defaultProps = {
  menuEditOptions: MENU_EDIT_OPTIONS
};

export default RichTextEditor;
