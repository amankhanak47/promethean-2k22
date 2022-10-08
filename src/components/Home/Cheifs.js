import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./chief.css"
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
function Cheifs() {
  return (
     <div
      className="testimonial section-bg container"
      style={{ display: "flex", justifyContent: "center",padding:"60px"}}
    >
      <div style={{ width: "90%", textAlign: "center" }}>
        <h1 className="section-header" style={{ marginBottom: 20 ,fontSize: 36,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: 700,
    marginBottom: 60}}>Trustees</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
        <Card
            about={
              "Bhupathiraju Vissam Raju (1920-2002) is an Indian industrialist, a former chairman of Raasi Cements and the Cement Corporation of India and one of the pioneers of Indian cement industry.[2] He was the director of Sagi Ramakrishnam Raju Constructions and Prasad and Company Project Works Limited.[3][4] He was also interested in ceramics and refractory industries[2] and is the founder of the Padmasri Dr. B.V Raju Institute of Technology.[5] The Government of India awarded him the fourth-highest Indian civilian award of Padma Shri in 1977[6] and followed it with the third-highest honour of Padma Bhushan in 2001.[7] "
            }
            name={"Sri. B.V.Raju"}
            post={"Founder"}
            img="https://www.vishnucenter.org/images/images1/bvr2.jpg"
          />
          <Card
            about={
              "Sri. K.V. Vishnu Raju began his career as a Chemical Engineer in M/s. E.T. Dupont De Nemours, USA, from 1989 to 1991, where he looked after research and development in polymers, ceramics and adhesives. He returned to India in 1992 and served as the Executive Director of M/s. Raasi Cement Ltd., Hyderabad till 1995. The following year, he was promoted as Joint Managing Director of M/s. Raasi Cement Ltd., a post that he held till April 1998. In December 1999, he took over as the Managing Director of M/s. Anjani Portland Cement Ltd., Hyderabad."
            }
            name={"Sri. K.V. Vishnu Raju"}
            post={"Chairman"}
            img="https://www.bvricedegree.edu.in/images/images1/chairman.jpg"
          />
          <Card
            about={
              "Sri Ravichandran Rajagopal, is a graduate in Mechanical Engineering from National Institute of Technology, Tiruchirapalli, and a postgraduate in Management from Indian Institute of Management, Calcutta. He started his professional career with the Swiss multinational company Novartis, India where he served in various capacities including Business Development, New Product and Application development, and Vendor Development. "
            }
            name={"Sri Ravichandran Rajagopal"}

            post={"Vice Chairman"}
            img="https://svespsychologybvrm.in/images/vice-chairman.jpg"
          />
          <Card
            about={
              "Dr. K. Lakshmi Prasad, the Principal of B. V. Raju Institute of Technology, Vishnupur, Narsapur, Medak District. Worked as Principal & Dean in Gandhi Institute of Technology and Management (GITAM) Vishakapatanam. He did his graduation from JNTUA, Anantapur(1979-83) and post-graduation from IIT Bombay (1983-85). He pursed his doctoral and research work at IIT Bombay."
            }
            name={"Dr. K. Lakshmi Prasad"}

            post={"Principal"}
           
            img="https://www.bvrit.ac.in/images/faculty/Management/principal.jpg"
          />
        
        </Slider>
      </div>
    </div>
  )
}
export default Cheifs

const Card = ({ img, about, name,post }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 140,
          height: 140,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
          
        }}
      />
      <p style={{fontSize: "18px",color:"#0e1b4d",
          fontWeight:500}}> {about}</p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>
          {name}
          
        </span>
        , {post}
        
      </p>
    </div>
  );
};

