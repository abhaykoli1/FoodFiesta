import { Dimensions } from "react-native";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

export const darkColors = {
  BGcolor: "#121212", // -------------spotify bg
  GrayBG: "#121212",
  cardbackground: "#2A2A2A", //---------spotify cardbg
  GreyText: "#bdc6cf", //-------- Gray 6
  GreyText2: "#fff",
  Text: "#fff", // ------- white
  DrawerCardBG: "#2A2A2A",
  Primary: "#FF4B3A", // orange
};
export const lightColors = {
  BGcolor: "#fff",
  GrayBG: "#f6f6f6",
  cardbackground: "#fff",
  GreyText: "#5e6977",
  GreyText2: "#43484d",
  Text: "black",
  DrawerCardBG: "#fff",
  Primary: "#00b14f",
};
//
export const colors = {
  ButtonColor: "#00b14f",
  PRIMARY: "#1ED65F", // spotify green

  // PRIMARY: "#7F57F1", // purple
  // PRIMARY: "#00A624", // old green

  ///Dark background
  BGcolor: "#121212", // -------------spotify bg
  GrayBG: "#121212",
  cardbackground: "#2A2A2A", //---------spotify cardbg
  GreyText: "#bdc6cf", //-------- Gray 6
  GreyText3: "#D3D3D3",
  GreyText2: "#fff",
  Text: "#fff", // ------- white
  DrawerCardBG: "#2A2A2A",
  Primary: "#7F57F1", // orange

  // light Background

  // cardcomment: "#86939e",
  // headerText: "white",
  // statusbar: "ff8c52",
  black: "black",

  // buttonColor: "#228B22",    //dark green
  // cardbackground: "#8f8f8f",
  IconColor: "#bdc6cf",
  HeaderText: "#fff",
  white: "#fff",
  Grey1: "#43484d", //dark
  Grey2: "#5e6977",
  Grey3: "#687076",
  Grey4: "#86939e",
  Grey5: "#9BA1A6",
  Grey6: "#bdc6cf",
  Grey7: "#e1e8ee", //light
};

export const parameters = {
  ScreenHeight: Height,
  ScreenWidth: Width,
};

export const title = {
  color: "#ff8c52",
};
