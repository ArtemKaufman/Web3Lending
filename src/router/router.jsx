import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import { PrivacyPolicy } from '../Page/PrivacyPolicy.jsx';
import { HomePage } from '../Page/HomePage.jsx';
import { TermsPage } from '../Page/TermsPage.jsx';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not found</div>,
    children: [
      {
        path: '/',
        element: <HomePage />,
        index: true,
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/terms',
        element: <TermsPage />,
      },
    ]
  }
])