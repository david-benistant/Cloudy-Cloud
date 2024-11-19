import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../assets/CloudyCloudLogo.svg";
import style from "./SideBar.module.css";
import { useNavigate } from "react-router-dom";

const menuItems = [
    { name: "Phone", path: "/category?type=phone" },
    { name: "Tablet", path: "/category?type=tablet" },
    { name: "Laptop", path: "/category?type=laptop" },
    { name: "Desktop", path: "/category?type=desktop" },
    { name: "Hardware", path: "/category?type=hardware" },
];

const SideBar = ({ children }) => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <div className={style.sidebar_head_divider}>
                <div className={style.sidebar_head_left}>
                    <img
                        src={Logo}
                        alt="Logo"
                        className={style.sidebar_logo}
                        onClick={() => navigate("/")}
                    />
                </div>
                <div className={style.sidebar_head_right}>
                    <CloseIcon
                        onClick={toggleDrawer(false)}
                        fontSize="large"
                        style={{ margin: "15px", cursor: "pointer" }}
                    />
                </div>
            </div>
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        key={item.name}
                        style={{ padding: "5px", paddingLeft: "20px" }}
                    >
                        <ListItemButton
                            className={style.sidebar_item}
                            onClick={() => navigate(item.path)}
                        >
                            {item.name}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <div onClick={toggleDrawer(true)}>{children}</div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default SideBar;
