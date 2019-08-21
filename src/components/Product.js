import React from 'react'
import {StyleSheet, View, Text, Button, Alert, Image} from 'react-native'

class Product extends React.Component{
    state = {
        amount: 0
    }
    show() {
        Alert.alert(
            'Товар',
            'Выбери категорию',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]
        )
    }
    changeCount = () => {
        this.setState(prevState => ({
            amount: prevState.amount+2
        }))
    }
    render(){
        const {title, text, color, views, image, date} = this.props;
        //console.log(image);
        return (
            <View style={{textAlign: 'center'}}>
                <Text>Заголовок: {title}</Text>
                <Text>Дата публикации{date}</Text>
                <Image style={{width: 300, height: 300}} source={{uri: image}}/>
                <Text>{text}</Text>
                <Button style={styles.button} title={`Колличество просмотров ${views}`} color='#81C784'/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "gold"
    },
    text: {
        color: "blue",
        fontSize: 24,
        textAlign:"center",
        lineHeight: 100
    },
    button: {
        padding: 50
    },
    image:{
        maxWidth: 200,
    }
})
export default Product