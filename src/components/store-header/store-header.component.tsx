import {
  StoreHeaderContainer,
  StoreCategorySelector,
} from "./store-header.styles";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

function StoreHeader() {
  return (
    <StoreHeaderContainer>
      <StoreCategorySelector>
        <FormatListBulletedRoundedIcon />
        Category
        <KeyboardArrowDownRoundedIcon />
      </StoreCategorySelector>
    </StoreHeaderContainer>
  );
}

export default StoreHeader;
