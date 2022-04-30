import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth(props) {
    console.log(props);
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: '35%' }}>
                <InputLabel id="demo-simple-select-autowidth-label">Select Branch</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={props.Branch}
                    onChange={props.handleBranch}
                    label="Select Branch"
                >
                    {props.branches?.map(br => {
                        return < MenuItem value={br}>{br}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
}