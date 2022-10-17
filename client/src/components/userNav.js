import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { Link, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider, Typography, CssBaseline, List, Toolbar, Box } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import TransactionsIcon from '@mui/icons-material/AccountBalanceWallet';
import IncomeIcon from '@mui/icons-material/AttachMoney';
import ExpensesIcon from '@mui/icons-material/Receipt';
import DebtIcon from '@mui/icons-material/CreditCard';
import SavingsIcon from '@mui/icons-material/Savings';
import IvestmentIcon from '@mui/icons-material/ShowChart';
import SettingIcon from '@mui/icons-material/Settings';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function UserNav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            'User' Wealth Diary
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem disablePadding sx={{ 
            display: 'block',
            color: 'black'
            }} component={Link} href='/home'>
            <ListItemButton
                sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                }}
            >
                <ListItemIcon
                sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                }}
                >
                    <HomeIcon />
                </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Home</ListItemText>
        </ListItemButton>
        </ListItem>
                <ListItem disablePadding sx={{ 
                    display: 'block',
                    color: 'black'
                     }} component={Link} href='/transactions'>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                        <TransactionsIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>Transactions</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ 
                    display: 'block',
                    color: 'black'
                     }} component={Link} href='/income'>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    <IncomeIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>Income</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ 
                    display: 'block',
                    color: 'black'
                     }} component={Link} href='/expenses'>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    <ExpensesIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>Expenses</ListItemText>
                </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ 
                    display: 'block',
                    color: 'black'
                     }} component={Link} href='/debt'>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    <DebtIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>Debt</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ 
                    display: 'block',
                    color: 'black'
                     }} component={Link} href='/savings'>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    <SavingsIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>Savings</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ 
                    display: 'block',
                    color: 'black'
                     }} component={Link} href='/investments'>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    <IvestmentIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>Ivestments</ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding sx={{ 
                    display: 'block',
                    color: 'black'
                     }} component={Link} href='/settings'>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    <SettingIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>Settings</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ 
                    display: 'block',
                    color: 'black'
                     }} component={Link} href='/profile'>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    <ProfileIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>Profile</ListItemText>
                </ListItemButton>
                <ListItem disablePadding sx={{ 
                    display: 'block',
                    color: 'black'
                     }} component={Link} href='/logout'>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }}>Logout</ListItemText>
                </ListItemButton>
            </ListItem>
            </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {}
      </Box>
    </Box>
  );
}
