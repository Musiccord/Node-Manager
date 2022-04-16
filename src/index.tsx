import { Global, MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useLocalStorage } from '@mantine/hooks';

// Page imports
import Overview from './pages/overview';
import DashboardLayout from './layouts/dashboard';
import Config from './pages/config';
import SubNodes from './pages/sub-nodes';
import Users from './pages/users';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme, colors: {
          // override dark colors to change them for all components
          dark: [
            '#d5d7e0',
            '#acaebf',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#34354a',
            '#1B2434',
            '#1E293B',
            '#1B2434',
            '#01010a',
          ],
        }, }}>
        <Global styles={(theme) => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },

          body: {
            ...theme.fn.fontStyles(),
            backgroundColor: colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            color: colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            lineHeight: theme.lineHeight,
          },
        })}/>
          <BrowserRouter>
            <Routes>
              <Route index element={<Overview />} />
              <Route path="overview" element={<DashboardLayout> <Overview /> </DashboardLayout>} />
              <Route path="config" element={<DashboardLayout> <Config /> </DashboardLayout>} />
              <Route path="sub-nodes" element={<DashboardLayout> <SubNodes /> </DashboardLayout>} />
              <Route path="users" element={<DashboardLayout> <Users /> </DashboardLayout>} />
            </Routes>
          </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);