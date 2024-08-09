import React from 'react'
import { useWindowDimensions, View } from 'react-native'

const BodyComponents = (prosp: any) => {
    const { height } = useWindowDimensions();
    return (

        <View style={{ height: height * 0.90 }}>
            {prosp.children}
        </View>
    )
}

export default BodyComponents
