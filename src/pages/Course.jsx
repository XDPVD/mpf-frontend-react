import UpperBanner from "../components/UpperBanner";
import CourseNav from "../components/CourseNav";
import Container from "@material-ui/core/Container";
import CourseMembers from "./CourseMembers";

function Course() {
  return (
    <>
      <UpperBanner />
      <Container>
        <CourseNav />
        <CourseMembers />
      </Container>
    </>
  );
}

export default Course;
