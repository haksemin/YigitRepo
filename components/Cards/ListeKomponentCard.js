// ListeCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ListeCard({ ProductName, ProductPrice, ProductColors }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.productName}>{ProductName}</Text>
      <View style={styles.colorContainer}>
        {ProductColors.map((color, index) => (
          <View key={index} style={[styles.colorIndicator, { backgroundColor: color }]} />
        ))}
      </View>
      <Text style={styles.productPrice}>{ProductPrice} ₺</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
  },
  productName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#333",
    width:200
  },
  colorContainer: {
    flexDirection: "row",
  },
  colorIndicator: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginHorizontal: 2,
    borderColor:"black",
    borderWidth:1
  },
  productPrice: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
  },

});
