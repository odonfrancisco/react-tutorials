import React from 'react'
import Education from './Education'
import Experience from './Experience'

export default function About() {
    return (
        <div>
            <div style={{width: '40%', float:"left"}}>
                <Education/>
            </div>
            <div style={{width: '60%', float:"right"}}>
                <Experience />
            </div>
        </div>
    )
}
