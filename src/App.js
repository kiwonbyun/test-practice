import './App.css';
import SummaryForm from './pages/summary/SummaryForm';

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  return (
    <div>
      <SummaryForm />
    </div>
  );
}
export default App;
