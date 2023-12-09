import "./assistent.css";
import useMightyMouse from "react-hook-mighty-mouse";
import smile from "../../assets/smile.png";

const Smile = () => {
  const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, "left-eye", { x: 45, y: 45 });
  const {
    selectedElement: {
      position: { angle: angleRightEye },
    },
  } = useMightyMouse(true, "right-eye", { x: 45, y: 45 });

  const {
    selectedElement: { isHover },
  } = useMightyMouse(true, "smile", { x: 125, y: 70 });

  const styleLeftEye = {
    transform: `rotate(${-angleLeftEye}deg)`,
  };
  const styleRightEye = {
    transform: `rotate(${-angleRightEye}deg)`,
  };

  return (
    <div
      className={`main-container-eyes smile-photo-${isHover ? "show" : "hide"}`}
    >
      <div className="eyes-follow-tired">
        <div className="container-eyes">
          <div className="eyes">
            <div id="left-eye" className="eye" style={styleLeftEye}>
              <div className="pupil" />
            </div>
            <div id="right-eye" className="eye" style={styleRightEye}>
              <div className="pupil" />
            </div>
          </div>
        </div>
        <img src={smile} alt="Info image" id="smile" />
        <h2 className="subtitle-soon">Coming soon!...</h2>
      </div>
    </div>
  );
};

export default Smile;
