var Radio = function(id){
	var element = {
			name: 'Новый radio',
			type: 'radio',
			id: id,
			size: 'full',
			answer: 0,
			content: [
				{type: 'button',
				content: 'Hello',
				id: Number(id+String(1))}
			]
	

	}
	return element
}

export default Radio