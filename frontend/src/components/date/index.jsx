import React, { useState } from "react";
import moment from "moment";
import { DateRange } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import "./styles.css";

function GetDate(props) {
  const [state, setState] = useState([
    {
      startDate: moment(new Date()).toDate(),
      endDate: moment(new Date()).toDate(),
      key: "selection",
    },
  ]);
  const getText = () => {
    return <div>{moment(state[0].startDate).format("DD-MM-YYYY")}</div>;
  };

  console.log(
    "🚀 ~ file: index.jsx ~ line 13 ~ GetDate ~ state",
    moment(state)
  );
  return (
    <DateRange
      dateDisplayFormat={"dd/MM/yyyy"}
      onChange={(item) => setState([item.selection])}
      minDate={new Date()}
      moveRangeOnFirstSelection={false}
      ranges={state}
      locale={locales["vi"]}
      rangeColors={["#00e1d6"]}
      {...props}
    />
    // <DateRange
    //   focusedRange={[0, 0]}
    //   dateDisplayFormat={"dd/MM/yyyy"}
    //   showDateDisplay={false}
    //   onChange={(item) => setState([item.selection])}
    //   minDate={new Date()}
    //   moveRangeOnFirstSelection={false}
    //   ranges={state}
    //   locale={locales["vi"]}
    //   rangeColors={["#00e1d6"]}
    // />
  );
}

export default GetDate;
