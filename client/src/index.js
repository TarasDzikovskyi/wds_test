import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {PostContextProvider} from './context/postContext/PostContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<PostContextProvider>*/}
            <App/>
        {/*</PostContextProvider>*/}
    </React.StrictMode>
);


