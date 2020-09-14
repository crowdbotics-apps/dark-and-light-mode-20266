import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Datepicker_20: new Date("09/14/2020"), Input_22: "" }

  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "visible",
        fontSize: 12,
        color: "#000000",
        backgroundColor: "#ffffff",
        fontFamily: "Roboto-Regular",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          overflow: "visible",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "100%",
            height: "50%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            fontSize: 12,
            color: "#000000",
            backgroundColor: "#ffffff",
            fontFamily: "Roboto-Regular",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <View
            style={{
              width: "100%",
              height: "50%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              overflow: "visible",
              fontSize: 12,
              color: "#000000",
              backgroundColor: "#ffffff",
              fontFamily: "Roboto-Regular",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              backgroundSize: "auto"
            }}
          >
            <View
              style={{
                width: "100%",
                height: "50%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                fontSize: 12,
                color: "#000000",
                backgroundColor: "#ffffff",
                fontFamily: "Roboto-Regular",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                backgroundSize: "auto"
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "50%",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  overflow: "visible",
                  fontSize: 12,
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  fontFamily: "Roboto-Regular",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  alignContent: "stretch",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0,
                  backgroundSize: "auto"
                }}
              >
                <Text
                  style={{
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 5,
                    marginBottom: 5,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingTop: 5,
                    paddingBottom: 5,
                    overflow: "visible",
                    fontSize: 12,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                    fontFamily: "Roboto-Regular",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    textAlign: "left",
                    textAlignVertical: "center",
                    textDecorationLine: "none",
                    textTransform: "none",
                    lineHeight: 12,
                    letterSpacing: 0
                  }}
                >
                  You&#39;re Listening to the Broccoli Fan Club Podcast
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "50%",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  overflow: "visible",
                  fontSize: 12,
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  fontFamily: "Roboto-Regular",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  alignContent: "stretch",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0,
                  backgroundSize: "auto"
                }}
              >
                <Icon
                  iconFont="Eva Design Icons"
                  name="activity"
                  height={100}
                  width={100}
                  style={{
                    marginLeft: 80,
                    marginRight: 0,
                    marginTop: 5,
                    marginBottom: 5,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingTop: 5,
                    paddingBottom: 5,
                    overflow: "visible",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    fontSize: 100,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                    fontFamily: "Roboto-Regular",
                    textAlign: "left",
                    textAlignVertical: "center",
                    textDecorationLine: "none",
                    textTransform: "none",
                    lineHeight: 12,
                    letterSpacing: 0
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: "50%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              overflow: "visible",
              fontSize: 12,
              color: "#000000",
              backgroundColor: "#ffffff",
              fontFamily: "Roboto-Regular",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              backgroundSize: "auto"
            }}
          >
            <Datepicker
              style={{
                width: "100%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 5,
                marginBottom: 5,
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 5,
                paddingBottom: 5,
                overflow: "visible",
                fontSize: 12,
                color: "#000000",
                backgroundColor: "#ffffff",
                fontFamily: "Roboto-Regular",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                textAlign: "left",
                textAlignVertical: "center",
                textDecorationLine: "none",
                textTransform: "none",
                lineHeight: 12,
                letterSpacing: 0
              }}
              date={this.state.Datepicker_20}
              onSelect={nextValue =>
                this.setState({ Datepicker_20: nextValue })
              }
            />
            <Input
              placeholder="Like what you hear? Leave us a review."
              editable={true}
              multiline={true}
              textStyle={{
                height: 100,
                fontSize: 12,
                color: "#000000",
                textAlign: "left",
                fontFamily: "Roboto-Regular"
              }}
              style={{
                width: "100%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 5,
                marginBottom: 5,
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 5,
                paddingBottom: 5,
                overflow: "visible",
                fontSize: 12,
                color: "#000000",
                backgroundColor: "#ffffff",
                fontFamily: "Roboto-Regular",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                textAlign: "left",
                textAlignVertical: "center",
                textDecorationLine: "none",
                textTransform: "none",
                lineHeight: 12,
                letterSpacing: 0
              }}
              value={this.state.Input_22}
              onChangeText={nextValue => this.setState({ Input_22: nextValue })}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
