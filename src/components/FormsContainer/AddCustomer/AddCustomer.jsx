import React from 'react';
import { CustomerWarapper, TextFieldWrapper, ContainerField, ButtonWrapper, ErrorFlage, BranchWrapper } from './AddCustomer.styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SelectAutoWidth from '../BranchContainer/BranchContainer';

const AddCustomer = () => {
    const [custValue, setCustValue] = React.useState();
    const [mobValue, setMobValue] = React.useState();
    const [error, setError] = React.useState(false);
    const [isDisabled, setDisable] = React.useState(false);
    const re = /^[0-9\b]+$/; //rules
    const branches = ['Katargam', 'Kapodara', 'Piplod', 'Paravatpatiya'];

    const [Branch, setBranch] = React.useState('');

    const handleBranch = (event) => {
        setBranch(event.target.value);
    };

    const onCustomerNameChange = (event) => {
        setCustValue(event.target.value);
    };

    const onCustomerMobChange = (event) => {
        const newValue = event.target.value;
        if (event.target.value.length !== 10) {
            setDisable(true);
        } else {
            if (isDisabled) {
                setDisable(false);
                setError(false);
            }
        }
        if (re.test(newValue) || newValue === '') {
            setMobValue(newValue);
        }
    };

    const AddData = () => {
        fetch(`https://artrueinfotech.com/employees_actions.php?action=ADD_EMP&customer_name=${custValue}&mobile_no=91${mobValue}&branch_name=${Branch}`)
            .then((res) => {
                return res.json()
            })
            .then(
                (result) => {
                    return 'Successfull';
                },
            );
    };

    const onBlurEvent = (event) => {
        if (event.target.value.length !== 10) {
            setError(true);
        } else {
            setError(false);
        }
    }

    return (
        <ContainerField>
            <TextFieldWrapper>
                <CustomerWarapper>
                    Add Customer
                </CustomerWarapper>
                <div>
                    <TextField
                        id="customer_name_id"
                        label="Customer Name"
                        multiline
                        onChange={onCustomerNameChange}
                        value={custValue}
                        style={{
                            marginRight: '12px',
                            width: '35%',
                        }}
                    />
                    <TextField
                        id="customer_MobileNumber_id"
                        label="Customer Mobile No."
                        multiline
                        onChange={onCustomerMobChange}
                        value={mobValue}
                        style={{
                            marginLeft: '12px',
                            width: '35%',
                        }}
                        inputProps={{ maxLength: 10 }}
                        onBlur={onBlurEvent}
                    />
                    {error && (<ErrorFlage>Mobile number must have 10 digit</ErrorFlage>)}
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
                        onClick={() => AddData()}
                        disabled={isDisabled}
                    >
                        Submit
                    </Button>
                </ButtonWrapper>
            </TextFieldWrapper>
        </ContainerField>
    );
}
export default AddCustomer;