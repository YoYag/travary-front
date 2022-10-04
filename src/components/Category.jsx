import React from "react";

const Category = () => {
  const Categories = [
    { id: "cafe", icon: "fas fa-coffee" },
    { id: "restaurants", icon: "fas fa-utensils" },
    { id: "bakery", icon: "fas fa-bread-slice" },
    { id: "market", icon: "fas fa-shopping-cart" },
    { id: "shopping_mall", icon: "fas fa-store" },
    { id: "hospital", icon: "fas fa-hospital-alt" },
    { id: "pharmacy", icon: "fas fa-pills" },
    { id: "bank", icon: "fas fa-piggy-bank" },
  ];

  const categoryList = Categories.map((Category, i) => (
    <button className="btn w-14 h-14 mt-2" key={i} id={Category.id}>
      <i className={Category.icon} size="lg" />
    </button>
  ));

  return (
    <div className="flex flex-wrap justify-between" id="category">
      {categoryList}
    </div>
  );
};

export default Category;
