import React, {useState, useEffect} from 'react';
import { useMoralis } from "react-moralis";
import { motion } from 'framer-motion';


const UploadForm = ({setSelectedImg}) => {
    const [upload, setUpload] = useState(null);
    const [error, setError] = useState(null);
    const [gridImage, setGridImage] = useState ([]);

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout, Moralis } = useMoralis();
   
    useEffect(() => {
    if (isAuthenticated) {
    
 }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  , [isAuthenticated]);

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
    }

  const getFiles = async (e) => {
     const data = e.target.files[0];
  

         // upload Image
     const uploadImage = async () => {
         const file = new Moralis.File(data.name, data)
    await file.saveIPFS();
    console.log(file.ipfs(), file.hash());
    return file.ipfs();
    
      }

      if(data) {
       setUpload(data);
       setError('');
      }
      else {
          setUpload(null); 
          setError('please select a file');
      }

      const unique =  Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
     
   // image gotten from upload image is assigned to image variable
    const imageUrl = await uploadImage();

    const list = {
      id: imageUrl,
      image: imageUrl
    }
 
      setGridImage(list);

   }
     
   
   return <>
   <div className='login'>
      <h1>web3Gram</h1>
      <div>
         <button onClick={login}>Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
      </div>
    </div>
    
     <div className="title">
      <h2>Your Pictures</h2>
      <p>save your favourite memories on the blockchain.</p>
    </div>
     <form>
       <label>
            <input type="file" onChange={getFiles} placeholder= 'please upload a file'/>
            <span>+</span>
       </label>
        <div className="output">
           
            {error && <div className = 'error'> {error} </div>}
        </div>
        
    </form>
    {setSelectedImg && 
    <div className="img-grid">
     {gridImage && Object.values(gridImage).map((list) =>(
        <motion.div className="img-wrap" key= {gridImage.id}
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedImg(gridImage.image)}
        >
          <motion.img src={gridImage.image} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div> 
      ))}
    </div>
    }
    
      
    </>
}

export default UploadForm;


    
  
    

