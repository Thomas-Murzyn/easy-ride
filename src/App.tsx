import { Routes, Route } from "react-router-dom";
import Header from "./routes/header/header.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Sell from "./routes/sell/sell.component";
import Shop from "./routes/shop/shop.component";
import { isUserAuthenticated } from "./app/features/user/user.slice";
import { useAppDispatch } from "./app/hooks/hooks";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(isUserAuthenticated());
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sell" element={<Sell />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
