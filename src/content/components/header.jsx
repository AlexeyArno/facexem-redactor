import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import Create from './header/create.js'



export default class Header extends Component{

	  constructor(props) {
			    super(props);
			    this.state = {
			      value: 3,
			      create: false
			    };
			  }

			chnageCreate=()=>{
				this.setState({
					create: !this.state.create
				})
			}

			create=(type)=>{
				this.setState({
					create: !this.state.create
				})
				this.props.create(type)
			}



			handleChange = (event, index, value) => this.setState({value});

render(){
	const closeStyle={
			position: 'absolute',
			top: '15px',
			right: '20px'
		}
	const titleStyle ={
		display: 'inline-block',
		verticalAlign: "sub"
	}

	const iconStyleRight ={
		display: 'inline-block',
		float: 'right'
	}
	const iconStyleLeft={
		    verticalAlign: "top",
		    marginTop: 9,
		    display: 'inline-block'	}

	var element = <IconButton onClick={()=>this.chnageCreate()}>
						<ContentAdd/>
					</IconButton>
	var element_left =  <IconMenu
					    iconButtonElement={<IconButton ><NavigationMenu color='#fff' /></IconButton>}
					    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
					    targetOrigin={{horizontal: 'left', vertical: 'top'}}
					    className='helllos'
					  >
			    </IconMenu>
	
	return( 
	 <div>
		 <AppBar
		    title="Редактор"
		    style={{background: '#4285f4', position: 'fixed', top: 0}}
		    titleStyle={titleStyle}
		    iconElementLeft={element_left}
		    iconElementRight={element}
		    iconStyleLeft={iconStyleLeft}
		    iconStyleRight={iconStyleRight}
		    zDepth={2}
		  />
		   <Dialog
          title="Создание"
          titleStyle={{color: 'rgb(33, 150, 243)'}}
          modal={false}
          open={this.state.create}
          autoScrollBodyContent={true}
          onRequestClose={this.chnageCreate}
        	>
        	 	<IconButton onClick={()=>this.chnageCreate()} style={closeStyle}>
        	 		<Close color='rgb(33, 150, 243)'/>
        	 	</IconButton>
          		<Create create={this.create}/>
        	</Dialog>
	  </div>

					    // <MenuItem primaryText="Сохранить" onClick={()=>this.props.save()}/>
		

		   )

}



}