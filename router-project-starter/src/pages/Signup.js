import Template from "../components/Template";
import signupImg from '../assets/signup.png';
function Signup({setIsLoggedin}) {
  return (
    <Template
      title="Join the millions,learning to code with StudyNotation for free"
      description1="Build skills for today,tommorow, and beyond."
      description2="Education to future-proof your carreer."
      image={signupImg}
      formtype="signup"
      setIsLoggedin={setIsLoggedin}
    />
  );
}
export default Signup;
