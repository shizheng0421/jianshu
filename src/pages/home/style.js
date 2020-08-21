import styled from 'styled-components';

export const HomeWrapper=styled.div`
	width:960px;
	margin:0 auto;
	overflow:hidden;
`

export const HomeLeft=styled.div`
	margin-left:15px;
	padding-top:30px;
	width:625px;
	float:left;
	.banner-img{
		width:625px;
		height:270px;
	}
`

export const HomeRight=styled.div`
	width:280px;
	float:right;
`

export const TopicWrapper=styled.div`
	padding: 20px 0 10px 0;
	overflow:hidden;
	margin-left:-18px;
	border-bottom: 1px solid #dcdcdc;
`

export const TopicItem=styled.div`
	float:left;
	height:32px;
	line-height:32px;
	padding-right:10px;
	margin-left:18px;
	margin-bottom:10px;
	font-size:14px;
	color:#000;
	background:#f7f7f7;
	border: 1px solid #dcdcdc;
	border-radius:4px;
	.topic-pic{
		display:block;
		float:left;
		width:22px;
		height:32px;
		margin-right:10px;
	}

`

export const ListItem=styled.div`
	overflow:hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic{
		diaplay:block;
		width:125px;
		height:100px;
		float:right;
		border-radius:10px;		
		margin-top:25px;
	}
`

export const ListInfo=styled.div`
	width:500px;
	float:left;
	.title{
		line-height:27px;
		font-size:18px;
		font-weight:bold;
		color:#333;
	}
	.desc{
		font-size:13px;
		line-height:24px;
		color:#999;
	}
`

export const RecommandWrapper=styled.div`
	margin:30px 0;
	width:280px;
`

export const RecommandItem=styled.div`
	width:280px;
	height:50px;
	background:url(${(props)=>props.imgUrl});
	background-size:contain;
`

export const WriterWrapper=styled.div`
	margin: 0 auto;
	diaplay:block;
	width:278px;
	height:300px;
	border: 1px solid #dcdcdc;
	border-radius:3px;
	line-height:300px;
	text-align:center;
`

export const LoadMore=styled.div`
	width:100%;
	height:40px;
	background:#a5a5a5;
	line-height:40px;
	text-align:center;
	border-radius:20px;
	color:#fff;
	margin:30px 0;
	cursor:pointer;
`

export const BackTop=styled.div`
	position:fixed;
	right:30px;
	bottom:30px;
	width:60px;
	height:60px;
	line-height:60px;
	text-align:center;
	border:1px solid #ccc;
	cursor:pointer;
`