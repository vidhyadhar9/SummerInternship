import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
function Compete() {
  // let handleClick=(e)({
  //   return props.func(e)
  // })
  let compete = [
    {
      cid: 1,
      cName: "Web Development",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 1,
      cName: "Web Development",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 1,
      cName: "Web Development",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 1,
      cName: "Web Development",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 2,
      cName: "machine learning",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 3,
      cName: "ar/vr",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 1,
      cName: "Web Development",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 2,
      cName: "machine learning",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      cid: 3,
      cName: "ar/vr",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, labore.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
  ];
  let Tcompete = ["Web Development","machine learning","ar/vr"];
   const [val,setval]=useState(Tcompete[0])
  useEffect(()=>{
          setval(val)
  },[])
  
  
  
  return (
    <div className="row">

      <div className="col-md-2 p-2"  style={{minHeight:"86vh",backgroundColor:" rgb(202, 145, 255)"}}>
        {Tcompete.map((cs) => (
          <div key={cs}>
          <NavLink className="nav-link btn m-4" >
            <div onClick={()=>setval(cs)} className="lead"><p>{cs}</p></div>
          </NavLink>
          </div>
        ))}
      </div>

      <div className="col-md-10">
      <h1 className="text-center p-2">Compete</h1>
          <div className="container">
            {compete.map((cs) => (<>
                {cs.cName===val?(
                  <div key={cs.cid} className="text-center" style={{ width: "800px", height: "500px" }}>
                    <div className="card ">
                    <img className="card-img-top" src={cs.image}/>
                    <div className="card-body">
                      <p className="card-text">{cs.content}</p>
                    </div>
                  </div>
                  </div>
                ):(
                    <></>
                )

                }
              </>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Compete;
