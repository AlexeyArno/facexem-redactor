import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';


// SETTINGS 


export default class ParagraphWorkWindow extends Component{
	constructor(props) {
		    super(props);
		    this.state = {
		    	value: '',
		    	open: false
		    };
		    this.handleChange = this.handleChange.bind(this);
		  }


		  handleToogled=()=>{
		  	this.setState({
		  		open: true
		  	})
		  }


		  deleteElemente=(id)=>{
		  	this.props.delete(id)
		  }

		  change=(type)=>{
		  	var id = this.props.data.id
		  	var data = ''
		  	if(type == 'size'){
		  		data = "half"
		  		if(this.props.data.size == 'half'){
		  			data = 'full'
		  		}
		  	}
		  	this.props.change(id, type, data)
		  }


		  componentDidMount=()=>{
		  		var element = document.getElementById('content'+this.props.data.id)
		  		element.style.height = "5px";
    			element.style.height = (element.scrollHeight)+ 25 +"px";
		  }




		    handleChange(event, id) {
		    	var element = document.getElementById('content'+this.props.data.id)
			    this.props.change(this.props.data.id, 'content', event.target.value)
			    element.style.height = "5px";
    			element.style.height = (element.scrollHeight)+"px";
			  }


 

render(){	
				var content = this.props.data.content
				var opacity = 1
				var id = 'content'+this.props.data.id
				var buttons ={
					margin: 5
				}

			var elements = <div className='pMenu'>
							<IconMenu
						      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
						      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
						      targetOrigin={{horizontal: 'left', vertical: 'top'}}
						    >
						      <MenuItem primaryText="Изменить ширину" onClick={()=>this.change( 'size')}/>
						      <MenuItem primaryText="Изменить позицию" rightIcon={<ArrowDropRight />}
						       menuItems={[
							        <MenuItem primaryText="Вверх"  onClick={()=>this.change('up')}/>,
							        <MenuItem primaryText="Вниз" onClick={()=>this.change('down')}/>,
							      ]} 
						      />
						      <MenuItem primaryText="Удалить" onClick={()=>this.deleteElemente( this.props.data.id)}/>
						    </IconMenu>
						</div>

			var name = 'col-md-12'
			if(this.props.data.size == 'half'){
				name = 'col-md-6'
			}
			if(this.props.type == 'present'){
				elements = <div/>
				return(
					<div style={{paddingRight: "20px"}} className={name}>
							{elements}
							<p>{content}</p>
					</div>)
			}

			return(
					<div style={{paddingRight: "20px"}} className={name}>
							{elements}
							<textarea className="redactorText" cols="40"  id={id} value={content}
							onChange={this.handleChange} onClick={()=>this.handleToogled()}/><br/>	
							

					</div>
						)
		   

		


}



}