import React, { useState } from 'react'
import { StatusBar, StatusBarAnimation, StatusBarStyle, StyleSheet } from 'react-native';
const STYLES: StatusBarStyle[] = ['default', 'dark-content', 'light-content'];
const TRANSITIONS: StatusBarAnimation[] = ['fade', 'slide', 'none'];

export default function statusBar(props: { color: string }) {
    const { color } = props;
    return (
        <StatusBar
            animated={true}
            backgroundColor={color}
            barStyle={STYLES[0]}
            showHideTransition={TRANSITIONS[0]}
            hidden={false}
        />
    );
}

