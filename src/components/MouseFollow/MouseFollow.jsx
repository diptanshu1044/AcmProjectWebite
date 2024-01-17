import React, { useState, useEffect } from 'react';

const MouseFollow = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            setTimeout(() => {
                setCirclePosition({ x: e.clientX, y: e.clientY });
            }, 20);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div style={{ zIndex: 10, pointerEvents: 'none', position: 'absolute', top: circlePosition.y - 10, left: circlePosition.x - 10, transition: 'all 0.1s ease' }}>
            <div
                style={{
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    border: '1px solid #d1d1d9',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default MouseFollow;
