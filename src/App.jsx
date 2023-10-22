
import { RouterProvider } from 'react-router-dom';
import routes from "./routes/routes"

const App = () => {
  return (
    <div className='bg-base-200'>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
