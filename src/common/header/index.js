import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {actionCreators} from './store';
import {HeaderWrapper,
	Logo,Nav,NavItem,NavSearch,
	Addition,Button,SearchWrapper,
	SearchInfo,SearchInfoTitle,
	SearchInfoSwitch,SearchInfoItem,
    SearchInfoList} from './style';

class Header extends Component {

	getListArea() {
		const {focused,list,page,totalPage,mouseIn,handeleMouseEnter,handeleMouseLeave,handleChangePage}=this.props;
		const newList=list.toJS();
		const pageList =[];

		if(newList.length){
			for (let i = ((page-1)*10); i <page*10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}


		if(focused || mouseIn) {
		return(
			<SearchInfo 
			onMouseEnter={handeleMouseEnter}
			onMouseLeave={handeleMouseLeave}
			>
				  	<SearchInfoTitle>
				  	 	Discover
				  	 	<SearchInfoSwitch 
				  	 	onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}
				  	 	> 
				  	 		<span ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe606;</span>
				  	 		Change 
				  	 	</SearchInfoSwitch>
				  	</SearchInfoTitle>
				  	<SearchInfoList>
				  		{
				  			pageList
				  		}
				  		
					</SearchInfoList>
				  </SearchInfo>
			)
	}else{
		return null;
	}
	}

	render() {
		const {focused,handleInputFocus,handleInputBlur,list,login,logout}=this.props;
		return(
	<HeaderWrapper>
			 <Link to='/'>
			   <Logo />
			 </Link>
			 <Nav>
			   <NavItem className='left active'> Home Page </NavItem>
			   <NavItem className='left'> Download </NavItem>
			   {
						login ? 
						<NavItem onClick={logout} className='right'> Sign Out </NavItem> : 
						<Link to='/login'><NavItem className='right'>Log In</NavItem></Link>
			   }
			   
			   <NavItem className='right'>
			       <span className="iconfont">&#xe636;</span>				  	   
			   </NavItem>
			   <SearchWrapper>
			      <CSSTransition
					in={focused}
					timeout={200}
					classNames="slide"
				  >
			            <NavSearch
							className={focused?'focused':''}
							onFocus={()=>handleInputFocus(list)}
							onBlur={handleInputBlur}
						></NavSearch>
				  </CSSTransition>
			      <span className={focused?'focused iconfont zoom':'iconfont zoom'}>
				    &#xe60a;
				  </span>
				  {this.getListArea()}
			   </SearchWrapper>
			 </Nav>
			 <Addition>
			   <Link to='/write'>
				   <Button className='writting'> 
				      <span className="iconfont">&#xe724;</span>	
				      Write Article
				   </Button>
			   </Link>
			   <Button className='reg'> Register </Button>			   
			 </Addition>
			</HeaderWrapper>
	);
	}
}

const mapStateToProps =(state)=>{
	return {
         focused:state.getIn(['header','focused']),
         list:state.getIn(['header','list']),
         page:state.getIn(['header','page']),
         totalPage:state.getIn(['header','totalPage']),
         mouseIn:state.getIn(['header','mouseIn']),
         login: state.getIn(['login', 'login'])
	}
}

const mapDispathToProps =(dispatch)=>{
	return {
		handleInputFocus(list){
			if(list.size===0){
				dispatch(actionCreators.getList());	
			}					
			dispatch(actionCreators.searchFocus());
		},

		handleInputBlur(){			
			dispatch(actionCreators.searchBlur());
		},

		handeleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},

		handeleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},

		handleChangePage(page,totalPage,spin){
			let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
			if(originAngle){
				originAngle=parseInt(originAngle,10);
			}else{
				originAngle=0;
			}
			spin.style.transform='rotate('+ (originAngle+360) +'deg)';

			if(page<totalPage){
				dispatch(actionCreators.changePage(page+1));
			}else{
				dispatch(actionCreators.changePage(1));
			}			
		},
		
		logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}
export default connect(mapStateToProps,mapDispathToProps)(Header);

