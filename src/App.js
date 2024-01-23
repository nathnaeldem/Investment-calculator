import { useState } from 'react';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Table from './Components/Table/Table';

function App() {
  const [userInput, setUserInput] = useState(null);
  const [yearlyData, setYearlyData] = useState(null);

  const calculateHandler = (userInput) => {
    let calculatedYearlyData = [];

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      calculatedYearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setUserInput(userInput);
    setYearlyData(calculatedYearlyData);
  };

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />

      {!userInput && <p>NO investment</p>}

      {userInput && <Table data={yearlyData} Initial={userInput['current-savings']} />}
    </div>
  );
}

export default App;
