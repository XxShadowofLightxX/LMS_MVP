import React, { useEffect, useState } from 'react';

function Home() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch((import.meta.env.VITE_API_BASE_URL || '') + '/courses');
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();
        setCourses(data);
      } catch (e) {
        setError(e.toString());
      }
    }
    fetchCourses();
  }, []);

  return (
    <div style={{ fontFamily: 'system-ui', padding: 24 }}>
      <h1>The IT College - Courses</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <strong>{course.name}</strong> - {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
