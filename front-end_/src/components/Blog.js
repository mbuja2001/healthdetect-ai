// components/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AIGeneratedImageDetector.css'; // Import CSS file for component styling

const Blog = () => {
  return (
    <div className="blog">
        <h2>Featured Articles</h2>
        <section className='article'>
            <h3>
              <Link to="/data-privacy" >Upholding Data Privacy: A Core Belief of Web-Detective.ai</Link>
            </h3>
            <p><em>April 12, 2024</em></p>
            <p>An exploration of Web-Detective.ai's commitment to data privacy and its significance in the digital landscape.</p>
      </section>

      <section className='article'>
            <h3>
              <Link to="/future-of-search" classname='article'>The Future of Internet Search</Link>
            </h3>
            <p><em>April 18, 2024</em></p>
            <p>An exploration of the evolving landscape of internet search and Web-Detective.ai's role.</p>
         </section>
         <section className='article'>
            <h3>
              <Link to="/web3-and-blockchain">Web-Detective.ai in the Web3 Space and Blockchain</Link>
            </h3>
            <p><em>April 22, 2024</em></p>
            <p>An exploration of Web-Detective.ai's integration with blockchain technology and its implications.</p>
            </section>
            <section className='article'>
            <h3>
              <Link to="/addressing-challenges">Addressing the Challenges of the Internet with Web-Detective.ai</Link>
            </h3>
            <p><em>April 17, 2024</em></p>
            <p>An exploration of the critical challenges facing the online landscape and how Web-Detective.ai is positioned to address them.</p>
          </section>
          <section className='article'>
            <h3>
              <Link to="/search-engine-market-research">Navigating the Search Engine Market: Insights from Market Research</Link>
            </h3>
            <p><em>April 30, 2024</em></p>
            <p>Discover insights from recent market research on the search engine marketplace and how it informs digital strategies.</p>
            </section>
            <section className="footsection">
        <p>&copy; 2024 Web-Detective.ai. All rights reserved.</p>
        <div className="social-media">
        
        <ul>
          <li><a href="https://web.facebook.com/profile.php?id=61559479599786&sk=about">Facebook</a></li>
          <li><a href="https://www.instagram.com/webdetective.ai/">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/web-detectiveai-a59917309/">LinkedIn</a></li>
          <li><a href="https://tiktok.com/@webdetective_ai">TikTok</a></li>
          <li><a href="https://www.youtube.com/channel/UC_aWUSSenznFi6JcSozhD_Q">YouTube</a></li>
          <li><a href="https://discord.com/channels/1239916904429129768/1239916904429129771">Discord</a></li>
        </ul>
        </div>
        </section>
    </div>
  );
};

export default Blog;

