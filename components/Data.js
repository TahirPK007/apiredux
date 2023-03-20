import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTodos, fetchTodos} from '../src/todoSlice';
import {createTodos} from '../src/todoSlice';
import {updateTodos} from '../src/todoSlice';

const Data = () => {
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [id, setid] = useState();

  const dispatch = useDispatch();
  const mydata = useSelector(state => state.todo);
  console.log(mydata);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [mydata.data.length]);

  const senddata = () => {
    dispatch(createTodos({name, age}));
  };
  const updatetodoss = () => {
    dispatch(updateTodos({name, age, id}));
  };

  const updatefields = item => {
    setname(item.name);
    setage(item.age.toString());
    setid(item.id);
  };

  // if (state.todo.isLoading) {
  //   return <Text style={{color: 'black', fontSize: 50}}>Loading....</Text>;
  // }
  return (
    <View>
      <Text>Data</Text>
      {/* <View>
        {state.data.map(item => (
          <TouchableOpacity
            onPress={() => {
              dispatch(deleteTodos(item.id));
            }}>
            <View
              style={{
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{color: 'white'}}>{item.id}</Text>
              <Text style={{color: 'white'}}>{item.name}</Text>
              <Text style={{color: 'white'}}>{item.age}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View> */}
      <FlatList
        data={mydata.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(deleteTodos(item.id));
            }}>
            <View
              style={{
                backgroundColor: 'black',
                margin: 10,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}> Id : {item.id}</Text>
              <Text style={{color: 'white'}}> Name : {item.name}</Text>
              <Text style={{color: 'white'}}> Age : {item.age}</Text>
              <Button
                title="edit data"
                onPress={() => {
                  updatefields(item);
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
      <View>
        <Text>Create New Enteries</Text>
        <TextInput
          style={{
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: 'black',
            padding: 10,
          }}
          placeholder="enter your name"
          value={name}
          onChangeText={value => {
            setname(value);
          }}
        />
        <TextInput
          style={{
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: 'black',
            padding: 10,
          }}
          placeholder="enter your age"
          value={age}
          onChangeText={value => {
            setage(value);
          }}
        />
        <Button title="Add data to Api using redux" onPress={senddata} />
        <Button title="Update the data" onPress={updatetodoss} />
      </View>
    </View>
  );
};

export default Data;
