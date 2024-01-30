import { useEffect, useState } from "react";
import EachCourse from "./EachCourse";

const BASE_URL = "http://localhost:8000/courses";

function CourseContent({ searchQuery }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      });
  }, [courses]);
  console.log(courses);

  const filtered_courses =
    searchQuery.length > 0
      ? courses?.filter((course) =>
          `${course.name} ${course.instructor}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : courses;

  if (filtered_courses.length === 0) {
    //console.log(filtered_course.length);
    return (
      <div className="course-container">
        <h2>Our borad varieties of Tech courses</h2>

        <div className="inner">
          <p>
            No courses available based on provided search{" "}
            <span>{searchQuery}</span>! Try using other keywords.{" "}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="course-container">
      <h2>Explore different courses!</h2>
      <div className="courses">
        {filtered_courses.map((course) => (
          <EachCourse key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseContent;
