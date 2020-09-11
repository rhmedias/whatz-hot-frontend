import React, { Component } from 'react'
import { Text } from '@blueprintjs/core'
import girl from './../../assets/images/hero-girl.png'

class HeroBox extends Component {
    
    render() { 
        return ( <div>
            <div className="herobox">
                <Text className="hero-text">The Best Review</Text>
                <Text className="hero-text-">in Every Business</Text>
                <div className="searchbox">
					<div class="search-container">
						<form action="/action_page.php">
							<input type="text" placeholder="Search products, business and services" name="search" />
							
						</form>
						
					</div>
                    <div className='hero-girl'>
                        <img src={girl} alt=""/>
                    </div>
					
				</div>
                
            </div>
        </div> 
        );
    }
}
 
export default HeroBox;