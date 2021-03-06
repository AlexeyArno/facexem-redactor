import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box'
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

import ChooseModal from './redactor-instruments/choose-modal.js'

export default class Check extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	open: false
		    };
		  }

		  deleteElemente=()=>{
			var id = this.props.data.id
		  	this.props.delete(id)
		  }

		change=(type, data)=>{
			var id = this.props.data.id
			var data = data
		  	if(type =='size'){
		  		data = "half"
		  		if(this.props.data.size == 'half'){
		  			data= 'full'
		  		}
		  	}else{
		  		this.handle()
		  	}
		  	this.props.change(id, type, data)
		}

		  getBoxes=(content)=>{
		  	return(
		  		content.map(function(item, index){
		  			return(

		  				   <Checkbox
		  				   	key={index}
						    label={item.content}
						    checkedIcon={<ToggleCheckBox/>}
						    iconStyle={{fill: '#4285f4'}}
						    style={{ padding: 16, paddingLeft: 0}}
						    />

		  				)

		  		})


		  		)
		  }

		  handle=()=>{
			this.setState({
				open: !this.state.open
			})
		}

render(){
	var name = 'col-md-12'
		if(this.props.data.size == 'half'){
			name = 'col-md-6'
		}
	const closeStyle={
			position: 'absolute',
			top: '15px',
			right: '20px'
		}
	var dialog =  <Dialog
				          title="Изменение"
				          titleStyle={{color: 'rgb(33, 150, 243)'}}
				          modal={true}
				          open={this.state.open}
				          onRequestClose={this.handle}
				          autoScrollBodyContent={true}
				          autoDetectWindowHeight={true}
				         	bodyClassName='choose-modal'
				        	>
	        	 	<IconButton onClick={()=>this.handle()} style={closeStyle}>
	        	 		<Close color='rgb(33, 150, 243)'/>
	        	 	</IconButton>
	        	 	<ChooseModal data={this.props.data.content} save={this.change} id={this.props.data.id} answer={this.props.data.answer} type='check'/>
	        	</Dialog>

	var menu = <div className='pMenu'>
							<IconMenu
						      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
						      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
						      targetOrigin={{horizontal: 'left', vertical: 'top'}}
						    >	
						    	<MenuItem primaryText="Редактировать" onClick={()=>this.setState({open: true})}/>
						    	<MenuItem primaryText="Изменить позицию" rightIcon={<ArrowDropRight />}
						       menuItems={[
							        <MenuItem primaryText="Вверх"  onClick={()=>this.change('up')}/>,
							        <MenuItem primaryText="Вниз" onClick={()=>this.change('down')}/>,
							      ]} 
						      />
						    	<MenuItem primaryText="Изменить ширину" onClick={()=>this.change('size')}/>
						    	<MenuItem primaryText="Удалить" onClick={()=>this.deleteElemente()}/>
						    </IconMenu>
						</div>
	if(this.props.type == 'present'){
		dialog = <div/>
		menu =<div/>
	}
	var checks = this.getBoxes(this.props.data.content)
	return(<div className={name}>
				{dialog}
				{menu}
				{checks}
			</div>

		

		   )

}



}