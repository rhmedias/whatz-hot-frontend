import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Featured extends Component {
    
    render() { 
        return ( <div>
            <div className="carousel-card" id="recommended-div">
					<h4>Featured Services</h4>

					<OwlCarousel className="owl-theme" loop margin={-475} dots={false} autoplay nav>
						<div class="reco">
							<h4>1</h4>
						</div>
						<div class="reco">
							<h4>2</h4>
						</div>
						<div class="reco">
							<h4>3</h4>
						</div>
						<div class="reco">
							<h4>4</h4>
						</div>
						<div class="reco">
							<h4>5</h4>
						</div>
						<div class="reco">
							<h4>6</h4>
						</div>
						<div class="reco">
							<h4>7</h4>
						</div>
						<div class="reco">
							<h4>8</h4>
						</div>
						<div class="reco">
							<h4>9</h4>
						</div>
						<div class="reco">
							<h4>10</h4>
						</div>
						<div class="reco">
							<h4>11</h4>
						</div>
						<div class="reco">
							<h4>12</h4>
						</div>
					</OwlCarousel>
				</div>
        </div> );
    }
}
 
export default Featured;