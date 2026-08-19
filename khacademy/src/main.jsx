import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter} from "react-router-dom";

import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";
import { Provider } from "jotai";

//bootstrap (JS는 불러오지 않음)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";

import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
  <Provider>
      {/* 개발 모드일 때만 표시되도록 조건 설정 */}
      { import.meta.env.DEV && (
        <DevTools position="bottom-right"/>
      ) }

      <App />
    </Provider>
  </BrowserRouter>
  // </StrictMode>,
)
