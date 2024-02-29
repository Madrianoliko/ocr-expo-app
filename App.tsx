import { StatusBar } from 'expo-status-bar';
import { useState } from "react"; 
import { 
    Button, 
    StyleSheet, 
    Text, 
    Image, 
    SafeAreaView, 
} from "react-native"; 
import { pickImageCamera } from './components/pickImageCamera';

export default function App() {

  const [image, setImage] = useState(null);  
  const [extractedText, setExtractedText] = useState("");  

  return ( 
    <SafeAreaView style={styles.container}> 
        <Button 
            title="Pick an image from camera"
            onPress={() => pickImageCamera(setImage, setExtractedText)} 
        /> 
        {image && ( 
            <Image 
                source={{ uri: image }} 
                style={{ 
                    width: 400, 
                    height: 300, 
                    objectFit: "contain", 
                }} 
            /> 
        )} 

        <Text style={styles.text1}> 
            Extracted text: 
        </Text> 
        <Text style={styles.text1}> 
            {extractedText} 
        </Text> 
        <StatusBar style="auto" /> 
    </SafeAreaView> 
); 
}

const styles = StyleSheet.create({ 
  container: { 
      display: "flex", 
      alignContent: "center", 
      alignItems: "center", 
      justifyContent: "space-evenly", 
      backgroundColor: "#fff", 
      height: "100%", 
  }, 
  heading: { 
      fontSize: 28, 
      fontWeight: "bold", 
      marginBottom: 10, 
      color: "green", 
      textAlign: "center", 
  }, 
  heading2: { 
      fontSize: 22, 
      fontWeight: "bold", 
      marginBottom: 10, 
      color: "black", 
      textAlign: "center", 
  }, 
  text1: { 
      fontSize: 16, 
      marginBottom: 10, 
      color: "black", 
      fontWeight: "bold", 
  }, 
});
