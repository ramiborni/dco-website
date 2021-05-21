import { motion } from "framer-motion";
import React from "react";
import HeadSpecified from "../public/HeadSpecified";

const MainLayout = ({children}) => {
    return (
        <>
         <HeadSpecified title={'Home'}></HeadSpecified>
        <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1,
                    transition: {
                        delay: .4
                    }
                }
            }}>
       
        <main className="p-0">
            {children}
        </main>
        </motion.div>
        </>
    );
}

export default MainLayout;