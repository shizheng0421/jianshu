import React,{PureComponent} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommand from './components/Recommand';
import Writer from './components/Writer';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style';
import banner from 'C:/Users/WU/Desktop/jianshu/src/pages/home/How.jpg';
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Home extends PureComponent {

	handleScrollTop() {
		window.scrollTo(0,0);
	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' src={banner} />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommand />
					
				</HomeRight>
				 {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>Back</BackTop>:null}
				
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

	componentsWillUnmount() {
		window.removeEventListener('scroll',this.props.changeScrollTopShow);
	}

	bindEvents() {
		window.addEventListener('scroll',this.props.changeScrollTopShow);
	}
}

const mapState=(state)=>({
	showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch=(dispatch)=>({
	changeHomeData() {
		const action=actionCreators.getHomeInfo();
		dispatch(action);
	},

	changeScrollTopShow() {
		if(document.documentElement.scrollTop>400) {
			const action=actionCreators.toggleTopShow(true);
		    dispatch(action);
		}else{
			const action=actionCreators.toggleTopShow(false);
		    dispatch(action);
		}
	}
});

export default connect(mapState,mapDispatch)(Home);
