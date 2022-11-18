import React from 'react';
import { createRoot } from 'react-dom/client';
import { CKContainer } from './src/components/CKContainer';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(<CKContainer />);
