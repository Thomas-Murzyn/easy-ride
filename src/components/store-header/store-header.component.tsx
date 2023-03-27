import {
  StoreHeaderContainer,
  StoreSelector,
  DropDownMenu,
  StoreHeaderWrapper,
  SliderContainer,
} from "./store-header.styles";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import Slider from "@mui/material/Slider";
import { useState, useEffect, useRef } from "react";
import { priceFilter } from "../store-articles/store-articles.component";
import { categories } from "../sell-form/sell-form.component";

export type StoreHeaderProp = {
  handleCategories: (category: string) => void;
  categoriesSelected: string[];
  clearCategory: (category: string) => void;
  setFilter: (filter: priceFilter) => void;
  handleChangePrice: (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => void;
  price: number[];
};

function valuetext(value: number) {
  return `${value}€`;
}

function StoreHeader({
  handleCategories,
  categoriesSelected,
  clearCategory,
  handleChangePrice,
  price,
  setFilter,
}: StoreHeaderProp) {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const dropDownCategoryRef = useRef<HTMLDivElement | null>(null);
  const dropDownFilterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick: EventListenerOrEventListenerObject = (e) => {
      if (showCategoryMenu && dropDownCategoryRef.current) {
        !dropDownCategoryRef.current.contains(e.target as Node) &&
          setShowCategoryMenu(false);
      } else if (showFilterMenu && dropDownFilterRef.current) {
        !dropDownFilterRef.current.contains(e.target as Node) &&
          setShowFilterMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showCategoryMenu, showFilterMenu]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "asc") {
      setFilter("asc");
    }
    if (value === "desc") {
      setFilter("desc");
    }
  };

  return (
    <StoreHeaderWrapper>
      <StoreHeaderContainer>
        <StoreSelector onClick={() => setShowCategoryMenu(true)}>
          <FormatListBulletedRoundedIcon />
          Category
          <KeyboardArrowDownRoundedIcon />
        </StoreSelector>

        <StoreSelector onClick={() => setShowFilterMenu(true)}>
          <FormatListBulletedRoundedIcon />
          Filtres
          <KeyboardArrowDownRoundedIcon />
        </StoreSelector>

        <SliderContainer>
          <span>{`Min ${price[0]}€`}</span>
          <Slider
            getAriaLabel={() => "Price"}
            value={price}
            onChange={handleChangePrice}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            valueLabelFormat={valuetext}
            disableSwap
            min={0}
            max={2000}
          />
          <span>{`Max ${price[1]}€`}</span>
        </SliderContainer>
      </StoreHeaderContainer>

      {showCategoryMenu && (
        <DropDownMenu ref={dropDownCategoryRef}>
          {categories.map((category, index) => {
            return (
              <span
                style={{
                  backgroundColor: `${
                    categoriesSelected.includes(category)
                      ? "#c0c0c0"
                      : "whitesmoke"
                  }`,
                }}
                onClick={() => handleCategories(category)}
                key={index}
              >
                {category}
                {categoriesSelected.includes(category) && (
                  <ClearRoundedIcon onClick={() => clearCategory(category)} />
                )}
              </span>
            );
          })}
        </DropDownMenu>
      )}

      {showFilterMenu && (
        <DropDownMenu ref={dropDownFilterRef} filter="true">
          <fieldset>
            <legend>Prix:</legend>
            <div>
              <label htmlFor="croissant">Croissant </label>
              <input
                type="radio"
                id="croissant"
                name="price"
                value={"asc"}
                onChange={handleFilter}
              />
            </div>

            <div>
              <label htmlFor="decroissant">Décroissant </label>
              <input
                type="radio"
                id="decroissant"
                name="price"
                value={"desc"}
                onChange={handleFilter}
              />
            </div>
          </fieldset>
        </DropDownMenu>
      )}
    </StoreHeaderWrapper>
  );
}

export default StoreHeader;
