import { useState } from "react";
import Button from "../../atoms/Button/Button";
import Labeledinput from "../../molecules/Labeledinput/Labeledinput";
import styles from "./Search.module.css";

export default function ({ onSearch }) {
    const [query, setQuery] = useState("");
  
    const searchClick = () => {
      onSearch(query);
    };
  
    const clearClick = () => {
      onSearch("");
      setQuery("");
    };
  
    return (
      <div className={styles.container}>
        <Labeledinput
          value={query}
          onChange={setQuery}
          label="Search:"
          name="search"
        />
        <Button onClick={searchClick} text="Search" />
        <Button onClick={clearClick} text="Clear" />
      </div>
    );
  }
  