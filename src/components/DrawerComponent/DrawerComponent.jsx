import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';
import ShortTextIcon from '@mui/icons-material/ShortText';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import HelpIcon from '@mui/icons-material/Help';
import AddCustomer from '../FormsContainer/AddCustomer/AddCustomer';
import ManualMessage from '../FormsContainer/ManualMessage/ManualMessage';
import SetMessage from '../FormsContainer/SetMessage/SetMessage'
import StickyHeadTable from '../FormsContainer/GetTableData/GetTableData'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Login from '../Login/Login';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: '#873387',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',

}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [addCust, setAddCust] = React.useState(true);
  const [manualMessage, setmanualMessage] = React.useState(false);
  const [setMessage, setSetMessage] = React.useState(false);
  const [custData, setCustData] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAddCustomer = () => {
    setAddCust(true);
    setmanualMessage(false);
    setSetMessage(false);
    setCustData(false);
  }

  const handleManualMessage = () => {
    setAddCust(false);
    setmanualMessage(true);
    setSetMessage(false);
    setCustData(false);
  }

  const handleSetMessage = () => {
    setAddCust(false);
    setmanualMessage(false);
    setSetMessage(true);
    setCustData(false);
  }

  const handleCustomerData = () => {
    setAddCust(false);
    setmanualMessage(false);
    setSetMessage(false);
    setCustData(true);
  }

  const onListItemClick = (text) => {
    if (text === 'Add Customer') {
      handleAddCustomer();
    }
    if (text === 'Add Configuration') {
      handleManualMessage();
    }
    if (text === 'Set Meassage') {
      handleSetMessage();
    }

    if (text === 'Get Customers') {
      handleCustomerData();
    }

  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Messaging Service By Artrue
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Add Customer', 'Add Configuration', 'Set Meassage', 'Get Customers'].map((text, index) => (
            <ListItem button key={text} onClick={() => onListItemClick(text)}>
              <ListItemIcon>
                {(index === 0 && <AddIcon />) || (index === 1 && <MessageIcon />) || (index === 2 && <ShortTextIcon />) || (index === 3 && <DashboardCustomizeIcon />)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['About Us', 'Contact Us', 'Help'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {(index === 0 && <InfoIcon />) || (index === 1 && <CallIcon />) || (index === 2 && <HelpIcon />)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        {addCust && (<AddCustomer />)}
        {setMessage && (<SetMessage />)}
        {manualMessage && (<ManualMessage />)}
        {custData && (<StickyHeadTable />)}
      </Main>
    </Box>
  );
}
