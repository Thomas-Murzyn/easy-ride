import {
  StoreHeaderContainer,
  StoreCategorySelector,
  DropDownMenu,
  StoreHeaderWrapper,
} from "./store-header.styles";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";

import { categories } from "../sell-form/sell-form.component";

function StoreHeader() {
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
            return <span key={index}>{category}</span>;
          })}
        </DropDownMenu>
      )}
    </StoreHeaderWrapper>
  );
}

export default StoreHeader;
