import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  div:{
    marginTop:30,
    marginLeft:-20,
  },
  text:{
    fontSize:14,
  }
};

const InputForm = () => (
  <div className="form_div" style={styles.div}>
    <TextField
      style={styles.text}
      hintText="이메일"
      type="email"
    /><br />
    <TextField
      style={styles.text}
      hintText="아이디"
    /><br />
    <TextField
      style={styles.text}
      hintText="비밀번호"
      type="password"
    /><br />
    <TextField
      style={styles.text}
      hintText="비밀번호 확인"
      type="password"
    />
  </div>
);

export default InputForm;