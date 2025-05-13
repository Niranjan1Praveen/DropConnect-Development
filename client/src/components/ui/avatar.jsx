import React from 'react';
import { twMerge } from 'tailwind-merge';

function Avatar({children, className}) {
    return (
        <div className={twMerge("size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900", className)}>
            {children}
        </div>
    );
}

export default Avatar;