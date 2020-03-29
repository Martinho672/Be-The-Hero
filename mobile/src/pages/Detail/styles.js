import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create(
    {
        container:{
            flex:1,
            paddingHorizontal:24,
            paddingTop: Constants.statusBarHeight + 20,
        },
        header:{
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center',
        },
        
        incident:{
            padding: 24,
            borderRadius: 8,
            backgroundColor:'#FFF',
            marginTop:12,
        },
        incidentProperty:{
            fontSize: 14,
            color:'#414b',
            fontWeight:'bold',
        },
        incidentValue:{
            marginTop: 8,
            fontSize:15,
            marginBottom: 24,
            color:'#737380'
        },        
        contactBox:{
            padding: 24,
            borderRadius: 8,
            backgroundColor:'#FFF',
            marginTop:16,
        },
        heroTitle:{
            fontWeight:'bold',
            fontSize: 16,
            color: '#13131a',
            lineHeight: 30,
        },

        heroDescription:{
            fontSize:15,
            color: '#737380',
            marginTop: 12,

        },

        actions:{
            marginTop: 12,
            flexDirection: "row",
            justifyContent: "space-between",
        },

        action:{
            backgroundColor: '#e02041',
            borderRadius: 8,
            height: 50,
            width: '48%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        actionText:{
            color: '#FFF',
            fontSize: 15,
            fontWeight: 'bold',

        },

    
    }
)