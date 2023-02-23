import {
  StoreHeaderContainer,
  StoreCategorySelector,
  DropDownMenu,
  StoreHeaderWrapper,
} from "./store-header.styles";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useState } from "react";

import { categories } from "../sell-form/sell-form.component";

export type StoreHeaderProp = {
  handleCategories: (category: string) => void;
  categoriesSelected: string[];
  clearCategory: (category: string) => void;
};

function StoreHeader({
  handleCategories,
  categoriesSelected,
  clearCategory,
}: StoreHeaderProp) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StoreHeaderWrapper>
      <StoreHeaderContainer>
        <StoreCategorySelector onClick={() => setShowMenu(!showMenu)}>
          <FormatListBulletedRoundedIcon />
          Category
          <KeyboardArrowDownRoundedIcon />
        </StoreCategorySelector>
      </StoreHeaderContainer>

      {showMenu && (
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
    </StoreHeaderWrapper>
  );
}

export default StoreHeader;
