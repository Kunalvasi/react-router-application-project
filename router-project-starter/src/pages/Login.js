import Template from "../components/Template";
import loginImg from '../assets/login.png';
function Login({setIsLoggedin}){
    return(
        <Template title="Welcome Back" description1="Build skills for today, tommorow, and beyond." description2="Education to future-proof your carrer." image={loginImg} formtype="login" setIsLoggedin={setIsLoggedin}/>
    );
}
export default Login;