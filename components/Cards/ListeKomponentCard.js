import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ListeCard({ ProductName, ProductPrice, ProductColors }) {
  // Fiyatı Türk Lirası formatına çevir
  const formattedPrice = new Intl.NumberFormat('tr-TR', {
    
    minimumFractionDigits: 2
  }).format(ProductPrice);

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.productName}>{ProductName}</Text>
      <View style={styles.colorContainer}>
        {ProductColors.map((color, index) => (
          <View key={index} style={[styles.colorIndicator, { backgroundColor: color }]}>
            <View style={{width: 15, height: 15,borderRadius:7.5, marginHorizontal: 5,marginVertical:4,backgroundColor:"white",opacity:0.3}}></View>
          </View>
        ))}
      </View>
      <View style={{width:65,}}>
        <Text style={styles.productPrice}>{formattedPrice} ₺</Text>
      </View>
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
    width:180
  },
  colorContainer: {
    flexDirection: "row",
    width:100,
    justifyContent:"flex-end",
    paddingRight:10
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
    alignSelf:"flex-end"
  },

});
