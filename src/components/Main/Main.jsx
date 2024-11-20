import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/ContextProp";
import { useContext } from "react";

const Main = () => {
  const {
    onSent,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    showResult,
    setShowResult,
    previousPrompt,
    setPreviousPrompt,
    loading,
    setLoading,
    resultData,
    setResultData,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>

        {!resultData 
        ?
        <>
              <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Tell me about React js and React native</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>  
        </>
        :
        <div className="result">
          {resultData}
        </div>
        
      }



        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} width="30" alt="" />
              <img src={assets.mic_icon} width="30" alt="" />
              <img
                style={{ cursor: "pointer" }}
                onClick={() => onSent(input)}
                src={assets.send_icon}
                width="30"
                alt=""
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
