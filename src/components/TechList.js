  import React, { Component } from 'react';

  class TechList extends Component{

    state = {
        newTech: '',
        techs:[
          'Node.js',
          'ReactJS',
          'React Native'
        ]
    };
    handleInputChange = e => {
      //console.log(e.target.value);
      this.setState({ newTech: e.target.value })
    }
    handleSubmit = e =>{

      e.preventDefault();
      //console.log(this.state.newTech);
      this.setState({
         techs: [ ... this.state.techs, this.state.newTech],
         newTech: ''
      });
    }

    handleDelet = (tech) =>{

      //console.log(tech);
      this.setState({ techs: this.state.techs.filter(t => t !== tech) })

    }



    render(){
      //console.log(this.state);

      return (
        <form onSubmit={ this.handleSubmit }>

          <ul>
            {this.state.techs.map(tech => 
            <li key={tech}> 
              {tech} 
              <button onClick={()=>this.handleDelet(tech)} type='button'>Remover</button>
            
            </li>)}
          </ul>
           <input 
              type="text" 
              onChange={ this.handleInputChange } 
              value={this.state.newTech}  
          />

          <button type="submit">Enviar</button>

        </form>
      );
    }
  }

  export default TechList;