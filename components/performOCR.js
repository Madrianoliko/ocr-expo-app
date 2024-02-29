const performOCR = (file, setExtractedText) => { 
    let myHeaders = new Headers(); 
    myHeaders.append( 
        "apikey", 
        "FEmvQr5uj99ZUvk3essuYb6P5lLLBS20"  
    ); 
    myHeaders.append( 
        "Content-Type", 
        "multipart/form-data"
    ); 

    let raw = file; 
    let requestOptions = { 
        method: "POST", 
        redirect: "follow", 
        headers: myHeaders, 
        body: raw, 
    }; 

    fetch( 
        "https://api.apilayer.com/image_to_text/upload", 
        requestOptions 
    ) 
        .then((response) => response.json()) 
        .then((result) => { 
            setExtractedText(result["all_text"]);  
        }) 
        .catch((error) => console.log("error", error)); 
}; 
export { performOCR };