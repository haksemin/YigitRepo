import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import axios from "axios";
import ProductMainCard from "../components/Cards/ProductMainCard";
import StatusBar from "../components/Sections/StatusBar";
import Header from "../components/Sections/Header";

export default function UrunGoster() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://yigitgsm.net/liste_api_v2")
      .then(response => {
        const originalAccessories = response.data.data["ORJİNAL AKS."]["SIFIR"];
        const productList = [];
        for (const category in originalAccessories) {
          for (const price in originalAccessories[category]) {
            for (const color in originalAccessories[category][price]) {
              const product = originalAccessories[category][price][color];
              productList.push(product);
            }
          }
        }
        // Ürün listesi tek sayıda öğe içeriyorsa, son sırayı doldurmak için boş bir öğe ekleyin
        if (productList.length % 2 !== 0) {
          productList.push({ isEmpty: true }); // Boş öğe olarak işaretle
        }
        setProducts(productList);
      })
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => {
    // Boş öğe ise görünmez bir öğe render et
    if (item.isEmpty) {
      return <View style={{ flex: 1 }} />;
    }
    return (
      <ProductMainCard
        ProductPrice={item.SATIS_FIYAT_1}
        ProductName={item.STOK_ADI}
        style={{ flex: 1, margin: 5 }} // Her kart için stil ayarı
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(index)}
        numColumns={2}
        style={styles.flatListStyle}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
  flatListStyle: {
    // Buraya FlatList için genel stiller ekleyebilirsiniz.
  },
  flatListContentContainer: {
    // Buraya içerik konteyneri için stiller ekleyebilirsiniz, örneğin padding veya margin.
  },
});
