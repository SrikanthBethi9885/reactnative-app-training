import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView, TextInput } from "react-native";

const ListView = () =>{
    const [userInput, SetuserInput] = useState("");
    const data=[
    {SNo:1, name:"Mumbai" },
    {SNo:2, name:"Delhi"},
    {SNo:3, name:"Hyderabad"},
    {SNo:4, name:"Bangalore"},
    {SNo:5, name:"Chennai"},
    {SNo:6, name:"Kolkata"},
    {SNo:7, name:"Pune"},
    {SNo:8, name:"Lucknow"},
    {SNo:9, name:"Jaipur"},
    {SNo:10, name:"Visakhapatnam"}
   ]
   const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(userInput.toLowerCase())
);
   

return(
       <View style={styles.container}>
         <SafeAreaView>
            <TextInput style={styles.textinput} placeholder="Search" clearButtononMode='always'
                onChangeText={(text) =>SetuserInput(text)}
            />
        </SafeAreaView>
         <FlatList 
         data={filteredData}
         ListHeaderComponent={header = ()=>(
            <View style={styles.header}>
            <Text style={styles.headerText} >SNo</Text>
            <Text style={styles.headerText}> City Names</Text>
            </View>
         )} 
         renderItem={({item,index}) =>(
            <View style={ styles.row}>
    <Text  style={styles.SNo}>{ item.SNo}</Text>
    <Text style={styles.name}> {item.name}</Text>
    </View>
   )} 
 
 
         
         keyExtractor={item => item.SNo.toString()}
         />
         
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    textinput:{
       padding:6,
       paddingHorizontal:100,
        borderWidth:1,
        borderRadius:5,
        width:'100%',
       
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius:3,
        padding: 10,
        width: '100%',
        backgroundColor:'#C8C7C3',
        marginBottom:10
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding:10,
        fontWeight:'bold'
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    SNo:{
        fontSize: 18,
        fontWeight: "bold"
    },
    name: {
        fontSize: 18
    }
})
export default ListView