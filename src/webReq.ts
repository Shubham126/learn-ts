import axios from "axios";

axios.get('https://example.com/data')
.then(response=>{
    console.log(response.data);
})