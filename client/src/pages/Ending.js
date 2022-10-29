import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Ending() {
  const { state } = useLocation();
  const navigation = useNavigate();
  const [엔딩, set엔딩] = React.useState({});

  const 결과화면 = () => {
    axios({
      method: "get",
      url: "http://localhost:5000/result",
    });
  };

  React.useEffect(() => {
    결과화면();
  }, []);

  //   const sendViichan = async () => {
  //     await axios({
  //       method: "post",
  //       url: "http://localhost:5000/",
  //       params: state,
  //     })
  //       .then((response) => {
  //         const data = response.data;
  //         set엔딩(data);
  //       })
  //       .catch(() => {})
  //       .finally(() => {});
  //   };

  //   React.useEffect(() => {
  //     set엔딩();
  //   }, []);

  return (
    <div className="result-img-wrap">
      <h1>당신이 선택한 운명은 바로</h1>
      <img className="result-img" src={엔딩.content} alt={엔딩.name} />
      <button
        className="btn"
        type="button"
        onClick={() => {
          navigation("/login");
        }}
      >
        다시하기
      </button>
    </div>
  );
}

export default Ending;
