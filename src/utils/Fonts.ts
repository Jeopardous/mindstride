import { Dimensions } from "react-native";

const {width,height}= Dimensions.get("window")
const Fonts = {
  regular: 'THICCCBOI-Regular',
  medium: 'THICCCBOI-Medium',
  semibold: 'THICCCBOI-SemiBold',
  bold: 'THICCCBOI-Bold',
  black: 'THICCCBOI-Black',
};
const Matrix={
  screenWidth:width<height?width:height,
  screenHeight:width<height?height:width
}
const FontSize={
  font6:Matrix.screenWidth*(6/365),
  font8:Matrix.screenWidth*(8/365),
  font10:Matrix.screenWidth*(10/365),
  font12:Matrix.screenWidth*(12/365),
  font14:Matrix.screenWidth*(14/365),
  font16:Matrix.screenWidth*(16/365),
  font18:Matrix.screenWidth*(18/365),
  font20:Matrix.screenWidth*(20/365),
  font22:Matrix.screenWidth*(22/365),
  font24:Matrix.screenWidth*(24/365),
  font30:Matrix.screenWidth*(30/365),

}
export {Fonts,FontSize};
