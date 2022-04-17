import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useIsFocused } from "@react-navigation/core";

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar animated {...props} /> : null;
};

export default FocusedStatusBar;

const styles = StyleSheet.create({});