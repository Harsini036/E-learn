import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PreRequisites from "../courseDetails/PreRequisites";
import Syllabus from "../courseDetails/Syllabus";
function CourseDetail({ courseDetails }) {
  const {
    id,
    name,
    instructor,
    description,
    enrollmentStatus,
    thumbnail,
    duration,
    price,
    actual_price,
    no_of_students,
    best_seller,
    no_of_ratings,
    rating,
    schedule,
    location,
    prerequisites,
    syllabus,
    students,
  } = courseDetails;
  //console.log(prerequisites);

  return (
    <div className="course-details">
      <div className="banner">
        <div className="inner1">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>
            <span>
              {best_seller ? (
                <button className="bestseller">Best Seller</button>
              ) : (
                ""
              )}
            </span>
            <span>{rating}⭐</span>
            <span>({no_of_ratings}) ratings</span>
            <span>{no_of_students} students</span>
          </p>
          <p>
            Created by <span style={{ color: "blueviolet" }}>{instructor}</span>
          </p>
          <p>Language: English</p>
        </div>
        <div className="inner2">
          <img src={`/images/categories/${thumbnail}`} alt="" />
          {/* <video
            width="100%"
            height="300px"
            loop
            muted
            autoPlay
            controls="controls"
          >
            <source
              src="https://player.vimeo.com/progressive_redirect/playback/870993230/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=7c4a42a8895554815d545be425cbfd3ea4c338f713cd28b790e1e5560bc7edc2"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          <Link to="/profile">
            <p>
              Proceed with the course <FaLongArrowAltRight />
            </p>
          </Link>
        </div>
      </div>

      <div className="detailed-content">
        <div className="first-col">
          <PreRequisites prerequisites={prerequisites} />
          <Syllabus syllabus={syllabus} />
        </div>
        <div className="second-col">
          <div>
            <h4>Enrollment status</h4>
            <p>
              <span
                className={`${
                  enrollmentStatus === "Open"
                    ? "open"
                    : enrollmentStatus === "Closed"
                    ? "close"
                    : "in-progress"
                }`}
              >
                {" "}
                {enrollmentStatus}
              </span>
            </p>
          </div>
          <div>
            <h4>Duration</h4>
            <p>{duration} hours</p>
          </div>
          <div>
            <h4>Location</h4>
            <p>{location} hours</p>
          </div>
          <div>
            <h4>Schedule</h4>
            <p>{schedule} hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
