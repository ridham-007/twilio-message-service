import React from 'react';
import { CustomerWarapper, TextFieldWrapper, ContainerField, ButtonWrapper } from './Login.styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    const [userName, setUserName] = React.useState();
    const [passWord, setPassWord] = React.useState();
    const [data, setData] = React.useState([]);

    const onUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const onPasswordChange = (event) => {
        setPassWord(event.target.value);
    };

    const onLogin = () => {
        console.log('onLogin');
        async function fetchMyAPI() {
            console.log('on Inside Login');
            let response = await fetch(`https://artrueinfotech.com/employees_actions.php?action=LOGIN&user_name=${userName}&password=${passWord}`);
            console.log('response', response);
            response = await response.json();
            setData(response);
        }
        fetchMyAPI();
    };

    console.log('data', data);

    return (
        <ContainerField>
            <TextFieldWrapper>
                <CustomerWarapper>
                    Sign In
                </CustomerWarapper>
                <div>
                    <TextField
                        id="customer_name_id"
                        label="Enter User Name"
                        multiline
                        onChange={onUserNameChange}
                        value={userName}
                        style={{
                            marginRight: '12px',
                            width: '35%',
                        }}
                    />
                    <TextField
                        id="customer_MobileNumber_id"
                        label="Enter Password"
                        multiline
                        onChange={onPasswordChange}
                        value={passWord}
                        style={{
                            marginLeft: '12px',
                            width: '35%',
                        }}
                        inputProps={{ maxLength: 10 }}
                    />
                </div>
                <ButtonWrapper>
                    <Button
                        variant="contained"
                        color="success"
                        style={{
                            width: '235px',
                            backgroundColor: '#873387',
                        }}
                        onClick={() => onLogin()}
                    >
                        Submit
                    </Button>
                </ButtonWrapper>
            </TextFieldWrapper>
        </ContainerField>
    );
}
export default Login;