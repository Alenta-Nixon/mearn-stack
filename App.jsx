import React from "react";
import './App.css';

function App() {
  return (
    <>
      <header>
        <div>
          <h1>welcome</h1>
          <div className="buttons">
            <button className="button">Login</button>
            <button className="button">Signup</button>
          </div>
        </div>
      </header>
      <nav className="navbar">
        <button className="nav-button">Home</button>
        <button className="nav-button">Product</button>
        <button className="nav-button">Shopping</button>
        <button className="nav-button">Contact</button>
        <button className="nav-button">Blog</button>
      </nav>

      <section className="section-1" style={{ border: "solid 2px" }}>
        <h2>Gallery of Nature</h2>
        <img src="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=is&k=20&c=DvkmHcxYGNsmfz2a6jF8BZ59h2RF1xXFx_5_04kzplU=" alt="Nature Image 1" />
        <img src="https://media.istockphoto.com/id/511593366/photo/tropical-jungle.jpg?s=612x612&w=0&k=20&c=PCkxPcz5srdnYoUXiSOZWuGeq0kAe2iH3Xkm4mswdHA=" alt="Nature Image 2" />
        <img src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=" alt="Nature Image 3" />
        <p>Explore the beauty of nature through these breathtaking images that capture the essence of the great outdoors.</p>
      </section>

      <section className="section-2" style={{ border: "dotted 3px" }}>
        <h2>Modern Architecture</h2>
        <img src="https://media.istockphoto.com/id/1440711628/photo/copenhagen-denmark.jpg?s=612x612&w=is&k=20&c=KtJi1uPfjsf8dtjsI-Ar3N5o6CAZ53yptnnGifhbals=" alt="Architecture Image 1" />
        <img src="https://media.istockphoto.com/id/155440607/photo/modern-office-architecture.jpg?s=612x612&w=is&k=20&c=M-ByHRXKjBkyYv94AY1WEi9BIL9CZ8B1xQDmtjyCNg8=" alt="Architecture Image 2" />
        <img src="https://media.istockphoto.com/id/533437662/photo/abstract-architectural-pattern.jpg?s=612x612&w=is&k=20&c=TZSIBR4eyI4649Zqp_sNIEp8YZM9M5cUsaTpGwUFCu8=" alt="Architecture Image 3" />
        <p>Discover the marvels of modern architecture and the ingenuity behind these innovative structures.</p>
      </section>

      <section className="section-3" style={{ border: "dashed 4px" }}>
        <h2>Video and Audio Zone</h2>
        <video controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <audio controls>
          <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
        <p>Immerse yourself in multimedia content, featuring videos and audio tracks to engage your senses.</p>
      </section>

      <section className="section-4" style={{ border: "double 5px" }}>
        <h2>Art and Creativity</h2>
        <img src="https://media.istockphoto.com/id/533437662/photo/abstract-architectural-pattern.jpg?s=612x612&w=is&k=20&c=TZSIBR4eyI4649Zqp_sNIEp8YZM9M5cUsaTpGwUFCu8=" alt="Art Image 1" />
        <img src="https://media.istockphoto.com/id/1410800162/vector/mind-spiritual-human-body-head-flower-bloom-love-happy-positive-mental-health-imagine.jpg?s=612x612&w=0&k=20&c=I8QEli1flr8n6cy7NFm0s5enph31E8v67AIB1HwoOBU=" alt="Art Image 2" />
        <img src="https://media.istockphoto.com/id/1093160982/vector/flowers-and-hearts-collage.jpg?s=612x612&w=is&k=20&c=mtpmRrVVHBWFeSbepHSMo_TDiQ18QqIpMieaD1eXhk8=" alt="Art Image 3" />
        <p>Experience the world of art and creativity with these stunning and thought-provoking pieces.</p>
      </section>

      <section className="section-5" style={{ border: "groove 6px" }}>
        <h2>Technology Highlights</h2>
        <img src="https://img.freepik.com/premium-photo/innovative-light-bulb-with-modern-technology-overlay-highlighting-data-analytics-innovation_996993-68915.jpg" alt="Technology Image 1" />
        <img src="https://static.vecteezy.com/system/resources/thumbnails/052/073/388/small/a-closeup-of-a-human-eye-on-a-green-tech-background-symbolizes-cyber-security-and-innovation-highlighting-the-need-for-vigilance-in-a-rapidly-changing-landscape-full-of-potential-threats-photo.jpg" alt="Technology Image 2" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAmqTSCi3-crbevG90WUZ-camGyXOzEXF6Q&s" alt="Technology Image 3" />
        <p>Stay ahead with the latest advancements and innovations in the tech industry.</p>
      </section>

      <section className="section-6" style={{ border: "inset 7px" }}>
        <h2>Travel Destinations</h2>
        <img src="https://hblimg.mmtcdn.com/content/hubble/img/bali/mmt/destination/m_bali_l_393_629.jpg" alt="Travel Image 1" />
        <img src="https://mapmygenome.in/cdn/shop/articles/How_to_Stay_Healthy_While_Traveling_-_Tips_and_Insights_for_a_Safe_Journey.webp?v=1718688910" alt="Travel Image 2" />
        <img src="https://t4.ftcdn.net/jpg/04/08/81/09/360_F_408810925_IG49PMSfC7ZolH4ZLYNZTVuy8YN0BhGK.jpg" alt="Travel Image 3" />
        <p>Embark on a journey to explore the most mesmerizing travel destinations around the globe.</p>
      </section>

      <section className="section-7" style={{ border: "outset 8px" }}>
        <h2>Food and Cuisine</h2>
        <div className="card">
          <img src="https://media.istockphoto.com/id/1369557293/photo/fusilli-pasta-with-cherry-tomatoes-and-mozzarella-cheese.jpg?s=612x612&w=is&k=20&c=Q_rI7_D7-hxyqqv6pdjsOLimB0dUYBFQk94yHFY-S2c=" alt="Food Image 1" />
          <p>Delicious gourmet dish with exquisite flavors.</p>
        </div>
        <div className="card">
          <img src="https://media.istockphoto.com/id/180868446/photo/pasta-with-fresh-tomatoes-and-basil.jpg?s=612x612&w=is&k=20&c=Dw1YSsrozicI4W8VSghnY7XIE4-BPKyzkaycNX_ErmU=" alt="Food Image 2" />
          <p>Traditional recipe showcasing authentic tastes.</p>
        </div>
        <div className="card">
          <img src="https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=612x612&w=is&k=20&c=ZlfL1M5DBB1V4WtWt_cFBTcMpUvSSCTzwZODCWI-9IE=" alt="Food Image 3" />
          <p>Sweet and savory treats to satisfy your cravings.</p>
        </div>
      </section>

      <section className="section-8" style={{ border: "ridge 9px" }}>
        <h2>Sports Highlights</h2>
        <img src="https://media.istockphoto.com/id/465383082/photo/female-swimmer-at-the-swimming-pool.jpg?s=612x612&w=is&k=20&c=jiIntBbgNEJQBHTRahcfibggGKGCJ4XSHZ4S99TWuEI=" alt="Sports Image 1" />
        <img src="https://media.istockphoto.com/id/1399212293/photo/physical-education-class-and-sport-training-in-high-school.jpg?s=612x612&w=is&k=20&c=SGKPylSkvjhy473e73vaYpn1Z3SYCg7YNmN7sahjw08=" alt="Sports Image 2" />
        <img src="https://media.istockphoto.com/id/516449022/photo/lady-with-kayak.jpg?s=612x612&w=is&k=20&c=dgJNVmv7U9ZzUUewoCZv2sktxLEfmcedshXf2tBWQR4=" alt="Sports Image 3" />
        <p>Relive the most exciting moments from the world of sports.</p>
      </section>

      <section className="section-9" style={{ border: "none" }}>
        <h2>Photography</h2>
        <div className="card">
          <img src="https://media.istockphoto.com/id/1161727825/photo/cold-day-at-the-beach.jpg?s=612x612&w=is&k=20&c=iGUQ2Bwzyd-TcVEbW9U99sbTUb5V7ViQqq25FyxcKZQ=" alt="Photo Image 1" />
          <p>Capturing the magic of fleeting moments.</p>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Photo Image 2" />
          <p>Every picture tells a unique story.</p>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/2953811/pexels-photo-2953811.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Photo Image 3" />
          <p>A glimpse into the world through the lens.</p>
        </div>
      </section>

      <section className="section-10" style={{ border: "hidden" }}>
        <h2>Science and Research</h2>
        <img src="https://t4.ftcdn.net/jpg/00/53/64/49/360_F_53644926_0mvUCIxCCTvIa7BAIFuUa3xsaNA9lbeb.jpg" alt="Science Image 1" />
        <img src="https://www.sciencephoto.com/_generated/custom/312/b0c03138.jpg" alt="Science Image 2" />
        <img src="https://as2.ftcdn.net/jpg/05/79/64/29/1000_F_579642932_z3CUhYjjYWcGIWJtO30pMyYVFpDyoa1W.jpg" alt="Science Image 3" />
        <p>Dive into groundbreaking discoveries and innovations shaping our future.</p>
      </section>

      <footer className="footer">
        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Let Us Help You</h3>
          <ul>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
