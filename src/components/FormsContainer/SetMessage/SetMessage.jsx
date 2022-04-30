import React from 'react';
import { CustomerWarapper, TextFieldWrapper, ContainerField, ButtonWrapper, BranchWrapper } from './SetMessage.styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SelectAutoWidth from '../BranchContainer/BranchContainer';


const AddCustomer = () => {
    const [msg, setMsg] = React.useState();
    const [festMsg, setfestMsg] = React.useState();
    const branches = ['Katargam', 'Kapodara', 'Piplod', 'Paravatpatiya'];

    const [Branch, setBranch] = React.useState('');

    const handleBranch = (event) => {
        setBranch(event.target.value);
    };

    const onMessageSet = (event) => {
        setMsg(event.target.value);
    };

    const onFestMsg = (event) => {
        setfestMsg(event.target.value);
    };

    const setMessageButton = () => {
        fetch(`https://artrueinfotech.com/employees_actions.php?action=ADD_MSG&custom_msg=${msg}&festival_msg=${festMsg}&branch_name=${Branch}`)
            .then((res) => {
                return res.json()
            })
            .then(
                (result) => {
                    return 'Successfull';
                },
            );
    };

    return (
        <ContainerField>
            <TextFieldWrapper>
                <CustomerWarapper>
                    Set Message For Customer
                </CustomerWarapper>
                <div>
                    <TextField
                        id="customer_MobileNumber_id"
                        label="Enter Message Here"
                        multiline
                        onChange={onMessageSet}
                        value={msg}
                        style={{
                            marginLeft: '12px',
                            width: '35%',
                        }}
                    />

                    <TextField
                        id="Festival_id"
                        label="Enter Festival Message"
                        multiline
                        onChange={onFestMsg}
                        value={festMsg}
                        style={{
                            marginLeft: '12px',
                            width: '35%',
                        }}
                    />
                </div>
                <BranchWrapper>
                    <SelectAutoWidth branches={branches} handleBranch={handleBranch} Branch={Branch} />
                </BranchWrapper>
                <ButtonWrapper>
                    <Button
                        variant="contained"
                        color="success"
                        style={{
                            width: '235px',
                            backgroundColor: '#873387',
                        }}
                        onClick={() => setMessageButton()}
                    >
                        Submit
                    </Button>
                </ButtonWrapper>
            </TextFieldWrapper>
        </ContainerField>
    );
}
export default AddCustomer;