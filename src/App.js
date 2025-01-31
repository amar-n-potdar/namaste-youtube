import './App.css';
import Body from './components/Body';
import './index.css'
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Watchpage from './components/Watchpage';
import { MainContainer } from './components/MainContainer';
import Home from './components/Home';
import Suggested from './components/Suggested';
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      { 
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'/watchpage',
        element:<Watchpage/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/suggested",
        element:<Suggested />
      },
    ]
   }
   
    
])

function App() {
  
  return (
    <Provider store={store}>
         <div>
       <Head />
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
 
   

   
  );
}

export default App;
