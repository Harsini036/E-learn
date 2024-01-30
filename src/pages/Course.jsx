import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/MainComponents/Header";
import Footer from "../components/MainComponents/Footer";
import CourseDetail from "../components/courses/CourseDetail";

const BASE_URL = "http://localhost:8000";

function Course() {
  const [details, setCourseDetails] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`${BASE_URL}/courses/${id}`)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        setCourseDetails(data);
      });
  }, [id]);
  console.log(details);

  return (
    <div>
      <Header />
      <CourseDetail courseDetails={details} />
      <Footer />
    </div>
  );
}

export default Course;
