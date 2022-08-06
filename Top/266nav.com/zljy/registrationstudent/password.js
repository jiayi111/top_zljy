var password = "";
password = prompt('请输入密码 (本网站需输入密码才可进入):', '');

if(password != '1616') {
	alert("密码不正确,无法进入本站!!");
	history.back(-1);
	window.close();
	} // 密码不正确就关闭//


