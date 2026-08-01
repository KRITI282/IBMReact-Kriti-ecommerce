import axios from "axios"
const cloudName = "sbn5md37"
const upload_preset = "aashirwad"
const folder = "ecommerce"
const upload_url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`


class CloudinaryService {

    async upload(file) {
        console.log("Uploading")
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", upload_preset)
        formData.append("folder", folder)
        const result = await axios.post(upload_url,formData)
        console.log("Uploaded");
        
        return result.data.secure_url
    }

}



export default new CloudinaryService()

