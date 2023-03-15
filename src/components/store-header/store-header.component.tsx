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
import { useState } from "react";

import { categories } from "../sell-form/sell-form.component";

export type StoreHeaderProp = {
  handleCategories: (category: string) => void;
  categoriesSelected: string[];
  clearCategory: (category: string) => void;
  handleChange: (
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
  handleChange,
  price,
}: StoreHeaderProp) {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  return (
    <StoreHeaderWrapper>
      <StoreHeaderContainer>
        <StoreSelector onClick={() => setShowCategoryMenu(!showCategoryMenu)}>
          <FormatListBulletedRoundedIcon />
          Category
          <KeyboardArrowDownRoundedIcon />
        </StoreSelector>

        <StoreSelector onClick={() => setShowFilterMenu(!showFilterMenu)}>
          <FormatListBulletedRoundedIcon />
          Filtres
          <KeyboardArrowDownRoundedIcon />
        </StoreSelector>

        <SliderContainer>
          <span>{`Min ${price[0]}€`}</span>
          <Slider
            getAriaLabel={() => "Price"}
            value={price}
            onChange={handleChange}
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
        <DropDownMenu>
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
        <DropDownMenu filter="true">
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
    </StoreHeaderWrapper>
  );
}

export default StoreHeader;
