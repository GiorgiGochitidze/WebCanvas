import './CSS/StartingInfo.css';

const StartingInfo = () => {

  return (
    <div className="startinfo-container" >
      <div className="startinfo-overlay"></div>
      <h1 data-aos='fade-up' style={{zIndex: 2, fontSize: '80px'}}>Web Canvas</h1>
      <p data-aos='fade-up' data-aos-delay='400' style={{zIndex: 2}}>🌟A place where digital creativity comes to life🌟</p>
    </div>
  );
};

export default StartingInfo;
