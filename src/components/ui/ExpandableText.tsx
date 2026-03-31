import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableTextProps {
    text: string;
    maxChars?: number;
    className?: string;
    buttonClassName?: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
    text,
    maxChars = 100,
    className = "",
    buttonClassName = ""
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const shouldTruncate = text.length > maxChars;

    if (!shouldTruncate) {
        return <p className={className}>{text}</p>;
    }

    const displayedText = isExpanded ? text : `${text.substring(0, maxChars)}...`;

    return (
        <div className="flex flex-col items-start w-full">
            <div className={className}>
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={isExpanded ? 'expanded' : 'collapsed'}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        {displayedText}
                    </motion.div>
                </AnimatePresence>
            </div>
            <button
                onClick={(e) => {
                    e.preventDefault(); // Prevent link navigation if inside a Link component
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                }}
                className={`mt-2 flex items-center gap-1 text-xs font-bold text-[#005e2a] hover:text-[#004d22] transition-colors uppercase tracking-wider ${buttonClassName}`}
            >
                {isExpanded ? (
                    <>
                        Read Less <ChevronUp size={14} />
                    </>
                ) : (
                    <>
                        Read More <ChevronDown size={14} />
                    </>
                )}
            </button>
        </div>
    );
};

export default ExpandableText;
