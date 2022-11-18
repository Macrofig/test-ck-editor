import * as React from 'react';
import { useEffect } from 'react';

export const CKEditor = ({ CK }) => {
    useEffect(() => {
        const $target = document.querySelector('#editor') as HTMLElement;
        if (!$target) {
            throw Error('Target element missing!');
        }
        if (!CK) {
            throw Error('CK bundle not ready!');
        }
        CK.ClassicEditor.create($target, {
            language: 'en',
            placeholder: 'Type some content here!',
            initialData: 'The editor content goes here.',
            plugins: [
                CK.Typing,
                CK.Paragraph,
                CK.Enter,
                CK.ShiftEnter,
                CK.Undo,
                CK.ClipboardPipeline,
                CK.DragDrop,
                // CK.Bold,
                // CK.Italic,
            ],
            // toolbar: ['bold', 'italic'],
        })
            .then((editor) => {
                console.log('Editor was initialized', editor);
            })
            .catch((error: Error) => {
                console.error(error);
            });

    }, []);

    return (
        <div id="editor" />
    );
}