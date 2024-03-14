import React, {useEffect, useRef, useState} from 'react';
import './styles.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: any) => {
    
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const elRef = useRef(null);

    const auraEffect = (e: any) => {
        if (elRef.current == null)
            return;
        // @ts-ignore
        setLeft(e.clientX - elRef.current.getBoundingClientRect().x);
        // @ts-ignore
        setTop(e.clientY - elRef.current.getBoundingClientRect().y);
    }

    useEffect(() => {
        document.body.addEventListener('mousemove', auraEffect)
    }, []);

    return (
        <div ref={elRef} className="frosted-glass"
            style={{ background: `radial-gradient(200px at top ${top}px left ${left}px, #3f3f3f7f 0%, #2b2b2b7f 100%)`, ...props.style}}>
            { props.children }
        </div>
    );
};