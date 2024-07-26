import data from "../../utilies/data";
import React, { useState } from "react";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  console.log(enableMultiSelection);

  function handleSingleSelection(getId) {
    console.log(getId);
    setSelected(getId === selected ? null : getId);
  }
  function handleMultiSelection(getId) {
    console.log(getId);
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getId);
    console.log(cpyMultiple, findIndexOfCurrentId);

    findIndexOfCurrentId == -1
      ? cpyMultiple.push(getId)
      : cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  }
  console.log(selected, multiple);
  return (
    <div> 
      <div className="container">
        <div className="row">
          <div className="accordian">
            <h1>   Accordion </h1>
            <button
              onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            >
              {" "}
              Enable Multi Selection{" "}
            </button>

            {data && data.length > 0 ? (
              data.map((dataItem) => (
                <div className="accordian-main">
                  <div
                    className="accordian-title"
                    onClick={() =>
                      enableMultiSelection == true
                        ? handleMultiSelection(dataItem.id)
                        : handleSingleSelection(dataItem.id)
                    }
                  >
                    {" "}
                    <h3 className="items"> {dataItem.question} </h3>
                    <span>+</span>{" "}
                  </div>
                  {/* {selected === dataItem.id ? (
                    <div className="accordian-detils">{dataItem.answer}</div>
                  ) : null} */}

                  {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) != -1 ? (
                    <div className="accordian-detils">{dataItem.answer}</div>
                  ) : null} */}

                  {enableMultiSelection
                    ? multiple.indexOf(dataItem.id) != -1 && (
                        <div className="accordian-detils">
                          {dataItem.answer}
                        </div>
                      )
                    : selected === dataItem.id && (
                        <div className="accordian-detils">
                          {dataItem.answer}
                        </div>
                      )}
                </div>
              ))
            ) : (
              <div> Data not found </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
