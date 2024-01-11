import React from 'react'
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';
import { Route, Navigate, Routes } from 'react-router-dom';

function Project() {
  return (
    <div>
      <HeroImg2 heading="PROJECTS" text="Discover a collection of my passionately crafted creative projects." />
      <Work />
      <Routes>
        <Route path="*" element={<Navigate to="/project/"/>} />
      </Routes>
    </div>
  )
}

export default Project