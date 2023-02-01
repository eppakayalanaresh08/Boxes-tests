const Box = (props) => {
  const { BoxName, colorBox } = props;
  return (
    <div className={`box-container ${colorBox}`}>
      <p className="paragraphElement">{BoxName}</p>
    </div>
  );
};

const element = (
  <div className="container-bg">
    <h1 className="heading">Boxes</h1>
    <div className="box-bg-container">
      <Box BoxName="Small" colorBox="small-box" />
      <Box BoxName="medium" colorBox="medium-box" />
      <Box BoxName="Large" colorBox="Large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
