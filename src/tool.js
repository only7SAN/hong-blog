const target = ''
const Tool = {};

/**
*封装ajax请求
**/

Tool.ajax = function(mysettings){

	//默认设置
	var settings = {
		url:window.location.pathname,
		type:'GET',
		data:{},
		dataType:'json'
	}

	var aData = [], //储存数据
		sData = '';	//拼接数据

	for(var attr in mysettings){
		settings[attr] = mysettings[attr];
	}
	for(var attr in settings.data){
		aData.push(attr + '=' + filter(settings.data[attr]));
	}
	sData = aData.join('&');
	settings.type = settings.type.toUpperCase();

	var promise = new promise(resolve,reject){
		var xhr = new XMLHttpRequest();
		try{
			if(settings.type == 'GET'){
			sData = settings.url + '?' + sData;
			xhr.open(settings.type,sData + '&' + new Date().getTime(),true);
			xhr.send();
			}else if (settings.type == 'POST'){
				xhr.open(settings.type,settings.url,true);
				xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
				xhr.send(sData);
			}
		}catch(e){
			return httpEnd();
		}

		xhr.addEventListener('readystatechange',httpEnd,false);

		function httpEnd(){
			if(xhr.readyState == 4){
				var responseHeader = xhr.getAllResponseHeaders();
				var response = xhr.responseText;

				if (/application\/json/.test(responseHeader) || settings.dataType === 'json' && /^(\{|\[)([\s\S])*?(\]|\})$/.test(response)) {
	                response = JSON.parse(response);
	            }

	            if(xhr.status == 200){
	            	resolve(response);
	            }else{
	            	reject(new Error(xhr.statusText));
	            }

			}
		}

		xhr.end = function(){
			xhr.removeEventListener('readystatechange',httpEnd,false);
		}
	}


	function filter(str){
		str += ''; //隐式转换
        str = str.replace(/%/g, '%25');
        str = str.replace(/\+/g, '%2B');
        str = str.replace(/ /g, '%20');
        str = str.replace(/\//g, '%2F');
        str = str.replace(/\?/g, '%3F');
        str = str.replace(/&/g, '%26');
        str = str.replace(/\=/g, '%3D');
        str = str.replace(/#/g, '%23');
        return str;
	}

	return promise;
}

Tool.post = function(pathname,data){
	var mysettings ={
		url: target + pathname,
		type:'POST',
		data:data
	}

	return Tool.ajax(mysettings);
};

Tool.get = function(pathname,data){
	var mysettings ={
		url: target + pathname,
		type:'GET',
		data:data
	}

	return Tool.ajax(mysettings);
};

export { Tool }