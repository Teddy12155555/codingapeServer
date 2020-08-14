import React, { useState } from "react";
import "../scss/day-off-list.scss";
import "../property/loadingView";
import LoadingView from "../property/loadingView";
import { apiLineBotDayoffGET } from "../api";

const Day_Off_List = (props) => {
  const [viewStatus, setViewStatus] = useState(0);
  const [dataList, setDataList] = useState([]);

  async function getData() {
    const dataList = apiLineBotDayoffGET();
    return dataList;
  }
  function onClick() {
    getData().then((res) => {
      setDataList(res.data["result"]);
      setViewStatus(1);
    });
  }

  if (viewStatus == 0) {
    return (
      <div>
        <LoadingView />
        <button onClick={onClick()}>AAAA</button>
      </div>
    );
  } else {
    return (
      <div className="day-off-list">
        <div id="checklist">
          <input id="01" type="checkbox" name="r" value="1" />
          <label htmlFor="01">Name 1</label>
          <input id="02" type="checkbox" name="r" value="2" />
          <label htmlFor="02">Name 2</label>
          <input id="03" type="checkbox" name="r" value="3" />
          <label htmlFor="03">Name 3</label>
        </div>
      </div>
    );
  }
};

export default Day_Off_List;
