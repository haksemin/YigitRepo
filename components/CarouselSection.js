import React, { useEffect, useRef } from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import Carousel from "../components/Cards/Carousel"; // Yolunu projenize göre ayarlayın

const windowWidth = Dimensions.get('window').width;
const carouselWidth = windowWidth - 14; // Carousel bileşeninizin genişliği
const carouselMargin = 14; // İki öğe arasındaki toplam marj
const carouselInterval = 10000; // 10 saniye

export default function CarouselSection() {
    const scrollViewRef = useRef(null);
    let currentCarouselIndex = 0;

    useEffect(() => {
        const timer = setInterval(() => {
            currentCarouselIndex = (currentCarouselIndex + 1) % 10; // 10 carousel varsa, 0'dan 9'a kadar git ve tekrar başa dön
            const newScrollPosition = currentCarouselIndex * (carouselWidth + carouselMargin); // Her carousel öğesi için genişlik + marj

            scrollViewRef.current?.scrollTo({ x: newScrollPosition, animated: true });
        }, carouselInterval);

        return () => clearInterval(timer); // Cleanup
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                ref={scrollViewRef}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true} // Carousel elemanlarının tam sayfa olarak kaymasını sağlar
                contentContainerStyle={styles.scrollViewContainer}
            >
                {Array.from({ length: 10 }, (_, index) => (
                    <Carousel key={index} />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 250
    },
    scrollViewContainer: {
        alignItems: 'center',
    }
});
