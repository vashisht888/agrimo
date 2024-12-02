import React from 'react'
import { Link } from 'react-router-dom'

function FrontHeader() {
  return (
    <div>
             <header class="site-header header-style-1">
			<div class="pbmit-header-overlay">
				<div class="container-fluid">
					<div class="pbmit-header-content d-flex justify-content-between align-items-center">
						<div class="pbmit-logo-menuarea d-flex justify-content-between align-items-center">
							<div class="site-branding">
								<h1 class="site-title">
									<a href="index.html">
										<img class="logo-img" src="assets/images/logo-white.svg" alt="Agrimo" />
									</a>
								</h1>
							</div>
							<div class="site-navigation">
								<nav class="main-menu navbar-expand-xl navbar-light">
									<div class="navbar-header"> 
										<button class="navbar-toggler" type="button">
											<i class="pbmit-base-icon-menu-1"></i>
										</button>
									</div>
									<div class="pbmit-mobile-menu-bg"></div>
									<div class="collapse navbar-collapse clearfix show" id="pbmit-menu">
										<div class="pbmit-menu-wrap">
											<span class="closepanel">
												<svg class="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="20.163" height="20.163" viewBox="0 0 26.163 26.163">
													<rect width="36" height="1" transform="translate(0.707) rotate(45)"></rect>
													<rect width="36" height="1" transform="translate(0 25.456) rotate(-45)"></rect>
												</svg>
											</span>
											<ul class="navigation clearfix">
												<li class="dropdown active"> 
													<Link to="/home">Home</Link>

												</li>
												<li class="dropdown "> 
													<Link to="/about">About us</Link>

												</li>
												{/* <li class="dropdown">
													<a href="#">Pages</a>
													<ul>
														<li><a href="about-us.html">About Us</a></li>
														<li><a href="our-history.html">Our History</a></li>
														<li><a href="our-team-member.html">Our Team Member</a></li>
														<li><a href="team-member-detail.html">Team Member Detail</a></li>
														<li><a href="faq.html">Faq</a></li>
													</ul>
												</li> */}
												<li class="dropdown">
													<Link to={'/products'}>products</Link> 
												</li>
												<li class="dropdown">
													<a href="#">Portfolio</a>
													<ul>
														<li class="dropdown">
															<a href="#">Masonry View</a>
															<ul>
																<li><a href="portfolio-masonry-col-2.html">Masonry Col 2</a></li>
																<li><a href="portfolio-masonry-col-3.html">Masonry Col 3</a></li>
																<li><a href="portfolio-masonry-col-4.html">Masonry Col 4</a></li>
															</ul>
														</li>
														<li class="dropdown">
															<a href="#">Grid View</a>
															<ul>
																<li><a href="portfolio-grid-col-2.html">Grid Col 2</a></li>
																<li><a href="portfolio-grid-col-3.html">Grid Col 3</a></li>
																<li><a href="portfolio-grid-col-4.html">Grid Col 4</a></li>
															</ul>
														</li>
														<li class="dropdown">
															<a href="#">Sortable View</a>
															<ul>
																<li><a href="portfolio-sortable-grid-col-2.html">Sortable Grid Col 2</a></li>
																<li><a href="portfolio-sortable-grid-col-3.html">Sortable Grid Col 3</a></li>
																<li><a href="portfolio-sortable-grid-col-4.html">Sortable Grid Col 4</a></li>
															</ul>
														</li>
														<li>
															<a href="portfolio-detail.html">Portfolio Detail</a>
														</li>
													</ul>
												</li>
												<li class="dropdown">
													<a href="#">Blog</a>
													<ul>
														<li class="dropdown">
															<a href="#">Grid View</a>
															<ul>
																<li><a href="blog-grid-col-3.html">Blog Grid Col 3</a></li>
																<li><a href="blog-grid-col-4.html">Blog Grid Col 4</a></li>
																<li><a href="blog-grid-wide.html">Blog Grid Wide</a></li>
															</ul>
														</li>
														<li class="dropdown">
															<a href="#">Sortable View</a>
															<ul>
																<li><a href="blog-sortable-col-3.html">Blog Sortable Col 3</a></li>
																<li><a href="blog-sortable-col-4.html">Blog Sortable Col 4</a></li>
																<li><a href="blog-sortable-wide.html">Blog Sortable Wide</a></li>
															</ul>
														</li>
														<li><a href="blog-classic.html">Blog Classic</a></li>
														<li><a href="blog-details.html">Blog Detail</a></li>
													</ul>
												</li>
												<li><a href="contact-us.html">Contact Us</a></li>
											</ul>
										</div>
									</div>
								</nav>
							</div>
						</div>
						<div class="pbmit-right-box d-flex align-items-center">
							<div class="pbmit-button-box">
								<div class="pbmit-header-button">
									<a href="tel:+1(212)-255-511">
										<span class="pbmit-header-button-text-1">Call us Now</span>			
										<span class="pbmit-header-button-text-2">+1(212)255-511</span>		
									</a>
								</div>
							</div>
							<div class="pbmit-header-search-btn">
								<a href="#" title="Search">
									<i class="pbmit-base-icon-search-1"></i>
								</a>
							</div>
							<div class="pbmit-button-box-second">
								<a class="pbmit-btn" href="contact-us.html">
									<span class="pbmit-button-text">Get In Touch</span>
									<span class="pbmit-button-icon-wrapper">
										<span class="pbmit-button-icon">
											<i class="pbmit-base-icon-black-arrow-1"></i>
										</span>
									</span>
								</a>
								<div class="pbmit-sticky-corner pbmit-top-left-corner">
									<svg width="30" height="30" viewBox="0 0 30 30" fill="" xmlns="http://www.w3.org/2000/svg">
									   <path d="M30 30V0C30 16 16 30 0 30H30Z" fill="red"></path>
									</svg>
								</div>
								<div class="pbmit-sticky-corner pbmit-bottom-right-corner">
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									   <path d="M30 30V0C30 16 16 30 0 30H30Z" fill="red"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            <div class="pbmit-slider-area pbmit-slider-one">
				<div class="swiper-slider" data-autoplay="true" data-loop="true" data-dots="true" data-arrows="false" data-columns="1" data-margin="0" data-effect="fade">
					<div class="swiper-wrapper"> 
						<div class="swiper-slide">
							<div class="pbmit-slider-item">
                            {/* <div className="pbmit-slider-bg" style="background-image: url(assets/images/banner-slider-img/demo01-slide-01.jpg);"></div> */}
                            <div className="pbmit-slider-bg" style={{ backgroundImage: 'url(assets/images/banner-slider-img/demo01-slide-01.jpg)' }}></div>

 								<div class="container">
									<div class="row g-0">
										<div class="col-md-9 col-lg-7">
											<div class="pbmit-slider-content">
												<h5 class="pbmit-sub-title transform-top transform-delay-1">Innovation Grows Here</h5>
												<h2 class="pbmit-title transform-left transform-delay-2">Always Greet <br /> Farmers For The</h2>
												<p class="pbmit-desc transform-left transform-delay-3">We all need a little space to grow. Give yourself the space you need to find your inner you.</p>
												<div class="pbmit-button transform-bottom transform-delay-4">
													<a class="pbmit-btn pbmit-btn-white" href="contact-us.html">
														<span class="pbmit-button-text">Contact Us </span>
														<span class="pbmit-button-icon-wrapper">
															<span class="pbmit-button-icon">
																<i class="pbmit-base-icon-black-arrow-1"></i>
															</span>
														</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> 
						<div class="swiper-slide">
							<div class="pbmit-slider-item">
								{/* <div class="pbmit-slider-bg" style="background-image: url(images/banner-slider-img/demo01-slide-02.jpg);"></div> */}
                                <div className="pbmit-slider-bg" style={{ backgroundImage: 'url(assets/images/banner-slider-img/demo01-slide-02.jpg)' }}></div>

								<div class="container">
									<div class="row g-0">
										<div class="col-md-9 col-lg-7">
											<div class="pbmit-slider-content">
												<h5 class="pbmit-sub-title transform-top transform-delay-1">Believe in Quality!</h5>
												<h2 class="pbmit-title transform-left transform-delay-2">Quality Trust: <br/> Direct to the Farm</h2>
												<p class="pbmit-desc transform-left transform-delay-3">We all need a little space to grow. Give yourself the space you need to find your inner you.</p>
												<div class="pbmit-button transform-bottom transform-delay-4">
													<a class="pbmit-btn pbmit-btn-white" href="contact-us.html">
														<span class="pbmit-button-text">Contact Us </span>
														<span class="pbmit-button-icon-wrapper">
															<span class="pbmit-button-icon">
																<i class="pbmit-base-icon-black-arrow-1"></i>
															</span>
														</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> 
						<div class="swiper-slide">
							<div class="pbmit-slider-item">
                            <div className="pbmit-slider-bg" style={{ backgroundImage: 'url(assets/images/banner-slider-img/demo01-slide-03.jpg)' }}></div>

								{/* <div class="pbmit-slider-bg" style="background-image: url(images/banner-slider-img/demo01-slide-03.jpg);"></div> */}
								<div class="container">
									<div class="row g-0">
										<div class="col-md-9 col-lg-7">
											<div class="pbmit-slider-content">
												<h5 class="pbmit-sub-title transform-top transform-delay-1">Freshness Is Important!</h5>
												<h2 class="pbmit-title transform-left transform-delay-2">Growing Veggies <br /> for Healthy Future</h2>
												<p class="pbmit-desc transform-left transform-delay-3">We all need a little space to grow. Give yourself the space you need to find your inner you.</p>
												<div class="pbmit-button transform-bottom transform-delay-4">
													<a class="pbmit-btn pbmit-btn-white" href="contact-us.html">
														<span class="pbmit-button-text">Contact Us </span>
														<span class="pbmit-button-icon-wrapper">
															<span class="pbmit-button-icon">
																<i class="pbmit-base-icon-black-arrow-1"></i>
															</span>
														</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </header>
    </div>
   
  )
}

export default FrontHeader