import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
function NavigationLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default NavigationLayout;
