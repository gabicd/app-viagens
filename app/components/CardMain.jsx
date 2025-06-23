import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width: screenWidth } = Dimensions.get('window');
const { height: screenHeight } = Dimensions.get('window');

function CardMain ({title, img}) {

  return(
    <TouchableOpacity>
        <View style={styles.card}>
            <Image
                source={{ uri: 'https://placehold.co/400x250/D9D9D9/D9D9D9/png' }} 
                style={styles.cardImage}
                resizeMode="cover" 
                    />

            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{title}</Text>

            </View>            
        </View>
    </TouchableOpacity>
  )


}

const styles = StyleSheet.create({

    card: {
    width: screenWidth - 40,  
    backgroundColor: '#FFFFFF', 
    borderRadius: 10, 
    overflow: 'hidden', 
    marginBottom: 20,
    padding: 15, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8, 
  },

  cardImage: {
    width: '100%', 
    height: screenHeight*0.13, 
    
  },
  cardContent: {
    paddingTop: 15, 
  },

  cardTitle: {
    fontSize: 16,
    fontFamily: 'NunitoSans_700Bold',
    marginBottom: 5, 
    color: '#333',
  },

})

export default CardMain