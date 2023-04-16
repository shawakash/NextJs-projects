import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  console.log('I was in _app.js');
  return <Component {...pageProps} />
}


// every component passess from here before rendering
// to import global css ie css that would apply to all over App then import here
// for component level css import the css inside the component itself.
// for in Page css ie using <style></style> just write as <style jsx>{`css`}<style>
// for in page style in component1 to be used in component2 use: <style jsx global><style>
