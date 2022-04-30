import React from 'react';
import { CustomerWarapper, TextFieldWrapper, ContainerField, ButtonWrapper } from './ManualMessage.styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const AddCustomer = () => {
    const [accSid, setAccSid] = React.useState();
    const [accToken, setAccToken] = React.useState();

    const onAccountSidChange = (event) => {
        setAccSid(event.target.value);
    };

    const onAccountTokenChange = (event) => {
        setAccToken(event.target.value);
    };

    const addAuthData = () => {
        // fetch(`https://artrueinfotech.com/employees_actions.php?action=ADD_EMP&customer_name=${custValue}&mobile_no=91${mobValue}&branch_name=${Branch}`)
        //     .then((res) => {
        //         return res.json()
        //     })
        //     .then(
        //         (result) => {
        //             return 'Successfull';
        //         },
        //     );
    }

    return (
        <ContainerField>
            <TextFieldWrapper>
                <CustomerWarapper>
                    Add Twillio Configuration
                </CustomerWarapper>
                <div>
                    <TextField
                        id="customer_MobileNumber_id"
                        label="TWillo Account SId"
                        multiline
                        onChange={onAccountSidChange}
                        value={accSid}
                        style={{
                            marginLeft: '12px',
                            width: '35%',
                            marginBottom: '12px'
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="customer_MobileNumber_id"
                        label="Twillo Account Auth Token"
                        multiline
                        onChange={onAccountTokenChange}
                        value={accToken}
                        style={{
                            marginLeft: '12px',
                            width: '35%',
                        }}
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
                        onClick={() => addAuthData()}
                    >
                        Submit
                    </Button>
                </ButtonWrapper>
            </TextFieldWrapper>
        </ContainerField>
    );
}
export default AddCustomer;