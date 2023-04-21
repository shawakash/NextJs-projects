import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  console.log('I was in _app.js');
  return (
    <>
      <Navbar />
      <main className={`flex min-h-screen flex-col items-center justify-between py-4 gap-y-7 sm:px-24 sm:py-10`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}


// every component passess from here before rendering
// to import global css ie css that would apply to all over App then import here
// for component level css import the css inside the component itself.
// for in Page css ie using <style></style> just write as <style jsx>{`css`}<style>
// for in page style in component1 to be used in component2 use: <style jsx global><style>
