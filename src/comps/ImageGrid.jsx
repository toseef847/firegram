import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {
   const { docs } = useFirestore('images');
   
   return (
      <div className="img-grid">
         {docs && docs.map( img => (
            <motion.div className="img-wrap"
            layout
            whileHover={{opacity: 1}}
            onClick={() => setSelectedImg(img.url)} key={img.id}>
               <motion.img src={img.url} alt="gallery pic"
               initial={{opacity: 0}}
               animate={{opacity: 1}}
               transition={{delay: 1}}/>
            </motion.div>
         ))}
      </div>
   );
}

export default ImageGrid;