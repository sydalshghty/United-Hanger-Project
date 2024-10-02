import planImg from "../images/home (21).png";
import "../CSS/plan.css";
function Plan(){
    return(
        <div className="plan-content">
            <img src= {planImg} alt="img-plan"/>
            <div className="text-content">
                <h2>keep in touch</h2>
                <h2 className="head">Our Factory</h2>
            </div>
        </div>
    )
}
export default Plan;