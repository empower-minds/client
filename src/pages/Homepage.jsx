import { About } from "../sections/homepage/about";
import { Faq } from "../sections/homepage/faq";
import { Feature } from "../sections/homepage/feature";

export function Homepage() {
  return (
    <>
      <main>
        <About />
        <Feature />
        <Faq />
      </main>
    </>
  );
}
