import { View, Text } from 'react-native';
import React, { useState } from 'react';

import { COLORS, FONTS, SIZES } from "../constants";
import { ETHPrice, NFTTitle } from "./SubInfo";

const DetailsDesc = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, 100));
    const [readMore, setReadMore] = useState(false);

    return (
        <>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}
                />
                <ETHPrice price={data.price} />
            </View>

            <View style={{
                marginVertical: SIZES.extraLarge * 1.5
            }}>
                <Text
                    style={{
                        fontSize: SIZES.font,
                        fontFamily: FONTS.semiBold,
                        color: COLORS.primary
                    }}
                >
                    Description
                </Text>
                <View style={{
                    marginTop: SIZES.base
                }}>
                    <Text
                        style={{
                            fontSize: SIZES.small,
                            fontFamily: FONTS.regular,
                            color: COLORS.secondary,
                            lineHeight: SIZES.large
                        }}
                    >
                        {data.description}
                    </Text>
                </View>
            </View>
        </>
    );
};

export default DetailsDesc;