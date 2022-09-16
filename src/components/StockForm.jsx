import { useState } from "react";
import "./StockForm.css";
import CheckBox from "./CheckBox";

const StockSearchForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedDays, setSelectedDays] = useState(10);
  const [twitter, setTwitter] = useState(true);
  const [reddit, setReddit] = useState(true);
  const [quora, setQuora] = useState(true);
  const [facebook, setFacebook] = useState(true);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const onDaysChange = (e) => {
    setSelectedDays(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmitHandler(inputValue, selectedDays, [
      { twitter, reddit, quora, facebook },
    ]);
  };

  return (
    <>
      <div className="stockSearch">
        <div className="stockForm">
          <form onSubmit={formSubmitHandler}>
            Stock Symbol :
            <input
              className="searchInput"
              area-role="input"
              area-label="search input"
              onChange={onInputChange}
              placeholder="Enter Stock Symbol"
              type="text"
            />
            Days :
            <select onChange={onDaysChange} defaultValue={10}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
            <button>Search</button>
            <div className="checkBox">
              <CheckBox
                label="Twitter"
                checkBoxHandler={setTwitter}
                checked={twitter}
              />
              <CheckBox
                label="Reddit"
                checkBoxHandler={setReddit}
                checked={reddit}
              />
              <CheckBox
                label="Quora"
                checkBoxHandler={setQuora}
                checked={quora}
              />
              <CheckBox
                label="Facebook"
                checkBoxHandler={setFacebook}
                checked={facebook}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default StockSearchForm;
