import { Button } from '@chakra-ui/react';
import React from 'react';


function Shedule() {

    const handleShedule = () => {
        const phoneNumber = '5511974810911'; 

        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
    }

    return (
        <div>
            <Button
                color={"white"}
                bgColor={"#d8b192"}
                width={"180px"}
                height={"50px"}
                borderRadius={"50px"}
            
                onClick={handleShedule}>Agendar
                
			</Button>
        </div >
  );
}

export default Shedule;
