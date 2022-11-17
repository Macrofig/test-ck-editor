import * as CK from './src/CKPlugins';

CK.ClassicEditor.create(document.querySelector('#editor'), {
  language: 'en',
  placeholder: 'Type some content here!',
  initialData: 'The editor content goes here.',
  plugins: [
    CK.Paragraph,
    CK.ClipboardPipeline,
    CK.DragDrop,
    CK.Bold,
    CK.Italic,
  ],
  toolbar: ['bold', 'italic'],
})
  .then((editor) => {
    console.log('Editor was initialized', editor);
  })
  .catch((error) => {
    console.error(error);
  });
