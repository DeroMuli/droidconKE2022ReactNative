import * as React from "react"
import Svg, { SvgProps, G, Path ,Rect,  Defs , ClipPath} from "react-native-svg"

const SignUpBanner = (props : SvgProps) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg" 
    width={412}
    height={179}
    {...props} >
        <Defs>
            <Rect data-name="Rectangle 693" width={412} height={179} fill="#000ceb"/>
            <ClipPath id="clip-path" />
        </Defs>
        <G data-name="Group 383">
            <G data-name="Group 382">
                <Rect data-name="Rectangle 691" width="412" height="179" fill="#000ceb"/>
                <G data-name="Mask Group 1" clip-path="url(#clip-path)" transform="translate(-232 402)" >
                    <G transform="translate(338.688 -465.155)">
                    <Rect data-name="Rectangle 692" width={91.444} height={124.36} transform="translate(87.932 152.592) rotate(45)" fill="#ff6e4d"/>
                    <Path data-name="Path 163" transform="translate(0.051)" d="M217.194,152.59l87.938-87.938L240.479,0,152.541,87.938,64.733.129.08,64.782,240.592,305.31l64.669-64.669Z" fill="#00e2c3"/>
                    </G>
                </G>
            </G>
        </G>
    </Svg>
)

export default SignUpBanner

