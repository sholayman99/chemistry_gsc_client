
import { RouterProvider } from 'react-router-dom';
import routes from "./routes/routes"

const App = () => {
  return (
    <div className='bg-base-200 max-w-[2000px] min-w-[400px]'>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
