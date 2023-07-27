import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '..';

const Footer = () => {
	return (
		<div className='App-footer'>
			<p>
				Copyright {getFullYear()} - {getFooterCopy(true)}
			</p>
		</div>
	);
};

export default Footer;