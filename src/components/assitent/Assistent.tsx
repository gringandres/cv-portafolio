import "./assistent.css";
import useMightyMouse from "react-hook-mighty-mouse";
import smile from "../../assets/smile.png";
import { useState } from "react";

const Assistent = () => {
  const [changePostion, setChangePostion] = useState(false);

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
    buttons,
  } = useMightyMouse(true, "smile", { x: 125, y: 70 });

  const styleLeftEye = {
    transform: `rotate(${-angleLeftEye}deg)`,
  };
  const styleRightEye = {
    transform: `rotate(${-angleRightEye}deg)`,
  };

  const positionLocation = () => {
    if (buttons.left && isHover) {
      setChangePostion(!changePostion);
    }
    return `main-container-eyes-${changePostion ? "left" : "right"}`;
  };

  return (
    <div className={positionLocation()}>
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
        <img
          className={`smile-photo-${isHover ? "show" : "hide"}`}
          src={smile}
          alt="Info image"
          id="smile"
        />
      </div>
    </div>
  );
};

export default Assistent;
