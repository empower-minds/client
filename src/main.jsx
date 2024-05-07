import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.jsx';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cWWFCeExwWmFZfVpgcF9CYFZVRGYuP1ZhSXxXdkBjXn9adHZXTmNZU0w=');

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
