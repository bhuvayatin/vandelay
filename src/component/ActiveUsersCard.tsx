import {
    Box,
    Paper,
    Grid,
    Typography,
    Stack,
    LinearProgress,
    Avatar,
    Chip
} from "@mui/material";

import UsersIcon from "../assets/users/Icon (12).png";
import ClicksIcon from "../assets/users/Icon (13).png";
import SalesIcon from "../assets/users/Icon (14).png";
import ItemsIcon from "../assets/users/Icon (15).png";

const ActiveUsersCard = () => {
    const metrics = [
        {
            icon: UsersIcon,
            label: "Users",
            value: "32,984",
            progress: 75
        },
        {
            icon: ClicksIcon,
            label: "Clicks",
            value: "2.42m",
            progress: 60
        },
        {
            icon: SalesIcon,
            label: "Sales",
            value: "2,400$",
            progress: 45
        },
        {
            icon: ItemsIcon,
            label: "Items",
            value: "320",
            progress: 30
        }
    ];

    return (
        <Paper
            sx={{
                paddingTop: 2,
                borderRadius: "15px",
                boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
                height: "100%"
            }}
        >
            <Stack spacing={3}>
                <Box>
                    <Typography variant="h6" sx={{
                        color: "#2D3748",
                        fontSize: "18px",
                        marginBottom: 0
                    }} fontWeight={600} gutterBottom>
                        Active Users
                    </Typography>
                    <Chip
                        label="than last week"
                        size="small"
                        sx={{
                            backgroundColor: "#fff",
                            fontWeight: 500,
                            fontSize: "14px",
                            color: "#A0AEC0",
                            padding: '0 1px',
                            '& .MuiChip-label': {
                                padding: 0,
                                '&::before': {
                                    content: '"(+23)"',
                                    color: '#48BB78',
                                    marginRight: '4px',
                                    fontWeight: 600
                                }
                            }
                        }}
                    />
                </Box>

                <Grid container spacing={3}>
                    {metrics.map((metric, index) => (
                        <Grid size={{ xs: 12, md: 3 }} key={index}>
                            <Stack spacing={1}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <Avatar
                                        src={metric.icon}
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            '& img': {
                                                width: "100%",
                                                height: "100%"
                                            }
                                        }}
                                    />
                                    <Typography variant="body2" color="text.secondary" sx={{
                                        color: "#A0AEC0",
                                        fontSize: "12px",
                                        fontWeight: 700
                                    }}>
                                        {metric.label}
                                    </Typography>
                                </Box>
                                <Typography variant="h6" fontWeight={600} sx={{
                                    color: "#2D3748",
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    marginTop: "0 !important"
                                }}>
                                    {metric.value}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={metric.progress}
                                    sx={{
                                        height: 6,
                                        borderRadius: 3,
                                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                        '& .MuiLinearProgress-bar': {
                                            borderRadius: 3,
                                            backgroundColor: '#4FD1C5'
                                        }
                                    }}
                                />
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Paper>
    );
};

export default ActiveUsersCard;