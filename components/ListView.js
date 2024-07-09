import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from "react-native";

const ListView = () =>{
    const [userInput, SetuserInput] = useState("");
    const [sortBy, setSortBy] = useState("SNo");
    const [sortDirection, setSortDirection] = useState("asc");
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
   
const handleSort = (field) => {
    if (sortBy === field) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {

setSortBy(field);
setSortDirection("asc");
}
};
const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === "SNo") {
        return sortDirection === "asc" ? a.SNo - b.SNo : b.SNo - a.SNo;
    } else if (sortBy === "name") {
        return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    }
    return 0;
});


return(
       <View style={styles.container}>
         <SafeAreaView>
            <TextInput style={styles.textinput} placeholder="Search" clearButtononMode='always'
                onChangeText={(text) =>SetuserInput(text)}
            />
        </SafeAreaView>
        <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleSort("SNo")}>
                    <Text style={styles.buttonText}>Sort by SNo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleSort("name")}>
                    <Text style={styles.buttonText}>Sort by Name</Text>
                </TouchableOpacity>
            </View>
         <FlatList 
         data={sortedData}
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop:20
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
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