import React, {useState} from "react";
import "../Components/navOverly.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Img_1 from '../Components/images/login_img_1.png';
import Img_2 from '../Components/images/login_img_2.png';
import Img_3 from '../Components/images/login_img_3.png';
import Img_4 from '../Components/images/login_img_4.png';
import Img_5 from '../Components/images/login_img_5.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Overly = ({setOverly,mode,setFalse}) => {

  const [isLogin, setIsLogin] = useState(mode);
  var name = isLogin ? 'Login':'Sign Up';
  var button = isLogin ? 'LOGIN':'CONTINUE';
  var content_desc = isLogin ? 'Get access to your orders, lab tests & doctor consultations':'Please enter your Mobile number to receive One Time Password (OTP)'
  var p1 = isLogin ? 'New on 1mg?':'Have an account?';
  var p2 = isLogin ? 'Have a corporate account?':'For corporate Sign up,';
  var p1Span = !isLogin ? 'Login':'Sign Up'

  const closeOverly = () =>{
    setOverly(false);
    setFalse(false);
  }

  return (
    <div className="overly_body">
      <div className="overly_container">
        <div className="overly_content">
          <div className="overly_left">

          <Carousel autoPlay={true} emulateTouch={true} showStatus={false} showArrows={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              const defStyle = {display:'flex',justifyContent:'center',flexDirection:'row'};
              const secDefStyle ={backgroundColor: "rgb(225,225,225)", cursor: "pointer",width:'10px',height:'10px',borderRadius:'100%',margin:'4px'}
              const style = isSelected
                ? { ...secDefStyle, backgroundColor: "rgb(165,165,165)" }
                : { ...secDefStyle };
              return (
                <span
                style={defStyle}

                >
                   <div    
                   onClick={onClickHandler}
                                 style={style}
                   onKeyDown={onClickHandler}
                   value={index}
                   key={index}
                   role="button"
                   tabIndex={0}
                   aria-label={`${label} ${index + 1}`}></div>
                </span>
              );
            }}
          >
            <div className="overly-left_content">
              <div className="overly-left_content-img"><img style={{width:'9rem'}} src={Img_1} alt='img'/></div>
              <div className="overly-left_content-desc">
                <div className="overly-left_content-desc__heading">Health Related Queries?</div>
                <div className="overly-left_content-desc__desc">Consult our certified doctors from anywhere, anytime</div>
                <div className="overly-left_content-desc__desc overly-left_content-desc__desc-last">for free. We guarantee your privacy.</div>
              </div>
            </div>
            <div className="overly-left_content">
              <div className="overly-left_content-img"><img style={{width:'9rem'}} src={Img_2} alt='img'/></div>
              <div className="overly-left_content-desc">
                <div className="overly-left_content-desc__heading">Health Related Queries?</div>
                <div className="overly-left_content-desc__desc">Consult our certified doctors from anywhere, anytime</div>
                <div className="overly-left_content-desc__desc overly-left_content-desc__desc-last">for free. We guarantee your privacy.</div>
              </div>
            </div>
            <div className="overly-left_content">
              <div className="overly-left_content-img"><img style={{width:'8rem'}} src={Img_3} alt='img'/></div>
              <div className="overly-left_content-desc">
                <div className="overly-left_content-desc__heading">Health Related Queries?</div>
                <div className="overly-left_content-desc__desc">Consult our certified doctors from anywhere, anytime</div>
                <div className="overly-left_content-desc__desc overly-left_content-desc__desc-last">for free. We guarantee your privacy.</div>
              </div>
            </div>
            <div className="overly-left_content">
              <div className="overly-left_content-img"><img style={{width:'8rem'}} src={Img_4} alt='img'/></div>
              <div className="overly-left_content-desc">
                <div className="overly-left_content-desc__heading">Health Related Queries?</div>
                <div className="overly-left_content-desc__desc">Consult our certified doctors from anywhere, anytime</div>
                <div className="overly-left_content-desc__desc overly-left_content-desc__desc-last">for free. We guarantee your privacy.</div>
              </div>
            </div>
            <div className="overly-left_content">
              <div className="overly-left_content-img"><img style={{width:'8rem'}} src={Img_5} alt='img'/></div>
              <div className="overly-left_content-desc">
                <div className="overly-left_content-desc__heading">Health Related Queries?</div>
                <div className="overly-left_content-desc__desc">Consult our certified doctors from anywhere, anytime</div>
                <div className="overly-left_content-desc__desc overly-left_content-desc__desc-last">for free. We guarantee your privacy.</div>
              </div>
            </div>
            </Carousel>
          </div>
          <div className="overly_right">
            <div className="overly_right-cross" onClick={closeOverly}>×</div>
            <div className="overly_right_content">
              <div className="overly_right_content_name">{name}</div>
              <div className="overly_right_content_desc">
                {content_desc}
              </div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {marginTop:1,marginBottom:8,color:'black', width: "40ch", borderBottom:'tomato' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  error
  
                  id="standard-basic"
                  label={isLogin?"Enter Email ID and Mobile Number":"Enter Mobile Number"}
                  variant="standard"
                />
              </Box>
              <button className='overly_right_login_button'>{button}</button>
              <p>{p1}<span onClick={()=>setIsLogin(!isLogin)}>{p1Span}</span></p>
              <p>{p2}<span>Click Here</span></p>
              <div className="extra" style={{marginTop:'14px'}}>By Login in you are agree to our</div>
              <div className="extra terms">Terms and Conditions & Privacy Policy</div>
              {isLogin && <div className="extra_">Need Help? Get In Touch</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="click_body"  onClick={closeOverly}></div>
    </div>
  );
};