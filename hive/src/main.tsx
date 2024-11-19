import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import PremiumHero from './PremiumHero.tsx'

import LandingVariants from '../Archive/LandingVariants.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingVariants />
  </StrictMode>,
)
