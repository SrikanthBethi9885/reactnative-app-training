import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView,Button, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
const ListView = () =>{
    const [userInput, setUserInput] = useState("");
    const [sortBy, setSortBy] = useState("SNo");
    const [sortDirection, setSortDirection] = useState("asc");
    const [cityNames, setCityNames] = useState([
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
   ])
   const filteredData = cityNames.filter(item =>
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
const [newCity, setNewCity] = useState("");
const [editCity, setEditCity] = useState({ SNo: null, name: "" });

const handleAddCity = () => {
  if (newCity.trim() !== "") {
    const newCityData = {
      SNo: cityNames.length + 1,
      name: newCity.trim()
    };
    setCityNames([...cityNames, newCityData]);
    setNewCity("");
  }
};

const handleEditCity = (SNo) => {
  const cityToEdit = cityNames.find(city => city.SNo === SNo);
  if (cityToEdit) {
    setEditCity({ SNo: cityToEdit.SNo, name: cityToEdit.name });
  }
};

const handleSaveEdit = () => {
  const updatedCities = cityNames.map(city =>
    city.SNo === editCity.SNo ? { ...city, name: editCity.name } : city
  );
  setCityNames(updatedCities);
  setEditCity({ SNo: null, name: "" });
};

const handleCancelEdit = () => {
  setEditCity({ SNo: null, name: "" });
};

const handleDeleteCity = (SNo) => {
  const updatedCities = cityNames.filter((city) => city.SNo !== SNo);
  setCityNames(updatedCities);
};

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.textinput}
          placeholder="Search"
          onChangeText={(text) => setUserInput(text)}
          value={userInput}
        />
      </SafeAreaView>
      <TextInput
        style={styles.Input}
        placeholder="Enter city name"
        onChangeText={text => setNewCity(text)}
        value={newCity}
      />
      <Button
        style={styles.button}
        title="Add City"
        onPress={handleAddCity}
      />

      <View style={styles.buttonContainer}>
        <Picker
          style={styles.picker}
          selectedValue={sortBy}
          onValueChange={(itemValue, itemIndex) => handleSort(itemValue)}
        >
        <Picker.Item label="Sort" value="Null" style={styles.pickerlabel} />
          <Picker.Item label="Sort by SNo" value="SNo" style={styles.pickerlabel1}/>
          <Picker.Item label="Sort by Name" value="name" style={styles.pickerlabel2}/>
        </Picker>
      </View>

      <FlatList
        data={sortedData}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerText}>SNo</Text>
            <Text style={styles.headerText}>City Names</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.SNo}>{item.SNo}</Text>
            {item.SNo === editCity.SNo ? (
              <TextInput
                style={styles.name}
                value={editCity.name}
                onChangeText={(text) => setEditCity({ ...editCity, name: text })}
              />
            ) : (
              <Text style={styles.name}>{item.name}</Text>
            )}
            <View style={styles.editButtonContainer}>
              {item.SNo === editCity.SNo ? (
                <>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSaveEdit}
                  >
                    <Text>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={handleCancelEdit}
                  >
                    <Text>Cancel</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => handleEditCity(item.SNo)}
                >
                  <Text>Edit</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteCity(item.SNo)}
              >
                <Text style={styles.buttonText}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.SNo.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor:'#96EEEF'
    },
    textinput:{
       padding:6,
       paddingHorizontal:100,
        borderWidth:1,
        borderRadius:5,
        width:'100%',
        backgroundColor:'#ffff'
       
    },
    Input:{
      width:'100%',
      padding:10,
      marginTop:10,
      borderWidth:1,
      borderRadius:5,
      backgroundColor:'#ffff'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop:20
    },
    picker: {
        width: '40%',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginLeft:10,
        
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
        backgroundColor:'#ffff',
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
        fontWeight: "bold",
       
    },
    SNo:{
        fontSize: 18,
        fontWeight: "bold"
    },
    name: {
        fontSize: 18,
        marginLeft:10,
       flex:1
       
    },
    editButtonContainer:{
     flexDirection:"row"
    },
    editbutton:{
        backgroundColor: "#9AF46E",
                padding: 8,
                borderRadius: 5,
                marginleft:10,
               
               },
    saveButton: {
        backgroundColor: "#4CAF50",
        padding: 8,
        borderRadius: 5,
        marginLeft: 10
      },
      cancelButton: {
        backgroundColor: "#F44336",
        padding: 8,
        borderRadius: 5,
        marginLeft: 10
      },
   

    deleteButton:{
        backgroundColor: "#F4324C",
        padding: 8,
        borderRadius: 5,
        marginLeft:10
    }
})

export default ListView