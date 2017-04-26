import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import AvatarEditor from 'react-avatar-editor';

class SignUpTable extends Component {
    constructor(props) {
        super(props);
        this.fileChange = this.fileChange.bind(this);
        this.state = {image:'',imageSave:null}

        this.saveEditor =() =>{
            if(this.preview.props.image === ""){
                alert("请上传图片")
            }
            console.log(this.state)
            this.setState(Object.assign(this.state,{imageSave:this.preview.getImage()}))
        }
    }

    fileChange(){
        let imageFile = this.imageFile.files[0],
            imgPreview = this.preview;

        if(typeof FileReader == 'undefined') {
            result.innerHTML = "抱歉，你的浏览器不支持FileReader";
        }

        let ext=imageFile.name.substring(imageFile.name.lastIndexOf(".")+1).toLowerCase();

         // gif在IE浏览器暂时无法显示
         if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){
             alert("图片的格式必须为png或者jpg或者jpeg格式！");
             return;
         }

        let reader = new FileReader();

        reader.readAsDataURL(imageFile);
        reader.onload = (e) =>{
            this.setState({image:reader.result});
        }

    }

    render(){
        return (
            <div className="sign-up-table">
            	<div className="sign-up-row">
                    <label className="sign-up-tip" htmlFor="sign-up-username">username:</label>
                    <input className="sign-up-input" name="sign-up-username" type="text" />
                </div>
                <div className="sign-up-row">
                    <label className="sign-up-tip" htmlFor="sign-up-password">password:</label>
                    <input className="sign-up-input" name="sign-up-password" type="password" />
                </div>
                <div className="sign-up-head">
                    <span className="sign-up-img-text">上传图片:</span>
                    <input ref={(imageFile) => {
                        this.imageFile = imageFile
                    }} type="file" name="file" onChange={ this.fileChange } />
                    <div className="sign-up-preview">
                        <span className="sign-up-preview-text">调整:</span>
                        <AvatarEditor ref={(preview) =>{
                                            this.preview = preview
                                        }}
                                    image={this.state.image}
                                    width={200}
                                    height={200}
                                    border={30}
                                    color={[255, 255, 255, 0.6]} // RGBA
                                    scale={1.2}
                                    rotate={0}
                             />
                        <button className="sign-up-img-result" onClick={this.saveEditor}>保存</button>
                        <div className="sign-up-save" ref={(imageSave) => { this.imageSave = imageSave }} >{this.state.imageSave}</div>
                    </div>
                </div>
            </div>
                        );
    }
}


export default SignUpTable;