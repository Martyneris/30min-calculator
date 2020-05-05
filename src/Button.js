import React from 'react'

export const Button = (value, width, onClick) => {
    return (
        <div
            style={{ width: width, border: '1px solid grey', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            onClick={onClick}
        >
            {value}
        </div>
    )
}