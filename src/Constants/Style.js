import { colors, parameters } from "./Colors";
//
export const LoginStyle = {
  TopBoxText: {
    color: colors.Grey6,
    fontFamily: "FamilyM",
    fontSize: 24,
  },
  TopBoxMainText: {
    color: colors.white,
    fontFamily: "FamilyB",
    fontSize: 48,
    letterSpacing: 0,
  },

  Or: {
    color: colors.GreyText,
    textAlign: "center",
    marginTop: 10,
    fontSize: 13,
    fontFamily: "FamilyM",
  },
  MoreLoginOptionContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "60%",
    alignSelf: "center",
  },
  MoreLoginOption: {
    backgroundColor: "#fff",
    borderRadius: 99,
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
  },
  MainContainer: {
    flex: 1,
  },
  TopBox: {
    height: "25%",
    backgroundColor: colors.PRIMARY,
    justifyContent: "flex-end",
  },
  BGLoginImage: {
    height: 250,
    width: 310,
    top: 0,
    right: 0,
    position: "absolute",
  },
  skip: {
    backgroundColor: "rgba(0, 0, 0,0.6)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    position: "absolute",
    right: 0,
    top: 50,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  TextInput: {
    borderWidth: 0.4,
    paddingHorizontal: 10,
    height: 48,
    borderRadius: 5,
    backgroundColor: colors.white,
    fontFamily: "FamilyM",
    fontSize: 16,
  },
  BottomContainer: {
    paddingTop: 6,
    height: "75%",
    backgroundColor: colors.GrayBG,

    paddingHorizontal: 20,
  },
  chooseTextBox: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  chooseText: {
    fontWeight: "bold",
    fontSize: 21,
    position: "static",
    color: colors.PRIMARY,
  },
  //Modal
  Modal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  BottomModal: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    width: parameters.ScreenWidth,
    height: "20%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ModalClickBox: {
    borderWidth: 0.5,
    borderColor: colors.Grey1,
    marginTop: 20,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  ModalBoxText: {
    paddingLeft: 15,
    fontFamily: "FamilyM",
    color: colors.Grey1,
    fontSize: 16,
  },
};

///////-----------------------------------------

export const Drawer = {
  DrawerHeaderContainer: {
    paddingTop: 60,
    paddingHorizontal: 10,
    backgroundColor: colors.BGcolor,
    borderBottomColor: colors.GreyText,
    borderBottomWidth: 0.2,
    elevation: 2,
  },
  Avatar: {
    borderColor: colors.white,
  },

  DrawerCard: {
    backgroundColor: colors.DrawerCardBG,
    paddingVertical: 5,
    justifyContent: "center",
    borderRadius: 0,

    // backgroundColor: "rgba(42,42,42,0.3)",
  },
  LableStyle: {
    color: colors.GreyText,
    fontFamily: "FamilyLB",
    fontSize: 15,
  },
};

//
export const Styled = {
  Margincontainer: {
    marginHorizontal: 20,
    flex: 1,
  },

  /// Header ---------------------------------
  HeaderCon: {
    // height: 90,
    // justifyContent: "flex-end",
    paddingBottom: 10,
    // paddingHorizontal: 20,
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  Header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  HeadText: {
    flex: 1,
    paddingLeft: 15,
    fontFamily: "FamilyM",
    fontSize: 23,
    color: colors.HeaderText,
  },

  //-----------------------------------------------
  SearchContainer: {
    // borderWidth: 0.5,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 6,
    // elevation: 10,
    height: 50,
    marginBottom: 15,
    borderWidth: 0.5,
    borderColor: colors.Grey1,
    // backgroundColor: "rgb(57, 58, 59)",

    marginHorizontal: 20,
  },

  // button -------------------------------------------------------
  ButtonView: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  Button: {
    backgroundColor: colors.ButtonColor,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  BtnText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "FamilyB",
  },
  //------------------------------
  SocialIcon: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  //---------------------------------------------------------
  GrayText: {
    color: colors.grey3,
    fontFamily: "FamilyLB",
  },
  TextInputTitle: {},
  TextInput: {
    borderRadius: 5,
    backgroundColor: colors.white,
    height: 47,
    elevation: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 15,
    fontFamily: "FamilyM",
    color: colors.black,
    elevation: 2,
  },

  HeadingContainer: {
    alignItems: "center",
    width: "80%",
  },

  BackIcon: {
    width: "10%",
  },

  ////------------------------------
  PolicyText: {
    textAlign: "center",
    fontSize: 13,
    color: colors.GreyText,
    fontFamily: "FamilyM",
  },
  PartitionTextCon: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  PartitionText1: {
    fontFamily: "FamilyM",
    color: colors.Text,
    fontSize: 15,
  },
  PartitionText2: {
    fontFamily: "FamilyM",
    color: colors.PRIMARY,
    fontSize: 15,
  },
  ////

  ImageCon: {
    height: 80,
    width: 80,
    backgroundColor: colors.white,
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
  },
};
