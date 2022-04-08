import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const generateDeal = (id) => ({
    id: id,
    type: "Important deal",
    activityPeriod: "02/03/22-05/04/22",
});

function DealList() {
    let navigate = useNavigate();

    const handleClick = (deal) => {
        navigate("/deal/" + deal.id);
    }

    const generateCard = (deal) => (
        <Card sx={{width: '90%'}} onClick={() => handleClick(deal)}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {deal.type}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {deal.activityPeriod}
                </Typography>
            </CardContent>
        </Card>
    );

    return (<div><Typography variant="h5" component="div" gutterBottom>
        ACME Company
    </Typography>
        <Typography variant="h6" component="div" gutterBottom>
            today
        </Typography>
        <div className="list-block">
            {generateCard(generateDeal(1))}
        </div>
        <Typography variant="h6" component="div" gutterBottom>
            last week
        </Typography>
        <div className="list-block">
            {generateCard(generateDeal(2))}
            {generateCard(generateDeal(3))}
        </div>
    </div>);
}

export default DealList;