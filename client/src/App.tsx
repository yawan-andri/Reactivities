import { useEffect, useState } from "react"

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch('https://localhost:5000/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data))

      return () => {}
  }, [])

  return (
    <div>
      <h3 className="app" style={{color: 'red'}}>Reactivities</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
