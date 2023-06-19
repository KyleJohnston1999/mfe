import React, { useRef, useEffect } from 'react';

export default (mount) => {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current);
    });
    

    return <div ref={ref} />
};