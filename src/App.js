import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/Card.list.component/CardList";
import SearchBox from "./components/search-box/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const handleChange = function (e) {
    e.preventDefault();
    const value = e.target.value;
    setSearchField(value);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setMonsters(data);
    }
    fetchData();
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <div className="App">
      <h1> Monsters Rolodex  </h1>
      <SearchBox placeholder="search monsters" handleChange={handleChange} />

      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
