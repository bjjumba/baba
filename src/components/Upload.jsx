import React,{useState} from 'react'
import {bucket} from '../assets/firebaseConfig'
import {ref, uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinearProgress from '@mui/material/LinearProgress';

const Upload = () => {
   
  const[images,setImages]=useState(null)
  const [progresspercent, setProgresspercent] = useState(0);
  
  const uploadFile=()=>{
    if(images == null)return;
    const imageRef=ref(bucket,`images/${images.name}`)
    const uploadTask=uploadBytesResumable(imageRef,images)
  

    uploadTask.on("state_changed",
  (snapshot) => {
    const progress =
      Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    setProgresspercent(progress);
  },
  (error) => {
    alert(error);
  },
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      toast.success("Upload Successful !", {
        position: toast.POSITION.TOP_CENTER
      });

      setProgresspercent(0)
    });
  }
);

}

  return (
    <div className="magic">
      <ToastContainer/>
      {progresspercent &&<LinearProgress variant="determinate" value={progresspercent} />}
        {/* [{progresspercent}%] */}
        <input type="file"
         onChange={(event)=>{setImages(event.target.files[0])}}
        />
     
        <button onClick={uploadFile}>Upload</button>
    </div>
  )
}

export default Upload