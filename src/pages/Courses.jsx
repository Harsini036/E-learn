import { useEffect, useState } from "react";
import Footer from "../components/MainComponents/Footer";
import Header from "../components/MainComponents/Header";
import CourseContent from "../components/courses/CourseContent";

function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(function () {
    document.title = "E-Learn | Courses";
  }, []);
  return (
    <div>
      <Header
        showSearch={true}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <CourseContent searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default Courses;
