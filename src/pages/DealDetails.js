import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {getDeal} from "../service/dealService";
import {Typography} from "@mui/material";

function DealDetails() {
    let params = useParams();
    let [loading, setLoading] = useState(false);
    let [deal, setDeal] = useState({});

    useEffect(() => {
        setLoading(true);
        getDeal(params.dealId).then(
            res => {
                setLoading(false);
                setDeal(res)
            }
        )
    }, [params.dealId])

    return (loading ? <div>loading</div> : <div><Link to="/">Back</Link><Typography variant="h2" component="div">
        {deal.dealReference}
    </Typography>
        <Typography variant="h5" component="div">
            {deal.dealType}
        </Typography>
        <Typography variant="h5" component="div">
            {deal.status}
        </Typography>
    </div>);
}

export default DealDetails;