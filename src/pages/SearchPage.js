import React, { useState } from "react";
import axios from "axios";

function SearchPage() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchResults = async () => {
    if (!formData.from || !formData.to) return alert("Please enter From and To locations");
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/services/search", { params: formData });
      setResults(res.data);
    } catch (err) {
      console.error(err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <> Vehicle page </>
  );
}

export default SearchPage;
