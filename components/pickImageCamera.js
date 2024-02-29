import * as ImagePicker from "expo-image-picker"; 
import { performOCR } from "./performOCR";
const pickImageCamera = async (setImage, setExtractedText) => { 
    let result = await ImagePicker.launchCameraAsync({ 
        mediaTypes: ImagePicker.MediaTypeOptions.Images, 
        // allowsEditing: true, 
        base64: true, 
        // allowsMultipleSelection: false, 
    }); 
    if (!result.canceled) { 
        performOCR(result.assets[0], setExtractedText);  
        setImage(result.assets[0].uri); 
    } 
};
export { pickImageCamera } ;