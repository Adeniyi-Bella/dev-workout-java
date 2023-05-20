// import axios from "axios";
// import { useQuery } from "react-query";
import SingleArticle from "../SingleArticle/SingleArticle";
import "./AllArticles.css";
import { useState, useEffect } from "react";
import SearchInput from "../SearchInput/SearchInput";

export default function AllArticles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API source
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/data");
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm !== "") {
      // Filter the data based on the search term
      const filteredResults = data.filter((item) => {
        const filtering = [];
        // console.log(item);
        item.tags.forEach((element) => {
          filtering.push(element.tag.toLowerCase());
        });
        console.log(filtering);
        
        for (let i = 0; i < filtering.length; i++) {
          if (filtering[i].includes(searchTerm.toLowerCase())) {
            return filtering;
          }}

        //  filtering.filter((item) =>
        //  item.includes(searchTerm.toLowerCase())
        // );
        // console.log(filtering);
        // return filtering;
      });
      console.log(filteredResults);

      setFilteredData(filteredResults);
    } else {
      setFilteredData(data);
    }
  }, [searchTerm, data]);

  const handleFilter = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <SearchInput onFilter={handleFilter} />
      <div className="parent">
        {filteredData.map((user, index) => {
          return <SingleArticle key={index} article={user} />;
        })}
      </div>
    </div>
  );
}
