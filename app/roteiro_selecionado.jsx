import AntDesign from '@expo/vector-icons/AntDesign';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const { height: screenHeight } = Dimensions.get('window');


function roteiroSelecionado () {




    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={16} color="black" />
                <Text style={styles.texto_header}>Roteiro</Text>
            </View>
            
            <ScrollView>

                <View style={styles.image_view}>
                    <Image 
                        style={styles.image_style}
                        source={{ uri: 'https://placehold.co/600x400' }} 
                    
                    />
                </View>

                <View style={styles.description_container}>
                    <Text style={styles.section_text}>Descrição</Text>
                    <Text style={styles.description_text}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis 
                    </Text>
                </View>


            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity >
                    <View style={styles.save_button}>
                        <Text style={styles.button_text}>Salvar</Text>
                        <Image 
                            style={styles.save_button_image}
                            source={require('../assets/images/saveIcon.png')}
                        
                        />
                    </View>                        
                
                </TouchableOpacity>

                <TouchableOpacity >
                    
                    <View style={styles.invite_button}>
                        <Text style={styles.button_text}>Convidar amigos</Text>
                        <Image 
                        style={styles.invite_button_image}
                        source={require('../assets/images/shareIcon.png')}
                        />
                    </View>
                    
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#fff",
    },

    header: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#FAFAFA",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: 35,
        paddingHorizontal: 25,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

        texto_header: {
        fontSize: 20,
        fontFamily: "NunitoSans_700Bold",
        marginLeft: 20,
        alignSelf: "center",
    },    

    content_view: {

    },

    footer: {
        height: screenHeight * 0.08,
        width: '100%',
        backgroundColor:"#FAFAFA",
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },

    save_button:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F18701',
        borderRadius: 8,
        padding: 12,
        width: screenWidth * 0.3,
        gap: 10   
    },

    invite_button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7678ED',
        borderRadius: 8, 
        paddingVertical: 12,
        paddingHorizontal: 15,  
        gap: 10   
    },

    button_text: {
        fontFamily: 'NunitoSans_700Bold',
        color: 'white',
    },

    save_button_image: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    invite_button_image: {
        width: 12,
        height: 12,
        resizeMode: 'contain'
    },    

    image_view: {
        width: '85%',
        alignSelf: 'center'
    },

    image_style: {
        resizeMode: 'contain',
        height: 300,
        width: '100%',  
    },

    section_text: {
        fontFamily:'NunitoSans_700Bold',
        fontSize: 20,
    },

    description_container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 3,
        paddingHorizontal: 25   
    },

    description_text: {
        fontFamily: 'NunitoSans_600SemiBold',
        fontSize: 16
    }

})


export default roteiroSelecionado