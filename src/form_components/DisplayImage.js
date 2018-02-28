import React, {Component} from 'react'
export default class DisplayImage extends Component{
    getImage(){
        if(document.getElementById('ralph').src === (this.props.cell)[0].cell_type){
            document.getElementById('ralph').src = (this.props.cell)[2].cell_type
            document.getElementById('price').innerHTML = (this.props.cell)[3].cell_type
        }
        else{
            document.getElementById('ralph').src = (this.props.cell)[0].cell_type
            document.getElementById('price').innerHTML = (this.props.cell)[1].cell_type
        }
    }
    render(){
        return(
            <div className="col-md-4">
                <img src={(this.props.cell)[0].cell_type} className="img-fluid" alt="Ralph Lauren" id="ralph" />
                <p id="price">Price: {(this.props.cell)[1].cell_type}</p>
                <button type="button" className="btn btn-success" onClick={(e) => this.getImage(e)}>Next Cell</button>
            </div>
        );
    }
}