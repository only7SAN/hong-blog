import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import AvatarEditor from 'react-avatar-editor';
import {Tool} from '../../tool'

class SignUpTable extends Component {
    constructor(props) {
        super(props);
        this.fileChange = this.fileChange.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {image:'',imageURL:""};

        this.saveEditor =() =>{
            if(this.preview.props.image === ""){
                alert("请上传图片");
                return ;
            }
            this.setState(Object.assign(this.state,{imageURL:this.preview.getImageScaledToCanvas().toDataURL()}))
        }
    }

    fileChange(){
        let imageFile = this.imageFile.files[0],
            imgPreview = this.preview,
            ext=imageFile.name.substring(imageFile.name.lastIndexOf(".")+1).toLowerCase();

        let reader = new FileReader();

         // gif在IE浏览器暂时无法显示
        if(typeof FileReader == 'undefined') {
            result.innerHTML = "抱歉，你的浏览器不支持FileReader";
         }else if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){
             alert("图片的格式必须为png或者jpg或者jpeg格式！");
             return;
         }else if(imageFile/1024 >= 6000){
            alert("图片大小不能超过5M")
            return;
        }

        reader.readAsDataURL(imageFile);
        reader.onload = (e) =>{
            this.setState({image:reader.result});
        }

    }

    submit(){
        let userData = {};
        if(this.username.value !== ""){
            userData.username = this.username.value;
        }else{
            return this.username.focus();
        }
        if(this.password.value !== ""){
            userData.password = this.password.value;
        }else{
            return this.password.focus();
        }
        if(this.state.imageURL !== ""){
            userData.avatar_url = this.state.imageURL;
        }else{
            return ;
        }

        console.log(userData);
        Tool.post('/api/user/new',userData).then((res) => {
            if(res.success){
                this.props.history.push('/signin');
            }else if(res.exist){
                alert("用户名已存在");
            }
        }).catch(function(err){
            console.log(err)
        })
    }

    render(){
        return (
            <div className="sign-up-table">
            	<div className="sign-up-row">
                    <label className="sign-up-tip" htmlFor="sign-up-username">username:</label>
                    <input ref={
                        (username) => { this.username = username}
                    } className="sign-up-input" name="sign-up-username" type="text" />
                </div>
                <div className="sign-up-row">
                    <label className="sign-up-tip" htmlFor="sign-up-password">password:</label>
                    <input ref={
                        (password) => { this.password = password}
                    } className="sign-up-input" name="sign-up-password" type="password" />
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
                        <div className="sign-up-save" ref={(imageSave) => { this.imageSave = imageSave }} ></div>
                    </div>
                </div>
                <button className="sign-up-submit" onClick={this.submit} >提交</button>
            </div>
                        );
    }
}


export default SignUpTable;