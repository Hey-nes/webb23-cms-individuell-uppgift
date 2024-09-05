import Image from "next/image";
import Link from "next/link";

//Uses config set global components for the layout
export default function Layout({ config, children }) {
  //Create at least a header and footer component
  //Use console.log to determine blok object structure if unsure...
  const logotype = config.content.logotype;
  return (
    <>
      <header className="topbar">
        <div className="container">
          <Link href="/">
            <Image
              src={logotype.filename}
              width={250}
              height={250}
              className="logotype"
            />
          </Link>
        </div>
        <nav className="navigation">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </footer>
    </>
  );
}
