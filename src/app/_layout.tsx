import { Stack } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

export default function MainLayout() {
  const { height } = Dimensions.get("window");
  const paddingTop = height * 0.05;

  return (
    <View style={[styles.container]}>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ headerShown: false }} 
        />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
