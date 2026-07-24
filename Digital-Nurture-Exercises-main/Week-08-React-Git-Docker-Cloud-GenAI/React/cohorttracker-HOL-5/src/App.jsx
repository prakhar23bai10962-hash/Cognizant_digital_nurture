import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      code: 'FSE-Java-01',
      name: 'Java Full Stack Developer Cohort',
      startDate: '2026-06-01',
      endDate: '2026-08-30',
      status: 'ongoing'
    },
    {
      code: 'FSE-React-02',
      name: 'React Native Developer Cohort',
      startDate: '2026-05-01',
      endDate: '2026-06-30',
      status: 'completed'
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Academy Cohort Tracker</h1>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
        {cohorts.map(cohort => (
          <CohortDetails
            key={cohort.code}
            code={cohort.code}
            name={cohort.name}
            startDate={cohort.startDate}
            endDate={cohort.endDate}
            status={cohort.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
