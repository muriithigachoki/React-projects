import { useState } from "react";
import ProductGrid from "./components/product-card/ProductGrid";
import ProductListComponent from "./components/E-commerce-Product-Filter/ProductListComponent";
import FilterComponent from "./components/E-commerce-Product-Filter/FilterComponent";
import LoginForm from "./components/Login-components/Login";
import SearchInput from "./components/lists&props/SearchInput";
import ListComponent from "./components/lists&props/List.component";

const initialProducts = [
  {
    title: "Jordan Proto Lyte",
    collection: "Running Collection",
    description: "Lightweight and breathable, perfect for running.",
    availableColors: ["Red", "Black", "Orange"],
    price: 245,
    productID: 0,
  },
];

function App() {
  const [initialStories, setInitialStories] = useState([
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]);

  const handleFilter = (input) => {
    setInitialStories(
      initialStories.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [items, setItems] = useState([
    { id: 1, name: "shoes", price: 105, category: "Clothing" },
    { id: 2, name: "Radio", price: 30, category: "Electronics" },
    { id: 3, name: "clean coding", price: 50, category: "Books" },
    { id: 4, name: "changer", price: 35, category: "Electronics" },
  ]);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  const filterByCategory = (value) => {
    setSelectedCategory(value);
    console.log(value);
  };

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory
      ? item.category === selectedCategory
      : true;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SearchInput onsearch={(input) => handleFilter(input)} />
      <ListComponent Items={initialStories} />
      <br />
      <br />
      <ProductGrid products={products} />
      <br />
      <br />
      <FilterComponent
        handleSearch={handleSearch}
        filterByCategory={filterByCategory}
      />

      <ProductListComponent items={filteredItems} />
      <br />
      <br />
      <LoginForm />
    </>
  );
}

export default App;
