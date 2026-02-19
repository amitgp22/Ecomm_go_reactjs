import React from 'react'
import { lazy, Suspense } from 'react';

const About=lazy(()=>import('./About'))

export default function App() {
  return (
    <div>
            <h1>App Component</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <About />
            </Suspense>
    </div>
  )
}

