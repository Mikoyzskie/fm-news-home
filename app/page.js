import Image from 'next/image'

export default function Home() {
  return (
    <main className="main-container min-h-screen">
      <section className="section-wrapper">
        <div className="featured-container">
          <Image
            className=""
            src="/image-web-3-desktop.jpg"
            alt="Web 3 Desktop"
            width={9999}
            height={9999}
            priority
          />
        </div>
        <div className="latest-container">
          <h2>New</h2>
        </div>
        <div className="featured-title"><h2>The Bright Future of Web 3.0?</h2></div>
        <div className="featured-details">
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <button className="featured-link">READ MORE</button>
        </div>
        <div className="blog1 featured-blogs">
          <Image
            className=""
            src="/image-retro-pcs.jpg"
            alt="Web 3 Desktop"
            width={100}
            height={100}
            priority
          />
          <div className="blog-details">
            <h3 className="blog-id">03</h3>
            <span className="blog-title">The Growth of Gaming</span>
            <p className="blog-description">How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
        <div className="blog2 featured-blogs">
          <Image
            className=""
            src="/image-top-laptops.jpg"
            alt="Web 3 Desktop"
            width={100}
            height={100}
            priority
          />
          <div className="blog-details">
            <h3 className="blog-id">03</h3>
            <span className="blog-title">The Growth of Gaming</span>
            <p className="blog-description">How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
        <div className="blog3 featured-blogs">
          <Image
            className=""
            src="/image-gaming-growth.jpg"
            alt="Web 3 Desktop"
            width={100}
            height={100}
            priority
          />
          <div className="blog-details">
            <h3 className="blog-id">03</h3>
            <span className="blog-title">The Growth of Gaming</span>
            <p className="blog-description">How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
