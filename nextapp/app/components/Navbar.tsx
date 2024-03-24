import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import NavbarItem from '../components/NavbarItem';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { categories } from '../order/categories';
const drawerWidth = 340;

const Navbar = () => {
    return (
        <>
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Order
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
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    <Typography variant="h5" noWrap component="div">
                        Cafe Shop
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {categories.map((category) => (
                        <NavbarItem key={category.id} {...category} />
                    ))}
                </List>
                <Divider />
            </Drawer>
        </>
    );
}

export default Navbar;