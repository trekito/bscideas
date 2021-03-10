import './app.css';
import './css/tomas-kotrla.css';

export const App = () => {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__item">Dashboard</li>
        <li className="menu__item">Account</li>
        <li className="menu__item">Payments</li>
        <li className="menu__item">Settings</li>
      </ul>
    </nav>
  );
}
