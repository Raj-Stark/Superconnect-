import { ThemeProvider } from "@mui/system";
import { theme } from "./Theme/index";

import Appbar from "./components/Appbar/Appbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import WhySuperConnect from "./components/WhySuperConnect/WhySuperConnect";
import Signup from "./components/Signup/Signup";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import { Divider } from "@mui/material";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Appbar></Appbar>
      <Hero></Hero>
      <Categories></Categories>
      <WhySuperConnect></WhySuperConnect>
      <Signup></Signup>
      <ReviewCard></ReviewCard>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
