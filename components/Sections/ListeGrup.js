import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet,Dimensions } from "react-native";
import axios from "axios";
import ListeCard from "../Cards/ListeKomponentCard";
import SearchBox from "./SearchBox";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ListeGrup() {
  const [groupedProducts, setGroupedProducts] = useState({});

  const [searchQuery, setSearchQuery] = useState("");

  const searchQueryLower = searchQuery.toLocaleLowerCase('tr-TR');

  const filteredProducts = Object.keys(groupedProducts).reduce((acc, brand) => {
    const filtered = Object.entries(groupedProducts[brand]).filter(([productName]) =>
      productName.toLocaleLowerCase('tr-TR').includes(searchQueryLower)
    );
  
    if (filtered.length > 0) {
      acc[brand] = Object.fromEntries(filtered);
    }
  
    return acc;
  }, {});



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
      <View>
      <SearchBox onChangeText={(text) => setSearchQuery(text)} />

      </View>
      
  

{Object.entries(filteredProducts).map(([brand, products], brandIndex) => (
        <View style={{margin:15,borderWidth:1,borderRadius:15,overflow:"hidden"}} key={brandIndex}>
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
    paddingBottom:windowHeight*0.2,
    bounces:false,
  },
  brandHeader: {
    backgroundColor: "#FBBC0F",
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#333",
  },

});
