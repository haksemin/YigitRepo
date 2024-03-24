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
        const veri = response.data.data;
        const productList = [];
        for (const bolum in veri)
        for (const durum in veri[bolum])
        for (const category in veri[bolum][durum]) {
          for (const price in veri[bolum][durum][category]) {
            for (const color in veri[bolum][durum][category][price]) {
              const product = veri[bolum][durum][category][price][color];
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
        Product_Color={item.HEX_KODU}
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
   
  },
  flatListContentContainer: {
   
  },
});
