import React from "react";
import {
    Box,
    Paper,
    Stack,
    Typography,
    Divider,
    Chip,
    Avatar
} from "@mui/material";
import image1 from "../assets/order/Icon (6).png"
import image2 from "../assets/order/Icon (7).png"
import image3 from "../assets/order/Icon (8).png"

import image4 from "../assets/order/Icon (9).png"

import image5 from "../assets/order/Icon (10).png"
import image6 from "../assets/order/Icon (11).png"

const OrdersOverview: React.FC = () => {
    const orders = [
        {
            title: "$2400, Design changes",
            date: "22 DEC 7:20 PM",
            icon: image1
        },
        {
            title: "New order #4219423",
            date: "21 DEC 11:21 PM",
            icon: image2
        },
        {
            title: "Server Payments for April",
            date: "21 DEC 9:28 PM",
            icon: image3
        },
        {
            title: "New card added for order #3210145",
            date: "20 DEC 3:52 PM",
            icon: image4
        },
        {
            title: "Unlock packages for Development",
            date: "19 DEC 11:35 PM",
            icon: image5
        },
        {
            title: "New order #9851258",
            date: "18 DEC 4:41 PM",
            icon: image6
        }
    ];

    return (
        <Paper elevation={0} sx={{
            p: 2,
            borderRadius: "15px",
            boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
        }}>
            <Stack spacing={2}>
                <Box>
                    <Typography variant="h6" fontWeight={600} sx={{
                        margin: 0
                    }} gutterBottom>
                        Orders overview
                    </Typography>
                    <Chip
                        label="this month"
                        size="small"
                        sx={{
                            backgroundColor: "#fff",
                            fontWeight: 600,
                            color: "#A0AEC0",
                            padding: '0 2px',
                            '& .MuiChip-label': {
                                padding: 0,
                                '&::before': {
                                    content: '"+30%"',
                                    color: '#48BB78',
                                    marginRight: '4px'
                                }
                            }
                        }}
                    />
                </Box>

                <Box sx={{
                    position: 'relative',
                    pl: 4, 
                }}>
                    <Box sx={{
                        position: 'absolute',
                        left: 7,
                        top: 4,
                        bottom: 0,
                        width: '2px',
                        backgroundColor: '#e0e0e0'
                    }} />

                    {orders.map((order, index) => (
                        <React.Fragment key={index}>
                            <Box sx={{
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'flex-start',
                                mb: 2.8
                            }}>
                                <Box sx={{
                                    position: 'absolute',
                                    left: -32,
                                    top: 4,
                                    width: 16,
                                    height: 16,
                                    borderRadius: '50%',
                                    backgroundColor: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '0.8rem',
                                    paddingTop: "13px",
                                    paddingBottom: "10px"
                                }}>
                                    <Avatar
                                        src={order.icon}
                                        sx={{
                                            width: 16,
                                            height: 16,
                                            borderRadius: 0,
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Box>

                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography fontWeight={600} sx={{
                                        color: "#2D3748",
                                        marginTop: "10px",
                                        fontSize: "14px",
                                        letterSpacing: 0
                                    }}>
                                        {order.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{
                                        fontSize: "12px",
                                        fontWeight: 700,
                                        letterSpacing: 0,
                                        color: '#A0AEC0'
                                    }}>
                                        {order.date}
                                    </Typography>
                                </Box>
                            </Box>

                            {index < orders.length - 1 && (
                                <Box sx={{
                                    height: '2px',
                                    position: 'relative',
                                    ml: -4
                                }}>
                                    <Divider sx={{
                                        position: 'absolute',
                                        left: 20,
                                        width: '2px',
                                        backgroundColor: '#e0e0e0'
                                    }} />
                                </Box>
                            )}
                        </React.Fragment>
                    ))}
                </Box>
            </Stack>
        </Paper>
    );
};

export default OrdersOverview;