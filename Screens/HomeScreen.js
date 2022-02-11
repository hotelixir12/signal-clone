import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, ScrollView } from 'react-native';
import CustomListItem from '../componets/CustomListItem';

const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title:"Signal",

        });
    }, [navigation]);

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>  
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({})
