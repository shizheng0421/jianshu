import React,{PureComponent} from 'react';
import {RecommandWrapper,RecommandItem} from '../style';
import imgURL1 from './one.png';
import imgURL2 from './two.png';
import imgURL3 from './three.png';
import imgURL4 from './four.png';

class Recommand extends PureComponent {
	render() {
		return (
			<RecommandWrapper>
				<RecommandItem imgUrl={imgURL1}/>
				<RecommandItem imgUrl={imgURL2}/>
				<RecommandItem imgUrl={imgURL3}/>
				<RecommandItem imgUrl={imgURL4}/>
			</RecommandWrapper>
		)
	}
}

export default Recommand;
