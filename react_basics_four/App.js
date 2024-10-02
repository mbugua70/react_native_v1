import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <StartGameScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});