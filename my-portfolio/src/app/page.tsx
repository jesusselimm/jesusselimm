import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });

export default function Home() {
  return (
    <main className={`bg-background min-h-screen text-white px-8 py-12 ${inter.variable} ${spaceGrotesk.variable}`}>
    <nav className="flex justify-between items-center mb-20">
      <div className="text-4xl text-viking-300 font-bold" style={{fontFamily: 'var(--font-heading)'}}>jesusselimm</div>
              <ul className="flex space-x-10 text-lg text-white">
          <li className="hover:text-viking-500 hover:border-b-2 hover:border-viking-500 cursor-pointer transition-all duration-300 pb-1">Home</li>
          <li className="hover:text-viking-500 hover:border-b-2 hover:border-viking-500 cursor-pointer transition-all duration-300 pb-1">About</li>
          <li className="hover:text-viking-500 hover:border-b-2 hover:border-viking-500 cursor-pointer transition-all duration-300 pb-1">Projects</li>
          <li className="hover:text-viking-500 hover:border-b-2 hover:border-viking-500 cursor-pointer transition-all duration-300 pb-1">Contact</li>
        </ul>
    </nav>

    <section className="text-center">
      <h1 className="text-5xl mb-4 text-viking-200 font-bold" style={{fontFamily: 'var(--font-heading)'}}>
        Hey, I'm a Front-End Developer
      </h1>
      <p className="max-w-xl mx-auto text-viking-100 text-lg">
        I craft visually appealing, performant websites with a focus on user experience. Explore my work and let's build something meaningful.
      </p>
    </section>
  </main>
  );
}
