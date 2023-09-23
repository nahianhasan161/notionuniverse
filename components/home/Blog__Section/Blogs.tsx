import Image from 'next/image';
import React from 'react'
import img1 from "@/images/b1.png"
import img2 from "@/images/b2.png"
import img3 from "@/images/b3.png"

const Blogs = () => {
    const blogPosts = [
        {
          id: 1,
          title: "Personal Loans Fuel Bankruptcy Cases in Malaysia",
          date: "May 26, 2023",
          category: "Bankruptcy",
          excerpt: "Bankruptcy cases in Malaysia have seen a concerning rise, and personal loans have emerged as the leading cause...",
          link: "personal-loan.html",
          img: img1
        },
        {
          id: 2,
          title: "Enhancing Lives: Malaysia's PWD Support Programs",
          date: "January 5, 2023",
          category: "TPD Claims",
          excerpt: "In Malaysia, an estimated 4.86 million persons with disabilities (PWD) exist, but shockingly...",
          link: "enhancing-lives.html",
          img:img2
        },
        {
            id: 3,
            title: "Enhancing Lives: Malaysia's PWD Support Programs",
            date: "January 5, 2023",
            category: "TPD Claims",
            excerpt: "In Malaysia, an estimated 4.86 million persons with disabilities (PWD) exist, but shockingly...",
            link: "enhancing-lives.html",
            img:img3
          },
        // Add more blog posts here...
      ];
  return (
    <div className="news-slider posts-grid  grid grid-cols-3" data-show="2" data-auto="true">
        {blogPosts.map((post) => (
        <div key={post.id} className='w-[400px]'>
          <article className="news-item content-area">
            <div className="inner-item radius-top">
              <div className="thumb-image">
                <a href={post.link}>
                  <Image src={post?.img} width={100} alt=''  />
                </a>
              </div>
              <div className="inner-post radius-bottom">
                <div className="entry-meta">
                  <span className="posted-on">
                    <time className="entry-date">{post.date}</time>
                  </span>
                  <span className="posted-in">
                    <a href="#">{post.category}</a>
                  </span>
                </div>
                <h4 className="entry-title">
                  <a href={post.link}>{post.title}</a>
                </h4>
                <p>{post.excerpt}</p>
                <a className="post-link" href={post.link}>Read more</a>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  )
}

export default Blogs