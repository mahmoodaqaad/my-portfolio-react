import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    const words = ["Innovation", "Design", "Performance", "Success"];

    return (
        <AnimatePresence>
            {loading && (
                <motion.div 
                    className="preloader"
                    exit={{ 
                        opacity: 0,
                        transition: { duration: 0.5 }
                    }}
                >
                    <div className="preloader-inner">
                        <motion.div 
                            className="preloader-logo-wrapper"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="preloader-logo">MA<span>.</span></h1>
                        </motion.div>
                        
                        <div className="loading-bar-wrapper">
                            <motion.div 
                                className="loading-bar-progress"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="loading-words">
                            {words.map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.3), duration: 0.5 }}
                                    className="loading-word"
                                >
                                    {word} {i !== words.length - 1 && "•"} 
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


export default Preloader;
