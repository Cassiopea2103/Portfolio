import { BrowserRouter , Routes , Route } from "react-router-dom";

import {
    Navbar , 
    Hero , 
    About , 
    Experience , 
    TechStack , 
    Works , 
    Testimonials , 
    Contact , 
    StarsCanvas
} from './components' ; 

const App = () => {
    return (
        <BrowserRouter>
            <div className='relative z-0 bg-primary '>

                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar/>
                    <Hero/>
                </div>

                <About/>
                <Experience/>
                <TechStack/>
                <Works/>
                <Testimonials/>
                <div className="relative z-0">
                    <Contact/>
                    <StarsCanvas/>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App ;