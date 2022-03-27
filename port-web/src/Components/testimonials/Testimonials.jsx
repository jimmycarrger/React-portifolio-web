import "./testimonials.scss"

export default function Testimonials() {
  const data =[
    {
      id: 1,
      name: "Shiela Karungi",
      title: "BSD Manager @RG",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique harum iste tempore modi suscipit aliquam placeat distinctio",
      img: "assets/featured/shei.png",
    },
    {
      id: 2,
      name: "Patrick Seremba",
      title: "CEO Relations Garage",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique harum iste tempore modi suscipit aliquam placeat distinctio",
      img: "assets/featured/pat.png",
      featued:true,
    },
    {
      id: 1,
      name: "Gaddafi",
      title: "Graphics Designer",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique harum iste tempore modi suscipit aliquam placeat distinctio",
      img: "assets/featured/happi.png",
    },

  ];
  return (
    <div className="testimonials" id ="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d=>(
        <div className={d.featued ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/arrow-down.png" className="left" alt="" />
            <img src={d.img} className="user" alt="" />
            <img src={d.icon} className="right" alt="" />
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div> ))}
      </div>
        
    </div>
  )
}
