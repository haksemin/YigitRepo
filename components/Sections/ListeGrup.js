// ListeGrup.js
import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import axios from "axios";
import ListeCard from "../Cards/ListeKomponentCard";

export default function ListeGrup() {
  const [groupedProducts, setGroupedProducts] = useState({});

  useEffect(() => {
    axios.get("https://yigitgsm.net/liste_api_v2")
      .then(response => {
        const rawData = response.data.data;
        const productGroups = {};

        // API'dan gelen veriyi işle
        Object.keys(rawData).forEach(brand => {
          const models = rawData[brand]["SIFIR"];
          Object.keys(models).forEach(model => {
            Object.keys(models[model]).forEach(price => {
              Object.keys(models[model][price]).forEach(color => {
                const product = models[model][price][color];
                const productName = `${product.MODEL} ${product.HAFIZA}`;
                if (!productGroups[brand]) {
                  productGroups[brand] = {};
                }
                if (!productGroups[brand][productName]) {
                  productGroups[brand][productName] = {
                    name: productName,
                    price: price,
                    colors: [product.HEX_KODU]
                  };
                } else {
                  productGroups[brand][productName].colors.push(product.HEX_KODU);
                }
              });
            });
          });
        });

        // Ürünleri markalarına göre gruplayarak state'e kaydet
        setGroupedProducts(productGroups);
      })
      .catch(error => console.error("API'den veri alınırken bir hata oluştu:", error));
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      {Object.entries(groupedProducts).map(([brand, products], brandIndex) => (
        <View key={brandIndex}>
          <Text style={styles.brandHeader}>{brand}</Text>
          {Object.values(products).map((product, productIndex) => (
            <ListeCard
              key={productIndex}
              ProductName={product.name}
              ProductPrice={product.price}
              ProductColors={product.colors}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#EDEDED",
  },
  brandHeader: {
    backgroundColor: "#FBBC0F",
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#333",
  },
  // Diğer stil tanımlamalarınız...
});
